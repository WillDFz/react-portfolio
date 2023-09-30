import { Col, Container, Row } from "react-bootstrap";

import json from "../../../json/skills.json";

import styles from "./styles.module.scss";
import Image from "next/image";

const Skills = () => {
    return (
        <section id="Skills" className={`${styles.skillsSection}`}>
            <Container>
                <Row>
                    <h3 className="text-center mb-2">Ferramentas</h3>

                    {json.map((item, index) => (
                        <Col key={index} className="text-center">
                            <Image
                                src={item.image}
                                className=""
                                width={30}
                                height={45}
                                alt="React"
                            />
                            <div className="custom-light-text">{item.name}</div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
