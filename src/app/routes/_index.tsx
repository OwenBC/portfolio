import { FaAws } from "react-icons/fa";

import { Button, HistorySection, SectionHeader, SpaceBetween, TextSection, URlIcon } from "../../components/common"
import { Article } from "../../components/layout"

export default function About() {
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

      <SectionHeader size='3xl' className='mt-14'>Experience</SectionHeader>

      <SectionHeader>
        <SpaceBetween dir='h'>
          <Button icon={FaAws} roundness='full'/>
          <div className="whitespace-nowrap pl-2">Amazon Web Services</div>
        </SpaceBetween>
      </SectionHeader>
      
      <HistorySection
        heading='Software Dev Engineer - DynamoDB'
        secondaryHeading={<i>Jun. 2024 - </i>}
      >
        <ul className='list-disc'>
          <li>Returning.</li>
        </ul>
      </HistorySection>

      <HistorySection
        heading='Software Dev Engineer Intern - DynamoDB'
        secondaryHeading={<i>Jan. 2023 - Sep. 2023</i>}
      >
        <ul className='list-disc'>
          <li>
            Deployed software to test infrastructure to aggregate and log
            status information.
          </li>
          <li>
            Developed API to query test infrastructure status information.
          </li>
          <li>
            Created a full-stack dev tool to view, create, delete, and manage
            cluster infrastructure.
          </li>
        </ul>
      </HistorySection>

      <SectionHeader className="mt-5">
        <SpaceBetween dir='h'>
          <Button roundness='full'>
            <URlIcon url='https://www.vertigis.com/wp-content/uploads/2021/03/favicon-icon.svg' />
          </Button>
          <div className="whitespace-nowrap pl-2">VertiGIS North America</div>
        </SpaceBetween>
      </SectionHeader>

      <HistorySection
        heading='Quality Assurance Analyst Intern'
        secondaryHeading={<i>Jan. 2021 - Apr. 2021</i>}
      >
        <ul className='list-disc'>
          <li>Shipped 2 versions of GeoCortex Studio Web.</li>
          <li>
            Performed quality testing on dozens of new features and bugs.
          </li>
          <li>
            Managed and updated hundreds of user tests and the accompanying
            automated test suite.
          </li>
        </ul>
      </HistorySection>

      <SectionHeader size='3xl' className='mt-14'>Education</SectionHeader>

      <SectionHeader>
        <SpaceBetween dir='h'>
          <Button roundness='full' className='bg-orange'>
            <URlIcon url='https://www.uvic.ca/assets/core-4-1/img/favicon-32.png' />
          </Button>
          <div className="whitespace-nowrap pl-2">University of Victoria</div>
        </SpaceBetween>
      </SectionHeader>

      <HistorySection
        heading="Bachelor of Science in Computer Science"
        secondaryHeading={<i>Sep. 2019 - Apr. 2024</i>}
      >
        <ul className='list-disc'>
          <li>Work Experience accreditation from three Co-op terms.</li>
          <li>
            Jan. 2024: Switched field of study from Software Engineering to
            Computer Science in<br/>order to enter industry sooner.
          </li>
        </ul>
      </HistorySection>
    </Article>
  )
};
