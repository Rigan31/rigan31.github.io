import React, { useState } from 'react'
import { AiFillTrademarkCircle } from "react-icons/ai";
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavSingleItem from './NavSingleItem';
import MenuItem from './MenuItem';
import {RxHamburgerMenu} from 'react-icons/rx';


const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const showMenu = () =>{
    setActive(!active);
  }

  return (
    <nav className="py-2 flex justify-between bg-white dark:bg-neutral-800 shadow-md">
            <ul className=' flex items-center px-5 lg:px-20'>
              <li><AiFillTrademarkCircle className=' text-2xl dark:text-white'/></li>
              <li><Link href="/"><h1 className=' text-2xl px-5 font-medium dark:text-white'>Rigan</h1></Link></li>
            </ul>
            
            <div>
              <RxHamburgerMenu onClick={showMenu} className= {active? 'hidden' : " xl:hidden text-2xl mr-5"}/>
            </div>
            <ul className=' hidden xl:flex items-center mr-5 px-5'>
              <NavSingleItem path='/' value='Home'/>
              <NavSingleItem path='/about' value='About'/>
              <NavSingleItem path='/research' value='Research' />
              <NavSingleItem path='/projects' value='Projects'/>
              <NavSingleItem path='/experience' value='Experience'/>
              <li className="px-4 py-1 text-lg font-semibold hover:text-teal-600 hover:scale-110 transition duration-400 delay-100 dark:text-white"><Link href='https://drive.google.com/file/d/1TQLilZ7FwZ9G-Qq8G4Jw6fKIsYWqxUvR/view?usp=sharing' target='_blank'>Resume</Link></li>
              <NavSingleItem path='/contact' value='Contact'/>
            </ul>

            <MenuItem showMenu={showMenu} active={active} />
          </nav>
  )
}

export default Navbar