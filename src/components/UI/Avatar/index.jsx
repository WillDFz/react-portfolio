import React from 'react'

// styles
import styles from "./styles.module.scss";


function Avatar() {
  return (
    <div className={`${styles.avatarFrame} m-auto`}>
      <img src="/images/avatar.png" alt="" />
    </div>
  )
}

export default Avatar;
