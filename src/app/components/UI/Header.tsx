import Link from "next/link";
import Image from "next/image";
import logo from '../../../../public/images/logo.png';
export default function(){

    return(
        <header className="items-center flex justify-between ">
            {/* <Image
            src={logo}
            height="200"
            width="auto"
            alt="cosmo explorer logo"
            className="ml-2"/> */}

<nav className="mr-8">
    <Link className="text-sm px-3" href="/">HOME</Link>
    <Link className="text-sm px-3" href="/Gallery">GALLERY</Link>
    <Link className="text-sm px-3" href="SolarSystemMap">SOLAR SYSTEM</Link>
    <Link className="text-sm pox-3" href="Quiz">QUIZ</Link>
</nav>
        </header>
    )
}