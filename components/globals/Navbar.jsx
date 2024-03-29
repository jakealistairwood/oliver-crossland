'use client'

import React, {useState, useEffect, useRef} from 'react'
import {motion, useAnimation} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import UpRightArrow from '../../assets/images/up-right-arrow.svg'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  const containerControls = useAnimation()
  const controls = useAnimation()

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

  return (
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
        ease: "easeInOut"
      }}
      className={`fixed flex justify-center left-1/2 -translate-x-1/2 items-center w-full z-[99] py-2 mt-2`}
    >
      <div className="container">
        <nav className="flex items-center w-full justify-between">
          <div className="flex items-center gap-x-[129px]">
            <div className={`max-w-[250px] w-full relative`}>
              <Link className={`${scrolled ? 'text-black' : 'text-white'}`} href="/">
                <Logo scrolled={scrolled} />
              </Link>
            </div>
            <ul
              className={`flex items-center gap-x-10 ${scrolled ? 'text-black' : 'text-white'} font-light`}
            >
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
                            className={`${scrolled ? "hidden" : "flex"} items-center gap-2`}
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
                                fill="white"
                                />
                            </svg>
                            <span>Available For Projects</span>
                        </div>
            <Link
              href="/contact"
              className={`py-3 px-4 rounded-[28px] text-white font-sm backdrop-blur-lg relative overflow-hidden`}
            >
              <div
                className={`inset-0 absolute ${scrolled ? 'bg-lightBlue' : 'bg-lightBlue backdrop-blur-lg'} z-[-1]`}
              />
              <span className="text-navy">
                Let&apos;s Work Together
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar

