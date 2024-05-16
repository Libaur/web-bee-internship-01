import { setupPage, renderPage } from "../utils";
import { updateNavBar, restoreActiveLink } from "../utils/nav-bar";

const routes: Routes = {
  paths: {
    "404": "/pages/404.html",
    "/": "/pages/index.html",
    "/map": "/pages/map.html",
    "/time": "/pages/timer.html",
  },
  titles: {
    "404": "Page not found",
    "/": "Profile",
    "/map": "Map",
    "/time": "Time",
  },
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes.paths[path] || routes.paths["404"];
  const title = routes.titles[path] || routes.titles["404"];
  const html = await fetch(route).then((data) => data.text());
  setupPage(html, title);
  renderPage(path);
  restoreActiveLink();
};

const navigateTo = (event: Event) => {
  event.preventDefault();
  const target = event.target as HTMLAnchorElement;
  window.history.pushState({}, "", target.href);
  updateNavBar(target);
  handleLocation();
};

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", navigateTo);
});

const router = window as unknown as CustomWindow;

window.onpopstate = handleLocation;
router.route = navigateTo;

handleLocation();
