import { ReactNode } from 'react'
import { Navbar } from '../Navbar'

interface MainProps {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => (
  <>
    <Navbar items={[]} />
    {children}
    <div id="drawer" />
    <div id="modal" />
  </>
)
