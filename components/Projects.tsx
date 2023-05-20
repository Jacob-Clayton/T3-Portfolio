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
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 sm:gap-y-20 gap-y-16 mt-10'>
                    {MyProjects.map((project) => (
                        <div className='flex flex-col gap-3'>
                            <Image src={project.imgUrl} className='shadow' width={500} height={500} alt='project preview image'/>
                            <p className={`${styles.subheaderText} mt-3`}>{project.title}</p>
                            <p>{project.description}</p>
                            <div className='flex flex-row sm:gap-6 gap-4'>
                                <Link href={project.demoLink} className='font-normal hover-underline-animation-b'>View Project</Link>
                                <Link href={project.codeLink} className='font-normal hover-underline-animation-b'>View Code</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects