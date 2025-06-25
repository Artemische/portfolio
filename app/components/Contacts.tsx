'use client'

import Link from "next/link";
import { useContactContext } from "../context/ContactContext";

export default function Contacts() {
  const {highlight} = useContactContext();
  const baseClassName = "p-5 fixed right-[15px] top-[5px] md:right-[50px] md:top-[50px] -translate-y-1 flex gap-4 text-white"
  const highlightClass = "shadow-[0_0_60px_rgba(0,255,255,0.5)] p-1 rounded-full transition-shadow duration-700 ease-in-out"
  const className = `${baseClassName}${highlight ? ' ' + highlightClass : ''}`



  return (
    <div className={className}>
      <Link href="mailto:lis.fox690@gmail.com" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-9 h-9 lg:w-12 lg:h-12 -mt-0.5 hover:cursor-pointer hover:text-teal-400 transition">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </Link>
      <Link href="https://t.me/DurianOG" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 lg:w-11 lg:h-11  hover:cursor-pointer hover:text-teal-400 transition">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.3 7.94-1.6 7.55c-.12.52-.42.65-.85.4l-2.36-1.74-1.14 1.1c-.13.13-.24.24-.49.24l.18-2.53 4.6-4.16c.2-.18-.04-.28-.3-.1l-5.67 3.57-2.44-.76c-.53-.17-.54-.52.11-.77l9.52-3.67c.44-.16.82.1.68.76z"/>
        </svg>
      </Link>
      <Link href="https://www.linkedin.com/in/artsem-lisouski-ab987a210/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-8 h-8 lg:w-11 lg:h-11  hover:cursor-pointer hover:text-teal-400 transition">
          <rect x="2" y="2" width="20" height="20" rx="3" />
          <path d="M7 9v6M7 7h.01M11 9v6m0-3.5c0-.8.5-1.5 1.5-1.5S14 10.7 14 11.5V15" />
        </svg>
      </Link>
      <Link href="https://github.com/Artemische" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 lg:w-11 lg:h-11  hover:cursor-pointer hover:text-teal-400 transition">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.084-.729.084-.729 1.204.085 1.84 1.235 1.84 1.235 1.07 1.835 2.807 1.305 3.492.997.11-.776.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </Link>
    </div>
  )
}