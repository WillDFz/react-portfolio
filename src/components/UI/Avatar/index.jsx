import React from 'react'

// styles
import styles from "./styles.module.scss";


const Avatar = () => {
  return (
    <div className={`${styles.avatarFrame} m-auto m-lg-4`}>
      <img src="/images/avatar.png" alt="" />
    </div>
  )
}

export default Avatar;
