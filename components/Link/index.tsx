import classes from "./index.module.scss";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Icon } from "../Icon";
import { AnchorHTMLAttributes } from "react";

interface LinkProps extends Omit<NextLinkProps, "href">, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  showArrow?: boolean;
  arrowSize?: string;
  active?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  children,
  active,
  showArrow = true,
  arrowSize = "0.8rem",
  className,
  ...props
}) => {
  return (
    <NextLink {...props} className={`${className} ${classes.link} link`}>
      {children}{" "}
      {showArrow ? (
        <Icon
          className={`${classes["link-icon"]} link-icon`}
          name="arrowTopRight"
          height={arrowSize}
          width={arrowSize}
        />
      ) : null}
    </NextLink>
  );
};
