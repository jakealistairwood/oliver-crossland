import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/elements/icons/Logo'
import NavLink from '@/components/elements/NavLink'

const MobileNav = ({
  scrolled,
  isLight,
  animationControls,
  currentSectionIsDark,
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
            {/* <div className={`h-[1px] w-[30px] ${!isLight ? 'bg-white' : 'bg-black'}`} />
            <div className={`h-[1px] w-[30px] ${!isLight ? 'bg-white' : 'bg-black'}`} />
            <div className={`h-[1px] w-[30px] ${!isLight ? 'bg-white' : 'bg-black'}`} /> */}
            <div className={`h-[1px] w-[30px] ${isLight || scrolled ? 'bg-black' : 'bg-white'}`} />
            <div className={`h-[1px] w-[30px] ${isLight || scrolled ? 'bg-black' : 'bg-white'}`} />
            <div className={`h-[1px] w-[30px] ${isLight || scrolled ? 'bg-black' : 'bg-white'}`} />
            {/* <div className="h-[1px] w-[30px] bg-white" />
                        <div className="h-[1px] w-[30px] bg-white" /> */}
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
                        className="text-[2rem] font-light py-4 px-4 w-full"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <NavLink
                            link={`/${page?.slug !== '/' ? page?.slug : ''}`}
                            label={`${page?.slug === '/' ? 'Home' : page?.title}`}
                        />
                    </li>
            ))}
            <li
                className="text-[2rem] font-light py-4 px-4 w-full"
                onClick={() => setMobileMenuOpen(false)}
            >
                <NavLink
                    link="mailto:o.jcrossland@gmail.com"
                    label="Get in Touch"
                />
            </li>
        </menu>
  )
}
