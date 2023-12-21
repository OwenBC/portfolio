import { ReactNode } from "react";

export interface TextSectionProps {
  children?: ReactNode;
};

export const TextSection = ({ children }: TextSectionProps) => (
  <div className="flex-none mb-5 font-bold leading-relaxed">{children}</div>
);
