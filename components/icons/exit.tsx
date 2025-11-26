import React from "react";

type ExitProps = React.SVGProps<SVGSVGElement>;

export default function Exit(props: ExitProps) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.5833 12.4167L15.75 8.25M15.75 8.25L11.5833 4.08333M15.75 8.25H5.75M5.75 0.75H4.75C3.34987 0.75 2.6498 0.75 2.11502 1.02248C1.64462 1.26217 1.26217 1.64462 1.02248 2.11502C0.75 2.6498 0.75 3.34987 0.75 4.75V11.75C0.75 13.1501 0.75 13.8502 1.02248 14.385C1.26217 14.8554 1.64462 15.2378 2.11502 15.4775C2.6498 15.75 3.34987 15.75 4.75 15.75H5.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
