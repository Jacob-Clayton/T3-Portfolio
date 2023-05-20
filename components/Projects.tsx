import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles';
import { MyProjects } from '../constants';

const Projects = () => {

    return (
        <section id="Projects" className={`${styles.paddings} `}>
            <div className={`${styles.innerWidth} ${styles.descriptionText} mx-auto`}>
                <p className={`${styles.headerText}`}>Projects</p>
                <p className={` mt-2`}>Some of the projects I've been working on:</p>
                <div className='grid grid-cols-3 gap-10 sm:gap-y-20 gap-y-16 mt-10'>

                    {MyProjects.map((project) => (
                        <div className='flex flex-col gap-2'>
                            <Image src={project.imgUrl} className='shadow-lg' width={500} height={500} alt='project preview image'/>
                            <p className={`${styles.subheaderText} mt-2`}>{project.title}</p>
                            <p>{project.description}</p>
                            <p className='text-sm font-bold'>{project.stack}</p>
                            <div className={`${styles.xPaddings} flex flex-row justify-center sm:gap-6 gap-4 mt-4`}>
                                <button className="bg-primary-black border border-primary-black py-2 px-6 items-center flex flex-row rounded">
                                <Link className={`${styles.descriptionText} text-slate-200 font-light`} href={project.demoLink}>
                                    View Demo</Link>
                                </button>
                                <button className='border border-primary-black py-2 px-6 items-center flex flex-row rounded'>
                                <Link className={`${styles.descriptionText} font-light`} href={project.codeLink}>
                                    View Code</Link>
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects