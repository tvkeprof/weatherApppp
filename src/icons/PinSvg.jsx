import * as React from "react"
const Pin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#D1D5DB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.81 25.577 4.683-8.362C26.556 11.745 22.603 5 16.333 5c-6.269 0-10.222 6.745-7.16 12.215l4.684 8.362c1.084 1.936 3.87 1.936 4.953 0Z"
    />
    <circle
      cx={16.333}
      cy={13}
      r={2}
      stroke="#D1D5DB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)
export default Pin