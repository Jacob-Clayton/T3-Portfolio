import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles';
import { annotate } from 'rough-notation';

const Hero = () => {

    return (
        <section id="Home" className={`${styles.innerWidth} flex mx-auto text-center`}>
        <div className={`${styles.yPaddings} mt-[120px] mb-16 flex sm:flex-row flex-col my-auto justify-between sm:gap-0 gap-10`}>      
        <div className={`sm:w-2/3 w-full flex-col items-center self-center z-20`}>
            <p className={`${styles.heroHeading} sm:text-left text-center 2xl:px-0 sm:px-6 px-0`}>
                Hello! I'm Jacob, a developer based in England.
            </p>
            <div className={`${styles.xPaddings} ${styles.descriptionText} sm:w-full sm:text-left text-center sm:mt-6 md:mt-8 mt-5 sm:mx-[0px] mx-auto space-y-3`}>
                <p>I love building things that solve problems in a user-friendly way.</p>
                <p>I am a self-taught developer.</p>
                <p>I'm currently looking for a role as a developer. Hire me?</p>
            </div>
            <div className={`${styles.xPaddings} flex flex-row justify-center sm:justify-start sm:gap-6 gap-4 sm:mt-8 md:mt-10 mt-6`}>
                <button className="bg-primary-black border border-primary-black py-2 px-7 items-center flex flex-row rounded">
                <Link className={`${styles.descriptionText} text-slate-200 font-light`} href="https://www.linkedin.com/in/jebclayton/">
                    View Linkedin</Link>
                </button>
                <button className='border border-primary-black py-2 px-7 items-center flex flex-row rounded'>
                <Link className={`${styles.descriptionText} font-light`} href="https://github.com/Jacob-Clayton">
                    View Github</Link>
                </button>
            </div>
        </div>

        <div className='w-[320px] h-[1px] block sm:hidden rounded-2xl mx-auto bg-primary-black bg-opacity-20 mb-5 mt-5' />
        <div className='w-[1px] h-[350px] sm:block hidden rounded-2xl my-auto bg-primary-black bg-opacity-20' />

            <div className='sm:w-1/4 flex sm:flex-row flex-col text-center justify-center'>
            
            <div className="flex sm:flex-col flex-row items-center my-auto xl:gap-14 lg:gap-12 md:gap-14 sm:gap-14 gap-6">
                <div className=''>
                <p className={`flex flex-col ${styles.descriptionText}`}>
                    <span className={`font-bold sm:mb-1 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl`}>
                    10
                    </span>
                    Partners
                </p>
                </div>

                <div className=''>
                <p className={`flex flex-col ${styles.descriptionText}`}>
                    <span className={`sm:mb-1 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl`}>
                    250
                        <span className='sm:ml-1 ml-[1px] xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-sm'>
                        K
                        </span>
                    </span>
                    Community
                </p>
                </div>

                <div className=''>
                <p className={`flex flex-col ${styles.descriptionText}`}>
                    <span className={`font-britanica sm:mb-1 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl`}>
                    Global
                    </span>
                    Web3 events
                </p>
                </div>

            </div>
            </div>

        </div>
    </section>
    );
};

export default Hero;
