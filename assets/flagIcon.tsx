import * as React from 'react'
import { SVGProps } from 'react'
const FlagIcon = ({
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
        d="M9.62 6.057 11.287 2.9a.5.5 0 0 0-.442-.734H6.457V1.26a.5.5 0 0 0-.5-.5H1.654V.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0V8.578l3.804-.094v1.014a.502.502 0 0 0 .512.5l4.888-.12a.499.499 0 0 0 .428-.737L9.619 6.057Z"
        transform={`scale(${1 / pathScale})`}
        clipRule="evenodd"
        fillRule="evenodd"
        fill={color}
      />
    </svg>
  )
}
export default FlagIcon
