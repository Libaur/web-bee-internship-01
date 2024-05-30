import {
  setupPage,
  updateNavBarClassList,
  updateStoredActiveLink,
  restoreActiveLink,
} from "../utils";
import { renderMap } from "../map";

const routes: Routes = {
  paths: {
    "/web-bee-internship-01/": "profile.html",
    "/web-bee-internship-01/map": "map.html",
    "/web-bee-internship-01/time": "timer.html",
  },
  titles: {
    "/web-bee-internship-01/": "Profile",
    "/web-bee-internship-01/map": "Map",
    "/web-bee-internship-01/time": "Time",
  },
};

document.addEventListener("DOMContentLoaded", redirectToProfile);

function redirectToProfile() {
  if (!window.location.pathname.startsWith("/web-bee-internship-01/")) {
    window.history.replaceState({}, "", "/web-bee-internship-01/");
    handleLocation();
  }
}

async function handleLocation() {
  const path = window.location.pathname;
  const route = routes.paths[path];
  const title = routes.titles[path];
  const html = await fetch(route).then((data) => data.text());
  setupPage(html, title);
  renderMap(path);
  restoreActiveLink();
}

function navigateTo(event: Event) {
  event.preventDefault();
  const target = event.target as HTMLAnchorElement;
  window.history.pushState({}, "", target.href);
  updateNavBarClassList(target);
  updateStoredActiveLink(target);
  handleLocation();
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", navigateTo);
});

const router = window as unknown as CustomWindow;

window.onpopstate = handleLocation;
router.route = navigateTo;

handleLocation();
