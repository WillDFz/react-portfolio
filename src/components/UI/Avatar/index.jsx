import React from 'react'

// styles
import styles from "./styles.module.scss";


const Avatar = (props) => {
  console.log(props);
  return (
    <div className={`${styles.avatarFrame} ${props} m-auto`}>
      <img src="/images/avatar.png" alt="" />
    </div>
  )
}

export default Avatar;
