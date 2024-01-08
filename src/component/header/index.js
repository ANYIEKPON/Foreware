'use client'
import { React, useState } from 'react';
import styles from '../header/header.module.scss';
import Image from 'next/image';
import pic from "../../../public/slideFore.PNG";
import { CiMenuFries } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { MdClose } from "react-icons/md";
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
            {
              openNav && <div className={styles.socialMedia}>
              <div className={styles.socialIcon}><LuFacebook /></div>
              <div className={styles.socialIcon}><RiTwitterXFill /></div>
              <div className={styles.socialIcon}><FaLinkedinIn /></div>
              <div className={styles.socialIcon}><FaGooglePlusG /></div>
            </div>
            }
          </div>
          <div onClick={() => setOpenNav(!openNav)}  className={styles.breadMenu}>{openNav ? <MdClose size={20} /> : <CiMenuFries size={20} />}</div>
      </div>

    </div>
  )
}

export default Header;