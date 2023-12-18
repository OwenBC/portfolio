import { ReactNode } from 'react';
import { pages } from '../../routes';
import { Navbar } from '../navbar';

export interface MainProps {
  children: ReactNode
};

export const Main = ({ children }: MainProps) => (
  <>
    <Navbar items={pages.filter((page) => page.label).map(({ label, path }) => ({ label: label!, path: path }))} />
    {children}
    <div id="drawer" />
    <div id="modal" />
  </>
);
