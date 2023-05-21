import Image from 'next/image';
import Link from 'next/link';
import styles from '../src/styles';
import React from 'react';
import { useIsFontReady } from 'lib/useIsFontReady';
import { LIGHT_COLORS } from '../constants';
import { shuffleArray } from 'lib/shuffleArray';
import { RainbowHighlight } from 'lib';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Hero = () => {

    // Before animation, detect if custom fonts are loaded, so <RoughNotation /> SVG's are correctly positioned over the elements
    const isFontReady = useIsFontReady()

    const [colors, setColors] = React.useState<string[]>([])

    // Shuffle light colors and store them in state so the order is persisted during react re-renders
    React.useEffect(() => {
        setColors(shuffleArray(LIGHT_COLORS))
    }, [])

    return (
        <section id="Home" className={`${styles.paddings} relative`}>
            <div className={`${styles.innerWidth} mx-auto mt-[120px] flex sm:flex-row flex-col my-auto justify-between sm:gap-0 gap-10`}>      
                <div className={`md:w-2/3 w-full flex-col items-center self-center z-20`}>
                    <RoughNotationGroup show={isFontReady}>
                    <p className={`${styles.heroHeading} sm:text-left text-center`}>
                        Hello! I'm Jacob, a 
                        <RainbowHighlight color={colors[0]}> developer </RainbowHighlight>
                        based in England.
                    </p>
                    <div className={`${styles.descriptionText} sm:w-full sm:text-left text-center sm:mt-6 md:mt-8 mt-5 sm:mx-[0px] mx-auto space-y-3`}>
                        <p>
                            I love building things that are 
                            <RainbowHighlight color={colors[1]}> user-friendly, simple </RainbowHighlight> 
                            and 
                            <RainbowHighlight color={colors[2]}> solve problems.</RainbowHighlight>
                        </p>
                        <p>
                            I am a self-taught developer, starting out in 2020 by building a machine learning algorithm for my Undergraduate dissertation - I never looked back. Now I use 
                            <RainbowHighlight color={colors[3]}> Javascript </RainbowHighlight> 
                            professionally and 
                            <RainbowHighlight color={colors[0]}> Python </RainbowHighlight> 
                            for personal projects.</p>
                        <p>
                            I'm currently looking for a role as a developer.
                            <RoughNotation type='circle' color='orange' strokeWidth={2}> Hire me?</RoughNotation>
                        </p>
                    </div>
                    </RoughNotationGroup>
                    <div className={`flex flex-row justify-center sm:justify-start sm:gap-6 gap-4 sm:mt-8 md:mt-10 mt-6`}>
                        <button className="border border-primary-black py-2 px-7 items-center flex flex-row rounded bg-primary-black ">
                            <Link className={`${styles.descriptionText} text-slate-100 font-light`} href="https://www.linkedin.com/in/jebclayton/">
                                View Linkedin
                            </Link>
                        </button>
                        <button className='border border-primary-black py-2 px-7 items-center flex flex-row rounded'>
                            <Link className={`${styles.descriptionText} font-light`} href="https://github.com/Jacob-Clayton">
                                View Github
                            </Link>
                        </button>
                    </div>
                </div>

                <div className='md:block hidden my-auto md:w-1/3 lg:w-1/2'>
                    <Image
                        src={'/macbookcode.png'}
                        alt="Profile"
                        priority={true}
                        width={1000}
                        height={1000}
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;