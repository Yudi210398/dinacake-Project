"use strict";

(() => {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#navigasi-utama");

  if (!toggle || !navigation) return;

  // Keep this query aligned with the measured navigation breakpoint in CSS.
  const wideNavigation = window.matchMedia("(min-width: 60rem)");

  function setExpanded(expanded) {
    toggle.setAttribute("aria-expanded", String(expanded));
    navigation.hidden = !expanded && !wideNavigation.matches;
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
  syncViewport();
})();
