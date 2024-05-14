import {
  updateNavBarClassList,
  updateStoredActiveLink,
  restoreActiveLink,
} from "../utils/nav-bar";

const routes: Routes = {
  paths: {
    "404": "/src/pages/404.html",
    "/": "/src/pages/index.html",
    "/map": "/src/pages/map.html",
    "/time": "/src/pages/timer.html",
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
  document.getElementById("app")!.innerHTML = html;
  document.title = title;
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
