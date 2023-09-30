import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";

// Import JSON
import projects from "../../../../json/projects.json";

const Stores = () => {
    return (
        <div>
            <Container className="mb-4">
                <Row>
                    {projects.map((project, index) => (
                        <Col lg={3} key={index}>
                            <div className={`${styles.item} mb-3`}>
                                <div className="px-3 py-2 mb-2">
                                    <Image src="/svg/screen.svg" width={20} height={20} alt="" />
                                </div>
                                <div className={`${styles.cardBody} px-3 pb-0`}>
                                    <h6 className={`${styles.name}`}>{project.name}</h6>
                                    <div className={`${styles.description} mb-2`}>
                                        <p>{project?.description}</p>
                                    </div>
                                    <div className={`${styles.tools} mb-2`}>
                                        {project?.tools}
                                    </div>
                                </div>
                                <div className={`ps-3 pb-2`}>
                                    <a
                                        href={project?.url}
                                        className={`${styles.link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="svg/link.svg" className="me-2" alt="" />
                                        Link
                                    </a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Stores;
