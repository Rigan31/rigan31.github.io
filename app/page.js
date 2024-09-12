"use client"

import Head from 'next/head'
import Image from 'next/image';
import riganImg from '../public/cropped_rigan.jpg';
import ParticlesBackground from "../components/ParticlesBackground"
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { BsMoonStarsFill } from "react-icons/bs";


export default function Home() {
  const { theme, setTheme } = useTheme();
  console.log(theme);     
  return (
    <>
    
      <Head>
        <title>Home - Rigan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className=''>
        <ParticlesBackground  theme={"light"}/>
        <section className=''>
          
          

          <div className=' relative mx-auto w-48 h-48 mt-28'>
            <Image src={riganImg} alt="Picture of the author" className='rounded-full mx-auto'/>
          </div>
          <div className=' text-center p-2'>
            <h2 className='font-sans text-xl md:text-3xl font-bold py-1 text-teal-600'>Hi, I'm Md.Mahedi Hasan Rigan</h2>
            <h3 className='text-lg md:text-2xl font-bold py-1 text-gray-800 dark:text-white'>Machine Learning Researcher</h3>
            <h5 className='text-lg md:text-2xl font-medium py-2 text-gray-700 dark:text-white'>Computer Vision |  NLP | Computer Security</h5>

          </div>

          <div className=' text-center p-4 mt-5'>
            <Link href="/about"><button className=' border-black border text-xl text-extrabold py-4 px-10 rounded-md dark:text-white dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition ease-in-out delay-20 hover:-translate-y-1 hover:scale-110 duration-20'>Know more about me</button></Link>
          </div>

        </section>
        
        {/* <div className="bg-yellow-200 dark:bg-black fixed bottom-2 right-2 text-base p-2">
          <div onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark') } className=" bg-black dark:bg-white rounded-lg shadow-lg p-2 hover:text-lg transition duration-50 delay-50 cursor-pointer">
              <BsMoonStarsFill className=" text-white dark:text-black"/>
          </div>
        </div> */}
      </main>
    </>
  );
}
