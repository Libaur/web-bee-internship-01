export function setupPage(html: string, title: string) {
  document.getElementById("app")!.innerHTML = html;
  document.title = title;
}
