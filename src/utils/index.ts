export function setupPage(html: string, title: string) {
  document.querySelector("#app")!.innerHTML = html;
  document.title = title;
}
