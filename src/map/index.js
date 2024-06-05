import { city, styles } from "../constants";

export function renderMap() {
  const mapContainer = document.getElementById("map");
  if (mapContainer) {
    mapContainer.classList.add(styles.loader);
  }
  ymaps.ready(() => {
    mapContainer.classList.remove(styles.loader);
    const myCityPoint = [56.326797, 44.005986];
    const map = new ymaps.Map("map", {
      center: myCityPoint,
      zoom: 10,
    });

    const myPlacemark = new ymaps.Placemark(myCityPoint, {
      hintContent: city.hint,
      balloonContent: city.balloon,
    });
    map.geoObjects.add(myPlacemark);
  });
}
