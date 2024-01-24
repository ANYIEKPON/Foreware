import React from 'react';
import styles from '../encrypt/Encrypt.module.scss';
import Image from 'next/image';
import encrypt from '../../../public/encrypt.png';

const Encrypt = () => {
  return (
    <div className={styles.encrypt}>
        <div className={styles.leftEncrypt}>
            {/* <Image className={styles.encryptImg} src={encrypt} alt="To encrypt" /> */}
        </div>
        <div className={styles.rightEncrypt}>
            <h1>Data security with <span>256-bit</span> encryption</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. 
            </p>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Encrypt;