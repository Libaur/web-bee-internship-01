type RoutesContent = {
  [key: string]: string;
  "404": string;
  "/": string;
  "/map": string;
  "/time": string;
};

type Routes = {
  paths: RoutesContent;
  titles: RoutesContent;
};

interface CustomWindow extends Window {
  route: (event: Event) => void;
}
