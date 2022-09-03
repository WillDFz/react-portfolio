import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

import styles from "./styles.module.scss";

const Skills = () => {
    return (
        <section id="Skills" className={`${styles.skillsSection}`}>
            <Container>
                <Row>
                    <Col className="px-0">
                        <h3 className="text-center mb-4">Ferramentas</h3>
                        <Swiper
                            className={`${styles.skillsSwiper}`}
                            spaceBetween={30}
                            slidesPerView={3.5}
                            autoplay={{
                                delay: 5000,
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            <SwiperSlide className="text-center">
                                <img
                                    src="svg/react.svg"
                                    className="mb-2"
                                    alt="React"
                                />
                                <div>React JS</div>
                            </SwiperSlide>

                            <SwiperSlide className="text-center">
                                <img
                                    src="svg/js.svg"
                                    className="mb-2"
                                    alt="Javascript"
                                />
                                <div>JavaScript</div>
                            </SwiperSlide>

                            <SwiperSlide className="text-center">
                                <img
                                    src="svg/bootstrap.svg"
                                    className="mb-2"
                                    alt="Bootstrap"
                                />
                                <div>Bootstrap</div>
                            </SwiperSlide>

                            <SwiperSlide className="text-center">
                                <img
                                    src="svg/jquery.svg"
                                    className="mb-2"
                                    alt="JQuery"
                                />
                                <div>JQuery</div>
                            </SwiperSlide>

                            <SwiperSlide className="text-center">
                                <img
                                    src="svg/sass.svg"
                                    className="mb-2"
                                    alt="Sass"
                                />
                                <div>Sass</div>
                            </SwiperSlide>

                            <SwiperSlide className="text-center">
                                <img
                                    src="svg/html.svg"
                                    className="mb-2"
                                    alt="Html"
                                />
                                <div>HTML</div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
