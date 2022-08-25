import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// components
import Avatar from "./../../UI/Avatar/index";
import SocialLinks from "./../../SocialLinks/index";

// styles
import styles from "./styles.module.scss";

const Introduction = () => {
    return (
        <>
            <section
                id="Indroduction"
                className={`${styles.introductionSection} py-4`}
            >
                <Avatar mb3 />
                <Container className="mt-3">
                    <Row>
                        <Col xs={12} className="text-center">
                            <div className={`${styles.titleContainer}`}>
                                <h1>Olá, eu sou Will</h1>
                                <h4>Desenvolvedor Front-End</h4>
                            </div>
                        </Col>
                        <Col xs={12} className="mb-4">
                            <SocialLinks />
                        </Col>
                        <Col xs={12}>
                            <div className={`${styles.introductionWrapper}`}>
                                <div className={`${styles.textContainer}`}>
                                    <h4>Introdução</h4>
                                    <p>
                                        Trabalhando em diversas áreas da
                                        tecnologia há alguns anos, tendo
                                        realizado atividades no Instituto de
                                        Pesquisa Tecnológica do Estado de São
                                        Paulo, suporte para aplicações web,
                                        desenvolvimento de landing pages,
                                        templates e lojas para plataformas de
                                        e-commerce.
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
        </>
    );
};

export default Introduction;
