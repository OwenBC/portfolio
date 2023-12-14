import { ReactNode } from "react";
import { About, App } from "../components/pages";

export interface Page {
  label?: string;
  path: string;
  element: ReactNode;
};

export const pages: Page[] = [
  {
    label: 'About',
    path: '/',
    element: <About/>
  },
  {
    label: 'Dummy',
    path: '/dummy',
    element: <App/>
  }
];
