import React from 'react'
import NavSingleItem from './NavSingleItem'
import Link from 'next/link';
import {RiCloseCircleLine} from 'react-icons/ri'
const MenuItem = ({showMenu, active}) => {
  return (
    <ul className={active ? ' xl:hidden' : 'hidden '}>
        <RiCloseCircleLine onClick={showMenu}/>
        <NavSingleItem path='/' value='Home'/>
        <NavSingleItem path='/about' value='About'/>
        <NavSingleItem path='/research' value='Research' />
        <NavSingleItem path='/projects' value='Projects'/>
        <NavSingleItem path='/experience' value='Experience'/>
        <li className="px-4 py-1 text-lg font-semibold hover:text-teal-600 hover:scale-110 transition duration-400 delay-100 dark:text-white"><Link href='https://drive.google.com/file/d/1TQLilZ7FwZ9G-Qq8G4Jw6fKIsYWqxUvR/view?usp=sharing' target='_blank'>Resume</Link></li>
        <NavSingleItem path='/contact' value='Contact'/>
    </ul>
  )
}

export default MenuItem