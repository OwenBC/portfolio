import { ReactNode } from "react"
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { Button } from '../common';

export interface LeftPanelProps {
  children?: ReactNode
};

export const LeftPanel = ({ children }: LeftPanelProps) => (
  <div className="relative mx-auto h-full w-[700px] max-w-full p-8 md:p-16 xl:w-[1400px]">
    <div className="mb-12 w-full xl:fixed xl:mb-0 xl:w-[500px]">
      <img
        className="h-28 w-28 rounded-full border-2 border-black xl:h-[184px] xl:w-[184px]"
        src="/baby.jpg"
        alt="profile picture"
      />

      <div className="mt-8">
        <h2 className="text-3xl font-heading sm:text-[44px]">Owen Crewe</h2>
        <p className="mt-4 text-base font-base sm:text-xl">
          Software Engineer
        </p>
        <div className="mt-8 mx-auto space-x-2 flex flex-row">
          <Button icon={AiFillGithub} to="https://github.com/owenbc/portfolio" newTab />
          <Button icon={FaLinkedinIn} to="https://linkedin.com/in/ocrewe/" newTab />
          <Button icon={MdOutlineEmail} to="mailto:ocrewe04@gmail.com" newTab />
        </div>
      </div>
    </div>
    <div className="justify-end xl:flex">
      {children}
      {/* <div
        id="grid-container"
        className="grid w-full grid-cols-2 gap-10 md:grid-cols-3 xl:w-1/2 xl:pb-16 w450:grid-cols-1 w450:gap-7"
      >
        {Object.keys(LINKS).map((key) => (
          <a
            className="rounded-base border-2 border-black bg-main p-5 shadow-base transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
            key={key}
            target="_blank"
            href={LINKS[key].link}
          >
            <img
              className="h-8 w-8 sm:h-10 sm:w-10"
              src={LINKS[key].icon.src}
              alt={LINKS[key].title}
            />
            <p className="mt-3 text-lg font-heading sm:text-xl">
              {LINKS[key].title}
            </p>
            <p className="mt-1 text-sm font-base sm:text-base">
              {LINKS[key].text}
            </p>
          </a>
        ))}
      </div> */}
    </div>
  </div>
);
