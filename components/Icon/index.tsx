import React from "react";
import { MaltIcon } from "./social/MaltIcon";
import { GithubIcon } from "./social/GithubIcon";
import { LinkedinIcon } from "./social/LinkedinIcon";
import { LocationIcon } from "./symbol/LocationIcon";
import { CalendarIcon } from "./symbol/CalendarIcon";
import { ArrowTopRightIcon } from "./symbol/ArrowTopRightIcon";
import { AndroidIcon } from "./symbol/AndroidIcon";
import { MailIcon } from "./symbol/MailIcon";
import { WebIcon } from "./symbol/WebIcon";

const ICONS = {
  malt: MaltIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,

  location: LocationIcon,
  calendar: CalendarIcon,
  arrowTopRight: ArrowTopRightIcon,
  android: AndroidIcon,
  mail: MailIcon,
  web: WebIcon,
};

export type IconName = keyof typeof ICONS;

type IconProps = {
  name: IconName;
  style?: React.CSSProperties;
  height?: string | number;
  width?: string | number;
} & React.SVGProps<SVGSVGElement>;

export const Icon = ({ name, style = {}, width, height, ...props }: IconProps) => {
  const IconComponent = ICONS[name];

  return IconComponent ? (
    <IconComponent width={width} height={height} style={style} {...props} />
  ) : (
    <span>{`No icon was found with name "${name}"`}</span>
  );
};
