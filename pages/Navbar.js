import Link from 'next/link'
import Image from'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
               <Image src="/logo.jpg" width={235} height={210} />
            </div>
            <Link href="/"> 
            <a>Home</a>  
             </Link>
           <Link href="/About">
                <a>About Us</a> 
                </Link> 
           
        </nav>
     );
}
 
export default Navbar;