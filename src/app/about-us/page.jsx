import React from 'react';
import styles from './aboutUs.module.scss';
import company from "../../../public/company.png"
import Image from 'next/image';


const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
        <div className={styles.aboutImage}></div>
        <span className={styles.abt}> ABOUT US</span>
        <div className={styles.aboutWrapper}>
          <div className={styles.abtTxt}>
            <div className={styles.abtTextTop}>
              <Image src={company} className={styles.immg} />
              <h3>Who We are?</h3>
            </div>
            <p>
                Foreware Technologies provides information technology services and enterprise applications deployment to business corporations. We help organizations run simple and maximize income through state-of-the-art technology. We parade experienced SAP ERP, Cloud and IT specialists with global exposure. The Foreware Technology team is excited about offering outstanding solutions that represent the digital journey of customers.
            </p>
          </div>
          <div className={styles.abtTxt}>
            <div className={styles.abtTextTop}>
              <Image src={company} className={styles.immg} />
              <h3>Know Us</h3>
            </div>
            <p>
            We implement integrated enterprise solutions such as SAP ERP, Microsoft Dynamics, Sage, Odoo, ERPNext and Cloud migration services. Our deep enthusiasm for business technologies and our unshakable commitment to deliver nothing but the best for our customers make us the preferred organization. Foreware Technologies consolidates cross skills growth and experience to assist businesses adopt emerging technologies and fulfill their market needs. 
            </p>
          </div>
          <div className={styles.abtTxt}>
            <div className={styles.abtTextTop}>
              <Image src={company} className={styles.immg} />
              <h3>Misson</h3>
            </div>
            <ul className={styles.list}>
              <li>To optimize organizations' businesses processes on integrated enterprise solutions and seamless cloud transition for customers satisfaction and increase in revenue. </li>
              <li> Customers&#180; Performance;</li>
              <li> Training and empowerment of Professionals adding to the process of Foreware Technologies        knowledge base. 
              </li>
            </ul>
          </div>
          <div className={styles.abtTxt}>
            <div className={styles.abtTextTop}>
              <Image src={company} className={styles.immg} />
              <h3>Vision</h3>
            </div>
            <p>
            To build lifelong relationships with customers by providing top-notch services in deployment of enterprise and cloud powered solutions.
            </p>
          </div>
        </div>
        <div className={styles.featured}>
          <h3>Featured Solutions and Partners</h3>
        </div>
    </div>
  )
}

export default AboutUs;