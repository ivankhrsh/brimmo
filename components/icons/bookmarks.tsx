import React from "react";

type BookmarksProps = React.SVGProps<SVGSVGElement>;

export default function Bookmarks(props: BookmarksProps) {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.91667 7L6.58333 8.66667L10.3333 4.91667M14.0833 15.75V4.75C14.0833 3.34987 14.0833 2.6498 13.8108 2.11502C13.5712 1.64462 13.1887 1.26217 12.7183 1.02248C12.1835 0.75 11.4835 0.75 10.0833 0.75H4.75C3.34987 0.75 2.6498 0.75 2.11502 1.02248C1.64462 1.26217 1.26217 1.64462 1.02248 2.11502C0.75 2.6498 0.75 3.34987 0.75 4.75V15.75L3.04167 14.0833L5.125 15.75L7.41667 14.0833L9.70833 15.75L11.7917 14.0833L14.0833 15.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
