"use client";

import { motion, useScroll, useSpring } from "framer-motion"

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    return <motion.div className="fixed top-0 left-0 right-0 h-[5px] origin-[0%] bg-[#FC7753] z-[1000]" style={{ scaleX }} />
}

export default ProgressBar;