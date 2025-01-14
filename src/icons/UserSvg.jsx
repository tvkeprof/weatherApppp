import * as React from "react"
const User = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#D1D5DB"
      strokeWidth={2}
      d="M3 24.98c0-4.337 4.152-7.468 8.322-6.277l3.465.99a4.414 4.414 0 0 0 2.426 0l3.465-.99c4.17-1.191 8.322 1.94 8.322 6.278C29 27.2 27.2 29 24.98 29H7.02A4.02 4.02 0 0 1 3 24.98Z"
    />
    <circle cx={16} cy={9} r={6} stroke="#D1D5DB" strokeWidth={2} />
    <path
      fill="#D1D5DB"
      d="M15 9a1 1 0 1 0 2 0 1 1 0 1 1 2 0 3 3 0 1 1-6 0 1 1 0 1 1 2 0Z"
    />
  </svg>
)
export default User
