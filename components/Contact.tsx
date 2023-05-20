import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles';

const Projects = () => {

    return (
        <section id='Contact' className={`${styles.paddings} sm:pb-[200px]`}>
            <div className={`${styles.innerWidth} mx-auto`}>
                <p className={`${styles.headerText}`}>Contact</p>
                <p className={`${styles.descriptionText} md:w-1/2 mt-2`}>Love to talk, especially if you're thinking about offering me a job! Connect with me on Linkedin or shoot me an email.</p>
                <div className={`${styles.xPaddings} flex flex-row justify-left sm:gap-6 gap-4 mt-4`}>
                    <button className="bg-primary-black border border-primary-black py-2 px-7 items-center flex flex-row rounded">
                    <Link className={`${styles.descriptionText} text-slate-200 font-light`} href="https://www.linkedin.com/in/jebclayton/">
                        Linkedin</Link>
                    </button>
                    <button className='border border-primary-black py-2 px-7 items-center flex flex-row rounded'>
                    <Link className={`${styles.descriptionText} font-light`} href="mailto:jacob@jacobclayton.dev">
                        Email</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;