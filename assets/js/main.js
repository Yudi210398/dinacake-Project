"use strict";

(() => {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#navigasi-utama");
  const header = document.querySelector(".site-header");

  if (!toggle || !navigation || !header) return;

  const sectionLinks = [...navigation.querySelectorAll('.nav-links a[href^="#"]')];
  const sectionEntries = [...document.querySelectorAll("main > section[id], footer[id]")]
    .map((section) => ({
      section,
      link: sectionLinks.find((link) => link.hash === `#${section.id}`) || null,
    }));
  let sectionPositions = [];
  let headerHeight = 0;
  let viewportHeight = window.innerHeight;
  let maximumScroll = 0;
  let pendingFrame = false;
  let anchorTarget = null;

  function refreshSectionPositions() {
    viewportHeight = window.innerHeight;
    maximumScroll = Math.max(0, document.documentElement.scrollHeight - viewportHeight);
    sectionPositions = sectionEntries.map(({ link, section }) => ({
      link,
      top: section.getBoundingClientRect().top + window.scrollY,
      margin: parseFloat(getComputedStyle(section).scrollMarginTop) || 0,
    }));
    scheduleScrollUpdate();
  }

  function syncCurrentSection() {
    const position = window.scrollY;
    const usualTrigger = headerHeight + Math.max(0, viewportHeight - headerHeight) * 0.28;
    // Move the reading line down near the end so short final sections remain reachable.
    const readingLine = position + Math.max(usualTrigger, viewportHeight - (maximumScroll - position));
    let current = null;
    for (const entry of sectionPositions) {
      if (entry.top <= readingLine) current = entry.link;
    }
    if (position > 0 && position >= maximumScroll - 1) {
      current = sectionPositions.at(-1)?.link || null;
    }
    // A native hash may stop before a short section reaches the reading line.
    // Preserve that explicit destination until the reader scrolls again.
    if (anchorTarget) {
      const entry = sectionPositions.find(({ link }) => link?.hash === anchorTarget);
      const destination = entry && Math.max(0, Math.min(maximumScroll, entry.top - entry.margin));
      if (entry && Math.abs(position - destination) <= 2) current = entry.link;
    }
    for (const link of sectionLinks) {
      if (link === current && !link.hasAttribute("aria-current")) link.setAttribute("aria-current", "location");
      else if (link !== current && link.hasAttribute("aria-current")) link.removeAttribute("aria-current");
    }
  }

  function scheduleScrollUpdate() {
    if (pendingFrame) return;
    pendingFrame = true;
    requestAnimationFrame(() => {
      pendingFrame = false;
      syncScrollState();
      syncCurrentSection();
    });
  }

  function followHash() {
    anchorTarget = sectionLinks.some((link) => link.hash === location.hash) ? location.hash : null;
    refreshSectionPositions();
  }

  function releaseAnchorTarget() {
    anchorTarget = null;
    scheduleScrollUpdate();
  }

  // Keep this query aligned with the measured navigation breakpoint in CSS.
  const wideNavigation = window.matchMedia("(min-width: 60rem)");

  function updateHeaderOffset() {
    if (!navigation.hidden && !wideNavigation.matches) {
      const availableHeight = Math.max(44, window.innerHeight - navigation.getBoundingClientRect().top - 8);
      document.documentElement.style.setProperty("--menu-available-height", `${availableHeight}px`);
      return;
    }
    headerHeight = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--header-offset", `${headerHeight}px`);
    refreshSectionPositions();
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
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)
      && !event.target.closest("button, input, textarea, select, [contenteditable='true']")) {
      releaseAnchorTarget();
    }
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
  window.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
  window.addEventListener("wheel", releaseAnchorTarget, { passive: true });
  window.addEventListener("touchmove", releaseAnchorTarget, { passive: true });
  window.addEventListener("hashchange", followHash);
  window.addEventListener("pageshow", followHash);
  window.addEventListener("load", refreshSectionPositions);
  window.addEventListener("resize", updateHeaderOffset);
  if ("ResizeObserver" in window) {
    new ResizeObserver(updateHeaderOffset).observe(header);
    const main = document.querySelector("main");
    if (main) new ResizeObserver(refreshSectionPositions).observe(main);
    for (const footer of document.querySelectorAll("footer[id]")) {
      new ResizeObserver(refreshSectionPositions).observe(footer);
    }
  }
  syncViewport();
  syncScrollState();
  followHash();
})();
