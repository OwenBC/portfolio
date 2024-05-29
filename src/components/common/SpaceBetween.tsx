import { ReactNode } from "react"

export interface SpaceBetweenProps {
  children?: ReactNode;
  dir: 'h' | 'v';
  size?: string;
}

export const SpaceBetween = ({ children, dir, size }: SpaceBetweenProps) => {
  const plane = dir == 'h' ? 'x' : 'y';
  size = size ?? '2';
  
  return (
    <div className={`mx-auto flex space-${plane}-${size} items-center justify-between`}>
      {children}
    </div>
  );
}