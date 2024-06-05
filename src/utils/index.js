import { styles } from "../constants";

function updateNavBarClassList(id) {
  document.querySelectorAll(styles.navLink).forEach((link) => {
    link.classList.remove(styles.active);
  });
  document.getElementById(id).classList.add(styles.active);
}

function updateStoredActiveLink(id) {
  const target = document.getElementById(id);
  sessionStorage.setItem(styles.activeLink, target.href);
}

function restoreActiveLink() {
  const activeLink = sessionStorage.getItem(styles.activeLink);
  if (activeLink) {
    document.querySelectorAll(styles.navLink).forEach((element) => {
      if (element.href === activeLink) {
        element.classList.add(styles.active);
      }
    });
  } else {
    document.getElementById("Profile").classList.add(styles.active);
  }
}

export { updateNavBarClassList, updateStoredActiveLink, restoreActiveLink };
