import React from "react";


// Import Swiper styles
import "swiper/css";

import styles from "./styles.module.scss";
// components
import Stores from "./Stores";

const Projects = () => {
    return (
        <section id="Projects" className={`${styles.projectSection} pb-4`}>
            <div className="mb-4">
                <h3 className={`${styles.title} text-center pt-4`}>Projetos</h3>
            </div>
            <Stores />
        </section>
    );
};

export default Projects;
