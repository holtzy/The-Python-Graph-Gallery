import React, { HTMLAttributes, FC } from "react";

export const Markdown = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.34567 11.4999L2.34563 4.49994H3.88409L5.42255 6.92302L6.96101 4.49994H8.49947L8.49951 11.4999H6.96105L6.96101 7.23071L5.42255 9.15378L3.88409 7.23071L3.88413 11.4999H2.34567ZM11.6149 11.5L9.49949 8.99994H10.7495V4.49994H12.2495V8.99994H13.4995L11.6149 11.5Z"
        fill="#EEEFF0"
      />
    </svg>
  );
};

export const Delete = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 5.5H11.5M2.5 5.5H4.5M4.5 5.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H10.5C11.0523 14.5 11.5 14.0523 11.5 13.5V5.5M4.5 5.5H11.5"
        stroke="#FF7474"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 5.5L10 2.5H6L5.5 5.5"
        stroke="#FF7474"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface MutedProps extends HTMLAttributes<SVGElement> {
  muted: boolean;
}
export const Commands: FC<MutedProps> = ({ muted = false }) => (
  <svg
    width="22px"
    height="25px"
    viewBox="0 0 22 25"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Group</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group" transform="translate(0.000000, 0.292248)">
        <rect
          id="Rectangle"
          fillOpacity="0"
          fill="#D8D8D8"
          x="0"
          y="0.7077525"
          width="22"
          height="23"
        ></rect>
        <path
          d="M0,20.5077525 L3.96,22.7077525 L11,18.7077525 L18.04,22.7077525 L22,20.5077525 L22,6.8677525 L11.977,1.2549925 C11.37,0.9150025 10.63,0.9150025 10.023,1.2549925 L0,6.8677525 L0,20.5077525 Z"
          id="Path"
          fill={muted ? "#475059" : "#E2E5E7"}
          fillRule="nonzero"
        ></path>
        <polygon
          id="Path2"
          fill="#8F969D"
          fillRule="nonzero"
          points="10.998 12.0560525 5 9.0572525 10.998 5.7077525 16.995 9.0572525"
        ></polygon>
        <polygon
          id="Path3"
          fill="#29313A"
          fillRule="nonzero"
          points="5 9.0587625 10.998 12.0529525 10.998 18.4066525 5 15.4078525"
        ></polygon>
        <polygon
          id="Path4"
          fill="#BABFC4"
          fillRule="nonzero"
          points="16.995 9.0587625 10.997 12.0529525 10.997 18.4066525 16.995 15.4078525"
        ></polygon>
        <path
          d="M10.998,18.4021525 L10.998,12.0437525 M10.998,12.0437525 L5,9.0542525 M10.998,12.0437525 L17,9.0542525"
          id="Shape"
          stroke="#E2E5E7"
          strokeWidth="1.5"
        ></path>
      </g>
    </g>
  </svg>
);

export const AddCell = ({ below = true }) => {
  return below ? (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 8.99994V3.83327C13.5 3.09689 12.903 2.49994 12.1667 2.49994H3.83333C3.09695 2.49994 2.5 3.09689 2.5 3.83327L2.5 12.1666C2.5 12.903 3.09695 13.4999 3.83333 13.4999H9"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 11.4999V15.4999"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.5V9.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 13.5H15.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8.50006L8 10.5001L6 8.50006"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 7V12.1667C13.5 12.903 12.903 13.5 12.1667 13.5H3.83333C3.09695 13.5 2.5 12.903 2.5 12.1667L2.5 3.83333C2.5 3.09695 3.09695 2.5 3.83333 2.5H9"
        stroke="#E2E5E7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 4.5V0.5"
        stroke="#E2E5E7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 2.5H15.5"
        stroke="#E2E5E7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.5V6.5"
        stroke="#E2E5E7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.5L8 5.5L6 7.5"
        stroke="#E2E5E7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Clear = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M7.99951 6C3.93295 6.5 1.31391 10.7209 1.49949 13.5H10.8498C6.99953 11 7.99951 6 7.99951 6Z"
          stroke="#EEEFF0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 9.5H14.5"
          stroke="#EEEFF0"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M10.5 7.5H14.5"
          stroke="#EEEFF0"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M12.5 5.5H14.5"
          stroke="#EEEFF0"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path d="M6.5 11.5C6.5 11.5 6.5 13 7.5 13.5" stroke="#EEEFF0" />
        <path
          d="M4.49938 10.5C4.49938 10.5 3.49939 12 3.99937 13.5"
          stroke="#EEEFF0"
        />
        <path
          d="M8 9C7.51338 9.07604 5.32118 8.77741 4.5 7.5"
          stroke="#EEEFF0"
        />
        <path d="M8 6.17468L13 1.17474" stroke="#EEEFF0" />
      </g>
    </svg>
  );
};
export const Play = () => {
  return (
    <svg
      width="9"
      height="10"
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.13165 4.45728L1.9792 0.612C1.55293 0.34558 1 0.65204 1 1.15472V8.84528C1 9.34796 1.55293 9.65442 1.9792 9.388L8.13165 5.54272C8.53272 5.29205 8.53272 4.70795 8.13165 4.45728Z"
        fill="#757F88"
        stroke="#757F88"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const More = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="1" fill="#757F88" />
      <circle cx="4" cy="8" r="1" fill="#757F88" />
      <circle cx="12" cy="8" r="1" fill="#757F88" />
    </svg>
  );
};

