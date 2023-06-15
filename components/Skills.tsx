import styles from "~/styles";

const Skills = () => {

    return (
        <section id="Skills" className={`${styles.paddings} relative`}>
            <div className={`${styles.innerWidth} ${styles.descriptionText} mx-auto`}>
                <p className={`${styles.headerText}`}>Skills</p>
                <p className="mt-2">My tech stack:</p>
                <div className="flex flex-col sm:mt-10 mt-5 sm:gap-8 gap-5">
                    <div className="space-y-2 list-disc list-inside">
                        <p className={`${styles.subheaderText}`}>Front End</p>
                        <li>Javascript / Typescript (React, Next).</li>
                        <li>Tailwind, SCSS, CSS.</li>
                        <li>Sanity CMS.</li>
                        <li>Figma.</li>
                        <li>HTML.</li>
                    </div>
                    <ul className="space-y-2 list-disc list-inside">
                        <p className={`${styles.subheaderText}`}>Back End</p>
                        <li>Javascript / Typescript (Node, Express).</li>
                        <li>Python (Pandas, Numpy, Matplotlib, APIs).</li>
                        <li>SQL (SQLite, BigQuery, mongoDB, mySQL).</li>
                        <li>Cloud (AWS, GCP).</li>
                        <li>Git.</li>
                    </ul>
                    <div className="space-y-2 list-disc list-inside">
                        <p className={`${styles.subheaderText}`}>Visualisation</p>
                        <li>Tableau, Power BI, Dune Analytics and Python.</li>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Skills;