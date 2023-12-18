import { IconBaseProps, IconType } from "react-icons"

const config = {
  size: {
    'sm': 4,
    'md': 6,
    'lg': 9
  },
}

export interface ButtonIconProps extends IconBaseProps {
  className?: string;
  size?: keyof typeof config.size;
  icon: IconType;
};

export const ButtonIcon = ({ className, icon: Icon, size, ...rest }: ButtonIconProps) => (
  <Icon className={`${className} h-${config.size[size ?? 'md']} w-${config.size[size ?? 'md']}`} {...rest} />
);
