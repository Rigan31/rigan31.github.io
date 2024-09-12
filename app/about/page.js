import Head from "next/head"
import Image from "next/image"
import riganImg from '../../public/cropped_rigan.jpg'
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {SiCodeforces} from 'react-icons/si'
import Link from "next/link"
import { BsMoonStarsFill } from "react-icons/bs";

export default function About() {
  return (
    <>
        <Head>
            <title>About - Rigan</title>
        </Head>
        <main className="flex flex-col lg:flex-row px-5 lg:px-20 pt-10 dark:bg-black">
            <div className="mr-auto basis-1 lg:basis-1/5 py-6">
                <div className=" rounded-lg shadow-xl bg-gray-100 dark:bg-zinc-900 pt-2">
                    <div className='relative mx-auto w-40 h-40 mt-5'>
                        <Image src={riganImg} alt="Picture of the author" className='rounded-full mx-auto'/>
                    </div>
                    <div className=' text-center p-2'>
                        <h2 className='text-3xl font-bold py-1 text-zinc-700 dark:text-white'>Who I am</h2>
                        <p className=" text-base py-8 font-normal text-gray-600 leading-loose dark:text-white">Hi, my name is <span className=" text-teal-700 font-bold text-xl">Md.Mahedi Hasan Rigan</span>. I am a Software Engineer at
                            <a href="https://research.samsung.com/srbd" className=" text-blue-600 font-medium">  Samsung Research Bangladesh </a>, currently residing in Dhaka, Bangladesh.
                        </p>

                    </div>

                    <div className=" text-2xl flex justify-center gap-5 py-2 mb-4">
                        <Link href="https://github.com/Rigan31"><FaGithub /></Link>
                        <Link href="https://www.linkedin.com/in/rigan31/"><FaLinkedin /></Link>
                        <Link href="https://x.com/riganyu"><FaTwitter /></Link>
                        <Link href="https://codeforces.com/profile/Ganyu31"><SiCodeforces /></Link>
                    </div>
                </div>
            </div>

            <div className="basis-1 lg:basis-4/6 ml-auto text-center">
                <h2 className='text-2xl font-bold mt-4 lg:py-1 text-zinc-700 dark:text-white'>About Me</h2>

                {/* <div className=" text-left py-10 px-0 lg:px-10" >
                    {about_history.map((item, index) => {
                        return (
                            <div key={index} className=" rounded-md shadow-lg dark:shadow-zinc-700 dark:shadow-md px-5 md:px-10 w-full mb-10">
                                <h3 className=" text-lg font-bold text-gray-700 dark:text-white py-2">{item.title}</h3>
                                <p className=" text-sm py-2 font-normal text-gray-600 dark:text-neutral-400 leading-loose">{item.description}</p>
                            </div>
                        )
                    })}
                </div> */}

                <div className="text-left py-6 px-0 lg:px-10" >
                    <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg px-5 py-4 md:px-8 w-full mb-10">
                        <p className=" text-base py-2 font-normal text-gray-600 dark:text-neutral-400 leading-loose">I am Rigan, a Software Engineer at <a href="https://research.samsung.com/" target="_blank"><u className="text-blue-500 font-bold text-md">Samsung Research</u></a>, Bangladesh. I completed my undergraduate studies from <a href="https://cse.buet.ac.bd/" target="_blank"><u className="text-blue-500 font-bold text-md">Department of CSE,BUET</u></a>. My research interests lie in the fields of <span className="font-bold text-green-800">Computer Vision</span>, <span className="font-bold text-green-800">Natural Language Processing (NLP)</span>, <span className="font-bold text-green-800">Computer Security and Privacy</span> as well as their intersections. My current career goal is to pursue a Ph.D. in these areas. I am passionate about solving real-world problems that make an impact and dedicate myself to finding solutions.</p>
                    </div>


                    <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg px-5 py-4 md:px-8 w-full mb-10">
                        <h3 className=" text-lg font-bold text-gray-700 dark:text-white mb-4">Research Interests</h3>
                        <ul className=" text-base font-semibold text-gray-600 dark:text-neutral-400 list-disc pl-5">
                            <li>Computer Vision</li>
                            <li>Natural Language Processing(NLP)</li>
                            <li>Computer Security, Privacy</li>
                            <li>Machine Learning</li>
                            <li>HCI</li>
                        </ul>
                    </div>


                    <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg px-5 py-4 md:px-8 w-full mb-10">
                        <h3 className=" text-lg font-bold text-gray-700 dark:text-white mb-4">Education</h3>
                        <div className=" text-base text-gray-600 dark:text-neutral-400 mb-3">
                            <div className="flex flex-row justify-between">
                                <span className="font-bold">Bangladesh University of Engineering and Technology (BUET)
                                </span>
                                <span className="text-sm">Dhaka, Bangladesh</span>
                            </div>

                            <div className="flex flex-row justify-between">
                                <i className="">Bachelor of Science in Computer Science and Engineering (CSE)
                                </i>
                                <span className="text-sm">March 2018 - May 2023</span>
                            </div>
                        </div>

                        <div className=" text-base text-gray-600 dark:text-neutral-400">
                            <div className="flex flex-row justify-between">
                                <span className="font-bold">Notre Dame Collge
                                </span>
                                <span className="text-sm">Dhaka, Bangladesh</span>
                            </div>

                            <div className="flex flex-row justify-between">
                                <i className="">Higher Secondary School Certificate in Science
                                </i>
                                <span className="text-sm">June 2015 - May 2017</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg shadow-lg px-5 py-4 md:px-8 w-full mb-10">
                        <h3 className=" text-lg font-bold text-gray-700 dark:text-white mb-4">Experience and Publications</h3>
                        <div className=" text-base font-semibold text-gray-600 dark:text-neutral-400">
                            <div className="mb-2">Explore My <a href="/research"><u className="font-semibold text-blue-500">Research Experience</u></a></div>

                            <div className="mb-2">View My <a href="/experience"><u className="font-semibold text-blue-500">Work Experience</u></a></div>

                            <div className="mb-2">Browse Through All My <a href="/projects"><u className="font-semibold text-blue-500">Academic Projects</u></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
};