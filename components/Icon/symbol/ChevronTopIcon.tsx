import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = ({ width = 24, height = 24, color = "#ffffff", ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path
        fill={color}
        fillRule="nonzero"
        d="M12 10.413 5.705 16.69a1 1 0 0 1-1.412-1.416l7-6.981a1 1 0 0 1 1.413 0l7 7a1 1 0 1 1-1.414 1.415l-6.294-6.294Z"
      />
    </svg>
  );
};
export { SvgComponent as ChevronTopIcon };
