// import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { NavLink } from '@remix-run/react'

import { Button } from '../common';
import { NavItem, navItemProps } from './NavItem';

export interface navbarProps {
  items: navItemProps[]
}

export const Navbar = ({ items }: navbarProps) => {
  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-20 w-full items-center border-b-4 border-black bg-blue-100 px-5 m500:h-16 ">
      <div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">
        <NavLink className="text-3xl font-bold m500:text-xl" to="/">
          Owen Crewe
        </NavLink>

        <div className="mx-auto flex items-center justify-between">
          {items.map(item => <NavItem key={item.label} label={item.label} path={item.path} />)}
        </div>

        <div className="mx-auto flex space-x-2 items-center justify-between">
          <Button icon={AiFillGithub} to="https://github.com/owenbc/portfolio" newTab />
          <Button icon={FaLinkedinIn} to="https://linkedin.com/in/ocrewe/" newTab />
          <Button icon={MdOutlineEmail} to="mailto:ocrewe04@gmail.com" newTab />
        </div>
      </div>
    </nav>
  )
}
