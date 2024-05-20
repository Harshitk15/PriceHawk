import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
  { src: 'https://www.svgrepo.com/show/497323/money-send.svg', alt: 'pennywise' },
]


const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo">
            Price<span className='text-primary'>Hawk</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
          <Link href="https://pennywise-zeta.vercel.app" className="flex items-center gap-1">
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
            </Link>
          ))}
         
        </div>

      </nav>
    </header>
  )
}

export default Navbar