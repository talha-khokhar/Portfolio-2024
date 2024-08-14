import React from 'react';
import theme_pattern from '../../assets/theme_pattern.svg'
import Image from 'next/image';
import Services_Data from '../../servicesData';

const Services = () => {
  return (
    <div id='services' className='flex flex-col lg:items-center md:items-start justify-center xl:gap-[80px] lg:gap-[50px] md:gap-[30px] xs:gap-[20px] lg:my-[80px] md:my-[50px] xs:my-[30px] lg:mx-[90px] md:mx-[40px] xs:mx-[30px]'>
      <div className="relative">
        <h1 className='py-0 px-[30px] xl:text-[80px] lg:text-[60px] md:text-[50px] xs:text-[30px] md:p-0 font-[600px]'>Services</h1>
        <Image className='absolute bottom-0 lg:right-0 md:right-[-20px] xs:right-[110px] lg:w-[500] lg:h-[500] md:w-[120px] xs:w-[60px] -z-10 ' src={theme_pattern} width={500} height={500} alt="Pattern" />
      </div>
      <div className="grid md:grid-cols-[1fr_1fr] xS:grid-cols-[1fr] md:gap-[40px] xs:gap-[20px] lg:mb-[80px] md:mb-[60px] xs:mb-[40px]">
        {
          Services_Data.map((services, index) => (
            <div key={index} className='flex flex-col justify-center md:gap-[10px] xs:gap-[5px] md:p-[30px] xs:p-[20px] rounded-[10px] cursor-pointer border-2 border-white hover:border-[#ff00ff] hover:bg-gradient-to-r hover:from-[#3f0028] hover:via-[#582300] hover:scale-105 transform transition-transform duration-400'>
              <h3 className='md:text-[28px] xs:text-[18px] md:font-[600px] xs:font-[400px]'>{services.s_no}</h3>
              <h1 className='text-[38px] xs:text-[25px] text-gradient'>{services.s_name}</h1>
              <h2 className='lg:text-[18px] xs:text-[14px]'>{services.S_title_1}</h2>
              <h4 className='text-[#d4d4d4] lg:text-[15px] md:text-[10px] leading-[20px]'>{services.s_desc_1}</h4>
              <h2 className='lg:text-[18px] xs:text-[14px]'>{services.S_title_2}</h2>
              <h4 className='text-[#d4d4d4] lg:text-[15px] md:text-[10px] leading-[20px]'>{services.s_desc_2}</h4>
              <h2 className='lg:text-[18px] xs:text-[14px]'>{services.S_title_3}</h2>
              <h4 className='text-[#d4d4d4] lg:text-[15px] md:text-[10px] leading-[20px]'>{services.s_desc_3}</h4>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Services;
