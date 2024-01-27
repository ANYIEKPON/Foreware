import React from 'react';
import styles from '../encrypt/Encrypt.module.scss';
import Image from 'next/image';
import encrypt from '../../../public/encrypt.png';

const Encrypt = () => {
  return (
    <div className={styles.encrypt}>
        <div className={styles.ccntact}>
            <h3>Ready to find more</h3>
            <p>
              Our staff are available to provide advice and respond to your specific questions. Please email us by following the form below:
            </p>
        </div>
        <div className={styles.contactFrm}>
          <h3>Contact Us</h3>
          <div className={styles.div}>
            <form className={styles.form}>
                <div className={styles.formInput}>
                  <label>Enter Your Name *</label>
                  <input type="text" placeholder="Name" />
                </div>
                <div className={styles.formInput}>
                  <label>Enter Your Email *</label>
                  <input type="email" placeholder="Email" />
                </div >
                <div className={styles.formInput}>
                  <label>Type your Message Here.</label>
                  <input type="text" placeholder="Message" className={styles.formInputMessage} />
                </div>
                <input className={styles.btn} type="submit" />
            </form>
          </div>
        </div>
    </div>
  )
}

export default Encrypt;