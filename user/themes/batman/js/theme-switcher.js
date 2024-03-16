document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.querySelector(".header__theme-switcher");
  const headerText = document.querySelector(".header__text");

  const switchThemeTo = (theme) => {
    if (theme === "dark") {
      themeSwitcher.querySelector("img").src = themeSwitcher.dataset.dark;
      headerText.innerText = headerText.dataset.dark;
      document.body.classList.add("dark");
    } else {
      themeSwitcher.querySelector("img").src = themeSwitcher.dataset.light;
      headerText.innerText = headerText.dataset.light;
      document.body.classList.remove("dark");
    }
  };

  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const localDarkMode = localStorage.getItem("theme") === "dark";

  if (darkMode.matches || localDarkMode) {
    switchThemeTo("dark");
  } else {
    switchThemeTo("light");
  }

  themeSwitcher.addEventListener("click", () => {
    const theme = document.body.classList.contains("dark") ? "light" : "dark";
    switchThemeTo(theme);
    localStorage.setItem("theme", theme);
  });
});
