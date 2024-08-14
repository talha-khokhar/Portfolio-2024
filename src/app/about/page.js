import React from 'react'
import Image from 'next/image'
import about_profile from '../../assets/about_profile.svg'
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
    return (
        <>
            <div id='about' className="flex flex-col lg:items-center md:items-start justify-center xl:gap-[80px] lg:gap-[50px] md:gap-[30px] xs:gap-[20px] lg:my-[80px] md:my-[50px] xs:my-[30px] lg:mx-[90px] md:mx-[40px] xs:mx-[30px]">
                <div className=" relative">
                    <h1 className='py-0 px-[30px] lg:text-[80px] md:text-[50px] xs:text-[30px] md:p-0 font-[600px]'>About me</h1>
                    <Image className='absolute bottom-0 lg:right-0 md:right-[-20px] xs:right-[90px] lg:w-[150px] md:w-[120px] xs:w-[60px] -z-10' src={theme_pattern} width={100} height={100} />
                </div>
                <div className="flex lg:flex-row md:flex-col xl:gap-[80px] lg:gap-[50px]">
                    <Image className='lg:block xs:hidden xl:w-[400px] lg:w-[320px]' src={about_profile} width={100} height={100} />
                    <div className="flex flex-col gap-[50px]">
                        <div className="flex flex-col xl:gap-[10px] lg:gap-[7px] md:gap-[5px] xs:gap-[3px] xl:text-[22px] md:text-[16px] xs:text-[12px] md:font-[500px] xs:font-[300px] md:leading-[28px] xs:leading-[18px]">
                            <p>I&apos;m a Experiance Web Developer with over a decade of professional experiance in the field. Throughtout my career, I&apos;ve had the privilege of collaboration with prestigious organizations, contributing to their success and growth.</p>
                            <p>My passion for front-end development is not only reflected in my extensive experience but also in the enthusiam and dedicated I bring to each project</p>
                        </div>

                        <div className="flex flex-col md:gap-[5px] xs:gap-[1px]">
                            <div className="flex items-center md:gap-[50px] xs:gap-[0px] transition-transform">
                                <p className='min-w-[150px] xl:text-[24px] md:text-[18px] xs:text-[12px] xl:font-[500px] lg:font-[350px] xs:font-[300px]'>HTML & CSS</p> <hr className='md:w-[70%] xs:w-[40%] lg:h-[8px] md:h-[6px] xs:h-[4px] rounded-full border-none outline-none bg-custom-gradient' />
                            </div>
                            <div className="flex items-center md:gap-[50px] xs:gap-[0px] transition-transform">
                                <p className='min-w-[150px] xl:text-[24px] md:text-[18px] xs:text-[12px] xl:font-[500px] lg:font-[350px] xs:font-[300px]'>Javascript</p> <hr className='md:w-[50%] xs:w-[25%] lg:h-[8px] md:h-[6px] xs:h-[4px] rounded-full border-none outline-none bg-custom-gradient' />
                            </div>
                            <div className="flex items-center md:gap-[50px] xs:gap-[0px] transition-transform">
                                <p className='min-w-[150px] xl:text-[24px] md:text-[18px] xs:text-[12px] xl:font-[500px] lg:font-[350px] xs:font-[300px]'>React JS</p> <hr className='md:w-[70%] xs:w-[35%] lg:h-[8px] md:h-[6px] xs:h-[4px] rounded-full border-none outline-none bg-custom-gradient' />
                            </div>
                            <div className="flex items-center md:gap-[50px] xs:gap-[0px] transition-transform">
                                <p className='min-w-[150px] xl:text-[24px] md:text-[18px] xs:text-[12px] xl:font-[500px] lg:font-[350px] xs:font-[300px]'>Tailwind</p> <hr className='md:w-[60%] xs:w-[40%] lg:h-[8px] md:h-[6px] xs:h-[4px] rounded-full border-none outline-none bg-custom-gradient' />
                            </div>
                            <div className="flex items-center md:gap-[50px] xs:gap-[0px] transition-transform">
                                <p className='min-w-[150px] xl:text-[24px] md:text-[18px] xs:text-[12px] xl:font-[500px] lg:font-[350px] xs:font-[300px]'>Next JS</p> <hr className='md:w-[50%] xs:w-[30%] lg:h-[8px] md:h-[6px] xs:h-[4px] rounded-full border-none outline-none bg-custom-gradient' />
                            </div>
                            <div className="flex items-center md:gap-[50px] xs:gap-[0px] transition-transform">
                                <p className='min-w-[150px] xl:text-[24px] md:text-[18px] xs:text-[12px] font-[500px] xs:font-[300px]'>Framer Motion</p> <hr className='w-[20%] lg:h-[8px] md:h-[6px] xs:h-[4px] rounded-full border-none outline-none bg-custom-gradient' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row xs:flex-col md:items-end lg:items-center lg:justify-around md:justify-between w-[100%] lg:my-[40px] md:my-[20px]">
                    <div className="flex flex-col items-center lg:gap-[10px] xs:gap-[5px]">
                        <h1 className='lg:text-[60px] md:text-[34px] font-[700px] text-gradient'>1+</h1>
                        <p className='lg:text-[22px] md:text-[16px] xs:text-[12px] font-[500px]'>Year of Experience</p>
                    </div>
                    {/* <hr /> */}
                    <div className="flex flex-col items-center lg:gap-[10px] md:gap-[2px]">
                        <h1 className='lg:text-[60px] md:text-[34px] font-[700px] text-gradient'>10+</h1>
                        <p className='lg:text-[22px] md:text-[16px] xs:text-[12px] font-[500px]'>Projects Completed</p>
                    </div>
                    {/* <hr /> */}
                    <div className="flex flex-col items-center lg:gap-[10px] md:gap-[2px]">
                        <h1 className='lg:text-[60px] md:text-[34px] font-[700px] text-gradient'>5+</h1>
                        <p className='lg:text-[22px] md:text-[16px] xs:text-[12px] font-[500px]'>Happy Clients</p>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default About