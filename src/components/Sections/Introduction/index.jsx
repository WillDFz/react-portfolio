import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// components
import Avatar from "./../../UI/Avatar/index";
import SocialLinks from "./../../SocialLinks/index";

import json from "../../../json/introduction.json";

// styles
import styles from "./styles.module.scss";

const Introduction = () => {
    return (
        <section
            id="Indroduction"
            className={`${styles.introductionSection} pb-4 mt-5`}
        >
            <Container>
                <Row className="justify-content-lg-center">
                    <Col xs={12} lg={3}>
                        <Avatar />
                    </Col>
                    <Col xs={12} lg={4} className="text-center d-lg-flex align-items-lg-center  mt-4">
                        <div className={`${styles.titleContainer}`}>
                            <h1>Olá, eu sou Will</h1>
                            <h4>Desenvolvedor Front-End</h4>
                            <SocialLinks className="d-none d-lg-block mb-4" />
                        </div>
                    </Col>
                
                    <Col xs={12} lg={8}>
                        <div className={`${styles.introductionWrapper}`}>
                            <div className={`${styles.textContainer}`}>
                                <h4>Introdução</h4>
                                <p>
                                    {json[0]?.text}
                                </p>
                            </div>
                            <div className="text-center">
                                <a
                                    href="documents/William_CV.pdf"
                                    className="btn"
                                    download
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Introduction;
