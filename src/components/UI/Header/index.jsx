// components
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";

// styles
import styles from "./styles.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <Row>
                    <Col xs={10} className={`${styles.logo} d-flex ps-4`}>
                        <div className="my-3">【Ｗ】</div>
                    </Col>
                    <Col xs={2} className="d-flex align-items-center">
                        <SideBar />
                    </Col>
                    {/* <Col className="d-flex justify-content-evenly mb-2">
                        <a href="#" className="btn">
                            Home
                        </a>
                        <a href="#" className="btn">
                            Skills
                        </a>
                        <a href="#" className="btn">
                            Projetos
                        </a>
                        <a href="#" className="btn">
                            Contato
                        </a>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default Header;
