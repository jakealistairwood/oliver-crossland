import React, {useState} from 'react'
import Marquee from 'react-fast-marquee'
import Link from 'next/link'
import {motion} from 'framer-motion'
import FullWidthVideo from '../FullWidthVideo'
import LinkButton from '../elements/LinkButton'
import AnimatedText from '../AnimatedText'

const HomeMasthead = (props) => {
  const {marquee, heading, link, video_embed, video_thumbnail, background_asset} = props

  return (
    <header className="min-h-[110vh] w-full">
      <div className="marquee-container min-h-[240px]">
        {marquee && marquee.length > 0 && (
          <Marquee>
            {marquee.map((item, i) => (
              <div
                className="text-transparent font-bold text-[16rem] font-outline-2 uppercase masthead-marquee-item pr-8"
                key={`home-masthead-marquee-item-${i}`}
                dangerouslySetInnerHTML={{__html: item?.text}}
              />
            ))}
          </Marquee>
        )}
      </div>
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-[620px] mx-auto">
            {heading && heading.length > 0 && (
            // <h1
            //     className="font-light font-serif text-white text-2xl"
            //     dangerouslySetInnerHTML={{__html: heading}}
            // />
            <h1 className="font-light font-serif text-white text-2xl leading-tight">
                <AnimatedText text={heading} />
            </h1>
            )}
            {link && link.url.length > 0 && (
                <LinkButton link={link} />
            )}
        </div>
        <div className="home-masthead-asset relative mt-20">
            {video_embed && video_embed.length > 0 && (
                <div className="absolute top-0 left-0 right-0" id="home-masthead-video">
                    <FullWidthVideo video_thumbnail={video_thumbnail} video_id={video_embed} />
                </div>
            )}
        </div>
      </div>
    </header>
  )
}

export default HomeMasthead