export const File = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="path-2-inside-1" fill="white">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 2C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2H2.5ZM9 10H5V11H9V10ZM5 8H11V9H5V8ZM9 6H5V7H9V6Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 2C2.22386 2 2 2.22386 2 2.5V13.5C2 13.7761 2.22386 14 2.5 14H13.5C13.7761 14 14 13.7761 14 13.5V2.5C14 2.22386 13.7761 2 13.5 2H2.5ZM9 10H5V11H9V10ZM5 8H11V9H5V8ZM9 6H5V7H9V6Z"
      fill="#757F88"
    />
    <path
      d="M5 10V9H4V10H5ZM9 10H10V9H9V10ZM5 11H4V12H5V11ZM9 11V12H10V11H9ZM11 8H12V7H11V8ZM5 8V7H4V8H5ZM11 9V10H12V9H11ZM5 9H4V10H5V9ZM5 6V5H4V6H5ZM9 6H10V5H9V6ZM5 7H4V8H5V7ZM9 7V8H10V7H9ZM3 2.5C3 2.77614 2.77614 3 2.5 3V1C1.67157 1 1 1.67157 1 2.5H3ZM3 13.5V2.5H1V13.5H3ZM2.5 13C2.77614 13 3 13.2239 3 13.5H1C1 14.3284 1.67157 15 2.5 15V13ZM13.5 13H2.5V15H13.5V13ZM13 13.5C13 13.2239 13.2239 13 13.5 13V15C14.3284 15 15 14.3284 15 13.5H13ZM13 2.5V13.5H15V2.5H13ZM13.5 3C13.2239 3 13 2.77614 13 2.5H15C15 1.67157 14.3284 1 13.5 1V3ZM2.5 3H13.5V1H2.5V3ZM5 11H9V9H5V11ZM6 11V10H4V11H6ZM9 10H5V12H9V10ZM8 10V11H10V10H8ZM11 7H5V9H11V7ZM12 9V8H10V9H12ZM5 10H11V8H5V10ZM4 8V9H6V8H4ZM5 7H9V5H5V7ZM6 7V6H4V7H6ZM9 6H5V8H9V6ZM8 6V7H10V6H8Z"
      fill="#757F88"
      mask="url(#path-2-inside-1)"
    />
  </svg>
);

export const Folder = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.98881 5.0109L7.98395 5.01562H8H13.5C13.7679 5.01562 13.9844 5.23207 13.9844 5.5V12.5C13.9844 12.7679 13.7679 12.9844 13.5 12.9844H2.5C2.23207 12.9844 2.01562 12.7679 2.01562 12.5V3.5C2.01562 3.23207 2.23207 3.01562 2.5 3.01562H5.99993C6.02781 3.01588 6.05459 3.02655 6.075 3.04554L7.98881 5.0109Z"
      fill="#757F88"
      stroke="#757F88"
      strokeWidth="0.03125"
    />
  </svg>
);

