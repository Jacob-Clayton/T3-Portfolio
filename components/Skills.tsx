import styles from "~/styles";

const Skills = () => {

    return (
        <section id="Skills" className={`${styles.paddings} relative`}>
            <div className={`${styles.innerWidth} ${styles.descriptionText} mx-auto`}>
                <p className={`${styles.headerText}`}>Skills</p>
                <p className="mt-2">My tech stack:</p>
                <div className="flex flex-col mt-10 gap-8">
                    <div className="space-y-2">
                        <p className={`${styles.subheaderText}`}>Front End</p>
                        <p>Javascript / Typescript (React, Next), Tailwind, Sanity CMS, Framer Motion, CSS, HTML.</p>
                    </div>
                    <div className="space-y-2">
                        <p className={`${styles.subheaderText}`}>Back End</p>
                        <p>Javascript / Typescript (Node, Express, JSON, APIs).</p>
                        <p>Python (Pandas, Numpy, Matplotlib, JSON, APIs).</p>
                        <p>SQL (SQLite, BigQuery, mongoDB, mySQL, Planetscale).</p>
                        <p>Cloud (GCloud, AWS).</p>
                        <p>Git</p>
                    </div>
                    <div className="space-y-2">
                        <p className={`${styles.subheaderText}`}>Visualisation</p>
                        <p>Tableau, Power BI, Dune Analytics and Python.</p>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Skills;