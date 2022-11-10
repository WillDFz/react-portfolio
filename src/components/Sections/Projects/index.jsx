import React from "react";


// Import Swiper styles
import "swiper/css";

import styles from "./styles.module.scss";
// components
import Stores from "./Stores";
import Others from "./Others";

const Projects = () => {
    return (
        <section id="Projects" className={`${styles.projectSection} pb-4`}>
            <div>
                <h3 className={`${styles.title} text-center pt-4`}>Projetos</h3>
            </div>
            <Stores />
            <Others/>
        </section>
    );
};

export default Projects;
