import { React, useState } from "react";
import Hamburger from "hamburger-react";

import Avatar from "../../Avatar";
import SocialLinks from "../../../SocialLinks";

import styles from "./styles.module.scss";

function SideBar() {
    const [isOpen, setIsopen] = useState(false);

    return (
        <>
            <div className="hamburger-container">
                <Hamburger size={28} toggled={isOpen} toggle={setIsopen} />
            </div>

            <div
                className={`${styles.sidebar} ${
                    isOpen == true ? styles.sidebarActive : ""
                }`}
            >
                <div className={`${styles.modalBody}`}>
                    <ul className="ps-0">
                        <li className="ps-3 py-2">
                            <a className="">Habilidades</a>
                        </li>
                        <li className="ps-3 py-2">
                            <a className="">Projetos</a>
                        </li>
                        <li className="ps-3 py-2">
                            <a className="">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SideBar;
