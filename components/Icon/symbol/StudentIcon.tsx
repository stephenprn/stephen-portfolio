import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = ({ width = 24, height = 24, color = "#ffffff", ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={width} height={height} {...props}>
      <path
        fill={color}
        d="M63.22 23.6a2 2 0 0 1-1.29 1.87l-3.32 1.27v14.9a4.93 4.93 0 0 1 2.94 4.51V51a2 2 0 0 1-2 2h-5.87a2 2 0 0 1-2-2v-4.85a4.91 4.91 0 0 1 2.93-4.5V28.27l-4.25 1.62-4 1.53-10.79 4.13a10 10 0 0 1-7.14 0l-10.79-4.13-4-1.53-11.57-4.42a2 2 0 0 1 0-3.74l26.36-10.08a10 10 0 0 1 7.14 0l26.36 10.08a2 2 0 0 1 1.29 1.87ZM35.57 39.55a10 10 0 0 1-7.14 0l-10.79-4.13-4-1.53v8.36a2 2 0 0 0 1 1.74A38.12 38.12 0 0 0 32 48.27 38.12 38.12 0 0 0 49.36 44a2 2 0 0 0 1-1.74v-8.37l-4 1.53Z"
      />
    </svg>
  );
};
export { SvgComponent as StudentIcon };
