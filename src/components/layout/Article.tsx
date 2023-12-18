import { ReactNode } from "react";

export interface ArticleProps {
  children: ReactNode
};

export const Article = ({ children }: ArticleProps) => (
  <div className="min-h-[100dvh] w-[full-250px] bg-[#c9dcd8] px-5 pt-[80px] m800:ml-[180px] m800:w-[full-180px] m600:m-0 m600:w-full m500:pt-16">
    <div className="mx-auto w-[700px] py-20 m1000:w-[500px] m750:w-[350px] m400:w-full m400:py-16">
      {children}
    </div>
  </div>
);