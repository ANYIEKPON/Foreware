'use client'
import { React, useState } from 'react';
import styles from '../header/header.module.scss';
import Image from 'next/image';
import pic from "../../../public/slideFore.PNG";
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';

const Header = () => {
const [openNav, setOpenNav] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
          <div className={styles.nav_logo}>
              <Link href="/" className="link"><Image src={pic} alt="logo" className={styles.img} /></Link>
          </div>
          <div className={openNav ? styles.showMenu : styles.nav_menu}>
            <Link href="/" className="link"><span>Home</span></Link>
            <Link href="/" className="link"><span>About Us</span></Link>
            <Link href="/" className="link"><span>Services</span></Link>
            <Link href="/" className="link"><span>Industries</span></Link>
            <Link href="/" className="link"><span>Contact Us</span></Link>
          </div>
          <div onClick={() => setOpenNav(!openNav)}  className={styles.breadMenu}><CiMenuFries /></div>
      </div>

    </div>
  )
}

export default Header;