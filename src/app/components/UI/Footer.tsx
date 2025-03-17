import Link from "next/link"
export default function Footer(){

    return(
        <footer className="absolute flex-col justify-start flex">
  
      

           <p className="text-sm">Author: Stefano Borghi 
           </p>
            <Link href={'mailto:sborghi92@gmail.com'} className="text-sm">email:sborghi92@gmail.com</Link>
            <br/>
           
            <Link href="/About" className="text-sm">About</Link>
     

        </footer>
    )
}