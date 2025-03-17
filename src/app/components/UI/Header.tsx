'use client'
import Link from "next/link";
import Image from "next/image";
import logo from '../../../../public/images/logo.png';
import styles from '../UI//Header.module.css'
import { useState } from "react";
export default function(){

    const [toggleHamburger, settoggleHamburger ] = useState(false)

    return(
        <header className="items-center flex justify-between header  ">
            {/* <Image
            src={logo}
            height="200"
            width="auto"
            alt="cosmo explorer logo"
            className="ml-2"/> */}

     <button
        
        onClick={()=>{settoggleHamburger(!toggleHamburger)}}
        type="button"
        id="hamburger"
        className={`${styles.hamburger} ${toggleHamburger ? styles.toggle : ""}`}>
        <span className={`${styles.span}`}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
      </button> 
<nav className={`mr-8 ${styles.navigation} ${toggleHamburger  ? styles.visible : "" }`}>
    
    <Link className="text-sm px-3" href="/">HOME</Link>
    <Link className="text-sm px-3" href="/Gallery" >GALLERY</Link>
    <Link className="text-sm px-3" href="/SolarSystemMap">SOLAR SYSTEM</Link>
    <Link className="text-sm pox-3" href="/Quiz">QUIZ</Link>
</nav>
        </header>
    )
}