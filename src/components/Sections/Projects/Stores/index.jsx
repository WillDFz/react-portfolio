import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

// Import JSON
import stores from "../../../../../json/stores.json";

const Stores = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1.5}
                            autoplay={{
                                delay: 3000,
                            }}
                            loop={true}
                            modules={[Autoplay]}
                        >
                            {stores.map((store) => (
                                <SwiperSlide key={store.id} className="px-2">
                                    <div>
                                        <img src={store?.image} className="w-100" alt="" />
                                        <div>
                                            <h3>{store.name}</h3>
                                            <div className="storeDescription"></div>
                                            <div className="cardFooter">
                                                <a href={store?.url} target="_blank" rel="noopener noreferrer">Link</a>
                                            </div>
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
