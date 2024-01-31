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
            <p>Technological innovations are at the forefront of everything we&apos;re doing at Foreware Technologies. Our primary aim is to discover smart ways to leverage technology that can help companies operate seamless processes and raise sales.Click below to read more about the technologies powering our Solution Offerings, or get in contact to set up an appointment with our staff.</p>
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
                            <h4>Implementation</h4>
                            <p>Technical artefacts for perfect design</p>
                            <Link href="/services" className="link"><span className={styles.learn} id="comTwo" onClick={(e) => handleOpen(e)}>+ Learn More</span></Link>
                        </div>
                        {
                            (read.id === "comTwo" && show) && <div className={styles.readbelow}>
                                {/* <MdClose className={styles.closeView} onClick={() => setShow(!show)} /> */}
                            <p>We adopt international best practice standard of our solutions. Deployment services of Foreware Solutions based on current agile product development, supported by guiding concepts unique to content management systems and applications offered by educated and competent practitioners. These solutions are guaranteed to satisfy the specific market needs of each company and achieve optimum outcomes at each stage of the Enterprise Content Management program. Our strategy consists of scoping, detailed review, architecture, validation of the blueprint, and assistance. We deliver customized software for Corporate Content Management systems and custom-built software to help maximize the return on investment and monitor the operation of the company.</p>
                        </div>
                        }
                </div>
                <div className={styles.first}>
                        <div className={styles.click}>
                            <h4>Upgrade</h4>
                            <p>Using YERT services</p>
                            <Link href="/services" className="link"><span className={styles.learn} id="comThree" onClick={(e) => handleOpen(e)}>+ Learn More</span></Link>
                        </div>
                        {
                            (read.id === "comThree" && show) && <div className={styles.readbelow}>
                                {/* <MdClose className={styles.closeView} onClick={() => setShow(!show)} /> */}
                            <p>Owing to the fast-paced design and technologies of the corporate world, companies are implementing new tactics by updating their software with new functionality and capabilities. Upgrading systems involve thorough planning and professional execution of initiatives. Customers face difficulties in maintaining minimum downtime, smooth transfer and effective update to ensure that the existing SAP system remains intact. The SAP systems need to be constantly modernised for the technical improvements that are taking place. Switching to SAP S/4HANA gives you the opportunity to turn your business into a real-time corporation, take advantage of growth opportunities, drive growth, and refine the operations for delivering high quality services. Foreware Technologies SAP ERP Upgrade Tools ensure a fast, pain free transformation, minimize risk and disruption to optimize market benefits. Our specialists work in tandem with you to oversee all stages of SAP process enhancements from planning and start-up, through on-going and support-based functional improvement activities. Upgrade packages for Foreware Technology will migrate your S/4HANA systems to a new service pack introduced by SAP. The most important value-added by us is that, using our YERT (Your Emergency Rescue Team) offerings, we have warranty services for up to 6 months, in specific for quality related problems that might happen after upgrades. </p>
                        </div>
                        }
                </div>
                <div className={styles.first}>
                        <div className={styles.click}>
                            <h4>Migration</h4>
                            <p>Keep your fears at bay</p>
                            <Link href="/services" className="link"><span className={styles.learn} id="comFour" onClick={(e) => handleOpen(e)}>+ Learn More</span></Link>
                        </div>
                        {
                            (read.id === "comFour" && show) && <div className={styles.readbelow}>
                                {/* <MdClose className={styles.closeView} onClick={() => setShow(!show)} /> */}
                            <p>In order to keep current in today&apos;s dynamic market, companies need prompt access to the right data generated in a way that recognizes effective decision-making — moving workloads from SAP ECC to SAP S/4HANA for a more efficient, low-cost platform — whether it&apos;s on-site or in a server farm— can improve productivity and reduce the costs and increasing of running SAP systems. In SAP S/4HANA migration, we assess legacy renewal goals and evaluate new architectures carefully to see if any improvements in functionality and technologies are necessary before a transition plan is developed. Both transactions that happen throughout migration are detected, queued, and then linked to the migration system. Our well-established migration strategies and experience help us to help clients in their streamlined approach to harnessing the benefit of SAP S/4HANA in-memory computing. Accelerated SAP S/4HANA Migration (AHM) summarizes all migration milestones collectively, speeding up the technological methods needed by enabling industrial techniques. Applying expertise learned from accelerators, industry practices, tools, dedicated staff and automated procedures to pre-and post-migration activities would significantly minimize costs and risks relative to traditional </p>
                        </div>
                        }
                </div>
                <div className={styles.first}>
                        <div className={styles.click}>
                            <h4>Managed Services</h4>
                            <p>Cloud Management made easy</p>
                            <Link href="/services" className="link"><span className={styles.learn} id="comFive" onClick={(e) => handleOpen(e)}>+ Learn More</span></Link>
                        </div>
                        {
                            (read.id === "comFive" && show) && <div className={styles.readbelow}>
                                {/* <MdClose className={styles.closeView} onClick={() => setShow(!show)} /> */}
                            <p>Through our competent consultants in AWS, Azure, Aviatrix, and SAP, we have created a true start-up community by offering adaptive, skilled and agile developers capable of delivering advanced cloud management services. With SAP Symphony, we make our cloud operations as successful as possible in maximizing 75% of the expected SAP Base operations. With the collaboration that we have in terms of resources, processes and technology around deployment of SAP on Public Cloud, we are offering our customers with the best-in - class service on their path to digital transition to Public Cloud.</p>
                        </div>
                        }
                </div>
           </div>
        </div>
    </div>
  )
}

export default Service