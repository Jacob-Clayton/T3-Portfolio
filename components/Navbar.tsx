import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../src/styles';
import { RoughNotation } from 'react-rough-notation';
import { LIGHT_COLORS } from '../constants';
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
        <div className={`absolute z-50 top-0 right-0 h-screen 2xl:w-[15%] xl:w-[20%] lg:w-[25%] md:w-[35%] sm:w-[40%] w-[55%] bg-slate-100 rounded-tl rounded-bl border-l-[1px] border-slate-300 transform ${open ? "right-0" : "transform translate-x-full"} transition-transform duration-200 ease-in-out filter`}>
        <div className={`${styles.navText} ${styles.yPaddings} gap-8 z-100 flex flex-col items-center justify-between mt-[20%] sm:mt-[22%] md:mt-[20%] lg:mt-[30%]`}>
            <Link 
                className=" cursor-pointer" 
                href="/#About" 
                scroll={false}
                onClick={() => setOpen(false)}>
                About
            </Link>
            <Link 
                className={`cursor-pointer`} 
                href="/#Projects" 
                scroll={false}
                onClick={() => setOpen(false)}>
                Projects
            </Link>
            <Link 
                className="cursor-pointer" 
                href="/#Skills" 
                scroll={false}
                onClick={() => setOpen(false)}>
                Skills
            </Link>
            <Link 
                className="cursor-pointer" 
                href="/#Contact" 
                scroll={false}
                onClick={() => setOpen(false)}>
                Contact
            </Link>
            <div className='w-full h-[1px] rounded-xl bg-slate-300 fixed bottom-[25%]'/>
            <div className="flex sm:gap-5 gap-4 fixed bottom-[17%] items-top" id='socials'>
                <Link href="mailto:jacob@jacobclayton.dev"><Image src='/email.svg' className='w-[22px] h-[22px] object-contain cursor-pointer' width={20} height={20} alt='email'/></Link>
                <Link href="https://github.com/Jacob-Clayton"><Image src='/github.svg' className='w-[21px] h-[21px] object-contain cursor-pointer' width={20} height={20} alt='github'/></Link>
                <Link href='https://www.linkedin.com/in/jebclayton/' ><Image src='/linkedin.svg' className='w-[20px] h-[20px] object-contain cursor-pointer' width={20} height={20} alt='linkedin'/></Link>
            </div>
        </div>  
        </div>
    );
    }

    const Navbar = () => {
        const [open, setOpen] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
        const [underlineColor, setUnderlineColor] = useState(LIGHT_COLORS[0]);
        
        const handleMouseEnter = () => {
            setIsHovered(true);
            setUnderlineColor(LIGHT_COLORS[0]);
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
                        // My name's underline color always matches the highlight colour of the word 'developer'
                        color={underlineColor} 
                        strokeWidth={3}
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
                    <ul className={`md:flex hidden gap-8 items-center cursor-pointer`}>
                        <li className="hover-underline-animation-b duration-500">
                            <Link href="#About" scroll={false}>About</Link>
                        </li>
                        <li className=" hover-underline-animation-b duration-500">
                            <Link href="/#Projects" scroll={false}>Projects</Link>
                        </li>
                        <li className=" hover-underline-animation-b duration-500">
                            <Link href="/#Skills" scroll={false}>Skills</Link>
                        </li>
                        <li className=" hover-underline-animation-b duration-500">
                            <Link href="/#Contact" scroll={false}>Contact</Link>
                        </li>
                    </ul>

                    <MobileNav open={open} setOpen={setOpen} />
                    <button 
                        className="flex md:hidden group z-50 relative w-5 h-5 cursor-pointer flex-col justify-between focus:outline-none" 
                        aria-label="menu"
                        onClick={() => {setOpen(!open)}}
                    >
                        {/* hamburger button */}
                        <span className={`h-[2px] w-full bg-primary-black rounded cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-[9px] w-full" : ""}`} />
                        <span className={`h-[2px] w-full bg-primary-black rounded cursor-pointer transition-all duration-1 ease-in-out ${open ? "hidden" : "w-full"}`} />
                        <span className={`h-[2px] w-full bg-primary-black rounded cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-[9px] w-full" : ""}`} />
                    </button>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar