// import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai'

import { Link } from 'react-router-dom'

export interface navigationItems {
  label: string
  path: string
}

export interface navbarProps {
  items: navigationItems[]
}

export const Navbar = ({ items }: navbarProps) => {
  // const location = useLocation();
  return (
    <nav className="fixed left-0 top-0 z-10 mx-auto flex h-20 w-full items-center border-b-4 border-black bg-orange-100 px-5 m500:h-16 m500:bg-red ">
      <div className="mx-auto flex w-[1300px] max-w-full items-center justify-between">

        <Link className="text-3xl font-bold m500:text-xl" to={'/'}>
          Owen Crewe
        </Link>

        {items.map(item => (
          <div>{item.label}</div>
        ))}

        <motion.a
          target="_blank"
          href="https://github.com/owenbc/portfolio"
          className="flex items-center justify-center rounded-md border-2 border-black p-2 "
          animate={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
          whileTap={{ x: '4px', y: '4px', boxShadow: '0px 0px 0px 0px rgba(0,0,0,1)' }}
          whileHover={{ x: '3px', y: '3px', boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)' }}
        >
          <AiFillGithub className="h-6 w-6 m500:h-4 m500:w-4" />
        </motion.a>
      </div>
    </nav>
  )
}
