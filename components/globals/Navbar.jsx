import Logo from '../../assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import UpRightArrow from '../../assets/images/up-right-arrow.svg'

const Navbar = () => {
  return (
    <header className="fixed flex justify-center items-center w-full z-[99] py-4">
      <div className="container">
        <nav className="flex items-center w-full justify-between">
          <div className="flex items-center gap-x-[129px]">
            <div className="max-w-[250px] w-full relative">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="oli crossland videography"
                  width={150}
                  height={56}
                  objectFit="cover"
                  priority
                />
              </Link>
            </div>
            <ul className="flex items-center gap-x-10 text-white font-medium">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/about">Services</Link>
              </li>
              <li>
                <Link href="/projects">Portfolio</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center text-white font-medium gap-10">
            <div className="flex items-center gap-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.39641H9.05677L11.7789 4.2759L11.3187 3.15538L8.56673 4.28785L10.6703 2.18426L9.81574 1.32968L7.71215 3.43327L8.84462 0.681275L7.7241 0.221115L6.60359 2.94323V0H5.39641V2.94024L4.2759 0.221115L3.15538 0.681275L4.28785 3.43327L2.18426 1.32968L1.32968 2.18426L3.43327 4.28785L0.681275 3.15538L0.221115 4.2759L2.94323 5.39641H0V6.60359H2.94024L0.221115 7.7241L0.681275 8.84462L3.43327 7.70916L1.32968 9.81574L2.18426 10.6703L4.29084 8.56673L3.15538 11.3187L4.2759 11.7789L5.39641 9.05976V12H6.60359V9.05976L7.7241 11.7789L8.84462 11.3187L7.70916 8.56673L9.81574 10.6703L10.6703 9.81574L8.56673 7.70916L11.3187 8.84462L11.7789 7.7241L9.05976 6.60359H12V5.39641Z"
                  fill="white"
                />
              </svg>
              <span>Available For Projects</span>
            </div>
            <Link href="/contact" className="py-3 px-4 rounded-[28px] text-white font-medium backdrop-blur-lg relative overflow-hidden border border-solid border-[#dbd7d7]">
                <div className="inset-0 absolute bg-[#DCD5DB] z-[-1] backdrop-blur-lg opacity-[19%]" />
                <span className="text-white">Let's Work Together</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
