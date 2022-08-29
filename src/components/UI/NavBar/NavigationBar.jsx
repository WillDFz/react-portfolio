import React from "react";

const NavigationBar = () => {
    return (
        <div>
            <ul className="ps-0">
                <li className="ps-3 py-2">
                    <a href="#Skills" className="btn">
                        Habilidades
                    </a>
                </li>
                <li className="ps-3 py-2">
                    <a href="#Projects" className="btn">
                        Projetos
                    </a>
                </li>
                <li className="ps-3 py-2">
                    <a className="btn">Contato</a>
                </li>
            </ul>
        </div>
    );
};

export default NavigationBar;
