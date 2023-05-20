import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles';
import { annotate } from 'rough-notation';

const Hero = () => {

    return (
        <section id="Home" className={`${styles.innerWidth} flex mx-auto text-center`}>
        <div className={`${styles.yPaddings} mt-[120px] flex sm:flex-row flex-col my-auto justify-between sm:gap-0 gap-10`}>      
        <div className={`md:w-2/3 w-full flex-col items-center self-center z-20`}>
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

            <div className='sm:w-1/4 md:flex hidden my-auto sm:flex-row mx-auto text-center'>
                <Image
                    src={'/safaribridgr.png'}
                    alt="Profile"
                    priority={true}
                    className="shadow-lg"
                    width={400}
                    height={400}
                />
            </div>

        </div>
    </section>
    );
};

export default Hero;
