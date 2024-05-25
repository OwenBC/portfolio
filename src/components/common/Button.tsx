import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { ButtonIcon, ButtonIconProps } from "./ButtonIcon";

import { SpaceBetween } from "./SpaceBetween";

interface ButtonWrapperProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  roundness?: string;
}

export interface ButtonProps extends Omit<ButtonWrapperProps, 'children'> {
  children?: ReactNode;
  icon?: IconType;
  iconSize?: ButtonIconProps['size'];
  newTab?: boolean;
  to?: string;
}

const ButtonWrapper = ({ children, className, onClick, roundness }: ButtonWrapperProps) => (
  <motion.div
    className={`${className} flex items-center justify-center rounded-${roundness ?? 'md'} border-2 border-black p-2`}
    animate={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
    whileTap={{ x: '4px', y: '4px', boxShadow: '0px 0px 0px 0px rgba(0,0,0,1)' }}
    whileHover={{ x: '3px', y: '3px', boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)' }}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

export const Button = ({ icon, iconSize, children, className, newTab, onClick, roundness, to }: ButtonProps) => {
  if (!icon && !children) throw SyntaxError('Button requires at least one of the `icon` and `children` parameters.');

  const buttonIcon = icon && <ButtonIcon icon={icon} size={iconSize} />;
  const wrapperProps = {
    roundness: roundness,
    className: className
  };

  const content = buttonIcon && children ? (
    <SpaceBetween dir='h'>
      {buttonIcon}
      {children}
    </SpaceBetween>
  ) : (
    <>{buttonIcon || children}</>
  );

  return to ? (
    <Link
      target={newTab ? "_blank" : "_self"}
      to={to}
    >
      <ButtonWrapper {...wrapperProps}>
        {content}
      </ButtonWrapper>
    </Link>
  ) : (
    <ButtonWrapper {...wrapperProps} onClick={onClick}>
      {content}
    </ButtonWrapper>
  );
} 