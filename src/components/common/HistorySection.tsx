import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from 'react';
import { GoDot, GoDotFill } from "react-icons/go";
import { ButtonIcon } from "./ButtonIcon";

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
        <SectionHeader size='xl' className="mb-2">
          <SpaceBetween dir='h'>
            <div className='pl-0.5'>
              <motion.button
                className={'flex rounded-full bg-black p-3'}
                initial={{ scale: 0.3 }}
                whileTap={{ scale: 0.3 }}
                whileHover={{ scale: 0.5 }}
                onClick={() => setIsActiveDropdown(!isActiveDropdown)}
              >
                <ButtonIcon icon={isActiveDropdown ? GoDotFill : GoDot}/>
              </motion.button>
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
        <AnimatePresence>
          {isActiveDropdown && (
            <motion.div
              initial={{ marginTop: -20, opacity: 0 }}
              animate={{ marginTop: 0, opacity: 1 }}
              exit={{ marginTop: -20, opacity: 0 }}
              className='mx-auto flex justify-start'
            >
              <div className='flex-initial rounded-full mx-5 min-w-1 bg-black' />
              <div className='flex-none pl-8 font-bold text-md'>
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}
