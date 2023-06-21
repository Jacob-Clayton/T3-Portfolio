import Link from 'next/link';
import styles from '../src/styles';

const Contact = () => {

    return (
        <section id='Contact' className={`${styles.paddings}`}>
            <div className={`${styles.innerWidth} mx-auto`}>
                <h2>Get in touch</h2>
                <p className={`md:w-3/4 mt-2`}>
                    Do you have a job opportunity or idea you&apos;d like to discuss? Feel free to reach me at{' '}
                    <Link href={'mailto:jacob@jacobclayton.dev'} className='font-normal text-amber-600'>
                        jacob@jacobclayton.dev
                    </Link>
                    . You can also find me on{' '}
                    <Link href='https://www.linkedin.com/in/jebclayton/' className='font-normal text-amber-600'>
                        Linkedin
                    </Link>{' '}
                    and{' '}
                    <Link href='https://github.com/Jacob-Clayton' className='font-normal text-amber-600'>
                        Github
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
};

export default Contact;