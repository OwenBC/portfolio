import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from "src/lib/utils";

import { SectionHeader } from './SectionHeader';
import { SpaceBetween } from './SpaceBetween';
import { TextSection } from './TextSection';

export interface HistorySectionProps {
  children?: ReactNode;
  heading: ReactNode;
  secondaryHeading?: ReactNode;
  defaultClosed?: boolean;
}

export const HistorySection = ({ heading, secondaryHeading, children, defaultClosed }: HistorySectionProps) => {
  const [isActiveDropdown, setIsActiveDropdown] = useState(defaultClosed ? false : true);
  const [contentHeight, setContentHeight] = useState('0px')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`)
    }
  }, [isActiveDropdown])

  return (
    <div
      style={{ paddingBottom: isActiveDropdown ? '1.25rem' : 'initial' }}
      className="relative transition-[paddingBottom] duration-300 ease-in-out">
      <SpaceBetween dir='h'>
        <SectionHeader size='xl' className="mb-2">
          <SpaceBetween dir='h'>
            <div className='pl-[17px]'>
              <div
                className={cn(
                  "w-2.5 h-2.5 rounded-full border-black border-2 hover:scale-150 hover:border",
                  isActiveDropdown ? "bg-black" : "bg-main"
                )}
                onClick={() => setIsActiveDropdown(!isActiveDropdown)}
              />
            </div>
            <div className="whitespace-nowrap pl-2">{heading}</div>
          </SpaceBetween>
        </SectionHeader>
        <div className='grow rounded-full mb-4 h-0.5 bg-black' />
        <TextSection>
          {secondaryHeading}
        </TextSection>
      </SpaceBetween>

      {children && (
        <div
          ref={contentRef}
          style={{
            height: isActiveDropdown ? contentHeight : '0',
            opacity: isActiveDropdown ? '1' : '0'
          }}
          className='mx-auto flex justify-start transition-all duration-300 ease-in-out'>
          <div className='flex-initial mx-5 min-w-1 bg-black' />
          <div className='flex-none pl-8 font-bold text-md'>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
