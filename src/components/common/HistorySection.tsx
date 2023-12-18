import { ReactNode, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { Button } from './Button';
import { ButtonIcon } from './ButtonIcon';
import { SectionHeader } from './SectionHeader';
import { SpaceBetween } from './SpaceBetween';
import { TextSection } from './TextSection';

export interface HistorySectionProps {
  heading: ReactNode;
  children: ReactNode;
}

export const HistorySection = ({ heading, children }: HistorySectionProps) => {
  const [isActiveDropdown, setIsActiveDropdown] = useState(true);

  return (
    <div className="relative">
      <div>
        <SpaceBetween dir='h'>
          <SectionHeader size='lg'>
            <SpaceBetween dir='h'>
              <div className='pl-0.5'>
                <Button
                  roundness='full'
                  onClick={() => {
                    setIsActiveDropdown(!isActiveDropdown)
                  }}
                >
                  <ButtonIcon
                    icon={FaChevronDown}
                    size='sm'
                    style={{
                      transform: `rotate(${isActiveDropdown ? '180deg' : '0'})`,
                    }}
                    className={'transition-transform ease-in-out'}
                  />
                </Button>
              </div>
              <div className="whitespace-nowrap pl-2.5">{heading}</div>
            </SpaceBetween>
          </SectionHeader>
          <div className='grow rounded-full h-0.5 bg-black' />
          <TextSection>
            <i>Jan. 2023 - Sep. 2023</i>
          </TextSection>
        </SpaceBetween>
      </div>


      <div
        style={{
          top: isActiveDropdown ? '80px' : '50px',
          opacity: isActiveDropdown ? '1' : '0',
          visibility: isActiveDropdown ? 'visible' : 'hidden',
        }}
        className="absolute left-0 top-[70px] w-[200px] rounded-md border-2 border-black text-center font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
      >
        {/* <p
          className="block w-full border-b-2 border-black bg-[#bc95d4] px-7 py-3 first:rounded-t-[5px] last:rounded-b-[5px] hover:bg-[#a36ec4]"
        > */}
          {children}
        {/* </p> */}
      </div>
    </div>
  )
}
