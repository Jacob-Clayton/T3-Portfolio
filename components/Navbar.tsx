import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../src/styles';
import { RoughNotation } from 'react-rough-notation';
import { Jost } from 'next/font/google';

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jost',
})

type MobileNavProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNav({open, setOpen} : MobileNavProps) {
    useEffect(() => {
        const handleScroll = () => {
            setOpen(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [setOpen]);

    return (   
        <div className={`absolute z-50 top-0 right-0 h-screen 2xl:w-[15%] xl:w-[20%] lg:w-[25%] md:w-[35%] sm:w-[40%] w-[55%]  bg-slate-100 rounded-tl rounded-bl border-l-[1px] border-slate-300 transform ${open ? "right-0" : "transform translate-x-full"} transition-transform duration-200 ease-in-out filter `}>
        <div className={`${styles.descriptionText} ${styles.yPaddings} gap-8 z-100 flex flex-col items-center justify-between mt-[20%] sm:mt-[22%] md:mt-[20%] lg:mt-[30%]`}>
            <Link 
                className=" cursor-pointer" 
                href="/" 
                onClick={() => setOpen(false)}>
                About
            </Link>
            <Link 
                className={`cursor-pointer`} 
                href="/#Projects" 
                onClick={() => setOpen(false)}>
                Projects
            </Link>
            <Link 
                className="cursor-pointer" 
                href="/#Skills" 
                onClick={() => setOpen(false)}>
                Skills
            </Link>
            <Link 
                className="cursor-pointer" 
                href="/#Contact" 
                onClick={() => setOpen(false)}>
                <button className='border-slate-500 border py-2 px-7 items-start flex flex-row rounded'>
                Contact
                </button>
            </Link>
            <div className='w-full h-[1px] rounded-xl bg-slate-300 fixed bottom-[25%]'/>
            <div className="flex sm:gap-5 gap-4 fixed bottom-[17%] " id='socials'>
                <a href="mailto:bridgrxyz@gmail.com"><Image src='/email.svg' className='w-[21px] h-[21px] object-contain cursor-pointer' width={20} height={20} alt='email'/></a>
                <a href='https://www.linkedin.com/in/jebclayton/' ><Image src='/linkedin.svg' className='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='linkedin'/></a>
            </div>
        </div>  
        </div>
    );
    };

    const Navbar = () => {
        const [open, setOpen] = useState(false);

        const [isHovered, setIsHovered] = useState(false);
        
        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        return (
            <nav id="navbar" className={`${styles.xPaddings} fixed top-0 z-50 lg:h-[90px] md:h-[85px] sm:h-[80px] h-[70px] flex w-full bg-slate-100`}>
                <div className={`${styles.innerWidth} ${jost.variable} ${styles.navText} flex mx-auto justify-between`}>
                
                <div className='flex items-center'>
                    <RoughNotation 
                        type='underline' 
                        color='orange'
                        strokeWidth={2}
                        show={isHovered}
                    >
                        <Link 
                            className={`${styles.nameText} font-jost flex items-center tracking-wider`} 
                            href={'/'} 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave} 
                        >
                            Jacob Clayton
                        </Link>
                    </RoughNotation>
                </div>

                <div className='flex items-center'>
                    <div className='md:flex hidden gap-6'>
                    <ul className={`flex gap-6 items-center cursor-pointer`}>
                        <li className="hover-underline-animation-b duration-500">
                            <Link href="/#Home">About</Link>
                        </li>
                        <li className=" hover-underline-animation-b duration-500">
                            <Link href="/#Projects">Projects</Link>
                        </li>
                        <li className=" hover-underline-animation-b duration-500">
                            <Link href="/#Skills">Skills</Link>
                        </li>
                        <li className=" hover-underline-animation-b duration-500">
                            <Link href="/#Contact">Contact</Link>
                        </li>
                    </ul>
                    </div>                    

                    <MobileNav open={open} setOpen={setOpen} />
                    <div 
                    className="flex md:hidden group z-50 relative w-5 h-5 cursor-pointer flex-col justify-between" 
                    aria-label="menu"
                    onClick={() => {setOpen(!open)}}
                    >
                    {/* hamburger button */}
                    <span className={`h-[2px] w-full bg-primary-black rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-[9px] w-full" : ""}`} />
                    <span className={`h-[2px] w-full bg-primary-black rounded-lg cursor-pointer transition-all duration-1 ease-in-out ${open ? "hidden" : "w-full"}`} />
                    <span className={`h-[2px] w-full bg-primary-black rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-[9px] w-full" : ""}`} />
                    </div>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar