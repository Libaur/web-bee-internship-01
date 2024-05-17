import {
  setupPage,
  updateNavBarClassList,
  updateStoredActiveLink,
  restoreActiveLink,
} from "../utils";
import { renderMap } from "../map";

const routes: Routes = {
  paths: {
    "/web-bee-internship-01/404": "/public/404.html",
    "/web-bee-internship-01/": "/public/profile.html",
    "/web-bee-internship-01/map": "/public/map.html",
    "/web-bee-internship-01/time": "/public/timer.html",
  },
  titles: {
    "/web-bee-internship-01/404": "Page not found",
    "/web-bee-internship-01/": "Profile",
    "/web-bee-internship-01/map": "Map",
    "/web-bee-internship-01/time": "Time",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  window.history.replaceState({}, "", "/web-bee-internship-01/");
  handleLocation();
});

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes.paths[path] || routes.paths["404"];
  const title = routes.titles[path] || routes.titles["404"];
  const html = await fetch(route).then((data) => data.text());
  setupPage(html, title);
  renderMap(path);
  restoreActiveLink();
};

const navigateTo = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLAnchorElement;
  window.history.pushState({}, "", target.href);
  updateNavBarClassList(target);
  updateStoredActiveLink(target);
  handleLocation();
};

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", navigateTo);
});

const router = window as unknown as CustomWindow;

window.onpopstate = handleLocation;
router.route = navigateTo;

handleLocation();
