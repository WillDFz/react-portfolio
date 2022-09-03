import React from "react";

import styles from "./styles.module.scss";

function SocialLinks() {
    return (
        <div
            className={`${styles.linksContainer} d-flex justify-content-center my-3 py-2`}
        >
            <div className={`${styles.linkWrapper} mx-2`}>
                <a
                    href="https://www.linkedin.com/in/william-dourado-143527170/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="svg/linkedin.svg" alt="" />
                </a>
            </div>
            <div className={`${styles.linkWrapper} mx-2`}>
                <a
                    href="https://github.com/WillDFz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="svg/github.svg" target="_blank" alt="" />
                </a>
            </div>
        </div>
    );
}

export default SocialLinks;
