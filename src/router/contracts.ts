type RoutesContent = {
  [key: string]: string;
  "/web-bee-internship-01/404": string;
  "/web-bee-internship-01/": string;
  "/web-bee-internship-01/map": string;
  "/web-bee-internship-01/time": string;
};

type Routes = {
  paths: RoutesContent;
  titles: RoutesContent;
};

interface CustomWindow extends Window {
  route: (event: Event) => void;
}
