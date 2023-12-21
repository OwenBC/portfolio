import { ReactNode, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import { Button } from './Button';
import { ButtonIcon } from './ButtonIcon';
import { SectionHeader } from './SectionHeader';
import { SpaceBetween } from './SpaceBetween';
import { TextSection } from './TextSection';

export interface HistorySectionProps {
  children?: ReactNode;
  heading: ReactNode;
  secondaryHeading?: ReactNode;
}

export const HistorySection = ({ heading, secondaryHeading, children }: HistorySectionProps) => {
  const [isActiveDropdown, setIsActiveDropdown] = useState(true);

  return (
    <div className="relative">
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
        <div className='grow rounded-full mb-4 h-0.5 bg-black' />
        <TextSection>
          {secondaryHeading}
        </TextSection>
      </SpaceBetween>

      <div
        style={{
          top: isActiveDropdown ? '50px' : '30px',
          opacity: isActiveDropdown ? '1' : '0',
          visibility: isActiveDropdown ? 'visible' : 'hidden',
        }}
        className="absolute left-0 top-[30px] w-[700px] transition-all"
      >
        <div className='mx-auto flex justify-start'>
          <div className='flex-initial rounded-full mx-5 min-w-1 bg-black' />
          <div className='flex-none pl-8 font-bold text-md'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
