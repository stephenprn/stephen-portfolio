import classes from "./index.module.scss";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Icon } from "../Icon";
import { AnchorHTMLAttributes } from "react";
import clsx from "clsx";

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
    <NextLink
      {...props}
      className={clsx(`${className} ${classes.link} link`, {
        active,
      })}
    >
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
