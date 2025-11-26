import React from "react";

type SunProps = React.SVGProps<SVGSVGElement>;

export default function Sun(props: SunProps) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.08333 0.75V2.41667M9.08333 15.75V17.4167M2.41667 9.08333H0.75M4.3451 4.3451L3.16659 3.16659M13.8216 4.3451L15.0001 3.16659M4.3451 13.825L3.16659 15.0035M13.8216 13.825L15.0001 15.0035M17.4167 9.08333H15.75M13.25 9.08333C13.25 11.3845 11.3845 13.25 9.08333 13.25C6.78215 13.25 4.91667 11.3845 4.91667 9.08333C4.91667 6.78215 6.78215 4.91667 9.08333 4.91667C11.3845 4.91667 13.25 6.78215 13.25 9.08333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
