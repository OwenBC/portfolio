// import { Link } from "react-router-dom";

import { SectionHeader } from "../common/SectionHeader"

export const About = () => {
  return (
    <div className="min-h-[100dvh] w-[full-250px] bg-[#c9dcd8] px-5 pt-[80px] m800:ml-[180px] m800:w-[full-180px] m600:m-0 m600:w-full m500:pt-16">
      <div className="mx-auto w-[700px] py-20 m1000:w-[500px] m750:w-[350px] m400:w-full m400:py-16">
        <SectionHeader size="xl">About</SectionHeader>
        <SectionHeader>About</SectionHeader>
        <SectionHeader size="3xl">About</SectionHeader>

        <div className="mt-8 font-bold leading-relaxed">
          Neobrutalism components is a collection of type-safe components written
          in React and Tailwind.
          <br />
          <br />
          Neobrutalism is a mix of regular brutalism in web design and more modern
          typography, illustration and animation standards. <br /> Neobrutalism
          refuses the usual components of UX-UI design and embraces uncomfortable
          design elements, and it is more fearless to use distinctive color
          palettes.
          <br />
          <br />I created this collection of components for people who want to
          learn more about neobrutalism style, and to help them get started with
          creating neobrutalism layouts.
        </div>
      </div>
    </div>
  )
};
