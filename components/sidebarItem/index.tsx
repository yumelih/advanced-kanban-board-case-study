import { useContext } from 'react'
import { SidebarContext } from '../sidebar'
import { SidebarItemProps } from './types'

const SidebarItem = ({
  disabled = false,
  active = false,
  alert = false,
  color,
  text,
}: SidebarItemProps) => {
  const { expanded } = useContext(SidebarContext)
  return (
    <li
      className={`group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 transition-colors ${active ? 'bg-background font-medium' : disabled ? 'text-gray-600' : 'hover:bg-background'} ${disabled && 'cursor-not-allowed select-none grayscale'}`}
    >
      <div className={`h-2 w-2 rounded-full ${color}`}></div>
      <span
        className={`overflow-hidden transition-all ${expanded ? 'ml-3 w-52' : 'h-8 w-0'}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-background ${expanded ? '' : 'top-2'}`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`invisible absolute left-full ml-6 -translate-x-3 rounded-md bg-indigo-100 px-2 py-1 text-sm text-indigo-800 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
        >
          {text}
        </div>
      )}
    </li>
  )
}

export default SidebarItem
