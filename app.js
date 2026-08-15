(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const header = document.querySelector("[data-header]");
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  let theme = media.matches ? "dark" : "light";
  let lastY = window.scrollY;

  function icon(mode) {
    return mode === "dark"
      ? '<svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  function applyTheme(next) {
    theme = next;
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.innerHTML = icon(theme);
      toggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} theme`);
    }
  }

  applyTheme(theme);
  toggle?.addEventListener("click", () => applyTheme(theme === "dark" ? "light" : "dark"));

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    header?.classList.toggle("is-scrolled", currentY > 16);
    lastY = currentY;
  }, { passive: true });
})();
