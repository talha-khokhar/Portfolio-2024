"use client"
import React from 'react'
import Image from 'next/image';
import theme_pattern from '../../assets/theme_pattern.svg';
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2937328d-a857-48e6-a2a2-34c71741dfe2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            // console.log(result);
            alert(result.message)
        }
    }
    return (
        <>
            {/* <div id='contact' className="flex flex-col lg:items-center md:items-start justify-center xl:gap-[80px] lg:gap-[50px] md:gap-[30px] xs:gap-[20px] lg:my-[80px] md:my-[50px] xs:my-[30px] lg:mx-[90px] md:mx-[40px] xs:mx-[30px]"> */}
            <div id='contact' className="flex flex-col lg:items-center md:items-start justify-center lg:my-[80px] md:my-[50px] xs:my-[30px] lg:mx-[90px] md:mx-[40px] xs:mx-[30px]">
                <div className=" relative">
                    <h1 className='py-0 px-[30px] xl:text-[80px] lg:text-[60px] md:text-[50px] xs:text-[30px] md:p-0 font-[600px]'>Contact Me</h1>
                    <Image className='absolute bottom-0 lg:right-0 md:right-[-20px] xs:right-[70px] xl:w-[150px] lg:w-[120px] md:w-[100px] xs:w-[60px] -z-10' src={theme_pattern} width={200} height={200} alt='about_image' />
                </div>
                <div className="flex lg:flex-row xs:flex-col xl:gap-[150px] lg:gap-[100px] md:gap-[80px]">
                    <div className="flex flex-col md:gap-[30px] xs:gap-[15px]">
                        <h1 className='xl:text-[80px] md:text-[50px] xs:text-[25px] font-[700px] text-gradient'>Lets talk</h1>
                        <p className='max-w-[550px] text-[#d8d8d8] md:text-[20px] xs:text-[15px] md:leading-[25px] xs:leading-[20px]'>I&apos;m Currently Available to talk to new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                        <div className="flex flex-col text-[#d8d8d8] md:text-[22px] xs:text-[12px] xl:gap-[30px] lg:gap-[20px]">
                            <div className="flex items-center gap-[20px]">
                                <IoIosMail/>
                                <p>talhakhokhar340@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <BiSolidPhoneCall />
                                <p>+92 3083041817</p>
                            </div>
                            <div className="flex items-center gap-[20px]">
                                <FaLocationDot />
                                <p>Gulistan-e-Johar, Karachi, Pakistan</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}  className="flex flex-col items-start md:gap-[30px] xs:gap-[20px]">
                        <label htmlFor="" className='md:text-[22px] xs:text-[18px] text-[#d8d8d8] font-[500px]'>Your Name</label>
                        <input type="text" name='name' placeholder='Enter your name' className='border-none xl:w-[700px] md:w-[500px] xs:w-[260px] xl:h-[78px] md:h-[60px] xs:h-[40px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]'/>
                        <label htmlFor="" className='md:text-[22px] xs:text-[18px] text-[#d8d8d8] font-[500px]'>Your Email</label>
                        <input type="text" name='email' placeholder='Enter your email' className='border-none w-[700px] xl:w-[700px] md:w-[500px] xs:w-[260px] xl:h-[78px] md:h-[60px] xs:h-[40px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]'/>
                        <label htmlFor="" className='md:text-[22px] xs:text-[18px] text-[#d8d8d8] font-[500px]'>Write Your Message Here</label>
                        <textarea name="message" id="" placeholder='Enter your message' rows={8} className='xl:w-[700px] md:w-[500px] xs:w-[260px] xl:h-[250px] md:h-[150px] xs:h-[100px] md:p-[25px] xs:p-[15px] border-none rounded-[4px] bg-[#32323c] text-[#A0A0A0] text-[20px]'/>
                        <button type='submit' className='border-none text-white rounded-[50px] md:text-[22px] xs:text-[16px] md:py-[20px] xs:py-[10px] md:px-[60px] xs:px-[40px] cursor-pointer bg-custom-gradient transition ease-in-out delay-150 hover:scale-110'>Submit Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;