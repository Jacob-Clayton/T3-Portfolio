import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles';
import React from 'react';
import macbookImg from '../public/macbookcode.png'
import { useIsFontReady } from 'lib/useIsFontReady';
import { LIGHT_COLORS } from '../constants';
import { shuffleArray } from 'lib/shuffleArray';
import { RainbowHighlight } from '../lib/RainbowHighlight';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const About = () => {

    // Before animation, detect if custom fonts are loaded, so <RoughNotation /> SVG's are correctly positioned over the elements
    const isFontReady = useIsFontReady()

    const [colors, setColors] = React.useState<(string | undefined)[]>([])

    // Shuffle light colors and store them in state so the order is persisted during react re-renders
    React.useEffect(() => {
        setColors(shuffleArray(LIGHT_COLORS))
    }, [])

    return (
        <section id="About" className={`${styles.paddings} relative`}>
            <div className={`${styles.innerWidth} ${styles.descriptionText} mx-auto mt-[80px] flex sm:flex-row flex-col my-auto justify-between gap-1`}>      
                <div className={`lg:w-3/4 w-full flex-col items-center self-center z-20`}>
                    <RoughNotationGroup show={isFontReady}>
                        <p className={`${styles.heroHeading} text-left`}>
                            Hello! I&apos;m Jacob, a{' '}
                            <RainbowHighlight color={colors[0]}>
                                developer 
                            </RainbowHighlight>{' '}
                            based in England.
                        </p>
                        <div className={`text-left mt-5 md:mt-6 lg:mt-8 space-y-3`}>
                            <p>
                                I love building things that are{' '}
                                <RainbowHighlight color={colors[1]}> 
                                    user-friendly, simple 
                                </RainbowHighlight>{' '}
                                and{' '}
                                <RainbowHighlight color={colors[2]}> 
                                    solve problems.
                                </RainbowHighlight>
                            </p>
                            <p>
                                I&apos;m a self-taught full stack developer, proficient in Next.js and Node.js.
                                I work at a top 10 most sold NFT project where I 
                                develop{' '}
                                <RainbowHighlight color={colors[3]}> 
                                    back-end APIs
                                </RainbowHighlight>{' '}
                                alongside{' '}
                                <RainbowHighlight color={colors[0]}>
                                    front-end UI.
                                </RainbowHighlight>{' '}
                                I founded a Web3 company from scratch, independently developing it&apos;s 
                                full stack website with automated processes and APIs.
                                In my free time I like to use{' '}
                                <RainbowHighlight color={colors[1]}> 
                                    Python 
                                </RainbowHighlight>{' '}
                                for personal projects too.
                            </p>
                            <p>
                                Through these experiences I have had the opportunity to work with both small and large, 
                                specialised and cross-functional teams across different timezones and developed a working 
                                style that leans towards{' '}
                                <RainbowHighlight color={colors[2]}>
                                    flexibility
                                </RainbowHighlight>{' '}
                                ,
                                <RainbowHighlight color={colors[3]}>
                                    clarity
                                </RainbowHighlight>{' '}
                                and{' '}
                                <RainbowHighlight color={colors[0]}>
                                    collaboration.
                                </RainbowHighlight>
                            </p>
                            <p>
                                I&apos;m currently looking for a role as a developer.{' '}
                                <RoughNotation type='circle' color='orange' strokeWidth={2}>
                                    Hire me?
                                </RoughNotation>
                            </p>
                        </div>
                    </RoughNotationGroup>
                    <div className={`flex flex-row justify-start sm:gap-6 gap-4 sm:mt-8 md:mt-10 mt-6`}>
                        <button className="border border-primary-black py-2 px-7 items-center flex flex-row rounded bg-primary-black ">
                            <Link className={`text-slate-100`} href="https://www.linkedin.com/in/jebclayton/">
                                View Linkedin
                            </Link>
                        </button>
                        <button className='border border-primary-black py-2 px-7 items-center flex flex-row rounded'>
                            <Link href="https://github.com/Jacob-Clayton">
                                View Github
                            </Link>
                        </button>
                    </div>
                </div>

                <div className='lg:block hidden my-auto lg:w-[45%]'>
                    <Image
                        src={macbookImg}
                        alt="Profile"
                        placeholder='blur'
                        priority={true}
                        width={1000}
                        height={1000}
                    />
                </div>

            </div>
        </section>
    );
};

export default About;