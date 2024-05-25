import { ReactNode } from 'react';
import { Navbar } from '../navbar';

export interface MainProps {
  children?: ReactNode
};

const pages = [
  {
    label: "About",
    path: "/",
  },
  {
    label: "Dummy",
    path: "/dummy",
  },
];

export const Main = ({ children }: MainProps) => (
  <>
    <Navbar items={pages.filter((page) => page.label).map(({ label, path }) => ({ label: label!, path: path }))} />
    {children}
    <div id="drawer" />
    <div id="modal" />
  </>
);
