import Profile from "../pages/profile";
import Map from "../pages/map";
import Time from "../pages/time";

const format = {
  milliseconds: 1000 * 60 * 60,
  seconds: 1000 * 60,
};

const paths = {
  profile: "/web-bee-internship-01/",
  map: "/web-bee-internship-01/map",
  time: "/web-bee-internship-01/time",
};

const titles = {
  profile: "Profile",
  map: "Map",
  time: "Time",
};

const pages = {
  profile: Profile,
  map: Map,
  time: Time,
};

const styles = {
  active: "active",
  activeLink: "activeLink",
  navLink: ".nav-link",
  loader: "lds-circle",
};

const city = {
  hint: "Нижний Новгород",
  balloon: "Город на Волге",
};

export { paths, pages, titles, format, city, styles };
