import React from "react";

type ExchangeProps = React.SVGProps<SVGSVGElement>;

export default function Exchange(props: ExchangeProps) {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.08333 0.75V14.0833M4.08333 14.0833L0.75 10.75M4.08333 14.0833L7.41667 10.75M12.4167 14.0833V0.75M12.4167 0.75L9.08333 4.08333M12.4167 0.75L15.75 4.08333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
