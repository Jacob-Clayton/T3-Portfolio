import styles from "~/styles";

const Skills = () => {

    return (
        <section id="Skills" className={`${styles.paddings} relative`}>
            <div className={`${styles.innerWidth} ${styles.descriptionText} mx-auto`}>
                <p className={`${styles.headerText}`}>Skills</p>
                <p className="mt-2">My tech stack</p>
            </div>
        </section>
    )

}

export default Skills;