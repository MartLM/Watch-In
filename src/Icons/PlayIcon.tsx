import { SVGProps } from "react"
export default function PlayIcon( props: SVGProps<SVGSVGElement> ) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="#000"
      {...props}
    >
      <path d="M17.75 8.70098C18.75 9.27834 18.75 10.7217 17.75 11.2991L7.25 17.3612C6.25 17.9386 5 17.2169 5 16.0622L5 3.93785C5 2.78315 6.25 2.06146 7.25 2.63881L17.75 8.70098Z" fill={props.fill}/>
    </svg>

  )  
}