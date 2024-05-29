import { renderMap } from "../map";
import { renderTimer } from "../timer";

function setupPage(html: string, title: string) {
  document.querySelector("#app")!.innerHTML = html;
  document.title = title;
}

function renderPage(path: string) {
  renderMap(path);
  renderTimer(path);
}

export { setupPage, renderPage };