export const Chevron = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="7"
    height="4"
    viewBox="0 0 7 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 1L3.5 3.5L1 1"
      stroke="#757F88"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Eye = (props: HTMLAttributes<SVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5786 3.96431C11.4224 2.97694 9.89608 2.16675 7.99984 2.16675C5.46121 2.16675 3.58574 3.61884 2.37362 5.00417C1.76412 5.70077 1.30868 6.39519 1.00558 6.91482C0.853717 7.17517 0.739274 7.39306 0.662149 7.54732C0.623568 7.62449 0.594269 7.68584 0.574245 7.72875C0.564231 7.75021 0.556532 7.76707 0.551145 7.779L0.544798 7.79316L0.542924 7.79739L0.542312 7.79878L0.542087 7.79929C0.541997 7.7995 0.541916 7.79968 1 8.00008L0.541916 7.79968C0.486028 7.92744 0.486028 8.07273 0.541916 8.20048L1 8.00008C0.541916 8.20048 0.541997 8.20066 0.542087 8.20087L0.542312 8.20138L0.542924 8.20277L0.544798 8.207L0.551145 8.22116C0.556532 8.23309 0.564231 8.24995 0.574245 8.27141C0.594269 8.31432 0.623568 8.37568 0.662149 8.45284C0.739274 8.6071 0.853717 8.82499 1.00558 9.08534C1.30868 9.60497 1.76412 10.2994 2.37362 10.996C2.83137 11.5192 3.38372 12.0518 4.03066 12.5122L4.74894 11.7939C4.12432 11.3715 3.58341 10.86 3.12621 10.3375C2.56909 9.70077 2.14957 9.06186 1.86937 8.58149C1.72958 8.34184 1.62529 8.14306 1.55659 8.00565L1.5538 8.00008L1.55659 7.99451C1.62529 7.8571 1.72958 7.65832 1.86937 7.41867C2.14957 6.93831 2.56909 6.29939 3.12621 5.66266C4.24735 4.38132 5.8718 3.16675 7.99984 3.16675C9.56041 3.16675 10.8502 3.81992 11.8693 4.67361L12.5786 3.96431ZM10.3754 6.16746C9.82679 5.45733 8.9668 5 8 5C6.34315 5 5 6.34315 5 8C5 8.9668 5.45733 9.82679 6.16746 10.3754L6.88338 9.65951C6.35048 9.30024 6 8.69105 6 8C6 6.89543 6.89543 6 8 6C8.69105 6 9.30024 6.35048 9.65951 6.88338L10.3754 6.16746ZM9.99956 7.95755L10.8613 7.09578C10.9514 7.38112 11 7.68488 11 8C11 9.65685 9.65685 11 8 11C7.68488 11 7.38112 10.9514 7.09578 10.8613L7.95755 9.99956C7.97166 9.99985 7.98581 10 8 10C9.10457 10 10 9.10457 10 8C10 7.98581 9.99985 7.97166 9.99956 7.95755ZM5.65047 12.3066C6.35009 12.632 7.1332 12.8334 7.99984 12.8334C10.1279 12.8334 11.7524 11.6188 12.8736 10.3375C13.4308 9.70075 13.8504 9.06184 14.1306 8.58147C14.2704 8.34182 14.3747 8.14304 14.4434 8.00563L14.4462 8.00008L14.4434 7.99453C14.3747 7.85712 14.2704 7.65834 14.1306 7.41869C13.8504 6.93832 13.4308 6.29941 12.8736 5.66267C12.7847 5.56107 12.6927 5.45988 12.5974 5.35969L13.3047 4.65243C13.4166 4.76954 13.5238 4.88709 13.6262 5.00416C14.2357 5.70075 14.6912 6.39517 14.9944 6.9148C15.1462 7.17515 15.2607 7.39304 15.3378 7.5473C15.3764 7.62446 15.4057 7.68582 15.4257 7.72873C15.4358 7.75019 15.4435 7.76705 15.4488 7.77898L15.4552 7.79313L15.4571 7.79737L15.4577 7.79876L15.4579 7.79927C15.458 7.79948 15.4581 7.79966 15 8.00008C15.4581 8.2005 15.458 8.20069 15.4579 8.20089L15.4577 8.2014L15.4571 8.2028L15.4552 8.20703L15.4488 8.22119C15.4435 8.23311 15.4358 8.24997 15.4257 8.27143C15.4057 8.31434 15.3764 8.3757 15.3378 8.45287C15.2607 8.60712 15.1462 8.82501 14.9944 9.08536C14.6912 9.60499 14.2357 10.2994 13.6262 10.996C12.414 12.3813 10.5385 13.8334 7.99984 13.8334C6.82635 13.8334 5.79457 13.5231 4.90451 13.0526L5.65047 12.3066ZM15 8.00008L15.4581 8.2005C15.514 8.07274 15.514 7.92743 15.4581 7.79966L15 8.00008Z"
      fill="#E2E5E7"
    />
    <path
      d="M14.9993 1L0.666016 15.3333"
      stroke="#E2E5E7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
