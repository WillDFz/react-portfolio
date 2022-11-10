import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

// Import JSON
import stores from "../../../../json/stores.json";
import others from "../../../../../pages/api/projects.json";

const Others = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h3 className={`${styles.title} mb-4`}>Outros</h3>
                        </div>
                        <Swiper
                            spaceBetween={15}
                            slidesPerView={1.5}
                            autoplay={{
                                delay: 3000,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                            observer={true}
                        >
                            {others.map((other) => (
                                <SwiperSlide key={other.id} className="">
                                    <div className={`${styles.item}`}>
                                        <div
                                            className={`${styles.itemImageContainer}`}
                                        >
                                            <Image
                                                src={`/${other.image}`}
                                                width={195}
                                                height={115}
                                            />
                                        </div>
                                        <div
                                            className={`${styles.cardBody} p-3 pb-0`}
                                        >
                                            <h6
                                                className={`${styles.storeName}`}
                                            >
                                                {other.name}
                                            </h6>
                                            <div
                                                className={`${styles.storeDescription}`}
                                            >
                                                <p>{other?.description}</p>
                                            </div>
                                            <div
                                                className={`${styles.storeTools} mb-2`}
                                            >
                                                {other?.tools}
                                            </div>
                                        </div>
                                        <div
                                            className={`${styles.cardFooter} w-100 d-flex justify-content-around pb-2`}
                                        >
                                            <a
                                                href={other?.url}
                                                className={`${styles.storeLink}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="svg/link.svg"
                                                    className="me-2"
                                                    alt=""
                                                />
                                                Link
                                            </a>

                                            <a
                                                href={other?.github}
                                                className={`${styles.storeLink}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src="svg/github_r.svg"
                                                    className="me-2"
                                                    alt=""
                                                />
                                                Github
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Others;
