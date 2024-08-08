import * as React from 'react'
import { SVGProps } from 'react'
const GraphIcon = ({
  color = '#667085',
  width = 14,
  ...props
}: SVGProps<SVGSVGElement>) => {
  const pathScale = 14 / Number(width)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      width={width}
      fill={color}
      {...props}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 17V7M7 17V1M1 17v-6"
        transform={`scale(${1 / pathScale})`}
      />
    </svg>
  )
}
export default GraphIcon
