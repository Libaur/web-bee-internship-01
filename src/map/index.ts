function init() {
  const myCityPoint = [56.326797, 44.005986];
  const map = new ymaps.Map("map", {
    center: myCityPoint,
    zoom: 10,
  });

  const myPlacemark = new ymaps.Placemark(myCityPoint, {
    hintContent: "Нижний Новгород",
    balloonContent: "Город на Волге",
  });
  map.geoObjects.add(myPlacemark);
}

export function renderMap(path: string) {
  if (path === "/web-bee-internship-01/map") {
    const mapContainer = document.querySelector("#map");
    if (mapContainer) {
      mapContainer.classList.add("lds-circle");
      ymaps.ready(() => {
        init();
        mapContainer.classList.remove("lds-circle");
      });
    }
  }
}
