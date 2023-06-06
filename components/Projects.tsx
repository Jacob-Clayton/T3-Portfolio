import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles';
import { MyProjects } from '../constants';

const Projects = () => {

    return (
        <section id="Projects" className={`${styles.paddings} `}>
            <div className={`${styles.innerWidth} ${styles.descriptionText} mx-auto`}>
                <p className={`${styles.headerText}`}>Projects</p>
                <p className={` mt-2`}>Some of the projects I&apos;ve been working on:</p>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-12 gap-y-10 mt-10'>
                    {MyProjects.map((project) => (
                        <div key={project.index} className='flex flex-col sm:gap-3 gap-2'>
                            <Image src={project.imgUrl} className='bottomshadow' width={600} height={400} alt='project preview image' priority={true}/>
                            <p className={`${styles.subheaderText} mt-3`}>{project.title}</p>
                            <p>{project.description}</p>
                            <div className='flex flex-wrap gap-3'>
                                {project.stack.map((tech, index) => (
                                    <div key={index} className='border border-primary-black rounded px-2 py-[3px]'>
                                        <p className="2xl:text-sm sm:leading-[16px] sm:text-[13px] text-xs font-normal text-primary-black">{tech}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-row sm:gap-6 gap-4 mt-1'>
                                {project.demoLink && (
                                    <Link href={project.demoLink} className='font-normal hover-underline-animation-b'>
                                        View Project
                                    </Link>
                                )}
                                {project.codeLink && (
                                    <Link href={project.codeLink} className='font-normal hover-underline-animation-b'>
                                        View Code
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects