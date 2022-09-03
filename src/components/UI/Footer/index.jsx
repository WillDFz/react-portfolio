import { Container, Col, Row } from "react-bootstrap";
import SocialLinks from "../../SocialLinks";
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <section className={`${styles.footer}`}>
            <Container fluid className="">
                <Row>
                    <Col xs={12} className="px-0">
                        <SocialLinks />
                    </Col>
                    <Col className="text-center pb-2">
                        <h6 className={`${styles.footNote}`}>William Dourado <span>©2022</span></h6>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
