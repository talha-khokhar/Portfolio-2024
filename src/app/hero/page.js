// import Image from 'next/image';
// import React from 'react'

// const Hero = () => {
//   return (
//     <>
//         <div className="flex flex-col items-center gap-[35px]">
//             <Image className='mt-[150px]' src="https://images.pexels.com/photos/4100672/pexels-photo-4100672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='profile' width={300} height={300}/>
//             <h1 className='text-center w-[70%] text-[70px] font-semibold'> <span className='text-gradient'>I'm Talha Khokhar,</span> frontend developer based in Pakistan.</h1>
//             <p className='w-[50%] text-center text-[24px] leading-[40px]'>I'm a FrontEnd Developer from Karachi, Pakistan. With a Year of Experience in multiple companies</p>
//             <div className="flex items-center gap-[25px] text-[24px] font-[500px] mb-[50px]">
//                 <p className='py-[25px] px-[45px] cursor-pointer bg-custom-gradient rounded-full hover:border'>Connect with me</p>
//                 <p className='py-[25px] px-[75px] cursor-pointer border border-white-200 rounded-full hover:border-[#B923E1]'>My resume</p>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Hero;





import Image from 'next/image';
import profile from "../../assets/profile_img.svg";
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (  
    <>
        <div className="flex flex-col  items-center gap-[20px]">
            {/* <Image className='mt-[150px]' src="https://images.pexels.com/photos/4100672/pexels-photo-4100672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='profile' width={300} height={300}/> */}
            <Image className='lg:mt-[50px] md:mt-[120px] xs:mt-[100px] lg:w-[300px] md:w-[200px] xs:w-[150px]' src={profile} alt='profile' width={300} height={300} />
            <h1 className='text-center w-[70%] lg:text-[70px] font-semibold md:mt-[50px] md:w-[90%] md:text-[50px] xs:text-[30px]'> <span className='text-gradient'>I&apos;m Talha Khokhar,</span> frontend developer based in Pakistan.</h1>
            <p className='lg:w-[50%] md:w-[60%] xs:w-[70%] text-center lg:text-[24px] md:text-[18px] xl:leading-[40px] md:leading-[32px] xs:leading-[28px]'>I&apos;m a FrontEnd Developer from Karachi, Pakistan. With a Year of Experience in multiple companies</p>
            <div className="flex items-center lg:gap-[25px] md:gap-[15px] xs:gap-[5px] lg:text-[24px] md:text-[14px] lg:font-[500px] md:font-[300px] mb-[50px]">
                <Link href="#contact">
                    <p className='lg:py-[25px] md:py-[15px] xs:py-[10px] px-[45px] md:px-[30px] xs:px-[20px] cursor-pointer bg-custom-gradient rounded-full hover:border'>Connect with me</p>
                </Link>
                <p className='lg:py-[25px] md:py-[15px] xs:py-[10px] lg:px-[75px] md:px-[50px] xs:px-[35px] cursor-pointer border border-white-200 rounded-full hover:border-[#B923E1]'>My resume</p>
            </div>
        </div>
    </>
  )
}

export default Hero;
