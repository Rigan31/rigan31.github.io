import Head from "next/head"
import dehydrationImg from '../../public/dehydration.png'
import botdetectionImg from '../../public/botdetection.png'
import slpImg from '../../public/slp_all.png'
import Image from "next/image"

const research = () => {
  return (
    <>
        <Head>
            <title>Research - Rigan</title>
        </Head>
        <div className="w-full lg:w-4/6 mx-auto px-2 pt-10">

            <div>
            
            <h1 className="mb-2 md:mb-5 text-2xl font-bold text-center text-zinc-700 dark:text-white">Research Experience</h1>

            
            <div className="py-1 px-0 md:px-5">
                <div className="py-4" >
                    <ul className="list-none m-0 p-0 space-y-10">
                        <li className="mb-5 bg-gray-100 dark:bg-zinc-900 order-1 space-y-2 rounded-3xl shadow-lg dark:shadow-zinc-900 dark:shadow-md transition-ease p-3">
                            <div className="flex flex-col lg:flex-row items-center">
                                <div className="w-full lg:w-1/3">
                                <Image src={dehydrationImg} className="w-full h-auto rounded-3xl border-2 border-black dark:border-white"/>
                                </div>
                                
                                <div className="w-full lg:w-2/3 mt-5 lg:mt-0 lg:ml-4">
                                    <div className="text-lg font-semibold text-green-700 mb-1">
                                        Vein-Based Imaging Approach for Real-Time Dehydration Detection
                                    </div>
                                    <div className="italic text-blue-700 text-base mb-3">
                                        Machine learning, Image Processing, Computer Vision, Health Data
                                    </div>
                                    <div>
                                    We designed an innovative dehydration detection system that leverages a multi-modal Siamese network to analyze hand vein images captured by smartphone IR cameras. The system includes two distinct ROI extraction methods: a unique geometry-based algorithm and the YoloV8 segmentation model. Additionally, we implemented an image processing step for vein segmentation within the identified ROI and developed a novel process for selecting the optimal frame from hand-vein videos, ensuring accurate and reliable results.
                                    </div>

                                    <div className="mt-3">
                                        <span className="font-bold text-base" >Collaborators</span>
                                        <ul className=" text-base list-disc pl-10">
                                            <li><span className="text-blue-500"><a href="https://towhid17.github.io/" target="_blank"><u>Towhid Muhammad</u></a></span></li>
                                            <li><span className="text-blue-500"><a href="https://sizvy.github.io/" target="_blank"><u>Md. Olid Hasan Bhuiyan</u></a></span>(Currently in University of California, Riverside)</li>
                                        </ul>

                                    </div>

                                    <div className="mt-3">
                                        <span className="font-bold text-base">Supervisor: </span>
                                        <span className="text-blue-500 font-bold"><a href="https://sites.google.com/site/tanzimahashem/" target="_blank"><u>Dr. Tanzima Hashem</u></a></span>
                                    </div>
                                </div>

                            </div>
                        </li>


                        <li className="mb-5 bg-gray-100 dark:bg-zinc-900 order-1 space-y-2 rounded-3xl shadow-lg dark:shadow-zinc-900 dark:shadow-md transition-ease p-3">
                            <div className="flex flex-col lg:flex-row items-center">
                                <div className="w-full lg:w-1/3">
                                <Image src={botdetectionImg} className="w-full h-auto rounded-3xl border-2 border-black dark:border-white"/>
                                </div>
                                
                                <div className="w-full lg:w-2/3 mt-5 lg:mt-0 lg:ml-4">
                                    <div className="text-lg font-semibold text-green-700 mb-1">
                                        Detecting OpenWPM based web bots through clustering browsing behavior
                                    </div>
                                    <div className="italic text-blue-700 text-base mb-3">
                                        Computer Security, Machine Learning
                                    </div>
                                    <div>
                                    We developed a novel technique to detect advanced web bots, specifically those driven by OpenWPM, using behavioral analysis. By collecting client-side data such as mouse movements, keystrokes, and scrolling patterns, we clustered this data using k-means and trained three machine learning models—Random Forest, Linear Regression, and Support Vector Machine—on each cluster. These models are then used to classify human and bot behaviors in real-time. Our method achieves a 99.1% accuracy rate while minimizing false negatives, making it effective for identifying sophisticated bots that mimic human browsing behavior
                                    </div>

                                    <div className="mt-3">
                                        <span className="font-bold text-base" >Collaborators</span>
                                        <ul className=" text-base list-disc pl-10">
                                            <li>Shakil Ahmed</li>
                                        </ul>

                                    </div>

                                    <div className="mt-3">
                                        <span className="font-bold text-base">Supervisor: </span>
                                        <span className="text-blue-500 font-bold"><a href="https://mshohrabhossain.buet.ac.bd/" target="_blank"><u>Dr. Md. Shohrab Hossain</u></a></span>
                                    </div>
                                </div>

                            </div>
                        </li>


                        <li className="mb-5 bg-gray-100 dark:bg-zinc-900 order-1 space-y-2 rounded-3xl shadow-lg dark:shadow-zinc-900 dark:shadow-md transition-ease p-3">
                            <div className="flex flex-col lg:flex-row items-center">
                                <div className="w-full lg:w-1/3">
                                <Image src={slpImg} className="w-full h-auto rounded-3xl border-2 border-black dark:border-white"/>
                                </div>
                                
                                <div className="w-full lg:w-2/3 mt-5 lg:mt-0 lg:ml-4">
                                    <div className="text-lg font-semibold text-green-700 mb-1">
                                    Enhancing Bangla Sign Language Production: A New Dataset and Model
                                    </div>
                                    <div className="italic text-blue-700 text-base mb-3">
                                    Natural Language Processing, Computer Vision
                                    </div>
                                    <div>
                                    For the Bangla Sign Language Production project, we created a new sentence-level dataset. We are now developing a progressive transformer model to improve the accuracy and fluency of Bangla sign language by converting skeleton key points into meaningful sequences.
                                    </div>

                                    <div className="mt-3">
                                        <span className="font-bold text-base" >Collaborators</span>
                                        <ul className=" text-base list-disc pl-10">
                                            <li><span className="text-blue-500"><a href="https://towhid17.github.io/" target="_blank"><u>Towhid Muhammad</u></a></span></li>
                                            <li>Tawsif Shahriar Dipto</li>
                                            <li>Shakil Ahmed</li>
                                        </ul>

                                    </div>

                                    <div className="mt-3">
                                        <span className="font-bold text-base">Supervisor: </span>
                                        <span className="text-blue-500 font-bold"><a href="https://sites.google.com/site/abdullahadnan" target="_blank"><u>Dr. Muhammad Abdullah Adnan</u></a></span>
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

export default research