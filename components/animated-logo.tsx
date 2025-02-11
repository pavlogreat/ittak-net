"use client"

import { motion } from "framer-motion"

export function AnimatedLogo() {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <span className="font-tektur text-2xl font-bold">IT</span>
      <span className="font-tektur text-2xl">так</span>
      <motion.div
        className="absolute -bottom-2 left-0 h-1 w-full bg-[#0057B7]"
        animate={{
          scaleX: [1, 1.1, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-4 left-0 h-1 w-full bg-[#FFDD00]"
        animate={{
          scaleX: [1, 1.1, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          delay: 0.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

