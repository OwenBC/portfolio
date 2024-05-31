import { Link } from "@remix-run/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { cn } from "src/lib/utils";
import { ButtonIcon, ButtonIconProps } from "./ButtonIcon";

import { SpaceBetween } from "./SpaceBetween";

interface ButtonWrapperProps {
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface ButtonProps extends Omit<ButtonWrapperProps, 'children'> {
  children?: ReactNode;
  icon?: IconType;
  iconSize?: ButtonIconProps['size'];
  newTab?: boolean;
  to?: string;
}

const ButtonWrapper = ({ children, className, onClick }: ButtonWrapperProps) => (
  <div
    className={cn(
      className,
      "cursor-pointer flex items-center justify-center rounded border-2 shadow-base border-black bg-main p-2 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
    )}
    onClick={onClick}
  >
    {children}
  </div>
);

export const Button = ({ icon, iconSize, children, className, newTab, onClick, to }: ButtonProps) => {
  if (!icon && !children) throw SyntaxError('Button requires at least one of the `icon` and `children` parameters.');

  const buttonIcon = icon && <ButtonIcon icon={icon} size={iconSize} />;
  const wrapperProps = {
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