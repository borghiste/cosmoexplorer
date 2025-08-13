import Link from "next/link"
export default function Footer(){

    return(
        <footer className=" flex justify-between   ">
  
      
<div className="justify-start flex-col">

           <p className="text-sm">Author: Stefano Borghi 
           </p>
            <Link href={'mailto:sborghi92@gmail.com'} className="text-sm">email:sborghi92@gmail.com</Link>
            
            
</div>
             <Link href="/AboutPage" className="text-sm mr-8 ">About</Link> 
           
     

        </footer>
    )
}