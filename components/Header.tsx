'use client'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname()
  return (
    <header>
      <div className="main-container inner">
        <Link href="/" >  

          <Image
            src="/logo.svg"
            alt="image logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        <nav>
          <Link href="/" className={cn("nav-link",{
            "is-active": pathname === "/",
            "is-home" : true
            
          })}>Home</Link>
          <p>Search Modal</p>

          <Link href="/coins"
          className={cn("nav-link",{
            "is-active": pathname === "/",
            "is-home" : true
            
          })} 
          >All coins</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header