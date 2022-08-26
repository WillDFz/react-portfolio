import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

import styles from "./styles.module.scss";
import Stores from "./Stores";

const Projects = () => {
    return (
        <section id="Projects" className={`${styles.skillsSection}`}>
            <Stores/>
        </section>
    );
};

export default Projects;
