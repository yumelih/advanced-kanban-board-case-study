import * as React from 'react'
import { SVGProps } from 'react'
const PlusIcon = ({
  color = '#667085',
  width = 24,
  ...props
}: SVGProps<SVGSVGElement>) => {
  const pathScale = 24 / Number(width)

  return (
    <svg
      height={width}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M1 12h22M12 1v22" transform={`scale(${1 / pathScale})`} />
      </g>
    </svg>
  )
}
export default PlusIcon
