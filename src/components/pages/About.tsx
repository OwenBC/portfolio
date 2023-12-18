// import { Link } from "react-router-dom";
import { FaAws } from "react-icons/fa";

import { Button, HistorySection, SectionHeader, SpaceBetween, TextSection } from "../common"
import { Article } from "../layout"

export const About = () => {
  return (
    <Article>
      <TextSection>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est 
        tortor, aliquam sit amet mi sed, vestibulum porta libero. Donec 
        vestibulum, sapien quis posuere vulputate, massa orci gravida leo, 
        vitae ultricies dui ligula eu tortor. Integer congue eros elit, sed 
        efficitur metus egestas vitae. Phasellus non lorem in quam congue 
        dictum. Quisque nibh eros, iaculis nec dapibus semper, sollicitudin sit 
        amet velit. Vivamus justo nibh, auctor ut pellentesque a, tempor id 
        elit. Ut aliquet cursus ultrices. Phasellus quis elementum ipsum. 
        Vivamus sagittis aliquet rhoncus. Nulla nibh purus, gravida vitae 
        congue a, fringilla ac nulla.
      </TextSection>

      <SectionHeader>Experience</SectionHeader>

      <SectionHeader size='xl'>
        <SpaceBetween dir='h'>
          <Button icon={FaAws} roundness='full'/>
          <div className="whitespace-nowrap pl-2">Amazon Web Services</div>
        </SpaceBetween>
      </SectionHeader>
      
      <HistorySection
        heading='Software Dev Engineer Intern'
      >
        <ul>
          <li>Apple</li>
          <li>Banana</li>
        </ul>
      </HistorySection>
    </Article>
  )
};
