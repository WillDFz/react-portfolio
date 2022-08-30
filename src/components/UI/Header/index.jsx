// components
import { Col, Container, Navbar, Row } from "react-bootstrap";
import SideBar from "./SideBar";

// styles
import styles from "./styles.module.scss";
import NavigationBar from "./../NavBar/NavigationBar";

const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <Row>
                    <Col xs={10} lg={4} className={`${styles.logo} d-flex ps-4`}>
                        <div className="my-3">【Ｗ】</div>
                    </Col>
                    <Col xs={2} className="d-lg-none d-flex align-items-center">
                        <SideBar />
                    </Col>
                    <Col className="d-none d-lg-flex justify-content-end">
                        <NavigationBar />
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
