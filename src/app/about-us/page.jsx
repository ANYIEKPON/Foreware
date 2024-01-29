import React from 'react';
import styles from './aboutUs.module.scss';
import company from "../../../public/company.png"
import Image from 'next/image';


const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
        <div className={styles.aboutImage}></div>
        <span className={styles.abt}>HOME ABOUT US</span>
        <div className={styles.aboutWrapper}>
          <div className={styles.abtTxt}>
            <div>
              <Image src={company} className={styles.immg} />
              <h3>Who We are?</h3>
            </div>
            <p>
                Foreware Technologies provides information technology services and enterprise applications deployment to business corporations. We help organizations run simple and maximize income through state-of-the-art technology. We parade experienced SAP ERP, Cloud and IT specialists with global exposure. The Foreware Technology team is excited about offering outstanding solutions that represent the digital journey of customers.
            </p>

          </div>
        </div>
    </div>
  )
}

export default AboutUs;