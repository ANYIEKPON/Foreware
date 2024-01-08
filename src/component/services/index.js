import React from 'react';
import Image from 'next/image';
import analytcs  from '../../../public/analytics.ico'
import website  from '../../../public/website.ico'
import marketing  from '../../../public/marketing.ico'
import styles from './services.module.scss';

const Service = () => {
  return (
    <div className={styles.service}>
        <div className={styles.top}>
            <span>Our Services</span>
            <h1>How does it work?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className={styles.down}>
            <div className={styles.first}>
                <Image src={website} alt="analytics" className={styles.firstImg} />
                <h3>Website Design</h3>
                <p>Sed ut perspiciatis unde omnis iste natus 
                    error sit voluptatem accusantium doloremque 
                    laudantium, totam rem.
                </p>
            </div>
            <div className={styles.first}>
                <Image src={marketing} alt="analytics" className={styles.firstImg} />
                <h3>Website Design</h3>
                <p>Sed ut perspiciatis unde omnis iste natus 
                    error sit voluptatem accusantium doloremque 
                    laudantium, totam rem.
                </p>
            </div>
            <div className={styles.first}>
                <Image src={analytcs} alt="analytics" className={styles.firstImg} />
                <h3>Website Design</h3>
                <p>Sed ut perspiciatis unde omnis iste natus 
                    error sit voluptatem accusantium doloremque 
                    laudantium, totam rem.
                </p>
            </div>
        </div>
        <button>More Features</button>
    </div>
  )
}

export default Service;