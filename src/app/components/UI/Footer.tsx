import Link from "next/link"
export default function Footer(){

    return(
        <footer className="h-1">
            <p>footer
            </p>
            <Link href="/About">about</Link>
        </footer>
    )
}