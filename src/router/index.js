import { paths, pages, titles, styles } from "../constants";
import {
  updateNavBarClassList,
  updateStoredActiveLink,
  restoreActiveLink,
} from "../utils";
import { renderMap } from "../map";

const routes = {
  paths: {
    [paths.profile]: [pages.profile],
    [paths.map]: [pages.map],
    [paths.time]: [pages.time],
  },
  titles: {
    [paths.profile]: [titles.profile],
    [paths.map]: [titles.map],
    [paths.time]: [titles.time],
  },
};

addEventListener("DOMContentLoaded", () => {
  redirectToProfile();
  handleLocation();
});

document.querySelectorAll(styles.navLink).forEach((link) => {
  link.addEventListener("click", navigateTo);
});

onpopstate = (event) => {
  event.preventDefault();
  handleLocation();
};

function redirectToProfile() {
  if (location.pathname === "/") {
    history.replaceState({}, "", paths.profile);
  }
}

function setupPage(content, title) {
  document.getElementById("app").innerHTML = content;
  document.title = title;
}

function handleLocation() {
  const path = location.pathname;
  const [content] = routes.paths[path];
  const title = routes.titles[path];
  setupPage(content, title);
  updateNavBarClassList(title);
  updateStoredActiveLink(title);
  restoreActiveLink();
  path === paths.map && renderMap();
}

function navigateTo(event) {
  event.preventDefault();
  const target = event.target;
  history.pushState({}, "", target.href);
  handleLocation();
}
