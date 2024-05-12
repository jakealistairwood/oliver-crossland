import React, {useEffect, useState} from 'react'
import Marquee from 'react-fast-marquee'
import Link from 'next/link'
import {motion} from 'framer-motion'
import FullWidthVideo from '../FullWidthVideo'
import LinkButton from '../elements/LinkButton'
import AnimatedText from '../AnimatedText'

const HomeMasthead = (props) => {
  const {marquee, heading, link, video_embed, video_thumbnail, background_asset} = props

  const [marqueeLoaded, setMarqueeLoaded] = useState(false);

  useEffect(() => {
    setMarqueeLoaded(true);
  }, []);

  return (
    <header className="w-full">
        <div className="min-h-[220px] lg:min-h-[380px] pointer-events-none">
            {marqueeLoaded && (
                <div className="marquee-container pt-12 md:pt-0 pointer-events-none">
                    {marquee && marquee.length > 0 && (
                        <Marquee>
                            {marquee.map((item, i) => (
                            <div
                                className="text-transparent font-bold text-[8rem] md:text-[16rem] font-outline-2 uppercase masthead-marquee-item pr-8 !pointer-events-none"
                                key={`home-masthead-marquee-item-${i}`}
                                dangerouslySetInnerHTML={{__html: item?.text}}
                            />
                            ))}
                        </Marquee>
                    )}
                </div>
            )}
        </div>
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-[620px] mx-auto">
            {heading && heading.length > 0 && (
            // <h1
            //     className="font-light font-serif text-white text-2xl"
            //     dangerouslySetInnerHTML={{__html: heading}}
            // />
            <h1 className="font-light font-serif text-white text-[1.3rem] md:text-2xl leading-tight">
                <AnimatedText text={heading} />
            </h1>
            )}
            {link && link.url.length > 0 && (
                <LinkButton link={link} />
            )}
        </div>
        {/* <div className="home-masthead-asset relative mt-20">
            {video_embed && video_embed.length > 0 && (
                <div className="md:absolute top-0 left-0 right-0" id="home-masthead-video">
                    <FullWidthVideo video_thumbnail={video_thumbnail} video_id={video_embed} />
                </div>
            )}
        </div> */}
      </div>
      <div className="relative w-full mt-20">
        <div className="absolute inset-0 flex flex-col overflow-hidden">
            <div className="h-1/2" />
            <div className="h-1/2 bg-white" />
        </div>
        <div className="w-full">
            <div className="container">
                {video_embed && video_embed.length > 0 && (
                    <div className="" id="home-masthead-video">
                        <FullWidthVideo video_thumbnail={video_thumbnail} video_id={video_embed} />
                    </div>
                )}
            </div>
        </div>
      </div>
    </header>
  )
}

export default HomeMasthead
