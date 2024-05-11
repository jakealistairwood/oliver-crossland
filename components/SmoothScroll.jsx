"use client";

import React, { useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis'

const SmoothScroll = ({ children }) => {

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach((el) => {
            el.addEventListener('click', (e) => {
              e.preventDefault()
              const id = el.getAttribute('href')?.slice(1)
              if (!id) return
              const target = document.getElementById(id)
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
              }
            })
          })
    }, []);

 return (
    <ReactLenis root>
        {children}
    </ReactLenis>
 )
}

export default SmoothScroll