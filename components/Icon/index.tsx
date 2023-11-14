import React from "react";
import { MaltIcon } from "@/components/Icon/social/MaltIcon";
import { GithubIcon } from "@/components/Icon/social/GithubIcon";
import { LinkedinIcon } from "@/components/Icon/social/LinkedinIcon";
import { LocationIcon } from "@/components/Icon/symbol/LocationIcon";
import { CalendarIcon } from "@/components/Icon/symbol/CalendarIcon";
import { ArrowTopRightIcon } from "@/components/Icon/symbol/ArrowTopRightIcon";
import { AndroidIcon } from "@/components/Icon/symbol/AndroidIcon";
import { MailIcon } from "@/components/Icon/symbol/MailIcon";
import { WebIcon } from "@/components/Icon/symbol/WebIcon";
import { ChevronTopIcon } from "@/components/Icon/symbol/ChevronTopIcon";
import { StudentIcon } from "@/components/Icon/symbol/StudentIcon";
import { CVIcon } from "@/components/Icon/social/CVIcon";

const ICONS = {
  malt: MaltIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  CV: CVIcon,

  location: LocationIcon,
  calendar: CalendarIcon,
  arrowTopRight: ArrowTopRightIcon,
  android: AndroidIcon,
  mail: MailIcon,
  web: WebIcon,
  chevronTop: ChevronTopIcon,
  student: StudentIcon,
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
