import React from 'react'
import NavSingleItem from './NavSingleItem'
import Link from 'next/link';
const MenuItem = ({showMenu, active}) => {
  return (
    <ul className={`ml-16 mt-5 ${active ? ' xl:hidden' : 'hidden '}`}> 
        <NavSingleItem showMenu={showMenu} path='/' value='Home'/>
        <NavSingleItem showMenu={showMenu} path='/about' value='About'/>
        <NavSingleItem showMenu={showMenu} path='/research' value='Research' />
        <NavSingleItem showMenu={showMenu} path='/projects' value='Projects'/>
        <NavSingleItem showMenu={showMenu} path='/experience' value='Experience'/>
        <li className="px-4 py-1 text-lg font-semibold hover:text-teal-600 hover:scale-110 transition duration-400 delay-100 dark:text-white"><u><Link onClick={showMenu} href='https://drive.google.com/file/d/1TQLilZ7FwZ9G-Qq8G4Jw6fKIsYWqxUvR/view?usp=sharing' target='_blank'>Resume</Link></u></li>
        <NavSingleItem showMenu={showMenu} path='/contact' value='Contact'/>
    </ul>
  )
}

export default MenuItem