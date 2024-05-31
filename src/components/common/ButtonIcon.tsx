import { IconBaseProps, IconType } from "react-icons"
import { cn } from "src/lib/utils";

export interface ButtonIconProps extends IconBaseProps {
  className?: string;
  size?: string;
  icon: IconType;
};

export const ButtonIcon = ({ className, icon: Icon, size, ...rest }: ButtonIconProps) => (
  <Icon className={cn(className, `h-${size} w-${size}`)} {...rest} />
);
