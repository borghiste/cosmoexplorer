'use client'
import Link from "next/link";

import styles from '../UI//Header.module.css'
import { useState } from "react";
export default function(){

    const [toggleHamburger, settoggleHamburger ] = useState(false)

    return(
        <header className="items-center flex justify-end ">
            

<nav className={`  md:mr-8 ${styles.navigation} ${toggleHamburger  ? styles.visible : "" }`} onClick={()=>{ toggleHamburger ? settoggleHamburger(!toggleHamburger) : null}}>
    
    <Link className="text-sm px-3" href="/">HOME</Link>
    <Link className="text-sm px-3" href="/Gallery" >GALLERY</Link>
    <Link className="text-sm px-3" href="/SolarSystemMap">PLANETS</Link>
    <Link href={''}></Link>
    <Link className="text-sm pox-3" href="/Quiz">QUIZ</Link>
</nav>

<button
     onClick={()=>{settoggleHamburger(!toggleHamburger)}}
        type="button"
        id="hamburger"
        className={`${styles.hamburger} ${toggleHamburger ? styles.toggle : ""} z-20 `}>
        <span className={`${styles.span}`}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
      </button> 
        </header>
    )
}