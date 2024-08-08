import * as React from 'react'
import { SVGProps } from 'react'
const CalendarIcon = ({
  color = '#667085',
  width = 14,
  ...props
}: SVGProps<SVGSVGElement>) => {
  const pathScale = 15 / Number(width)

  return (
    <svg
      height={width}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.062 5.77h11.882M9.961 8.373h.007M7.003 8.373h.006M4.039 8.373h.006M9.961 10.964h.007M7.003 10.964h.006M4.039 10.964h.006M9.696.833v2.194M4.31.833v2.194"
        transform={`scale(${1 / pathScale})`}
      />
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.826 1.886H4.18C2.223 1.886 1 2.976 1 4.981v6.033c0 2.037 1.223 3.152 3.18 3.152h5.64c1.963 0 3.18-1.096 3.18-3.101V4.98c.006-2.004-1.21-3.095-3.174-3.095Z"
        clipRule="evenodd"
        transform={`scale(${1 / pathScale})`}
      />
    </svg>
  )
}
export default CalendarIcon
