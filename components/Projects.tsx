import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles';

const Projects = () => {

    return (
        <section id="Projects" className={`${styles.paddings}`}>
            <div className={`${styles.innerWidth} ${styles.descriptionText} mx-auto`}>
                <p className={`${styles.headerText}`}>Projects</p>
                <p className={` mt-2`}>Some of the projects I've been working on:</p>
                <div className='grid grid-cols-3 gap-10 gap-y-16 mt-10'>

                    <div className='flex flex-col gap-2'>
                        <Image src={'/safariportfolio.png'} className='shadow-lg' width={500} height={500} alt='project preview image'/>
                        <p className={`${styles.subheaderText} mt-2`}>Next.js & Typescript Website</p>
                        <p>Portfolio website 2023</p>
                        <p className='text-sm font-bold'>Typescript, Next, Node, Express, APIs, Tailwind, HTML.</p>
                        <div className={`${styles.xPaddings} flex flex-row justify-center sm:gap-6 gap-4 mt-4`}>
                            <button className="bg-primary-black border border-primary-black py-2 px-6 items-center flex flex-row rounded">
                            <Link className={`${styles.descriptionText} text-slate-200 font-light`} href="https://jacobclayton.dev">
                                View Demo</Link>
                            </button>
                            <button className='border border-primary-black py-2 px-6 items-center flex flex-row rounded'>
                            <Link className={`${styles.descriptionText} font-light`} href="https://github.com/Jacob-Clayton/T3-Portfolio">
                                View Code</Link>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <Image src={'/safaribridgr.png'} className='shadow-lg' width={500} height={500} alt='project preview image'/>
                        <p className={`${styles.subheaderText} mt-2`}>Next.js Full Stack Website</p>
                        <p>Full Stack company website</p>
                        <p className='text-sm font-bold'>Javascript, Next, Node, Express, APIs, Tailwind, HTML.</p>
                        <div className={`${styles.xPaddings} flex flex-row justify-center sm:gap-6 gap-4 mt-4`}>
                            <button className="bg-primary-black border border-primary-black py-2 px-6 items-center flex flex-row rounded">
                            <Link className={`${styles.descriptionText} text-slate-200 font-light`} href="https://bridgr.xyz">
                                View Demo</Link>
                            </button>
                            <button className='border border-primary-black py-2 px-6 items-center flex flex-row rounded'>
                            <Link className={`${styles.descriptionText} font-light`} href="https://github.com/Jacob-Clayton/BRIDGR-Website">
                                View Code</Link>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <Image src={'/safarieth.png'} className='shadow-lg' width={500} height={500} alt='project preview image'/>
                        <p className={`${styles.subheaderText} mt-2`}>Ethereum Wallet Analytics App</p>
                        <p>An Ethereum analytics app built with python</p>
                        <p className='text-sm font-bold'>Python (Numpy, Pandas, Matplotlib), Web3 APIs.</p>
                        <div className={`${styles.xPaddings} flex flex-row justify-center sm:gap-6 gap-4 mt-4`}>
                            <button className="bg-primary-black border border-primary-black py-2 px-6 items-center flex flex-row rounded">
                            <Link className={`${styles.descriptionText} text-slate-200 font-light`} href="https://jacob-clayton-etherscan-api-app-sblsnb.streamlit.app/">
                                View Demo</Link>
                            </button>
                            <button className='border border-primary-black py-2 px-6 items-center flex flex-row rounded'>
                            <Link className={`${styles.descriptionText} font-light`} href="https://github.com/Jacob-Clayton/Ethereum-Analysis/blob/master/app.py">
                                View Code</Link>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <Image src={'/safarioldportfolio.png'} className='shadow-xl' width={500} height={500} alt='project preview image'/>
                        <p className={`${styles.subheaderText} mt-2`}>React.js Website</p>
                        <p>My 2022 portfolio. Take a trip into my past with this Sanity CMS integrated portfolio I built with react.</p>
                        <p className='text-sm font-bold'>Javascript, React, Framer Motion, CSS, SCSS, HTML, Sanity CMS.</p>
                        <div className={`${styles.xPaddings} flex flex-row justify-center sm:gap-6 gap-4 mt-4`}>
                            <button className="bg-primary-black border border-primary-black py-2 px-6 items-center flex flex-row rounded">
                            <Link className={`${styles.descriptionText} text-slate-200 font-light`} href="https://jacobclayton.dev">
                                View Demo</Link>
                            </button>
                            <button className='border border-primary-black py-2 px-6 items-center flex flex-row rounded'>
                            <Link className={`${styles.descriptionText} font-light`} href="https://github.com/Jacob-Clayton/Portfolio">
                                View Code</Link>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <Image src={'/safaribridgr.png'} className='shadow-xl' width={500} height={500} alt='project preview image'/>
                        <p className={`${styles.subheaderText} mt-2`}>Next.js & Javascript Website</p>
                        <p>Full Stack company website</p>
                        <p className='text-sm font-bold'>Javascript, Next, Node, Express, APIs, Tailwind, HTML.</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <Image src={'/safaribridgr.png'} className='shadow-xl' width={500} height={500} alt='project preview image'/>
                        <p className={`${styles.subheaderText} mt-2`}>Next.js & Typescript Website</p>
                        <p>Portfolio website</p>
                        <p className='text-sm font-bold'>Typescript, Next, Node, Express, APIs, Tailwind, HTML.</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Projects