import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = ({ width = 32, height = 32, color = "#ffffff", ...props }: SVGProps<SVGSVGElement>) => {
    return <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    width={width}
    height={height}
    {...props}
  >
    <path fill={color} d="m213.333 750.507 451.84-451.84H384v-85.334h426.667V640h-85.334V358.827l-451.84 451.84-60.16-60.16z" />
  </svg>
}
export { SvgComponent as ArrowTopRightIcon }
