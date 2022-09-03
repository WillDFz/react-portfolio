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

const Stores = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h3 className={`${styles.title} mb-4`}>Lojas</h3>
                        </div>
                        <Swiper
                            spaceBetween={15}
                            slidesPerView={1.5}
                            autoplay={{
                                delay: 3000,
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                            observer={true}
                        >
                            {stores.map((store) => (
                                <SwiperSlide key={store.id} className="">
                                    <div className={`${styles.item}`}>
                                        <div
                                            className={`${styles.itemImageContainer}`}
                                        >
                                            <Image
                                                src={`/${store.image}`}
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
                                                {store.name}
                                            </h6>
                                            <div
                                                className={`${styles.storeDescription}`}
                                            >
                                                <p>{store?.description}</p>
                                            </div>
                                            <div
                                                className={`${styles.storeTools} mb-2`}
                                            >
                                                {store?.tools}
                                            </div>
                                        </div>
                                        <div className={`${styles.cardFooter} ps-3 pb-2`}>
                                            <a
                                                href={store?.url}
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

export default Stores;
