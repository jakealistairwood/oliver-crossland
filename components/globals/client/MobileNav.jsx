import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/elements/icons/Logo'
import NavLink from '@/components/elements/NavLink'

const MobileNav = ({
  scrolled,
  isLight,
  animationControls,
  mobileMenuOpen,
  setMobileMenuOpen,
  links,
}) => {
  return (
    <motion.header
      className={`w-full fixed z-[100] top-0 ${scrolled || mobileMenuOpen ? 'bg-white/[0.9]' : ''}`}
      variants={{
        initial: {
          backdropFilter: 'blur(0px)',
        },
        shrink: {
          backdropFilter: 'blur(16px)',
          width: '100%',
        },
      }}
      initial="initial"
      animate={animationControls}
      transition={{
        duration: 0.2,
        // ease: [0.6, 0.01, -0.05, 1],
        ease: 'easeInOut',
      }}
    >
      <div className="container sticky top-0 w-full z-[100]">
        <div className="w-full flex items-center justify-between py-4">
          <Link
            className={`${scrolled || mobileMenuOpen || isLight ? 'text-black' : 'text-white'}`}
            href="/"
            aria-label="Go to Homepage"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo scrolled={scrolled} isLight={isLight} />
          </Link>
          <button
            className="flex flex-col items-center justify-center gap-y-2 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            <div className={`h-[1px] w-[30px] ${isLight || scrolled || mobileMenuOpen ? 'bg-black' : 'bg-white'}`} />
            <div className={`h-[1px] w-[30px] ${isLight || scrolled || mobileMenuOpen ? 'bg-black' : 'bg-white'}`} />
            <div className={`h-[1px] w-[30px] ${isLight || scrolled || mobileMenuOpen ? 'bg-black' : 'bg-white'}`} />
          </button>
        </div>
      </div>
      {links && links.length > 0 && <MobileNavMenu links={links} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />}
    </motion.header>
  )
}

export default MobileNav

const MobileNavMenu = ({links, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
        <menu className={` ${mobileMenuOpen ? "flex" : "hidden"} flex-col items-start gap-x-10 text-black font-light pb-4`}>
            {links &&
                links.map((page, i) => (
                    <li
                        key={`nav-link-${i}`}
                        className="text-[2rem] font-light py-4 px-4 w-full sm:max-w-[640px] md:max-w-[768px] sm:mx-auto md:px-8"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <Link href={`/${page?.slug !== '/' ? page?.slug : ''}`} className="w-full block">
                            {page?.slug === "/" ? "Home" : page?.title}
                        </Link>
                    </li>
            ))}
            <li
                className="text-[2rem] font-light py-4 px-4 w-full sm:max-w-[640px] md:max-w-[768px] sm:mx-auto md:px-8"
                onClick={() => setMobileMenuOpen(false)}
            >
                <Link href="mailto:o.jcrossland@gmail.com" className="w-full block">
                    Let&apos;s Work Together
                </Link>
            </li>
        </menu>
  )
}
