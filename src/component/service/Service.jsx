'use client'
import React, { useState, useEffect } from 'react';
import styles from './service.module.scss';
import Link from 'next/link';
import { MdClose } from "react-icons/md";


const Service = () => {
    const [read, setRead] = useState({
        id: "comOne"
    })
    const [show, setShow] = useState(false);
   
    useEffect(() => {
        console.log(read);
        console.log(show)
    }, [read])

    const handleOpen = (e) => {
        setRead({
            id: e.target.id
        })
        setShow(!show);
    }   

  return (
    <div className={styles.service}>
        <div className={styles.wrapper}>
           <div className={styles.top}>
            <h3>Our Services</h3>
            <p>Technological innovations are at the forefront of everything we're doing at Foreware Technologies. Our primary aim is to discover smart ways to leverage technology that can help companies operate seamless processes and raise sales.Click below to read more about the technologies powering our Solution Offerings, or get in contact to set up an appointment with our staff.</p>
           </div>
           <div className={styles.botom}>
                <div className={styles.first}>
                        <div className={styles.click}>
                            <h4>Product Support</h4>
                            <p>We provide 24x7 support</p>
                            <Link href="/services" className="link"><span className={styles.learn} id="comOne" onClick={(e) => handleOpen(e)}>+ Learn More</span></Link>
                        </div>
                        {
                        (read.id === "comOne" && show) && <div className={styles.readbelow}>
                            {/* <MdClose className={styles.closeView} onClick={() => setShow(!show)} /> */}
                            <p>Whether for assistance on technical issues, on-site service or online support, we are always willing to ensure the success of our customers and the reliability of our end-users. Foreware Technologies provides premium on-demand support, with 24/7 remote and consulting services. Our technical team supports structured customer service procedures and protocols that detail both communication approaches and work orders to ensure that we continue to offer high-quality service. Our priority on organizational efficiency and monitoring ensures that we can provide all offerings to the highest quality level through our oriented and streamlined operations.</p>
                        </div>
                        }
                </div>
                <div className={styles.first}>
                        <div className={styles.click}>
                            <h4>Product Support</h4>
                            <p>We provide 24x7 support</p>
                            <Link href="/services" className="link"><span className={styles.learn} id="comTwo" onClick={(e) => handleOpen(e)}>+ Learn More</span></Link>
                        </div>
                        {
                            (read.id === "comTwo" && show) && <div className={styles.readbelow}>
                                {/* <MdClose className={styles.closeView} onClick={() => setShow(!show)} /> */}
                            <p>Anyiekpon on technical issues, on-site service or online support, we are always willing to ensure the success of our customers and the reliability of our end-users. Foreware Technologies provides premium on-demand support, with 24/7 remote and consulting services. Our technical team supports structured customer service procedures and protocols that detail both communication approaches and work orders to ensure that we continue to offer high-quality service. Our priority on organizational efficiency and monitoring ensures that we can provide all offerings to the highest quality level through our oriented and streamlined operations.</p>
                        </div>
                        }
                </div>
                <div className={styles.first}>
                        <div className={styles.click}>
                            <h4>Technology Consulting</h4>
                            <p>We meet the largest technology</p>
                            <Link href="/services" className="link"><span className={styles.learn} id="comThree" onClick={(e) => handleOpen(e)}>+ Learn More</span></Link>
                        </div>
                        {
                            (read.id === "comThree" && show) && <div className={styles.readbelow}>
                                {/* <MdClose className={styles.closeView} onClick={() => setShow(!show)} /> */}
                            <p>In a deeply competitive environment, overhauling your systems is more than just a necessity; it can be a game-changer. Do your company&apos;s IT systems keep up with the speed of technology? Contact Foreware Technologies to transform the technical environment of your business. Foreware Technologies is responsive to integrating technology into your broader business approach, helping you optimize the maximum advantages of the qualities it creates, such as expanding to another industry, winning market share and growing sales. Foreware Technologies can help you plan and deploy a robust and functional IT system with goals that are directly connected to business objectives. We will work hand-in-hand with your team to consider your business priorities, service offerings and the feasibility of technological solutions. We offer project support, promote continuing servicing, and provide standardized guidance on the deployment of ERP solutions. Foreware Technologies will help your business transition from traditional IT methods and management to resources that your company wants to keep moving the infrastructure of your systems in the right direction.</p>
                        </div>
                        }
                </div>
           </div>
        </div>
    </div>
  )
}

export default Service