const Logo = ({ scrolled }) => {
  return (
    <svg
      width="109"
      height="28"
      viewBox="0 0 109 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8123 7.47517C10.8123 8.65495 10.5964 9.66928 10.1648 10.5181C9.73319 11.3634 9.14151 12.0145 8.38975 12.4713C7.6416 12.9245 6.79093 13.1511 5.83776 13.1511C4.88098 13.1511 4.02672 12.9245 3.27497 12.4713C2.52682 12.0145 1.93693 11.3616 1.5053 10.5127C1.07367 9.66388 0.857859 8.65136 0.857859 7.47517C0.857859 6.29539 1.07367 5.28287 1.5053 4.43759C1.93693 3.58873 2.52682 2.93769 3.27497 2.48448C4.02672 2.02768 4.88098 1.79927 5.83776 1.79927C6.79093 1.79927 7.6416 2.02768 8.38975 2.48448C9.14151 2.93769 9.73319 3.58873 10.1648 4.43759C10.5964 5.28287 10.8123 6.29539 10.8123 7.47517ZM9.16129 7.47517C9.16129 6.57595 9.01561 5.8188 8.72426 5.20373C8.43651 4.58507 8.04086 4.11747 7.53729 3.80095C7.03732 3.48082 6.47081 3.32076 5.83776 3.32076C5.20111 3.32076 4.6328 3.48082 4.13283 3.80095C3.63286 4.11747 3.2372 4.58507 2.94586 5.20373C2.6581 5.8188 2.51423 6.57595 2.51423 7.47517C2.51423 8.3744 2.6581 9.13334 2.94586 9.75201C3.2372 10.3671 3.63286 10.8347 4.13283 11.1548C4.6328 11.4713 5.20111 11.6296 5.83776 11.6296C6.47081 11.6296 7.03732 11.4713 7.53729 11.1548C8.04086 10.8347 8.43651 10.3671 8.72426 9.75201C9.01561 9.13334 9.16129 8.3744 9.16129 7.47517ZM13.6149 1.95034V13H12.0017V1.95034H13.6149ZM15.0255 13V4.71276H16.6387V13H15.0255ZM15.8402 3.43406C15.5596 3.43406 15.3186 3.34054 15.1172 3.1535C14.9194 2.96287 14.8205 2.73626 14.8205 2.47369C14.8205 2.20752 14.9194 1.98092 15.1172 1.79388C15.3186 1.60324 15.5596 1.50793 15.8402 1.50793C16.1207 1.50793 16.3599 1.60324 16.5578 1.79388C16.7592 1.98092 16.8599 2.20752 16.8599 2.47369C16.8599 2.73626 16.7592 2.96287 16.5578 3.1535C16.3599 3.34054 16.1207 3.43406 15.8402 3.43406ZM25.1388 4.71276L22.1336 13H20.4071L17.3965 4.71276H19.1284L21.2272 11.09H21.3135L23.4069 4.71276H25.1388ZM29.185 13.1673C28.3685 13.1673 27.6653 12.9928 27.0754 12.6439C26.4891 12.2914 26.0359 11.7968 25.7158 11.1602C25.3993 10.5199 25.241 9.76999 25.241 8.91033C25.241 8.06147 25.3993 7.31331 25.7158 6.66587C26.0359 6.01843 26.4819 5.51307 27.0539 5.14978C27.6294 4.78649 28.302 4.60485 29.0717 4.60485C29.5393 4.60485 29.9925 4.68218 30.4313 4.83685C30.8702 4.99152 31.264 5.23431 31.6129 5.56522C31.9618 5.89614 32.237 6.32596 32.4384 6.85471C32.6398 7.37985 32.7405 8.0183 32.7405 8.77005V9.34196H26.1528V8.1334H31.1597C31.1597 7.70897 31.0734 7.33309 30.9007 7.00578C30.7281 6.67486 30.4853 6.41409 30.1724 6.22345C29.863 6.03282 29.4997 5.9375 29.0825 5.9375C28.6293 5.9375 28.2336 6.049 27.8955 6.27201C27.561 6.49142 27.302 6.77917 27.1186 7.13527C26.9388 7.48776 26.8488 7.87083 26.8488 8.28447V9.22866C26.8488 9.78258 26.9459 10.2538 27.1402 10.6422C27.338 11.0307 27.6132 11.3274 27.9657 11.5325C28.3182 11.7339 28.73 11.8346 29.2012 11.8346C29.5069 11.8346 29.7857 11.7914 30.0375 11.7051C30.2893 11.6152 30.5069 11.4821 30.6903 11.3059C30.8738 11.1296 31.014 10.912 31.1111 10.653L32.638 10.9282C32.5157 11.3778 32.2963 11.7717 31.9798 12.1098C31.6669 12.4443 31.273 12.7051 30.7982 12.8921C30.327 13.0755 29.7893 13.1673 29.185 13.1673ZM33.7708 13V4.71276H35.33V6.02922H35.4164C35.5674 5.58321 35.8336 5.23251 36.2149 4.97713C36.5997 4.71815 37.035 4.58866 37.5205 4.58866C37.6213 4.58866 37.74 4.59226 37.8766 4.59946C38.0169 4.60665 38.1266 4.61564 38.2058 4.62643V6.1695C38.141 6.15152 38.0259 6.13173 37.8604 6.11015C37.695 6.08497 37.5295 6.07238 37.3641 6.07238C36.9828 6.07238 36.6429 6.15331 36.3444 6.31517C36.0494 6.47344 35.8156 6.69465 35.643 6.9788C35.4703 7.25936 35.384 7.57948 35.384 7.93917V13H33.7708ZM51.4103 5.54364H49.727C49.6622 5.18395 49.5417 4.86742 49.3655 4.59406C49.1892 4.3207 48.9734 4.0887 48.718 3.89806C48.4627 3.70743 48.1767 3.56355 47.8602 3.46643C47.5472 3.36932 47.2145 3.32076 46.862 3.32076C46.2254 3.32076 45.6553 3.48082 45.1517 3.80095C44.6517 4.12107 44.2561 4.59046 43.9647 5.20913C43.677 5.82779 43.5331 6.58314 43.5331 7.47517C43.5331 8.3744 43.677 9.13334 43.9647 9.75201C44.2561 10.3707 44.6535 10.8383 45.1571 11.1548C45.6607 11.4713 46.2272 11.6296 46.8566 11.6296C47.2055 11.6296 47.5365 11.5828 47.8494 11.4893C48.1659 11.3922 48.4519 11.2501 48.7072 11.0631C48.9626 10.876 49.1784 10.6476 49.3547 10.3779C49.5345 10.1045 49.6586 9.79157 49.727 9.43908L51.4103 9.44447C51.3204 9.9876 51.1459 10.4876 50.887 10.9444C50.6316 11.3976 50.3025 11.7896 49.8996 12.1206C49.5004 12.4479 49.0436 12.7015 48.5292 12.8813C48.0148 13.0611 47.4537 13.1511 46.8459 13.1511C45.8891 13.1511 45.0366 12.9245 44.2885 12.4713C43.5403 12.0145 42.9504 11.3616 42.5188 10.5127C42.0908 9.66388 41.8767 8.65136 41.8767 7.47517C41.8767 6.29539 42.0926 5.28287 42.5242 4.43759C42.9558 3.58873 43.5457 2.93769 44.2939 2.48448C45.042 2.02768 45.8927 1.79927 46.8459 1.79927C47.4321 1.79927 47.9789 1.8838 48.486 2.05286C48.9968 2.21831 49.4554 2.4629 49.8618 2.78662C50.2683 3.10674 50.6046 3.49881 50.8708 3.96281C51.1369 4.42321 51.3168 4.95015 51.4103 5.54364ZM52.5161 13V4.71276H54.0753V6.02922H54.1617C54.3127 5.58321 54.5789 5.23251 54.9602 4.97713C55.345 4.71815 55.7803 4.58866 56.2658 4.58866C56.3666 4.58866 56.4853 4.59226 56.6219 4.59946C56.7622 4.60665 56.8719 4.61564 56.9511 4.62643V6.1695C56.8863 6.15152 56.7712 6.13173 56.6057 6.11015C56.4403 6.08497 56.2748 6.07238 56.1094 6.07238C55.7281 6.07238 55.3882 6.15331 55.0897 6.31517C54.7947 6.47344 54.5609 6.69465 54.3883 6.9788C54.2156 7.25936 54.1293 7.57948 54.1293 7.93917V13H52.5161ZM60.7815 13.1673C60.0045 13.1673 59.3265 12.9892 58.7474 12.6331C58.1683 12.277 57.7187 11.7789 57.3986 11.1386C57.0785 10.4984 56.9184 9.75021 56.9184 8.89415C56.9184 8.03449 57.0785 7.28274 57.3986 6.63889C57.7187 5.99505 58.1683 5.49508 58.7474 5.13899C59.3265 4.7829 60.0045 4.60485 60.7815 4.60485C61.5584 4.60485 62.2364 4.7829 62.8155 5.13899C63.3946 5.49508 63.8442 5.99505 64.1643 6.63889C64.4845 7.28274 64.6445 8.03449 64.6445 8.89415C64.6445 9.75021 64.4845 10.4984 64.1643 11.1386C63.8442 11.7789 63.3946 12.277 62.8155 12.6331C62.2364 12.9892 61.5584 13.1673 60.7815 13.1673ZM60.7869 11.813C61.2904 11.813 61.7077 11.6799 62.0386 11.4138C62.3695 11.1476 62.6141 10.7933 62.7724 10.3509C62.9342 9.90847 63.0151 9.42109 63.0151 8.88875C63.0151 8.36001 62.9342 7.87443 62.7724 7.43201C62.6141 6.98599 62.3695 6.6281 62.0386 6.35834C61.7077 6.08857 61.2904 5.95369 60.7869 5.95369C60.2797 5.95369 59.8589 6.08857 59.5244 6.35834C59.1934 6.6281 58.9471 6.98599 58.7852 7.43201C58.6269 7.87443 58.5478 8.36001 58.5478 8.88875C58.5478 9.42109 58.6269 9.90847 58.7852 10.3509C58.9471 10.7933 59.1934 11.1476 59.5244 11.4138C59.8589 11.6799 60.2797 11.813 60.7869 11.813ZM71.8956 6.73601L70.4335 6.99499C70.3723 6.80795 70.2752 6.6299 70.1421 6.46085C70.0126 6.29179 69.8364 6.15331 69.6134 6.04541C69.3904 5.9375 69.1116 5.88355 68.7771 5.88355C68.3203 5.88355 67.939 5.98606 67.6333 6.19108C67.3275 6.39251 67.1747 6.65328 67.1747 6.97341C67.1747 7.25037 67.2772 7.47337 67.4822 7.64243C67.6872 7.81148 68.0182 7.94996 68.475 8.05787L69.7914 8.36001C70.554 8.53626 71.1223 8.80782 71.4963 9.1747C71.8704 9.54159 72.0575 10.0182 72.0575 10.6045C72.0575 11.1008 71.9136 11.5433 71.6258 11.9317C71.3417 12.3166 70.9442 12.6187 70.4335 12.8381C69.9263 13.0576 69.3382 13.1673 68.6692 13.1673C67.7412 13.1673 66.984 12.9694 66.3978 12.5738C65.8115 12.1745 65.4518 11.608 65.3187 10.8742L66.8779 10.6368C66.9751 11.0433 67.1747 11.3508 67.4768 11.5594C67.779 11.7645 68.1728 11.867 68.6584 11.867C69.1871 11.867 69.6098 11.7573 69.9263 11.5379C70.2428 11.3149 70.4011 11.0433 70.4011 10.7232C70.4011 10.4642 70.304 10.2466 70.1097 10.0703C69.9191 9.89408 69.626 9.761 69.2303 9.67108L67.8275 9.36354C67.0542 9.18729 66.4823 8.90674 66.1118 8.52187C65.7449 8.137 65.5615 7.64962 65.5615 7.05973C65.5615 6.57055 65.6982 6.14252 65.9715 5.77564C66.2449 5.40876 66.6226 5.1228 67.1045 4.91778C67.5865 4.70916 68.1386 4.60485 68.7609 4.60485C69.6565 4.60485 70.3615 4.79908 70.8759 5.18755C71.3902 5.57242 71.7301 6.08857 71.8956 6.73601ZM79.2816 6.73601L77.8194 6.99499C77.7583 6.80795 77.6612 6.6299 77.5281 6.46085C77.3986 6.29179 77.2223 6.15331 76.9993 6.04541C76.7763 5.9375 76.4976 5.88355 76.163 5.88355C75.7062 5.88355 75.325 5.98606 75.0192 6.19108C74.7135 6.39251 74.5606 6.65328 74.5606 6.97341C74.5606 7.25037 74.6631 7.47337 74.8682 7.64243C75.0732 7.81148 75.4041 7.94996 75.8609 8.05787L77.1774 8.36001C77.9399 8.53626 78.5082 8.80782 78.8823 9.1747C79.2564 9.54159 79.4434 10.0182 79.4434 10.6045C79.4434 11.1008 79.2995 11.5433 79.0118 11.9317C78.7276 12.3166 78.3302 12.6187 77.8194 12.8381C77.3123 13.0576 76.7242 13.1673 76.0551 13.1673C75.1271 13.1673 74.37 12.9694 73.7837 12.5738C73.1974 12.1745 72.8377 11.608 72.7046 10.8742L74.2639 10.6368C74.361 11.0433 74.5606 11.3508 74.8628 11.5594C75.1649 11.7645 75.5588 11.867 76.0443 11.867C76.5731 11.867 76.9957 11.7573 77.3123 11.5379C77.6288 11.3149 77.787 11.0433 77.787 10.7232C77.787 10.4642 77.6899 10.2466 77.4957 10.0703C77.3051 9.89408 77.0119 9.761 76.6163 9.67108L75.2135 9.36354C74.4401 9.18729 73.8682 8.90674 73.4977 8.52187C73.1309 8.137 72.9474 7.64962 72.9474 7.05973C72.9474 6.57055 73.0841 6.14252 73.3575 5.77564C73.6308 5.40876 74.0085 5.1228 74.4905 4.91778C74.9725 4.70916 75.5246 4.60485 76.1469 4.60485C77.0425 4.60485 77.7475 4.79908 78.2618 5.18755C78.7762 5.57242 79.1161 6.08857 79.2816 6.73601ZM82.0707 1.95034V13H80.4575V1.95034H82.0707ZM85.893 13.1834C85.3679 13.1834 84.8931 13.0863 84.4686 12.8921C84.0442 12.6943 83.7079 12.4083 83.4597 12.0342C83.2151 11.6602 83.0928 11.2016 83.0928 10.6584C83.0928 10.1908 83.1827 9.80596 83.3626 9.50382C83.5424 9.20168 83.7852 8.96249 84.091 8.78624C84.3967 8.60999 84.7384 8.47691 85.1161 8.38698C85.4937 8.29706 85.8786 8.22872 86.2707 8.18196C86.767 8.12441 87.1699 8.07765 87.4792 8.04168C87.7886 8.00212 88.0134 7.93917 88.1536 7.85285C88.2939 7.76652 88.3641 7.62624 88.3641 7.43201V7.39424C88.3641 6.92305 88.231 6.55796 87.9648 6.29899C87.7022 6.04001 87.3102 5.91052 86.7886 5.91052C86.2455 5.91052 85.8175 6.03102 85.5045 6.27201C85.1952 6.50941 84.9812 6.77378 84.8625 7.06513L83.3464 6.71982C83.5262 6.21626 83.7888 5.80981 84.1341 5.50048C84.483 5.18755 84.8841 4.96094 85.3373 4.82066C85.7905 4.67679 86.2671 4.60485 86.767 4.60485C87.098 4.60485 87.4487 4.64442 87.8191 4.72355C88.1932 4.79908 88.5421 4.93936 88.8658 5.14438C89.1932 5.34941 89.4611 5.64255 89.6697 6.02383C89.8784 6.4015 89.9827 6.89248 89.9827 7.49675V13H88.4072V11.867H88.3425C88.2382 12.0756 88.0817 12.2806 87.8731 12.482C87.6645 12.6835 87.3965 12.8507 87.0692 12.9838C86.7419 13.1169 86.3498 13.1834 85.893 13.1834ZM86.2437 11.8886C86.6897 11.8886 87.071 11.8004 87.3875 11.6242C87.7076 11.4479 87.9504 11.2177 88.1159 10.9336C88.2849 10.6458 88.3695 10.3383 88.3695 10.011V8.9427C88.3119 9.00025 88.2004 9.05421 88.035 9.10456C87.8731 9.15132 87.6879 9.19269 87.4792 9.22866C87.2706 9.26103 87.0674 9.2916 86.8696 9.32038C86.6717 9.34556 86.5063 9.36714 86.3732 9.38512C86.0603 9.42469 85.7743 9.49123 85.5153 9.58475C85.2599 9.67827 85.0549 9.81315 84.9003 9.9894C84.7492 10.1621 84.6737 10.3923 84.6737 10.68C84.6737 11.0793 84.8211 11.3814 85.1161 11.5864C85.411 11.7878 85.7869 11.8886 86.2437 11.8886ZM92.9849 8.07945V13H91.3717V4.71276H92.9202V6.06159H93.0227C93.2133 5.62277 93.5119 5.27028 93.9183 5.00411C94.3283 4.73794 94.8445 4.60485 95.4668 4.60485C96.0315 4.60485 96.5261 4.72355 96.9505 4.96094C97.3749 5.19474 97.704 5.54364 97.9378 6.00764C98.1716 6.47164 98.2885 7.04534 98.2885 7.72875V13H96.6753V7.92299C96.6753 7.3223 96.5189 6.85291 96.2059 6.5148C95.893 6.1731 95.4632 6.00224 94.9164 6.00224C94.5424 6.00224 94.2097 6.08317 93.9183 6.24503C93.6306 6.40689 93.4021 6.64429 93.2331 6.95722C93.0676 7.26655 92.9849 7.64063 92.9849 8.07945ZM102.795 13.1619C102.126 13.1619 101.529 12.991 101.003 12.6493C100.482 12.304 100.072 11.813 99.7733 11.1764C99.4784 10.5361 99.3309 9.76819 99.3309 8.87256C99.3309 7.97694 99.4802 7.2108 99.7787 6.57415C100.081 5.9375 100.495 5.45012 101.02 5.11201C101.545 4.77391 102.14 4.60485 102.806 4.60485C103.32 4.60485 103.734 4.69118 104.046 4.86383C104.363 5.03288 104.608 5.23071 104.78 5.45731C104.956 5.68392 105.093 5.88355 105.19 6.0562H105.287V1.95034H106.901V13H105.325V11.7105H105.19C105.093 11.8868 104.953 12.0882 104.769 12.3148C104.59 12.5414 104.341 12.7392 104.025 12.9083C103.708 13.0773 103.298 13.1619 102.795 13.1619ZM103.151 11.786C103.615 11.786 104.007 11.6638 104.327 11.4192C104.651 11.171 104.895 10.8275 105.061 10.3887C105.23 9.94983 105.314 9.43908 105.314 8.85638C105.314 8.28088 105.232 7.77731 105.066 7.34568C104.901 6.91406 104.658 6.57775 104.338 6.33676C104.018 6.09576 103.622 5.97527 103.151 5.97527C102.665 5.97527 102.261 6.10116 101.937 6.35294C101.613 6.60472 101.369 6.94823 101.203 7.38345C101.041 7.81867 100.96 8.30965 100.96 8.85638C100.96 9.4103 101.043 9.90847 101.208 10.3509C101.374 10.7933 101.619 11.144 101.942 11.403C102.27 11.6584 102.672 11.786 103.151 11.786Z"
        fill="currentColor"
      />
      <path
        d="M1.17188 16.2727L3.89915 23.9645H3.97585L6.70312 16.2727H7.53835L4.36364 25H3.51136L0.336648 16.2727H1.17188ZM8.64494 25V18.4545H9.40773V25H8.64494ZM9.03273 17.3295C8.87648 17.3295 8.74295 17.277 8.63216 17.1719C8.52136 17.0639 8.46597 16.9347 8.46597 16.7841C8.46597 16.6335 8.52136 16.5057 8.63216 16.4006C8.74295 16.2926 8.87648 16.2386 9.03273 16.2386C9.18898 16.2386 9.3225 16.2926 9.4333 16.4006C9.54409 16.5057 9.59949 16.6335 9.59949 16.7841C9.59949 16.9347 9.54409 17.0639 9.4333 17.1719C9.3225 17.277 9.18898 17.3295 9.03273 17.3295ZM13.5303 25.1364C12.9934 25.1364 12.5232 24.9943 12.1198 24.7102C11.7164 24.4261 11.401 24.0298 11.1738 23.5213C10.9493 23.0128 10.8371 22.4205 10.8371 21.7443C10.8371 21.071 10.9493 20.4815 11.1738 19.9759C11.401 19.4673 11.7178 19.0724 12.124 18.7912C12.5303 18.5071 13.0033 18.3651 13.5431 18.3651C13.9408 18.3651 14.2718 18.4361 14.536 18.5781C14.8002 18.7173 15.0118 18.8906 15.1709 19.098C15.33 19.3054 15.4536 19.5071 15.5417 19.7031H15.6098V16.2727H16.3726V25H15.6312V23.7855H15.5417C15.4536 23.9844 15.3286 24.1889 15.1667 24.3991C15.0047 24.6065 14.7902 24.7812 14.5232 24.9233C14.259 25.0653 13.928 25.1364 13.5303 25.1364ZM13.6198 24.4418C14.0431 24.4418 14.4039 24.3267 14.7022 24.0966C15.0005 23.8636 15.2277 23.544 15.384 23.1378C15.5431 22.7287 15.6226 22.2599 15.6226 21.7315C15.6226 21.2088 15.5445 20.7472 15.3883 20.3466C15.232 19.9432 15.0047 19.6278 14.7064 19.4006C14.4081 19.1705 14.0459 19.0554 13.6198 19.0554C13.1823 19.0554 12.813 19.1747 12.5118 19.4134C12.2135 19.6491 11.9863 19.9687 11.83 20.3722C11.6766 20.7756 11.5999 21.2287 11.5999 21.7315C11.5999 22.2401 11.678 22.6989 11.8343 23.108C11.9905 23.517 12.2178 23.8423 12.5161 24.0838C12.8172 24.3224 13.1851 24.4418 13.6198 24.4418ZM20.9394 25.1364C20.3287 25.1364 19.8002 24.9943 19.3542 24.7102C18.9082 24.4233 18.563 24.027 18.3187 23.5213C18.0772 23.0128 17.9565 22.4276 17.9565 21.7656C17.9565 21.1065 18.0772 20.5213 18.3187 20.0099C18.563 19.4957 18.8997 19.0937 19.3287 18.804C19.7605 18.5114 20.259 18.3651 20.8244 18.3651C21.1795 18.3651 21.5218 18.4304 21.8514 18.5611C22.1809 18.6889 22.4764 18.8864 22.7377 19.1534C23.0019 19.4176 23.2108 19.7514 23.3642 20.1548C23.5176 20.5554 23.5943 21.0298 23.5943 21.5781V21.9531H18.4806V21.2841H22.8187C22.8187 20.8636 22.7335 20.4858 22.563 20.1506C22.3954 19.8125 22.161 19.5455 21.8599 19.3494C21.5616 19.1534 21.2164 19.0554 20.8244 19.0554C20.4096 19.0554 20.0446 19.1662 19.7292 19.3878C19.4139 19.6094 19.1667 19.902 18.9877 20.2656C18.8116 20.6293 18.7221 21.027 18.7193 21.4588V21.8594C18.7193 22.3793 18.8088 22.8338 18.9877 23.223C19.1696 23.6094 19.4267 23.9091 19.759 24.1222C20.0914 24.3352 20.4849 24.4418 20.9394 24.4418C21.2491 24.4418 21.5204 24.3935 21.7534 24.2969C21.9892 24.2003 22.1866 24.071 22.3457 23.9091C22.5076 23.7443 22.6298 23.5639 22.7122 23.3679L23.4323 23.6023C23.3329 23.8778 23.1696 24.1321 22.9423 24.3651C22.7179 24.598 22.4366 24.7855 22.0985 24.9276C21.7633 25.0668 21.3769 25.1364 20.9394 25.1364ZM27.5698 25.1364C27.0045 25.1364 26.5045 24.9929 26.0698 24.706C25.638 24.419 25.2999 24.0227 25.0556 23.517C24.8113 23.0085 24.6891 22.4219 24.6891 21.7571C24.6891 21.0866 24.8113 20.4972 25.0556 19.9886C25.2999 19.4773 25.638 19.0795 26.0698 18.7955C26.5045 18.5085 27.0045 18.3651 27.5698 18.3651C28.1352 18.3651 28.6338 18.5085 29.0656 18.7955C29.4974 19.0824 29.8355 19.4801 30.0798 19.9886C30.3269 20.4972 30.4505 21.0866 30.4505 21.7571C30.4505 22.4219 30.3284 23.0085 30.084 23.517C29.8397 24.0227 29.5002 24.419 29.0656 24.706C28.6338 24.9929 28.1352 25.1364 27.5698 25.1364ZM27.5698 24.4418C28.0244 24.4418 28.4093 24.3196 28.7247 24.0753C29.04 23.831 29.2786 23.5057 29.4406 23.0994C29.6053 22.6932 29.6877 22.2457 29.6877 21.7571C29.6877 21.2685 29.6053 20.8196 29.4406 20.4105C29.2786 20.0014 29.04 19.6733 28.7247 19.4261C28.4093 19.179 28.0244 19.0554 27.5698 19.0554C27.1181 19.0554 26.7332 19.179 26.415 19.4261C26.0997 19.6733 25.8596 20.0014 25.6948 20.4105C25.5329 20.8196 25.4519 21.2685 25.4519 21.7571C25.4519 22.2457 25.5329 22.6932 25.6948 23.0994C25.8596 23.5057 26.0997 23.831 26.415 24.0753C26.7303 24.3196 27.1153 24.4418 27.5698 24.4418ZM34.3728 27.5909C33.9268 27.5909 33.5361 27.5327 33.2009 27.4162C32.8657 27.3026 32.583 27.1463 32.3529 26.9474C32.1228 26.7486 31.9438 26.5256 31.816 26.2784L32.4381 25.8693C32.5319 26.0341 32.6569 26.196 32.8131 26.3551C32.9722 26.5142 33.1782 26.6463 33.431 26.7514C33.6867 26.8565 34.0006 26.9091 34.3728 26.9091C34.9523 26.9091 35.4197 26.7642 35.7748 26.4744C36.1327 26.1847 36.3117 25.7344 36.3117 25.1236V23.6491H36.2435C36.1555 23.848 36.029 24.0469 35.8643 24.2457C35.6995 24.4418 35.4836 24.6051 35.2165 24.7358C34.9523 24.8665 34.6242 24.9318 34.2322 24.9318C33.7094 24.9318 33.245 24.8026 32.8387 24.544C32.4353 24.2855 32.1171 23.9162 31.8842 23.4361C31.654 22.9531 31.539 22.3778 31.539 21.7102C31.539 21.0483 31.6512 20.4659 31.8756 19.9631C32.1029 19.4602 32.4197 19.0682 32.8259 18.7869C33.2322 18.5057 33.7052 18.3651 34.245 18.3651C34.6455 18.3651 34.9779 18.4361 35.2421 18.5781C35.5063 18.7173 35.718 18.8906 35.8771 19.098C36.039 19.3054 36.1654 19.5071 36.2563 19.7031H36.333V18.4545H37.0745V25.1705C37.0745 25.7244 36.9566 26.1804 36.7208 26.5384C36.485 26.8963 36.164 27.1605 35.7577 27.331C35.3515 27.5043 34.8898 27.5909 34.3728 27.5909ZM34.3217 24.2372C34.7421 24.2372 35.1015 24.1364 35.3998 23.9347C35.6981 23.7301 35.9268 23.4375 36.0859 23.0568C36.245 22.6761 36.3245 22.223 36.3245 21.6974C36.3245 21.1861 36.2464 20.733 36.0901 20.3381C35.9339 19.9403 35.7066 19.6278 35.4083 19.4006C35.1129 19.1705 34.7506 19.0554 34.3217 19.0554C33.8842 19.0554 33.5148 19.1733 33.2137 19.4091C32.9126 19.6449 32.6853 19.9631 32.5319 20.3636C32.3785 20.7614 32.3018 21.206 32.3018 21.6974C32.3018 22.1974 32.3799 22.6392 32.5361 23.0227C32.6924 23.4034 32.9211 23.7017 33.2222 23.9176C33.5234 24.1307 33.8898 24.2372 34.3217 24.2372ZM38.8427 25V18.4545H39.5799V19.4602H39.6353C39.766 19.1307 39.9932 18.8651 40.3171 18.6634C40.6438 18.4588 41.0131 18.3565 41.4251 18.3565C41.4876 18.3565 41.5572 18.358 41.6339 18.3608C41.7106 18.3636 41.7745 18.3665 41.8256 18.3693V19.1406C41.7915 19.1349 41.7319 19.1264 41.6466 19.1151C41.5614 19.1037 41.4691 19.098 41.3697 19.098C41.0288 19.098 40.7248 19.1705 40.4577 19.3153C40.1935 19.4574 39.9847 19.6548 39.8313 19.9077C39.6779 20.1605 39.6012 20.4489 39.6012 20.7727V25H38.8427ZM44.7081 25.1491C44.3133 25.1491 43.9525 25.0724 43.6258 24.919C43.299 24.7628 43.0391 24.5384 42.8459 24.2457C42.6527 23.9503 42.5562 23.5923 42.5562 23.1719C42.5562 22.848 42.6172 22.5753 42.7394 22.3537C42.8615 22.1321 43.0348 21.9503 43.2593 21.8082C43.4837 21.6662 43.7493 21.554 44.0562 21.4716C44.363 21.3892 44.701 21.3253 45.0704 21.2798C45.4368 21.2344 45.7465 21.1946 45.9993 21.1605C46.255 21.1264 46.4496 21.0724 46.5831 20.9986C46.7167 20.9247 46.7834 20.8054 46.7834 20.6406V20.4872C46.7834 20.0412 46.6499 19.6903 46.3829 19.4347C46.1187 19.1761 45.738 19.0469 45.2408 19.0469C44.7692 19.0469 44.3843 19.1506 44.086 19.358C43.7905 19.5653 43.5831 19.8097 43.4638 20.0909L42.7437 19.831C42.8914 19.473 43.0959 19.1875 43.3573 18.9744C43.6187 18.7585 43.9113 18.6037 44.2351 18.5099C44.559 18.4134 44.8871 18.3651 45.2195 18.3651C45.4695 18.3651 45.7294 18.3977 45.9993 18.4631C46.2721 18.5284 46.5249 18.642 46.7579 18.804C46.9908 18.9631 47.1797 19.1861 47.3246 19.473C47.4695 19.7571 47.5419 20.1179 47.5419 20.5554V25H46.7834V23.9645H46.7365C46.6456 24.1577 46.5107 24.3452 46.3317 24.527C46.1527 24.7088 45.9283 24.858 45.6584 24.9744C45.3885 25.0909 45.0718 25.1491 44.7081 25.1491ZM44.8104 24.4545C45.2138 24.4545 45.5633 24.3651 45.8587 24.1861C46.1542 24.0071 46.3814 23.7699 46.5405 23.4744C46.7025 23.1761 46.7834 22.848 46.7834 22.4901V21.544C46.7266 21.598 46.6314 21.6463 46.4979 21.6889C46.3672 21.7315 46.2152 21.7699 46.0419 21.804C45.8715 21.8352 45.701 21.8622 45.5306 21.8849C45.3601 21.9077 45.2067 21.9276 45.0704 21.9446C44.701 21.9901 44.3857 22.0611 44.1243 22.1577C43.863 22.2543 43.6627 22.3878 43.5235 22.5582C43.3843 22.7259 43.3147 22.9418 43.3147 23.206C43.3147 23.6037 43.4567 23.9119 43.7408 24.1307C44.0249 24.3466 44.3814 24.4545 44.8104 24.4545ZM49.3197 27.4545V18.4545H50.0569V19.7031H50.1464C50.2373 19.5071 50.3623 19.3068 50.5214 19.1023C50.6805 18.8949 50.8907 18.7202 51.1521 18.5781C51.4163 18.4361 51.7487 18.3651 52.1492 18.3651C52.689 18.3651 53.1606 18.5071 53.564 18.7912C53.9703 19.0724 54.2856 19.4673 54.51 19.9759C54.7373 20.4815 54.851 21.071 54.851 21.7443C54.851 22.4205 54.7373 23.0128 54.51 23.5213C54.2856 24.0298 53.9703 24.4261 53.564 24.7102C53.1606 24.9943 52.6919 25.1364 52.1578 25.1364C51.7629 25.1364 51.4319 25.0653 51.1649 24.9233C50.9007 24.7812 50.6862 24.6065 50.5214 24.3991C50.3595 24.1889 50.2345 23.9844 50.1464 23.7855H50.0782V27.4545H49.3197ZM50.0697 21.7315C50.0697 22.2599 50.1478 22.7287 50.3041 23.1378C50.4632 23.544 50.6904 23.8636 50.9859 24.0966C51.2842 24.3267 51.645 24.4418 52.0683 24.4418C52.5029 24.4418 52.8694 24.3224 53.1677 24.0838C53.4689 23.8423 53.6975 23.517 53.8538 23.108C54.0129 22.6989 54.0924 22.2401 54.0924 21.7315C54.0924 21.2287 54.0143 20.7756 53.8581 20.3722C53.7046 19.9687 53.4774 19.6491 53.1762 19.4134C52.8751 19.1747 52.5058 19.0554 52.0683 19.0554C51.6421 19.0554 51.2799 19.1705 50.9816 19.4006C50.6833 19.6278 50.4561 19.9432 50.2998 20.3466C50.1464 20.7472 50.0697 21.2088 50.0697 21.7315ZM57.0335 20.9091V25H56.275V16.2727H57.0335V19.4815H57.1017C57.2551 19.1435 57.4923 18.8736 57.8134 18.6719C58.1372 18.4702 58.5463 18.3693 59.0406 18.3693C59.4838 18.3693 59.873 18.4602 60.2083 18.642C60.5435 18.8239 60.8048 19.0923 60.9923 19.4474C61.1798 19.8026 61.2736 20.2401 61.2736 20.7599V25H60.5108V20.8068C60.5108 20.267 60.3602 19.8423 60.0591 19.5327C59.7608 19.2202 59.3574 19.0639 58.8489 19.0639C58.4994 19.0639 58.1884 19.1378 57.9156 19.2855C57.6429 19.4332 57.427 19.6463 57.2679 19.9247C57.1117 20.2003 57.0335 20.5284 57.0335 20.9091ZM63.3251 27.4545C63.1746 27.4545 63.0339 27.4403 62.9033 27.4119C62.7726 27.3835 62.6689 27.3523 62.5922 27.3182L62.7967 26.6491C63.0553 26.7287 63.2854 26.7571 63.4871 26.7344C63.6888 26.7145 63.8678 26.6236 64.024 26.4616C64.1803 26.3026 64.3195 26.0582 64.4416 25.7287L64.6803 25.0639L62.2726 18.4545H63.095L65.0382 23.9986H65.0979L67.041 18.4545H67.8635L65.0936 26.0355C64.9771 26.3509 64.8337 26.6136 64.6632 26.8239C64.4928 27.0369 64.2953 27.1946 64.0709 27.2969C63.8493 27.402 63.6007 27.4545 63.3251 27.4545Z"
        fill={scrolled ? "#828282" : "#f8f8f8"}
      />
    </svg>
  )
}
