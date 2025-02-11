"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function PlaceholderPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#001324] to-[#0a0a0a] text-white p-4">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Вітаю!</h1>
        <p className="text-xl mb-4">Мене звати Павлестіал.</p>
        <p className="text-lg mb-4">
          Ви потрапили на пусту сторінку, яка ще не готова. Будь ласка, поверніться на головну.
        </p>
        <p className="text-sm text-gray-400 mb-8">
          Цей сайт був створений мною, pavlestial, для мого портфоліо і на даний момент належить мені.
        </p>
        <motion.button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-gradient-to-r from-[#FFDD00] to-[#0057B7] text-white rounded-full hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Повернутися на головну
        </motion.button>
      </motion.div>
    </div>
  )
}

