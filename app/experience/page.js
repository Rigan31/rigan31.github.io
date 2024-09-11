import Head from "next/head"
import Link from "next/link"
import { FaCalendarMinus } from "react-icons/fa"
import { BsFillCheckCircleFill } from "react-icons/bs";

const experience = () => {
  return (
    <>
        <Head>
            <title>Experience - Rigan</title>
        </Head>
        <div className="w-full md:w-5/6 lg:w-1/2 mx-auto px-2 pt-10">
        
          <div>
            <h1 className="mb-2 md:mb-5 text-2xl font-bold text-center text-zinc-700 dark:text-white">Work Experience</h1>
            <ol class="relative border-l-2 sm:border-l-4 border-gray-700 mt-10 ml-2">                  
              <li class="mb-10 ml-1 md:ml-6">            
                  <span class="flex absolute -left-4 md:-left-5 justify-center items-center w-8 h-8 md:w-10 md:h-10 bg-black rounded-full ring-8 ring-white dark:ring-black dark:bg-white">
                      <FaCalendarMinus className="text-white dark:text-black text-lg md:text-xl" />
                  </span>

                  <div className=" ml-4 md:ml-10 py-8">
                    <h3 class="flex items-center mb-4 text-2xl font-bold text-gray-900 dark:text-white">Software Engineer <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                    <h4 className=" mb-1"><Link href="https://research.samsung.com/srbd" className="text-base font-medium text-blue-500 hover:underline"><u>Samsung Research Bangladesh</u></Link></h4>
                    <time class="block mb-2 text-base font-normal leading-none text-gray-600 dark:text-neutral-400">June 2023 - Present</time>

                    <h3 className=" text-xl font-semibold py-1 text-gray-800 dark:text-white">Role</h3>
                    <ul className="list-inside ml-6 mb-2">
                        <li className=" flex items-center py-1 px-2"> < BsFillCheckCircleFill className=" text-teal-600 dark:text-white text-base flex-shrink-0 mr-6"/> <p className=" text-base font-medium tracking-wider text-gray-700 dark:text-neutral-300">Member of Windows <Link href="https://www.samsung.com/us/support/owners/app/samsung-notes"><u className="text-blue-500">Samsung Notes</u></Link> team, contributing to the development of a powerful note-taking app for
                        windows.</p></li>
                        <li className=" flex items-center py-1 px-2"> < BsFillCheckCircleFill className=" text-teal-600 dark:text-white text-base flex-shrink-0 mr-6"/> <p className=" text-base font-medium tracking-wider text-gray-700 dark:text-neutral-300">Writing API, unit tests, code review, preparing design documents and performance improvement</p></li>
                        
                    </ul>

                    <h3 className=" text-xl font-semibold py-1 mb-2 text-gray-800 dark:text-white">Completion</h3>
                    <ul className="list-inside ml-6 mb-2">
                        <li className=" flex items-center py-1 px-2"> < BsFillCheckCircleFill className=" text-teal-600 dark:text-white text-base flex-shrink-0 mr-6"/> <p className=" text-base font-medium tracking-wider text-gray-700 dark:text-neutral-300">Utilized <Link href="https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct"><u className="text-blue-500">Qwen-2-VL-7B</u></Link> LLM model to convert handwritten images into structured text and table data, integrating results into Samsung Notes.</p></li>
                        <li className=" flex items-center py-1 px-2"> < BsFillCheckCircleFill className=" text-teal-600 dark:text-white text-base flex-shrink-0 mr-6"/> <p className=" text-base font-medium tracking-wider text-gray-700 dark:text-neutral-300">Reduced text input time in Samsung Notes by 10%, improving overall efficiency.</p></li>
                        <li className=" flex items-center py-1 px-2"> < BsFillCheckCircleFill className=" text-teal-600 dark:text-white text-base flex-shrink-0 mr-6"/> <p className=" text-base font-medium tracking-wider text-gray-700 dark:text-neutral-300">Developed an extension converter to update old file format to the latest version, offering a convenient solution for our longtime users.</p></li>
                        <li className=" flex items-center py-1 px-2"> < BsFillCheckCircleFill className=" text-teal-600 dark:text-white text-base flex-shrink-0 mr-6"/> <p className=" text-base font-medium tracking-wider text-gray-700 dark:text-neutral-300">Designed a user-friendly quick tool for easy access to essential and frequently used functions, ensuring a smooth experience for users.</p></li>
                    </ul>


                    <div className=" mt-2 mb-4">
                      <h3 className=" text-xl font-semibold py-2 mb-2 text-gray-800 dark:text-white">Technologies</h3>
                      <div className="flex flex-wrap gap-2 ml-6">
                          <div className=" rounded-full bg-blue-100 py-1 px-2 font-semibold text-base"><span className=" text-blue-700">.NET</span></div>
                          <div className=" rounded-full bg-green-100 py-1 px-2 font-semibold text-base"><span className=" text-green-700">C#</span></div>
                          <div className=" rounded-full bg-yellow-100 py-1 px-2 font-semibold text-base"><span className=" text-yellow-700">UWP</span></div>
                          <div className=" rounded-full bg-green-100 py-1 px-2 font-semibold text-base"><span className=" text-green-700">SQLite</span></div>
                      </div>

                    </div>
                    
                  </div>
              </li>
            </ol>
          </div>
        </div>
    </>
  )
}

export default experience