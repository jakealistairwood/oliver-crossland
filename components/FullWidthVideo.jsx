import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {urlFor} from '@/utils/SanityImage'

const FullWidthVideo = (props) => {
  const {video_id, video_thumbnail} = props;

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="w-full max-w-[1180px] mx-auto rounded-lg md:rounded-2xl pb-0 aspect-[16/9] relative group overflow-hidden cursor-pointer">
        <button className="w-full h-full relative" type="button" onClick={() => setPlayVideo(true)}>
            {video_thumbnail ? (
                playVideo ? (
                    <iframe 
                        src={`https://www.youtube.com/embed/${video_id}?autohide=1&enablejsapi=1autoplay=1`}
                        title="showcase reel"
                        allowFullScreen
                        allow="autoplay; fullscreen"
                        width="100%"
                        height="100%"
                    />
                ) : (
                    <VideoThumbnail video_thumbnail={video_thumbnail} />
                )
            ) : (
                <iframe 
                    src={`https://www.youtube.com/embed/${video_id}?autohide=1&enablejsapi=1autoplay=1`}
                    title="showcase reel"
                    allowFullScreen
                    allow="autoplay; fullscreen"
                    width="100%"
                    height="100%"
                />
            )}
        </button>
      {video_id && (
         playVideo ? (
            null
         ) : (
            <button type="button" onClick={() => setPlayVideo(true)} aria-label="Play Video" className="absolute z-[10] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full bg-white/[12%] backdrop-blur-lg flex items-center justify-center">
                <svg
                className="w-[15px] h-[25px] md:w-[28px] md:h-[33px]"
                width="28"
                height="33"
                viewBox="0 0 28 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M27.5625 16.4998C27.5635 16.9136 27.4574 17.3206 27.2545 17.6813C27.0516 18.0419 26.7589 18.3439 26.4047 18.5579L4.455 31.9855C4.08494 32.2121 3.66109 32.3358 3.22723 32.3439C2.79337 32.3519 2.36523 32.244 1.98703 32.0312C1.61243 31.8218 1.30038 31.5163 1.08297 31.1463C0.865555 30.7763 0.750626 30.355 0.75 29.9258V3.07373C0.750626 2.64455 0.865555 2.22329 1.08297 1.85326C1.30038 1.48323 1.61243 1.17778 1.98703 0.968339C2.36523 0.755588 2.79337 0.647657 3.22723 0.655691C3.66109 0.663726 4.08494 0.787435 4.455 1.01404L26.4047 14.4416C26.7589 14.6556 27.0516 14.9576 27.2545 15.3183C27.4574 15.679 27.5635 16.086 27.5625 16.4998Z"
                    fill="white"
                />
                </svg>
          </button>
         )
      )}
    </div>
  )
}

export default FullWidthVideo


const VideoThumbnail = ({ video_thumbnail }) => {
    return (
        <>
            <Image
            src={urlFor(video_thumbnail).format('webp').url()}
            fill
            alt="showreel video"
            objectFit="cover"
            className="rounded-lg md:rounded-2xl duration-200 ease-linear transition-transform group-hover:scale-[1.05]"
            />
        </>
    )
}