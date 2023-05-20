import Image from "next/image";
import styles from "~/styles";

const Footer = () => {

    return (
        <section className={`${styles.paddings} relative sm:pb-[60px]`}>
            <div className={`${styles.innerWidth} ${styles.descriptionText} mx-auto`}>
                <div className="bg-slate-300 w-full h-[1px]" />
                <p className="mt-6 flex flex-row items-center">Built with Typescript, Tailwind and Next.js.</p>
            </div>
        </section>
    );
};

export default Footer;