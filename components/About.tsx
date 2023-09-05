import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles';
import React from 'react';
import macbookImg from '../public/macbookcode.png'
import jacobSuit from '../public/jacob_suit.jpg';
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
            <div className={`${styles.innerWidth} mx-auto lg:mt-[70px] md:mt-[50px] sm:mt-[40px] mt-[35px] flex sm:flex-row flex-col my-auto justify-between gap-8`}>      
                <div className={`lg:w-3/4 w-full flex-col items-center self-center z-20`}>
                    <RoughNotationGroup show={isFontReady}>
                        <h1 className={`text-left`}>
                            Hello! I&apos;m Jacob, a{' '}
                            <RainbowHighlight color={colors[0]}>
                                developer 
                            </RainbowHighlight>{' '}
                            based in England.
                        </h1>
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
                                I have developed{' '}
                                <RainbowHighlight color={colors[3]}> 
                                    back-end APIs
                                </RainbowHighlight>{' '}
                                and the{' '}
                                <RainbowHighlight color={colors[0]}>
                                    front-end UI
                                </RainbowHighlight>{' '}
                                for a $30mil volume web application.
                                And independently developed a tech startup&apos;s 
                                full stack website from scratch, including designing the UI and implementing APIs.
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
                            <Link href="https://www.linkedin.com/in/jebclayton/">
                                <p className='text-slate-100'>View Linkedin</p>
                            </Link>
                        </button>
                        <button className='border border-primary-black py-2 px-7 items-center flex flex-row rounded'>
                            <Link href="https://github.com/Jacob-Clayton">
                                <p>View Github</p>
                            </Link>
                        </button>
                    </div>
                </div>

                <div className='flex-shrink-0 lg:block hidden my-auto lg:w-[30%] lg:px-6'>
                    <Image
                        src={jacobSuit}
                        className='rounded-2xl drop-shadow-xl shadow-blue-900 '
                        alt="Profile"
                        placeholder='blur'
                        priority={true}
                        width={700}
                        height={700}
                    />
                </div>

            </div>
        </section>
    );
};

export default About;