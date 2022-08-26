import { React, useState } from "react";
import Hamburger from "hamburger-react";

import styles from "./styles.module.scss";

function SideBar() {
    const [isOpen, setIsopen] = useState(false);

    const inline = {
        position: "absolute",
        right: 0,
    };

    return (
        <>
            <div>
                <Hamburger size={28} duration={0.3} toggled={isOpen} toggle={setIsopen} />
            </div>

            <div
                className={`${styles.sidebar} ${
                    isOpen == true ? styles.sidebarActive : ""
                }`}
            >
                <div style={inline}>
                    <Hamburger size={28} toggled={isOpen} toggle={setIsopen} />
                </div>
                <div className={`${styles.modalBody} pt-5`}>
                    <ul className="ps-0">
                        <li className="ps-3 py-2">
                            <a href="#Skills" className="btn">
                                Habilidades
                            </a>
                        </li>
                        <li className="ps-3 py-2">
                            <a href="" className="btn">
                                Projetos
                            </a>
                        </li>
                        <li className="ps-3 py-2">
                            <a className="btn">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideBar;
