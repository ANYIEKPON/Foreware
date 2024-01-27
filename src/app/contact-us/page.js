import React from 'react'
import Encrypt from '../../component/encrypt/Encrypt';
import styles from '../contact-us/ContactUs.module.scss';
import "./ContactUs.module.scss";

const Home = () => {
  return (
    <div className={styles.contact}>
       <div className={styles.bckImage}></div>
       <span className={styles.contactText}>CONTACT</span>
        <Encrypt />
      
    </div>
  )
}

export default Home
