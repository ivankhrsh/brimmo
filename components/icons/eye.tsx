import React from "react";

type EyeProps = React.SVGProps<SVGSVGElement>;

export default function Eye(props: EyeProps) {
  return (
    <svg
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.947904 6.53488C0.845764 6.37315 0.794694 6.29229 0.766105 6.16756C0.744632 6.07387 0.744632 5.92613 0.766105 5.83244C0.794694 5.70771 0.845764 5.62685 0.947904 5.46512C1.79196 4.12863 4.30436 0.75 8.13312 0.75C11.9619 0.75 14.4743 4.12863 15.3183 5.46512C15.4205 5.62685 15.4715 5.70771 15.5001 5.83244C15.5216 5.92613 15.5216 6.07387 15.5001 6.16756C15.4715 6.29229 15.4205 6.37315 15.3183 6.53488C14.4743 7.87137 11.9619 11.25 8.13312 11.25C4.30436 11.25 1.79196 7.87137 0.947904 6.53488Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.13312 8.25C9.37576 8.25 10.3831 7.24264 10.3831 6C10.3831 4.75736 9.37576 3.75 8.13312 3.75C6.89047 3.75 5.88312 4.75736 5.88312 6C5.88312 7.24264 6.89047 8.25 8.13312 8.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
