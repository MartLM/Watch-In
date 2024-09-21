import { SVGProps } from "react"


export const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="#fff"
      { ...props }
    >
      <path
        fill={props.fill}
        d="M10.4167 35.4166H39.5834M10.4167 24.9999H39.5834M10.4167 14.5833H27.0834"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
