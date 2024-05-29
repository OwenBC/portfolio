import { NavLink } from '@remix-run/react';
import { motion } from 'framer-motion';

export interface navItemProps {
  label: string
  path: string
}

export const NavItem = ({ label, path }: navItemProps) => {
  return (
    <NavLink
      className={({ isActive }) => 
        `font-bold px-5 ${isActive ? 'text-2xl' : 'text-xl'}`
      }
      to={path}>
      {({ isActive }) => (
        <motion.div whileHover={isActive ? {} : { scale: 1.2 }}>
          {label}
        </motion.div>
      )}
    </NavLink>
  );
}