"use strict";

(() => {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#navigasi-utama");
  const header = document.querySelector(".site-header");

  if (!toggle || !navigation || !header) return;

  // Keep this query aligned with the measured navigation breakpoint in CSS.
  const wideNavigation = window.matchMedia("(min-width: 60rem)");

  function updateHeaderOffset() {
    if (!navigation.hidden && !wideNavigation.matches) {
      const availableHeight = Math.max(44, window.innerHeight - navigation.getBoundingClientRect().top - 8);
      document.documentElement.style.setProperty("--menu-available-height", `${availableHeight}px`);
      return;
    }
    document.documentElement.style.setProperty("--header-offset", `${header.getBoundingClientRect().height}px`);
  }

  function syncScrollState() {
    const scrolled = window.scrollY > 4;
    if (header.classList.contains("is-scrolled") !== scrolled) {
      header.classList.toggle("is-scrolled", scrolled);
    }
  }

  function setExpanded(expanded) {
    toggle.setAttribute("aria-expanded", String(expanded));
    navigation.hidden = !expanded && !wideNavigation.matches;
    updateHeaderOffset();
  }

  function syncViewport() {
    const focusedElement = document.activeElement;
    toggle.hidden = wideNavigation.matches;
    setExpanded(false);

    if (wideNavigation.matches && focusedElement === toggle) {
      navigation.querySelector("a").focus({ preventScroll: true });
    } else if (!wideNavigation.matches && navigation.contains(focusedElement)) {
      toggle.focus({ preventScroll: true });
    }
  }

  toggle.addEventListener("click", () => {
    setExpanded(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setExpanded(false);
      toggle.focus();
    }
  });

  toggle.closest(".site-header").addEventListener("click", (event) => {
    const link = event.target.closest("a[href^='#']");
    if (!link || wideNavigation.matches) return;

    const target = document.getElementById(link.hash.slice(1));
    setExpanded(false);

    if (target) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
  });

  wideNavigation.addEventListener("change", syncViewport);
  window.addEventListener("scroll", syncScrollState, { passive: true });
  window.addEventListener("pageshow", syncScrollState);
  window.addEventListener("resize", updateHeaderOffset);
  if ("ResizeObserver" in window) {
    new ResizeObserver(updateHeaderOffset).observe(header);
  }
  syncViewport();
  syncScrollState();
})();
