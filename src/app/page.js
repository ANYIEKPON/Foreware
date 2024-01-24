import Image from 'next/image'
import styles from './page.module.scss';
import pic from "../../public/1.png"
import Service from '../component/services';
import Encrypt from '../component/encrypt/Encrypt';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.firstsection}>
            <div className={styles.leftside}>
              <span>Whatever business you do</span>
              <h1>Foreware is what your <span>business</span> need</h1>
              <p>It is essential for your business to plunge into a realm 
                with infinite possibilities. At Foreware Technologies, we 
                offer unique services and state-of-the-art technologies that 
                give your company....<Link href="/why-choose-us" className="link"> <span>Read More</span></Link> 
              </p>
              {/* <button>Read More</button> */}
            </div>
            <div className={styles.rightside}>
              <Image className={styles.pageImge} src={pic} alt="img"/>
            </div>
        </div>
        <div className={styles.secondSection}> 
          <Service />
        </div>
        <div className={styles.thirdSection}>
          <Encrypt />
        </div>
      </div>
    </main>
  )
}
