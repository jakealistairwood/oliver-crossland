"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text = "" }) => {
    const [ref, inView] = useInView();
    const controls = useAnimation();
    const splitText = text.split(" ");

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <>
            <span className="sr-only">{text}</span>
            <span ref={ref}>
                {splitText?.map((word, i) => (
                    <span key={`${word + i}`} className="overflow-hidden inline-block m-[-.25em]">
                        <motion.span
                            className="inline-block p-[.2em]"
                            initial={{ y: "100%" }}
                            viewport={{ once: true }}
                            transition={{
                                y: {
                                    duration: 1.3,
                                    ease: [0.6, 0.01, -0.05, 1],
                                    delay: i / 20
                                }
                            }}
                            animate={controls}
                            variants={{ visible: { y: "0%" } }}
                        >
                            {`${word}`}
                            <motion.span className="inline-block translate-x-[100%] translate-y-[100%] p-[.2em]" />
                        </motion.span>
                    </span>
                ))}
            </span>
        </>
    )
}

export default AnimatedText;