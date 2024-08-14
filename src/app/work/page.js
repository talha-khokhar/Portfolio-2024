import React from 'react'
import Image from 'next/image'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import { FaCode } from "react-icons/fa";
import Link from 'next/link';

const Work = () => {
    return (
        <>
            <div id='work' className="flex flex-col lg:items-center md:items-start justify-center xl:gap-[80px] lg:gap-[50px] md:gap-[30px] xs:gap-[20px] lg:my-[80px] md:my-[50px] xs:my-[30px] lg:mx-[90px] md:mx-[40px] xs:mx-[30px]">
                <div className="relative">
                    <h1 className='py-0 px-[30px] xl:text-[80px] lg:text-[60px] md:text-[50px] xs:text-[25px] md:p-0 font-[600px]'>My Latest Work</h1>
                    <Image className='absolute bottom-0 lg:right-0 md:right-[-20px] xs:right-[50px] xl:w-[150px] lg:w-[120px] md:w-[100px] xs:w-[60px] -z-10' src={theme_pattern} width={200} height={200} alt="Pattern" />
                </div>
                <div className="grid lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] xs:grid-cols-[1fr] lg:gap-[40px] md:gap-[30px] xs:gap-[20px] mb-[80px]">
                    {
                        mywork_data.map((mywork, index) => {
                            return (
                                <div key={index} className="flex flex-col items-center">
                                    <Image
                                        src={mywork.w_img}
                                        alt={mywork.w_name}
                                        width={420}
                                        height={280}
                                        className='box-border cursor-pointer border hover:border-[#ff00ff] rounded-[10px] hover:scale-105 transform transition-transform duration-400'
                                    />
                                    <div className='flex space-x-4'>
                                        <Link href={mywork.source_code_link}>
                                            <button className="flex items-center bg-custom-gradient gap-2 mt-4 px-4 py-2 text-white rounded">
                                                Source Code <FaCode />
                                            </button>
                                        </Link>
                                        <Link href={mywork.live_demo_link}>
                                            <button className="mt-4 px-4 py-2 bg-custom-gradient text-white rounded">
                                                Live
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Work
