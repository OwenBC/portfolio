import { ReactNode } from "react";

export interface SectionHeaderProps {
  children?: ReactNode;
  className?: string;
  size?: string;
};

export const SectionHeader = ({ children, className, size }: SectionHeaderProps) => (
  <h2 className={`flex-none w-min mb-5 text-${size ?? '2xl'} font-bold m400:text-xl ${className}`}>{children}</h2>
);
