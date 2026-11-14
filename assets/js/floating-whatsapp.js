"use strict";

(() => {
  const shortcut = document.querySelector(".floating-whatsapp");
  if (!shortcut) return;

  const gap = 8;
  let collisionOffset = 0;
  let pendingFrame = false;

  function collectProtectedRects(box) {
    const rects = [];
    const addRect = (rect, element) => {
      // Reveal text moves upward after scrolling stops; reserve its final position too.
      const reveal = element.closest("[data-editorial-reveal]");
      const transform = reveal && getComputedStyle(reveal).transform;
      const shift = transform && transform !== "none"
        ? Math.max(0, new DOMMatrixReadOnly(transform).m42) : 0;
      if (rect.width && rect.height && rect.bottom > 0 && rect.top < window.innerHeight
        && rect.left < box.right && rect.right > box.left) {
        rects.push({ top: rect.top - shift, bottom: rect.bottom });
      }
    };
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const range = document.createRange();
    let node;
    while ((node = walker.nextNode())) {
      if (!node.textContent.trim() || node.parentElement.closest(
        "script, style, noscript, svg, .visually-hidden, .floating-whatsapp, .site-header",
      )) continue;
      const parentBox = node.parentElement.getBoundingClientRect();
      if (!parentBox.width || parentBox.bottom < 0 || parentBox.top > window.innerHeight) continue;
      range.selectNodeContents(node);
      for (const rect of range.getClientRects()) addRect(rect, node.parentElement);
    }
    for (const control of document.querySelectorAll("a, button, input, select, textarea")) {
      if (control !== shortcut && !control.closest(".visually-hidden, .site-header")) {
        addRect(control.getBoundingClientRect(), control);
      }
    }
    return rects.sort((a, b) => b.bottom - a.bottom);
  }

  function updateVisibility() {
    pendingFrame = false;
    const menuOpen = document.querySelector('.menu-toggle[aria-expanded="true"]');
    shortcut.classList.toggle("is-obscured", Boolean(menuOpen));
    if (menuOpen) return;

    const box = shortcut.getBoundingClientRect();
    // Recover the CSS bottom-right baseline before resolving this frame's collisions.
    const baselineBottom = box.bottom + collisionOffset;
    let bottom = baselineBottom;
    for (const rect of collectProtectedRects(box)) {
      if (rect.top < bottom && rect.bottom > bottom - box.height) {
        bottom = rect.top - gap;
      }
    }
    collisionOffset = Math.max(0, baselineBottom - bottom);
    shortcut.style.setProperty("--whatsapp-collision-offset", `${collisionOffset}px`);
  }

  function scheduleUpdate() {
    if (pendingFrame) return;
    pendingFrame = true;
    requestAnimationFrame(updateVisibility);
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.visualViewport?.addEventListener("resize", scheduleUpdate);
  document.addEventListener("load", scheduleUpdate, true);
  document.addEventListener("transitionend", scheduleUpdate, true);
  const toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    new MutationObserver(scheduleUpdate).observe(toggle, {
      attributes: true, attributeFilter: ["aria-expanded"],
    });
  }
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(scheduleUpdate);
    for (const element of document.querySelectorAll("main, footer, .site-header")) {
      observer.observe(element);
    }
  }
  document.fonts?.ready.then(scheduleUpdate);
  shortcut.classList.add("is-floating");
  updateVisibility();
})();
