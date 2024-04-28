'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/images/footer-logo.svg'
import {urlFor} from '@/utils/SanityImage'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import EmailIcon from '@/assets/icons/EmailIcon'
import NavLink from '@/components/elements/NavLink'

const FooterWrapper = ({data, site_pages}) => {
  const {cta, social_links, contact_links} = data
  console.log(data);

  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-y-10 justify-between w-full py-20 md:py-[120px]">
        <h2
          className="font-serif text-6xl max-w-[780px] font-light"
          dangerouslySetInnerHTML={{__html: cta?.heading}}
        />
        <Link
          className="bg-white uppercase w-fit font-light text-[#0D0F16] px-8 py-[10px] md:py-5 rounded-full text-normal md:text-2xl flex h-fit items-center justify-center"
          href={cta?.link?.url || ''}
        >
          {cta?.link?.label}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8 flex flex-col">
          <Link href="/" aria-label="Go to Homepage" className="max-w-[137px] w-full relative">
            <Image src={Logo} alt="" width={137} height={29} objectFit="cover" />
          </Link>
          <div className="flex flex-col mt-[60px] md:mt-[140px]">
            {social_links && social_links.length > 0 && (
              <div className="flex items-center gap-4">
                {social_links?.map((link, i) => (
                  <Link href={link?.url || ''} target="_blank" rel="noreferrer" aria-label={`Go to Oliver Crossland's ${link?.social_name} channel`}>
                    <Image src={urlFor(link?.icon).url()} width={24} height={24} alt="" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-[60px] md:mt-0 md:col-span-4">
          <nav className="flex justify-between w-full">
            <div className="flex flex-col gap-y-8">
              <p className="">Site</p>
              <ul className="flex flex-col gap-y-5">
                {site_pages &&
                  site_pages.length > 0 &&
                  site_pages.map((page, i) => (
                    <li className="text-white/75 font-light hover:text-white/100 transition-colors duration-200 ease">
                      <Link href={page?.slug || ''}>
                        {page?.title === 'Homepage' ? 'Home' : page?.title}
                      </Link>
                    </li>
                  ))}
                {/* <li className="text-white/75 font-light hover:text-white/100 transition-colors duration-200 ease">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-white/75 font-light hover:text-white/100 transition-colors duration-200 ease">
                  <Link href="/">About</Link>
                </li>
                <li className="text-white/75 font-light hover:text-white/100 transition-colors duration-200 ease">
                  <Link href="/">Portfolio</Link>
                </li>
                <li className="text-white/75 font-light hover:text-white/100 transition-colors duration-200 ease">
                  <Link href="/">Contact</Link>
                </li> */}
              </ul>
            </div>
            <div className="flex flex-col gap-y-8">
              <p>Contact</p>
              <ul className="flex flex-col gap-y-5">
                {contact_links.email && contact_links.email.length > 0 && (
                  <li className="text-white/75 font-light">
                    <Link
                      className="flex items-center gap-2"
                      href={`mailto:${contact_links.email}`}
                    >
                      <EmailIcon />
                      <span>{contact_links.email}</span>
                    </Link>
                  </li>
                )}
                <li className="text-white/75 font-light">
                  <Link
                    className="flex items-center gap-2"
                    href={`tel:${contact_links.phone_number}`}
                  >
                    <PhoneIcon />
                    <span>{contact_links.phone_number}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-4 items-left md:items-center justify-between w-full pb-10 pt-20">
        <small className="opacity-60 font-extralight">
          &copy; Oli Crossland Videography {currentYear}
        </small>
        <small className="opacity-60 font-extralight">
          Site designed and developed by{' '}
          <Link
            className="underline underline-offset-4"
            href="https://www.linkedin.com/in/jake-wood-726141114/"
            target="_blank"
            rel="noreferrer"
          >
            Jake Wood
          </Link>
        </small>
      </div>
    </div>
  )
}

export default FooterWrapper
