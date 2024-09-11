"use client";
import Head from "next/head"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {FaTelegramPlane} from 'react-icons/fa';



const initValues = {
    user_name: '',
    user_email: '',
    message: '',
}

const initState = {values: initValues}

const contact = () => {
    const [state, setState] = useState(initState);
    const {values} = state;

    const handleChange = (e) => setState((prev)=> ({
        ...prev,
        values :{
            ...prev.values,
            [e.target.name]: e.target.value,
        },
    }))



    const form = useRef();

    const sendEmail = (e) => {
        document.getElementById("submitBtn").innerHTML = "Sending...";
        document.getElementById("submitBtn").classList.remove("bg-teal-600");
        document.getElementById("submitBtn").classList.add("bg-blue-600");
        e.preventDefault();

        console.log("hello value: ", e)

        emailjs.sendForm('service_vu54c0b', 'template_lrt8j9g', form.current, 'pf3e9S2Z3U2VoTi5-')
        .then((result) => {
            document.getElementById("toastID").classList.remove("hidden");
            document.getElementById("submitBtn").innerHTML = "Send";
            document.getElementById("submitBtn").classList.remove("bg-blue-600");
            document.getElementById("submitBtn").classList.add("bg-teal-600");
            setState(initState);
            console.log(result.text);
            
        }, (error) => {
            setState(initState);
            console.log(error.text);
        });

        setTimeout(function () {
            document.getElementById("toastID").classList.add("hidden");
        }, 3000);
    };
 
  return (
    <>
        <Head>
            <title>Contact - Rigan</title>
        </Head>

        

        <div className="flex justify-center pt-2">
            <div className="w-full lg:w-4/6 xl:w-5/12">
                
                <h1 className="text-xl md:text-2xl font-bold text-center text-zinc-700 mt-7 dark:text-white">Contact Me</h1>
                <div>
                    <form ref={form} onSubmit={sendEmail} className="mt-14 px-6">
                        <div className="justify-center mt-2 mb-24">
                            <div className="flex flex-col md:flex-row gap-5 md:gap-20">
                                <div className="w-full md:w-1/2">
                                    <div className="mb-2">
                                        <label className="text-base text-black-600">Name</label>
                                    </div>
                                    
                                    <input type="text" required name="user_name" value = {values.user_name} onChange={handleChange} placeholder="what should I call you?" className="w-full h-10 text-sm md:text-lg text-black rounded-lg shadow-lg p-4 bg-gray-100 border-2"/>
                                </div>

                                <div className="w-full md:w-1/2">
                                    <div className="mb-2">
                                        <label className="text-base text-black-600">Email</label>
                                    </div>
                                    <input type="email" required name="user_email" value = {values.user_email} onChange={handleChange} placeholder="Enter your mail" className="w-full h-10 text-sm md:text-lg text-black rounded-lg shadow-lg p-4 bg-gray-100 border-2"/>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="py-4">
                                    <div className="mb-2">
                                        <label className="text-base text-black-600">Message</label>
                                    </div>
                                    <textarea name="message" required value = {values.message} onChange={handleChange} placeholder="What you want to say" className="w-full h-60 text-sm md:text-lg text-black rounded-lg shadow-lg p-4 bg-gray-100 border-2"/>
                                </div>

                                <div className=" flex justify-center ">
                                    <div id="toastID" className=" hidden flex bg-teal-700 dark:bg-white items-center w-full max-w-md p-1 mb-4 space-x-4 text-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                                        <FaTelegramPlane className="text-lg text-white dark:text-teal-700" /> 
                                        <div className="pl-4 text-lg font-bold dark:text-teal-700">Message sent successfully.</div>
                                    </div>
                                </div>
                                
                                <div className=" flex justify-center">
                                    <button type="submit" id="submitBtn" disabled={!values.user_email || !values.user_name || !values.message }  className=" disabled:bg-gray-200 py-1 px-10 bg-teal-600 text-lg disabled:text-gray-500 rounded-lg shadow-lg text-white font-bold"> Send</button>
                                </div>
                                </div>

                            
                        </div>
                    </form>

                    
                </div>

            </div>


        </div>
    </>
  )
}

export default contact