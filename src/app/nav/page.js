'use client'
import Link from 'next/link';
import Image from 'next/image';
import underline from '../../assets/nav_underline.svg';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between xl:my-[20px] lg:my-[10px] xs:my-[15px] xl:mx-[170px] lg:mx-[80px] xs:mx-[50px]">
      <div className="text-white text-2xl font-bold">
        <Link href="/" className="text-white items-start">Logo</Link>
      </div>
      <ul className={`flex items-center list-none xl:gap-[60px] lg:gap-[40px] xs:gap-[40px] xl:text-[20px] xs:text-[15px] ${isOpen ? 'flex-col absolute top-0 right-0 bg-gray-800 h-screen w-[350px] p-10' : 'hidden lg:flex'}`}>
        <li className='flex flex-col gap-1 cursor-pointer list-none'>
          <Link href="#hero">
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </Link>
          {menu === "home" && <Image className='flex m-auto' src={underline} alt='underline' width={30} height={2} />}
        </li>
        <li className='flex flex-col gap-1 cursor-pointer list-none'>
          <Link href="#about">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </Link>
          {menu === "about" && <Image className='flex m-auto' src={underline} alt='underline' width={50} height={2} />}
        </li>
        <li className='flex flex-col gap-1 cursor-pointer list-none'>
          <Link href="#services">
            <p onClick={() => handleMenuClick("services")}>Services</p>
          </Link>
          {menu === "services" && <Image className='flex m-auto' src={underline} alt='underline' width={50} height={2} />}
        </li>
        <li className='flex flex-col gap-1 cursor-pointer list-none'>
          <Link href="#work">
            <p onClick={() => handleMenuClick("work")}>Work</p>
          </Link>
          {menu === "work" && <Image className='flex m-auto' src={underline} alt='underline' width={50} height={2} />}
        </li>
        <li className='flex flex-col gap-1 cursor-pointer list-none'>
          <Link href="#contact">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </Link>
          {menu === "contact" && <Image className='flex m-auto' src={underline} alt='underline' width={50} height={2} />}
        </li>
        {isOpen && (
          <li className='absolute top-5 right-5 cursor-pointer'>
            <FaTimes className="text-white text-2xl" onClick={toggleMenu} />
          </li>
        )}
      </ul>
      <div className="lg:hidden cursor-pointer">
        <FaBars className="text-white text-2xl" onClick={toggleMenu} />
      </div>
      <div className="lg:block md:hidden sm:hidden xs:hidden xl:py-5 lg:py-3 xl:px-10 lg:px-5 rounded-full bg-custom-gradient xl:text-[20px] lg:text-[15px] cursor-pointer transition ease-in-out delay-150 hover:scale-110">
        <Link href="#contact">
          <p>Connect with me</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
