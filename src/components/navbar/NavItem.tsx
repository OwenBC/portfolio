import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"

export interface navItemProps {
  label: string
  path: string
}

export const NavItem = ({ label, path }: navItemProps) => {
  const location = useLocation();

  return (
    <Link
      className={`font-bold px-5 ${location.pathname == path ? 'text-2xl' : 'text-xl'}`}
      to={path}>
      <motion.div whileHover={location.pathname == path ? {} : { scale: 1.2 }}>
        {label}
      </motion.div>
    </Link>
  );
}