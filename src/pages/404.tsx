'use client';
import styles from '../styles';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import React from 'react';
import { useIsFontReady } from 'lib/useIsFontReady';
import { RoughNotation } from "react-rough-notation";


const NotFoundPage = () => {

    // Before animation, detect if custom fonts are loaded, so <RoughNotation /> SVG's are correctly positioned over the elements
    const isFontReady = useIsFontReady()

    return (
        <>
        <Navbar />
        <section className={`${styles.paddings} relative min-h-screen`}>
                <div className={`${styles.innerWidth} mx-auto mt-5 sm:mt-10 md:mt-20`}>
                    <h2 className="text-center">404: Page Not Found</h2>
                    <p className={`text-center mt-10 `}>
                        Sorry, there is nothing to see here
					</p>
                    <div className='mt-10 flex flex-row gap-6 justify-center'>
                        <button className='bg-violet py-2 px-5 items-center rounded'>
                            <Link className= {`${styles.descriptionText} cursor-pointer`} href="/">
                                <RoughNotation show={isFontReady} type='highlight' animationDuration={2000} color='#f9cbca' strokeWidth={2}>
                                    Go Back
                                </RoughNotation>
                            </Link>
                        </button>
                    </div>
                </div>
        </section>
        </>
    );
};

export default NotFoundPage;