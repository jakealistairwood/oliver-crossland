'use client'

import React, {useState, useEffect, useRef} from 'react'
import {motion, useAnimation} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {useWindowSize} from '@/hooks/useWindowSize'
import {usePathname} from 'next/navigation'
import NavLink from '../../elements/NavLink'
import Logo from '../../elements/icons/Logo'
import MobileNav from './MobileNav'


const NavbarWrapper = ({ data }) => {
  const { navbar_data, pages } = data;
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const containerControls = useAnimation()
  const controls = useAnimation()

  const {width} = useWindowSize()

  const pathname = usePathname()

  const isLight = pathname.includes('/portfolio');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 100) {
        setScrolled(true)
      }
      if (scrollPosition <= 10) {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrolled) {
      containerControls.start('shrink')
      controls.start('hide')
    } else {
      containerControls.start('initial') // Revert to initial state
      controls.start('initial')
    }
  }, [scrolled])

  return width < 1080 ? (
    <>
        <MobileNav scrolled={scrolled} isLight={isLight} animationControls={containerControls} setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} links={pages} />
        {mobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-[99] backdrop-blur-lg" />}
    </>
  ) : (
    <motion.header
      variants={{
        initial: {
          backdropFilter: 'blur(0px)',
          width: '100%',
          marginInline: 'auto',
          background: 'none',
          borderRadius: '0px',
          paddingLeft: '0px',
          paddingRight: '0px',
        },
        shrink: {
          backdropFilter: 'blur(16px)',
          width: '60rem',
          marginInline: 'auto',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '1000px',
          paddingLeft: '1rem',
          paddingRight: '0.5rem',
        },
      }}
      initial="initial"
      animate={containerControls}
      transition={{
        duration: 0.2,
        // ease: [0.6, 0.01, -0.05, 1],
        ease: 'easeInOut',
      }}
      className={`fixed flex max-w-[1280px] justify-center left-1/2 -translate-x-1/2 ${isLight && 'bg-black/10 backdrop-blur-lg'} items-center w-full z-[99] py-2 mt-2`}
    >
      <div className="container">
        <nav className="flex items-center w-full justify-between">
          <div className="flex items-center gap-x-[129px]">
            <div className={`max-w-[250px] w-full relative`}>
              <Link
                className={`${scrolled || isLight ? 'text-black' : 'text-white'}`}
                aria-label="Go to Homepage"
                href="/"
              >
                <Logo scrolled={scrolled} isLight={isLight} />
              </Link>
            </div>
            <menu
              className={`flex items-center gap-x-10 ${scrolled || isLight ? 'text-black' : 'text-white'} font-light`}
            >
                {pages && pages.map((page, i) => (
                    <li key={`nav-link-${i}`}>
                        <NavLink link={`/${page?.slug !== "/" ? page?.slug : ""}`} label={`${page?.slug === "/" ? "Home" : page?.title}`} isLight={isLight} scrolled={scrolled} />
                    </li>
                ))}
            </menu>
          </div>
          <div className="flex items-center text-white font-medium gap-10">
            <div
              // variants={{
              //     initial: {
              //         height: "auto",
              //         width: "auto",
              //         opacity: 1,
              //         pointerEvents: "auto",
              //     },
              //     hide: {
              //         height: 0,
              //         width: 0,
              //         opacity: 0,
              //         pointerEvents: "none"
              //     }
              // }}
              // initial="initial"
              // transition={{
              //     duration: 0.3,
              // }}
              // animate={controls}
              className={`${scrolled ? 'hidden' : 'flex'} items-center gap-2`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.39641H9.05677L11.7789 4.2759L11.3187 3.15538L8.56673 4.28785L10.6703 2.18426L9.81574 1.32968L7.71215 3.43327L8.84462 0.681275L7.7241 0.221115L6.60359 2.94323V0H5.39641V2.94024L4.2759 0.221115L3.15538 0.681275L4.28785 3.43327L2.18426 1.32968L1.32968 2.18426L3.43327 4.28785L0.681275 3.15538L0.221115 4.2759L2.94323 5.39641H0V6.60359H2.94024L0.221115 7.7241L0.681275 8.84462L3.43327 7.70916L1.32968 9.81574L2.18426 10.6703L4.29084 8.56673L3.15538 11.3187L4.2759 11.7789L5.39641 9.05976V12H6.60359V9.05976L7.7241 11.7789L8.84462 11.3187L7.70916 8.56673L9.81574 10.6703L10.6703 9.81574L8.56673 7.70916L11.3187 8.84462L11.7789 7.7241L9.05976 6.60359H12V5.39641Z"
                  fill={isLight ? 'black' : 'white'}
                />
              </svg>
              <span className={`font-light ${isLight ? 'text-black' : 'text-white'}`}>
                Available For Projects
              </span>
            </div>
            <Link
              href="mailto:o.jcrossland@gmail.com"
              className={`py-3 px-4 rounded-[28px] text-white font-sm backdrop-blur-lg relative overflow-hidden`}
            >
              <div
                className={`inset-0 absolute ${scrolled ? 'bg-black' : 'bg-white backdrop-blur-lg'} z-[-1]`}
              />
              <span className={`${scrolled ? 'text-white' : 'text-navy'} font-light`}>
                Let&apos;s Work Together
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

export default NavbarWrapper


// function MenuButton({ isActive, setIsActive }) {
//     return (
//         <button className="menu-btn block lg:hidden" onClick={() => setIsActive(!isActive)}>
//             <div className="flex items-center justify-center gap-2 cursor-pointer">
//                 <div className={`menu-btn__burger ${isActive ? "menu-btn__burger--active" : ""}`} />
//                 <div className="menu-btn__label flex items-center relative">
//                     <motion.p variants={animateText} animate={!isActive ? "open" : "closed"} >Menu</motion.p>
//                     <motion.p variants={animateText} animate={isActive ? "open" : "closed"}>Close</motion.p>
//                 </div>
//             </div>
//         </button>
//     )
// }

// export default MenuButton;