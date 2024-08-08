import * as React from 'react'
import { SVGProps } from 'react'
const BellIcon = ({
  color = '#667085',
  width = 20,
  ...props
}: SVGProps<SVGSVGElement>) => {
  const pathScale = 20 / Number(width)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      width={width}
      fill="none"
      {...props}
    >
      <path
        transform={`scale(${1 / pathScale})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.667}
        stroke={color}
        d="M6.795 17.5A3.32 3.32 0 0 0 9 18.333a3.32 3.32 0 0 0 2.205-.833M14 6.667a5 5 0 0 0-10 0c0 2.575-.65 4.338-1.375 5.504-.612.984-.918 1.476-.907 1.613.012.152.044.21.167.3.11.083.609.083 1.606.083h11.018c.997 0 1.496 0 1.606-.082.123-.091.155-.149.167-.301.012-.137-.294-.629-.907-1.613C14.65 11.005 14 9.241 14 6.667Z"
      />
    </svg>
  )
}
export default BellIcon
