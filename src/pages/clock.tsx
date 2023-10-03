import script from '../../constants/script';
import { Navbar } from 'components';
import styles from '~/styles';
import Link from 'next/link';

const Clock = () => {


    return (
        <>
        <head>
            <script defer src={script}></script>
        </head>
        <section className='mx-auto'>
            <Navbar />
            <div className={`${styles.paddings} relative min-h-screen`}>
                <div className={`${styles.innerWidth} mx-auto mt-5 sm:mt-10 md:mt-20`}>
                    <h2 className="text-center">CSS Clock</h2>
                    <p className={`text-center mt-10 `}>
                        Clock created using CSS, Tailwind and Javascript
					</p>
                    
                    <div className='flex border-2 border-black mt-5 sm:mt-10 md:mt-20'>
                        {/* Clock half */}
                        <div className="clockbody border-2 border-black flex overflow-hidden justify-center items-center">
                        {/* Clock face */}
                        <div className="clock w-[500px] h-[500px] bg-gradient-to-b from-slate-200 to-slate-300 border-slate-700 border-[2px] relative rounded-full">          
                        
                        {/* Center circle dot */}
                        <div className="centerdot z-20 bg-gradient-to-b from-slate-700 to-slate-900 rounded-[50%] absolute w-[9px] h-[9px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"/>
                        
                        {/* Date & Month window */}
                        <div className="absolute z-10 flex gap-[2px] bottom-[50%] right-[13%] translate-y-[50%] text-slate-700 font-light text-2xl leading-snug">
                            <div className="monthwindow w-16 h-9 border-indigo-900 bg-slate-200 border-[1px] rounded text-center" data-day-window></div>
                            <div className="datewindow w-12 h-9 border-indigo-900 bg-slate-200 border-[1px] rounded text-center" data-date-window></div>
                        </div>

                        {/* Clock hands */}
                        <div className="hand hour" data-hour-hand></div>
                        <div className="hand minute" data-minute-hand></div>
                        <div className="hand second" data-second-hand></div>

                        {/* Clock face numbers */}
                        <div className="font-light text-3xl text-slate-700">
                            <div className="number number1 absolute p-3 w-[100%] h-[100%] text-center"><div className="rotate-[-30deg]">1</div></div>
                            <div className="number number2 absolute p-3 w-[100%] h-[100%] text-center" ><div className="rotate-[-60deg]">2</div></div>
                            <div className="number number3 absolute p-3 w-[100%] h-[100%] text-center"><div className="rotate-[-90deg]">3</div></div>
                            <div className="number number4 absolute p-3 w-[100%] h-[100%] text-center"><div className="rotate-[-120deg]">4</div></div>
                            <div className="number number5 absolute p-3 w-[100%] h-[100%] text-center"><div className="rotate-[-150deg]">5</div></div>
                            <div className="number number6 absolute p-3 w-[100%] h-[100%] text-center"><div className="rotate-[-180deg]">6</div></div>
                            <div className="number number7 absolute p-3 w-[100%] h-[100%] text-center"><div className="rotate-[-210deg]">7</div></div>
                            <div className="number number8 absolute p-3 w-[100%] h-[100%] text-center"><div className="rotate-[-240deg]">8</div></div>
                            <div className="number number9 absolute p-3 w-[100%] h-[100%] text-center"><div className="rotate-[-270deg]">9</div></div>
                            <div className="number number10 absolute p-3 w-[100%] h-[100%] text-center"><div className="rotate-[-300deg]">10</div></div>
                            <div className="number number11 absolute p-3 w-[100%] h-[100%] text-center"><div className="rotate-[-330deg]">11</div></div>
                            <div className="number number12 absolute p-3 w-[100%] h-[100%] text-center">12</div>
                        </div>

                        {/* Clock face lines */}
                        <div>
                            {/* 12 to 1 & 6 to 7 */}
                            <div className="number number1 absolute p-12 w-[100%] h-[100%]"><div className="rotate-[-0deg] mx-auto bg-indigo-400 bg-opacity-30 w-[1px] h-full"></div></div>
                            <div className="number number1 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-3deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number1 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-6deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number1 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-9deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number1 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-12deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number1 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-15deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number1 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-18deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number1 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-21deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number1 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-24deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            {/* 1 to 2 & 7 to 8 */}
                            <div className="number number2 absolute p-12 w-[100%] h-[100%]"><div className="rotate-[-0deg] mx-auto bg-indigo-400 bg-opacity-30 w-[1px] h-full"></div></div>
                            <div className="number number2 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-3deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number2 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-6deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number2 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-9deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number2 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-12deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number2 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-15deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number2 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-18deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number2 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-21deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number2 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-24deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            {/* 2 to 3 & 8 to 9 */}
                            <div className="number number3 absolute p-12 w-[100%] h-[100%]"><div className="rotate-[-0deg] mx-auto bg-indigo-400 bg-opacity-30 w-[1px] h-full"></div></div>
                            <div className="number number3 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-3deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number3 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-6deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number3 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-9deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number3 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-12deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number3 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-15deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number3 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-18deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number3 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-21deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number3 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-24deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            {/* 3 to 4 & 9 to 10 */}
                            <div className="number number4 absolute p-12 w-[100%] h-[100%]"><div className="rotate-[-0deg] mx-auto bg-indigo-400 bg-opacity-30 w-[1px] h-full"></div></div>
                            <div className="number number4 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-3deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number4 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-6deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number4 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-9deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number4 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-12deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number4 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-15deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number4 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-18deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number4 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-21deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number4 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-24deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            {/* 4 to 5 & 10 to 11 */}
                            <div className="number number5 absolute p-12 w-[100%] h-[100%]"><div className="rotate-[-0deg] mx-auto bg-indigo-400 bg-opacity-30 w-[1px] h-full"></div></div>
                            <div className="number number5 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-3deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number5 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-6deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number5 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-9deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number5 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-12deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number5 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-15deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number5 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-18deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number5 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-21deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number5 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-24deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            {/* 5 to 6 & 11 to 12 */}
                            <div className="number number6 absolute p-12 w-[100%] h-[100%]"><div className="rotate-[-0deg] mx-auto bg-indigo-400 bg-opacity-30 w-[1px] h-full"></div></div>
                            <div className="number number6 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-3deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number6 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-6deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number6 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-9deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number6 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-12deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number6 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-15deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number6 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-18deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                            <div className="number number6 absolute p-3 w-[100%] h-[100%]"><div className="rotate-[-21deg] mx-auto bg-indigo-400 bg-opacity-10 w-[1px] h-full"></div></div>
                            <div className="number number6 absolute p-6 w-[100%] h-[100%]"><div className="rotate-[-24deg] mx-auto bg-indigo-400 bg-opacity-20 w-[1px] h-full"></div></div>
                        </div>
                        </div>
                    </div>

                    {/* text half */}
                    <div className='flex flex-col justify-center text-center mx-auto'>
                        <p>words here about the clock and code and a description and whatnot</p>
                        <div className='flex flex-row mx-auto mt-10 gap-10'>
                            <Link href={''} className='font-normal hover-underline-animation-b'>
                                <p>View CSS</p>
                            </Link>
                            <Link href={''} className='font-normal hover-underline-animation-b'>
                                <p>View HTML & Tailwind</p>
                            </Link>
                            <Link href={''} className='font-normal hover-underline-animation-b'>
                                <p>View Javascript</p>
                            </Link>
                        </div>
                        
                    </div>

                    
                    </div>

                </div>
        </div>
        </section>
        </>
    );
};

export default Clock;