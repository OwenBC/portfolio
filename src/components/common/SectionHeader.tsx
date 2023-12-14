import { ReactNode } from "react";

export interface SectionHeaderProps {
  children: ReactNode;
  size?: string;
};

export const SectionHeader = ({children, size}: SectionHeaderProps) => (
  <h2 className={`mb-5 text-${size ?? '2xl'} font-bold m400:text-xl`}>{children}</h2>
);