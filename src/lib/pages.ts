export interface Page {
  label: string,
  path: string,
};  

export const About: Page = {
  label: "About",
  path: "/",
};

export const Trips: Page = {
  label: "Trips",
  path: "/trips",
}

export const pages = [About, Trips];