import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = ({ width = 24, height = 24, color = "#ffffff", ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} {...props}>
      <path
        fill={color}
        d="M20 3.25H4A2.753 2.753 0 0 0 1.25 6l10 7.5a1.258 1.258 0 0 0 1.5 0l10-7.5A2.753 2.753 0 0 0 20 3.25Z"
      />
      <path
        fill={color}
        d="m22.75 7.875-9.1 6.825a2.767 2.767 0 0 1-3.3 0l-9.1-6.825V18A2.753 2.753 0 0 0 4 20.75h16A2.753 2.753 0 0 0 22.75 18Z"
      />
    </svg>
  );
};
export { SvgComponent as MailIcon };
