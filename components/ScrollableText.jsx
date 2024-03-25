import React, { useRef } from 'react'
import {motion, useTransform, useScroll} from 'framer-motion'

const ScrollableText = ({text_to_animate}) => {
  const containerRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.25'],
  })

  const words = text_to_animate.split(' ')

  return (
    <div ref={containerRef} className="container text-4xl max-w-[950px] w-full mx-auto text-center text-black font-heading leading-tight font-normal tracking-wide py-24">
      {words?.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </div>
  )
}

const Word = ({children, progress, range}) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className="relative mr-3 mt-3">
      {children.split('').map((char, i) => {
        const start = range[0] + i * step
        const end = range[0] + (i + 1) * step
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        )
      })}
    </span>
  )
}

const Char = ({children, progress, range}) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
  )
}

export default ScrollableText
