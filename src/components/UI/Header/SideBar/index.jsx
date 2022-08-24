import { React, useState } from "react";

import Avatar from "../../Avatar";
import SocialLinks from "../../SocialLinks";

import styles from "./styles.module.scss";

function SideBar() {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
        console.log(isOpen);
    };

    return (
        <>
            <div className={`${styles.menuBtn} btn`} onClick={ToggleSidebar}>
                <img src="svg/bars.svg" alt="" />
            </div>

            <div
                className={`${styles.sidebar} ${
                    isOpen == true ? styles.sidebarActive : ""
                }`}
            >
                <div className="py-4">
                    <div
                        className={`${styles.menuClose} btn`}
                        onClick={ToggleSidebar}
                    >
                        <img src="svg/times.svg" alt="" />
                    </div>
                    <Avatar />
                    <SocialLinks />
                </div>
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
