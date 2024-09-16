import { DetailedHTMLProps, FC, SVGProps } from "react";

export const ChipIcon: FC<
  DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = () => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="34.7713" height="34.7713" fill="url(#pattern0_101_628)" />
    <defs>
      <pattern
        id="pattern0_101_628"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_101_628" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_101_628"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export const GrayChipIcon: FC<
  DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = () => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="34.7713" height="34.7713" fill="url(#pattern0_101_671)" />
    <defs>
      <pattern
        id="pattern0_101_671"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_101_671" transform="scale(0.01)" />
      </pattern>
      <image
        id="image0_101_671"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const CardLogoIcon: FC<
  DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = () => (
  <svg width="44" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" fill="#e3e3e3" fill-opacity=".5" />
    <circle cx="29" cy="15" r="15" fill="#e3e3e3" fill-opacity=".5" />
  </svg>
);
