import * as React from "react"
const Search = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M31.51 28.51h-1.58l-.56-.54c1.96-2.28 3.14-5.24 3.14-8.46 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.22 0 6.18-1.18 8.46-3.14l.54.56v1.58l10 9.98 2.98-2.98-9.98-10Zm-12 0c-4.98 0-9-4.02-9-9s4.02-9 9-9 9 4.02 9 9-4.02 9-9 9Z"
      opacity={0.2}
    />
  </svg>
)
export default Search
