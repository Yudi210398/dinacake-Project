"use strict";

(() => {
  const shortcut = document.querySelector(".floating-whatsapp");
  if (!shortcut) return;

  const clearance = 16;
  let protectedRects = [];
  let refreshNeeded = true;
  let pendingFrame = false;

  function collectProtectedRects() {
    const rects = [];
    const addRect = (rect) => {
      if (rect.width && rect.height) {
        rects.push({ left: rect.left, right: rect.right,
          top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY });
      }
    };
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const range = document.createRange();
    let node;
    while ((node = walker.nextNode())) {
      if (!node.textContent.trim() || node.parentElement.closest(
        "script, style, noscript, svg, .visually-hidden, .floating-whatsapp",
      )) continue;
      range.selectNodeContents(node);
      for (const rect of range.getClientRects()) addRect(rect);
    }
    for (const control of document.querySelectorAll("a, button, input, select, textarea")) {
      if (control !== shortcut && !control.closest(".visually-hidden")) {
        addRect(control.getBoundingClientRect());
      }
    }
    protectedRects = rects;
    refreshNeeded = false;
  }

  function updateVisibility() {
    pendingFrame = false;
    // A focused shortcut stays in the document flow until focus leaves it.
    if (!shortcut.classList.contains("is-floating")) return;
    if (refreshNeeded) collectProtectedRects();
    const box = shortcut.getBoundingClientRect();
    const top = box.top + window.scrollY - clearance;
    const bottom = box.bottom + window.scrollY + clearance;
    const menuOpen = document.querySelector('.menu-toggle[aria-expanded="true"]');
    const overlaps = Boolean(menuOpen) || protectedRects.some((rect) =>
      rect.left < box.right + clearance && rect.right > box.left - clearance
      && rect.top < bottom && rect.bottom > top);

    if (overlaps && document.activeElement === shortcut) {
      // Never hide a focused link. Its existing DOM position is after the footer.
      shortcut.classList.remove("is-floating", "is-obscured");
      shortcut.scrollIntoView({ block: "nearest", behavior: "instant" });
      return;
    }
    shortcut.classList.toggle("is-obscured", overlaps);
  }

  function scheduleUpdate() {
    if (pendingFrame) return;
    pendingFrame = true;
    requestAnimationFrame(updateVisibility);
  }

  function refresh() {
    refreshNeeded = true;
    scheduleUpdate();
  }

  shortcut.addEventListener("blur", () => {
    shortcut.classList.add("is-floating");
    refresh();
  });
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", refresh);
  document.addEventListener("load", refresh, true);
  document.querySelector(".menu-toggle")?.addEventListener("click", refresh);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") refresh();
  });
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(refresh);
    for (const element of document.querySelectorAll("main, footer, .site-header")) {
      observer.observe(element);
    }
  }
  document.fonts?.ready.then(refresh);
  shortcut.classList.add("is-floating");
  updateVisibility();
})();
