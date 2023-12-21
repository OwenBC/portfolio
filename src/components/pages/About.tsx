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
        heading='Software Dev Engineer - DynamoDB'
        secondaryHeading={<i>Jun. 2024 - </i>}
      >
      </HistorySection>

      <HistorySection
        heading='Software Dev Engineer Intern - DynamoDB'
        secondaryHeading={<i>Jan. 2023 - Sep. 2023</i>}
      >
        <ul className='list-disc'>
          <li>Deployed environment to clusters to aggregate and log status information.</li>
          <li>Developed API to fetch cluster status and calculate health metrics.</li>
          <li>Created a full-stack dev tool to view, create, delete, and manage cluster infrastructure.</li>
        </ul>
      </HistorySection>
    </Article>
  )
};
