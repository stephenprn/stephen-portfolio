import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = ({ width = 32, height = 32, color = "#ffffff", ...props }: SVGProps<SVGSVGElement>) => {

    return  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 256 256"
    {...props}
  >
    <path fill={color} d="M207.058 88.666q-1.107-1.103-2.241-2.169l24.84-24.84a8 8 0 0 0-11.314-11.314l-25.97 25.97a111.421 111.421 0 0 0-128.555.191l-26.161-26.16a8 8 0 0 0-11.314 11.313l25.06 25.06A113.383 113.383 0 0 0 16 169.128V192a16.018 16.018 0 0 0 16 16h192a16.018 16.018 0 0 0 16-16v-24a111.252 111.252 0 0 0-32.942-79.334ZM92 168a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm72 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </svg>
}
export { SvgComponent as AndroidIcon }
