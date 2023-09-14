import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = ({ width = 32, height = 32, color = "#ffffff", ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path
        fill={color}
        d="M21.75 6v2.25H2.25V6A2.752 2.752 0 0 1 5 3.25h2.25V3a.75.75 0 0 1 1.5 0v.25h6.5V3a.75.75 0 0 1 1.5 0v.25H19A2.752 2.752 0 0 1 21.75 6ZM2.25 19A2.752 2.752 0 0 0 5 21.75h14A2.752 2.752 0 0 0 21.75 19V9.75H2.25V19Z"
      />
    </svg>
  );
};
export { SvgComponent as CalendarIcon };
