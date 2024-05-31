import { NavLink } from "@remix-run/react"
import { Page } from "src/lib/pages"
import { cn } from "src/lib/utils"

export interface navProps {
  items: Page[]
}

export const Nav = ({ items }: navProps) => {

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 h-max">
      <nav className="items-center my-auto flex flex-col gap-2 rounded border-2 border-black bg-main p-2.5 px-5 text-sm font-base shadow-base sm:text-base">
        {items.map((link) => {
          return (
            <NavLink
              key={link.path}
              className={({ isActive }) => cn(
                'rounded border-2 px-2 py-1 transition-colors hover:border-black',
                isActive ? 'border-black' : 'border-transparent',
              )}
              to={link.path}
            >
              {link.label}
            </NavLink>
          )
        })}
      </nav>
    </div>
  )
}