import React from "react";

import styles from './styles.module.scss';

function SocialLinks() {
    return (
        <div className={`${styles.linksContainer} d-flex justify-content-center mt-3 py-2`}>
            <div className={`${styles.linkWrapper} mx-2`}>
                <a href="https://www.linkedin.com/in/william-dourado-143527170/">
                    <img src="svg/linkedin.svg" target="_blank" alt="" />
                </a>
            </div>
            <div className={`${styles.linkWrapper} mx-2`}>
                <a href="https://github.com/WillDFz">
                    <img src="svg/github.svg" target="_blank" alt="" />
                </a>
            </div>
        </div>
    );
}

export default SocialLinks;
