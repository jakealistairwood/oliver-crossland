'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {urlFor} from '@/utils/SanityImage'
import AnimatedText from './AnimatedText'
import Link from 'next/link'
import Globe from "../assets/images/globe.svg";

const Masthead = (props) => {
  const {title, description, image, add_bottom_banner, bottom_banner } = props

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const userPrefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (userPrefersReducedMotion) {
      setPrefersReducedMotion(userPrefersReducedMotion.matches)
    }
  }, [])

  return (
    <div className="sticky top-0 min-h-screen w-full flex items-stretch">
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.24) -43.7%, rgba(0, 0, 0, 0) 100%)',
          // background: "radial-gradient(50% 50% at 50% 50%, rgba(10, 10, 12, 0) 0%, #0A0A0C 100%)"
        }}
      />
      {image && (
        <Image
          src={urlFor(image).format('webp').url()}
          priority
          objectFit="cover"
          fill
          quality={100}
          alt={image?.alt || ''}
          className="absolute inset-0 z-[1]"
        />
      )}
      <div className="container relative z-[3] flex flex-col h-full mt-auto pb-16">
        <div className="flex items-end justify-between w-full">
            <div className="flex flex-col h-full">
                {title && (
                    <h1 className="h-full w-full text-white text-6xl leading-none uppercase font-semibold pt-40 max-w-[600px]">
                        {prefersReducedMotion ? title : <AnimatedText text={title} />}
                        {/* <AnimatedText text={title} /> */}
                    </h1>
                )}
                {description && (
                    <p className="w-full max-w-[500px] text-white font-light uppercase leading-[1.2] text-xl pt-10">
                        {prefersReducedMotion ? description : <AnimatedText text={description} />}
                    </p>
                )}
            </div>
          <Link href="#portfolio" className="border border-solid border-[#9F9F9F] py-4 px-6 text-xl text-white rounded-full flex items-center justify-center gap-x-4">
            Explore my work below
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 18H9M18 18V9M18 18L11.5 11.5M6 6L8.5 8.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        {add_bottom_banner && (
            <div className="flex items-center justify-between border-solid border-t border-white/[19%] pt-6 mt-10">
                {bottom_banner.location && (
                    <div className="flex items-center gap-2">
                        <Image src={Globe} height={16} width={16} alt="" />
                        <span className="text-white/60">{bottom_banner?.location}</span>
                    </div>
                )}
                {bottom_banner.social_links && bottom_banner.social_links.length > 0 && (
                    <div className="flex items-center gap-10">
                        {bottom_banner.social_links.map((social_link, i) => (
                            <Link href={social_link.link || ""} className="transition-colors duration-200 ease text-white/60 hover:text-white/100" key={`social-link-${i}`}>
                                {social_link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        )}    
      </div>
      {/* <div className="absolute left-1/2 bottom-8 -translate-x-1/2">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-8 h-8 rounded-full border border-white flex justify-center items-center">
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2326 6.0468C10.2329 6.20472 10.1925 6.36006 10.115 6.4977C10.0376 6.63534 9.92586 6.7506 9.7907 6.83227L1.41395 11.9567C1.27272 12.0432 1.11097 12.0904 0.945394 12.0934C0.779819 12.0965 0.616427 12.0553 0.472093 11.9741C0.329134 11.8942 0.210044 11.7776 0.127072 11.6364C0.0440997 11.4952 0.000238871 11.3344 0 11.1706V0.922965C0.000238871 0.759177 0.0440997 0.598409 0.127072 0.457192C0.210044 0.315976 0.329134 0.199408 0.472093 0.119476C0.616427 0.0382835 0.779819 -0.0029067 0.945394 0.000159504C1.11097 0.00322571 1.27272 0.0504373 1.41395 0.136918L9.7907 5.26134C9.92586 5.34301 10.0376 5.45827 10.115 5.59591C10.1925 5.73354 10.2329 5.88888 10.2326 6.0468Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-white uppercase font-medium">Watch Video</span>
        </div>
      </div> */}
    </div>
  )
}

export default Masthead
