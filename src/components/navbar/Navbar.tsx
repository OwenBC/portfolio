// import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Button } from '../common';
import { NavItem, navItemProps } from './NavItem';

export interface navbarProps {
  items: navItemProps[]
}

export const Navbar = ({ items }: navbarProps) => {
  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-20 w-full items-center border-b-4 border-black bg-blue-100 px-5 m500:h-16 ">
      <div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">

        <Link className="text-3xl font-bold m500:text-xl" to={'/'}>
          Owen Crewe
        </Link>

        <div className="mx-auto flex items-center justify-between">
          {items.map(item => <NavItem label={item.label} path={item.path} />)}
        </div>

        <div className="mx-auto flex items-center justify-between">
          <Button to="https://github.com/owenbc/portfolio" newTab>
            <AiFillGithub className="h-6 w-6 m500:h-4 m500:w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
