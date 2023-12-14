import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface StyledDivProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface ButtonProps extends StyledDivProps {
  to?: string;
  newTab?: boolean;
}


const StyledDiv = ({ children, onClick }: StyledDivProps) => (
  <motion.div
    className="flex items-center justify-center rounded-md border-2 border-black p-2 "
    animate={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
    whileTap={{ x: '4px', y: '4px', boxShadow: '0px 0px 0px 0px rgba(0,0,0,1)' }}
    whileHover={{ x: '3px', y: '3px', boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)' }}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

export const Button = ({ children, onClick, to, newTab }: ButtonProps) => {

  return onClick ? (
    <StyledDiv>
      {children}
    </StyledDiv>
  ) : (
    <Link
      target={newTab ? "_blank" : "_self"}
      to={to!}
      role='button'
      aria-label="Click to perform an action"
    >
      <StyledDiv>
        {children}
      </StyledDiv>
    </Link>
  );
} 