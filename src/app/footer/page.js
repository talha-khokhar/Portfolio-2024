import React from 'react'
import { AiOutlineUser } from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div id='footer' className="flex flex-col gap-[30px] lg:my-[50px] md:my-[30px] xs:my-[15px] lg:mx-[100px] md:mx-[100px] xs:mx-[30px]">
                <div className="flex lg:flex-row xs:flex-col justify-between">
                    <div className="py-5">
                        <h1 className='text-2xl font-bold'>LOGO</h1>
                        <p className='max-w-[400px] xl:text-[20px] lg:text-[15px]'>I&apos;&apos;m a FrontEnd Developer from Karachi, Pakistan. With a Year of Experience in multiple companies</p>
                    </div>
                    <div className="flex md:flex-row xs:flex-col md:items-center xs:items-start gap-[35px]">
                        <div className="flex bg-[#32323B] xl:gap-[30px] lg:gap-[20px] xs:gap-[10px] xl:py-[20px] lg:py-[15px] md:py-[12px] xs:py-[8px] xl:px-[30px] lg:px-[25px] md:px-[20px] xs:px-[14px] rounded-[50px] pr-[80px] hover:border hover:border-white">
                            <AiOutlineUser />
                            <input type="email" placeholder='Enter your email' className='outline-none border-none bg-transparent text-[a0a0a0] xl:text-[18px] lg:text-[14px]'/>
                        </div>
                        <p className='xl:text-[20px] md:text-[15px] xl:py-[22px] lg:py-[14px] md:py-[12px] xs:py-[10px] xl:px-[50px] lg:px-[30px] md:px-[25px] xs:px-[20px] rounded-[50px] cursor-pointer bg-custom-gradient hover:border'>Subscribe</p>
                    </div>
                </div>
                <hr />
                <div className="flex lg:flex-row xs:flex-col justify-between p-1 xl:text-[18px] lg:text-[14px] xs:text-[12px]">
                    <p>@ 2024 Talha Khokhar. All rights reserved.</p>
                    <p>Connect with Me</p>
                </div>
            </div>
        </>
    )
}

export default Footer;