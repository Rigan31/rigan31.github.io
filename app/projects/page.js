import Head from "next/head"
import { BsFillCheckCircleFill } from "react-icons/bs";
import {FaGithubAlt} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'

const projects = () => {
  return (
    <>
        <Head>
            <title>Projects - Rigan</title>
        </Head>
        <div className="w-full md:w-5/6 lg:w-3/5 mx-auto px-2 pt-10">

            <div>
            
            <h1 className="mb-2 md:mb-5 text-2xl font-bold text-center text-zinc-700 dark:text-white">Academic Projects</h1>

            
            <div className="py-1 px-0 md:px-5">
                <div className="py-4" >
                    <ul className="list-none m-0 p-0 space-y-10">
                        <li className="mb-5">
                            <div>
                                <div className="font-medium">
                                    <div className="bg-gray-100 dark:bg-zinc-900 order-1 space-y-2 rounded-3xl shadow-lg dark:shadow-zinc-900 dark:shadow-md transition-ease">
                                        <div className=" px-10 py-4">
                                            <p className="pb-2 tracking-wider font-bold text-gray-900 text-xl dark:text-white">University Management System</p>
                                            <h3 className=" text-lg font-semibold py-1 text-gray-800 dark:text-white ">Description</h3>
                                            <ul className="list-inside ml-6 mb-4">
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Built university management system using Cassandra database and Kubernetes </p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Microservice was used for each module</p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Created distributed database system for better reliability</p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">React was used for building interactive user interface</p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Implemented backend using Express.js</p></li>
                                            </ul>

                                            <div>
                                                <h3 className=" text-lg font-semibold py-1 text-gray-800 dark:text-white">Role</h3>
                                                <p className="ml-10 text-base font-medium tracking-wider text-gray-700 dark:text-neutral-400"> Backend, Frontend, Database creation</p>
                                            </div>

                                            <div className=" mt-3">
                                                <h3 className="text-lg font-semibold py-1 text-gray-800 dark:text-white">Technologies</h3>
                                                <div className="flex flex-wrap gap-2 ml-6">
                                                    <span className="rounded-full bg-blue-100 py-1 px-3 text-base text-blue-700">ReactJS</span>
                                                    <span className="rounded-full bg-green-100 py-1 px-3 text-base text-green-700">ExpressJS</span>
                                                    <span className="rounded-full bg-yellow-100 py-1 px-3 text-base text-yellow-700">Cassandra</span>
                                                    <span className="rounded-full bg-red-100 py-1 px-3 text-base text-red-700">Kubernetes</span>
                                                </div>

                                            </div>

                                            <div className="flex flex-row">
                                                <div className=" mt-1 flex mr-4" >
                                                    <FaGithubAlt className=" text-lg text-gray-700 dark:text-white mt-5 mr-2" />
                                                    <a href="https://github.com/Rigan31/UMS_Client" className=" text-base tracking-wider text-blue-400 mt-4 underline"> Github Repository</a>
                                                </div>
                                                <div className=" mt-1 flex" >
                                                    <BsYoutube className=" text-lg text-red-600 mt-5 mr-2" />
                                                    <a href="https://www.youtube.com/watch?v=L16Ah7ZGo9I&t=4s" className=" text-base tracking-wider text-red-300 mt-4 underline"> Demo</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>


                        {/* 2nd one */}
                        <li className="mb-5">
                            <div>
                                <div className="font-medium">
                                    <div className="bg-gray-100 dark:bg-zinc-900 order-1 space-y-2 rounded-3xl shadow-lg dark:shadow-zinc-900 dark:shadow-md transition-ease">
                                        <div className=" px-10 py-4">
                                            <p className="pb-2 tracking-wider font-bold text-gray-900 text-xl dark:text-white">TetrisMasterAI</p>
                                            <h3 className=" text-lg font-semibold py-1 text-gray-800 dark:text-white ">Description</h3>
                                            <ul className="list-inside ml-6 mb-4">
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Implemented Deep Reinforcement Learning using Q learning and fully connected layers to master Tetris.</p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Utilized replay memory, and custom environment for effective training.</p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Developed model using PyTorch library</p></li>
                                            </ul>

                                            <div>
                                                <h3 className=" text-lg font-semibold py-1 text-gray-800 dark:text-white">Role</h3>
                                                <p className="ml-10 text-base font-medium tracking-wider text-gray-700 dark:text-neutral-400"> Game Implementation, Model Creation</p>
                                            </div>

                                            <div className=" mt-3">
                                                <h3 className="text-lg font-semibold py-1 text-gray-800 dark:text-white">Technologies</h3>
                                                <div className="flex flex-wrap gap-2 ml-6">
                                                    <span className="rounded-full bg-green-100 py-1 px-3 text-base text-green-700">PyGame</span>
                                                    <span className="rounded-full bg-blue-100 py-1 px-3 text-base text-blue-700">PyTorch</span>
                                                    <span className="rounded-full bg-yellow-100 py-1 px-3 text-base text-yellow-700">Numpy</span>
                                                </div>

                                            </div>

                                            <div className="flex flex-row">
                                                <div className=" mt-1 flex mr-4" >
                                                    <FaGithubAlt className=" text-lg text-gray-700 dark:text-white mt-5 mr-2" />
                                                    <a href="https://github.com/Rigan31/Deep-Reinforcement-Learning-to-play-Tetris/tree/master" className=" text-base tracking-wider text-blue-400 mt-4 underline"> Github Repository</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* 3rd one */}
                        <li className="mb-5">
                            <div>
                                <div className="font-medium">
                                    <div className="bg-gray-100 dark:bg-zinc-900 order-1 space-y-2 rounded-3xl shadow-lg dark:shadow-zinc-900 dark:shadow-md transition-ease">
                                        <div className=" px-10 py-4">
                                            <p className="pb-2 tracking-wider font-bold text-gray-900 text-xl dark:text-white">TCP Congestion Control for Bandwidth Reservation Network</p>
                                            <h3 className=" text-lg font-semibold py-1 text-gray-800 dark:text-white ">Description</h3>
                                            <ul className="list-inside ml-6 mb-4">
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">TCP Congestion Control Algorithm: The algorithm is focused on optimizing network performance.</p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Dynamic Adjustments: It dynamically adjusts the congestion window and the slow start threshold.</p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Reserved Bandwidth: The adjustments are based on the reserved bandwidth, which helps reduce variations in window size.</p></li>
                                            </ul>

                                            <div>
                                                <h3 className=" text-lg font-semibold py-1 text-gray-800 dark:text-white">Role</h3>
                                                <p className="ml-10 text-base font-medium tracking-wider text-gray-700 dark:text-neutral-400">Development</p>
                                            </div>

                                            <div className=" mt-3">
                                                <h3 className="text-lg font-semibold py-1 text-gray-800 dark:text-white">Technologies</h3>
                                                <div className="flex flex-wrap gap-2 ml-6">
                                                    <span className="rounded-full bg-green-100 py-1 px-3 text-base text-green-700">NS3</span>
                                                    <span className="rounded-full bg-blue-100 py-1 px-3 text-base text-blue-700">Network</span>
                                                </div>

                                            </div>

                                            <div className="flex flex-row">
                                                <div className=" mt-1 flex mr-4" >
                                                    <FaGithubAlt className=" text-lg text-gray-700 dark:text-white mt-5 mr-2" />
                                                    <a href="https://github.com/Rigan31/tcp-congestion-control-ns3-project" className=" text-base tracking-wider text-blue-400 mt-4 underline"> Github Repository</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* 4th one */}

                        <li className="mb-5">
                            <div>
                                <div className="font-medium">
                                    <div className="bg-gray-100 dark:bg-zinc-900 order-1 space-y-2 rounded-3xl shadow-lg dark:shadow-zinc-900 dark:shadow-md transition-ease">
                                        <div className=" px-10 py-4">
                                            <p className="pb-2 tracking-wider font-bold text-gray-900 text-xl dark:text-white">Rubik’s Cube Solver</p>
                                            <h3 className=" text-lg font-semibold py-1 text-gray-800 dark:text-white ">Description</h3>
                                            <ul className="list-inside ml-6 mb-4">
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Designed and implemented a Rubik’s Cube Solver using Atmega32 and Arduino.</p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Implemented the algorithm to solve the Rubik’s Cube, including cube detection, orientation and solving steps</p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Detected all the color of each face using color sensor.</p></li>
                                            </ul>

                                            <div>
                                                <h3 className=" text-lg font-semibold py-1 text-gray-800 dark:text-white">Role</h3>
                                                <p className="ml-10 text-base font-medium tracking-wider text-gray-700 dark:text-neutral-400">Algorithm, Color Detection</p>
                                            </div>

                                            <div className=" mt-3">
                                                <h3 className="text-lg font-semibold py-1 text-gray-800 dark:text-white">Technologies</h3>
                                                <div className="flex flex-wrap gap-2 ml-6">
                                                    <span className="rounded-full bg-blue-100 py-1 px-3 text-base text-blue-700">ATmega32</span>
                                                    <span className="rounded-full bg-green-100 py-1 px-3 text-base text-green-700">Arduino</span>
                                                    <span className="rounded-full bg-yellow-100 py-1 px-3 text-base text-yellow-700">Servo Motor</span>
                                                    <span className="rounded-full bg-red-100 py-1 px-3 text-base text-red-700">Color Sensor</span>
                                                </div>

                                            </div>

                                            <div className="flex flex-row">
                                                <div className=" mt-1 flex" >
                                                    <BsYoutube className=" text-lg text-red-600 mt-5 mr-2" />
                                                    <a href="https://www.youtube.com/watch?v=Z9bUgIMS0hQ" className=" text-base tracking-wider text-red-300 mt-4 underline"> Demo</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* 5th one */}
                        <li className="mb-5">
                            <div>
                                <div className="font-medium">
                                    <div className="bg-gray-100 dark:bg-zinc-900 order-1 space-y-2 rounded-3xl shadow-lg dark:shadow-zinc-900 dark:shadow-md transition-ease">
                                        <div className=" px-10 py-4">
                                            <p className="pb-2 tracking-wider font-bold text-gray-900 text-xl dark:text-white">PicNote</p>
                                            <h3 className=" text-lg font-semibold py-1 text-gray-800 dark:text-white ">Description</h3>
                                            <ul className="list-inside ml-6 mb-4">
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Built a project called Picnote using Django, a photo-sharing platform similar to Instagram.</p></li>
                                                <li className="flex items-center py-1 px-2"> <BsFillCheckCircleFill className=" text-teal-600 dark:text-white flex-shrink-0 mr-6"/> <p className=" text-base tracking-wider text-gray-700 dark:text-neutral-400">Designed and implemented features such as user authentication, image upload, and commenting system.</p></li>
                                            </ul>

                                            <div>
                                                <h3 className=" text-lg font-semibold py-1 text-gray-800 dark:text-white">Role</h3>
                                                <p className="ml-10 text-base font-medium tracking-wider text-gray-700 dark:text-neutral-400">Full-Stack Development</p>
                                            </div>

                                            <div className=" mt-3">
                                                <h3 className="text-lg font-semibold py-1 text-gray-800 dark:text-white">Technologies</h3>
                                                <div className="flex flex-wrap gap-2 ml-6">
                                                    <span className="rounded-full bg-blue-100 py-1 px-3 text-base text-blue-700">Python</span>
                                                    <span className="rounded-full bg-green-100 py-1 px-3 text-base text-green-700">Django</span>
                                                    <span className="rounded-full bg-yellow-100 py-1 px-3 text-base text-yellow-700">MySql</span>
                                                </div>

                                            </div>

                                            <div className="flex flex-row">
                                                <div className=" mt-1 flex" >
                                                    <BsYoutube className=" text-lg text-red-600 mt-5 mr-2" />
                                                    <a href="https://www.youtube.com/watch?v=nUqN9mBKd5g&t=3s" className=" text-base tracking-wider text-red-300 mt-4 underline"> Demo</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>



                        
                        
                    </ul>
                </div>
            </div>


            </div>

        </div>
    </>
  )
}

export default projects