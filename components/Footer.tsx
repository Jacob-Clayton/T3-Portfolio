import Image from "next/image";
import styles from "~/styles";

const Footer = () => {

    return (
        <section className={`${styles.paddings} relative sm:pb-[60px]`}>
            <div className={`${styles.innerWidth} ${styles.descriptionText} mx-auto`}>
                <div className="bg-slate-300 w-full h-[1px]" />
                <p className="mt-6 flex flex-wrap items-center gap-1">
                    Built with 
                    <span><Image src={'/typescript.svg'} className="ml-1" width={16} height={16} alt="typescript"/></span>
                    Typescript,
                    <span><Image src={'/tailwind.svg'} className="ml-1" width={18} height={18} alt="tailwind"/></span>
                    Tailwind and
                    <span><Image src={'/nextjs.svg'} className="ml-1" width={16} height={16} alt="next"/></span>
                    Next.js. Deployed on 
                    <span><Image src={'/vercel.svg'} className="ml-1" width={16} height={16} alt="next"/></span>
                    Vercel.
                </p>
            </div>
        </section>
    );
};

export default Footer;