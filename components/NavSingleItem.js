"use client";
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const NavSingleItem = (props) => {

  const pathname = usePathname();
  return (
    <li className={pathname  == props.path ? "active px-4 py-1 text-lg scale-100 font-bold text-teal-600" : "px-4 py-1 text-lg font-semibold hover:text-teal-600 hover:scale-110 transition duration-400 delay-100 dark:text-white"}><Link href={props.path}>{props.value}</Link></li>
  )
}

export default NavSingleItem