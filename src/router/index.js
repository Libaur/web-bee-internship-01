import { routes, paths, styles } from "../constants";
import {
  updateNavBarClassList,
  updateStoredActiveLink,
  restoreActiveLink,
} from "../utils";
import { renderMap } from "../map";

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
    history.replaceState({}, "", paths.profile)
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
