import Image from 'next/image'
import styles from './page.module.scss';
import pic from "../../public/1.png"
import Service from '../component/services';
import Encrypt from '../component/encrypt/Encrypt';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.firstsection}>
            <div className={styles.leftside}>
              <span>Whatever business you do</span>
              <h1>Foreware is what your <span>business</span> need</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
              </p>
              <button>Learn More</button>
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
