function updateNavBarClassList(target: HTMLAnchorElement) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  target.classList.add("active");
}

function updateStoredActiveLink(target: HTMLAnchorElement) {
  sessionStorage.setItem("activeLink", target.href);
}

function restoreActiveLink() {
  const activeLink = sessionStorage.getItem("activeLink");
  if (activeLink) {
    document.querySelectorAll(".nav-link").forEach((element) => {
      const link = element as HTMLAnchorElement;
      if (link.href === activeLink) {
        link.classList.add("active");
      }
    });
  } else {
    document.querySelector("#main-page")?.classList.add("active");
  }
}

export { updateNavBarClassList, updateStoredActiveLink, restoreActiveLink };
