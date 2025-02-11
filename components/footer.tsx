"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { AnimatedLogo } from "./animated-logo"

const services = [
  { name: "Інтернет", href: "/placeholder" },
  { name: "Телебачення", href: "/placeholder" },
  { name: "Підтримка", href: "/placeholder" },
  { name: "Обладнання", href: "/placeholder" },
  { name: "Акції", href: "/placeholder" },
]

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ittakk.nett/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ittakk.nett/?locale=uk_UA",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-black/40 py-8 md:py-16 font-tektur">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            className="text-2xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Хочу в ITтак Мережу!
          </motion.h2>
          <Link href="/" className="text-sm hover:text-[#FFDD00] transition-colors inline-block">
            Повернутися на головну
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8 md:mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <motion.button
                  className="w-full bg-gray-300/10 px-4 md:px-6 py-2 md:py-3 rounded hover:bg-gray-300/20 transition-colors text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service.name}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 md:space-x-8 mb-8 md:mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FFDD00] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm md:text-base">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p>Україна, 77100</p>
            <p>Івано-Франківська обл.</p>
            <p>м. Галич</p>
            <p>майдан Різдва, буд. 4</p>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-center">
              <AnimatedLogo />
            </div>
            <p>Всі права захищені</p>
            <p className="text-xs md:text-sm">
              2025 • Створено{" "}
              <a
                href="https://github.com/pavlestial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFDD00] hover:underline"
              >
                pavlestial
              </a>{" "}
              для портфоліо
            </p>
            <p className="text-xs md:text-sm">Цей сайт належить pavlestial</p>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="/placeholder"
              className="block hover:text-[#FFDD00] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              (067) 255 56 24
            </motion.a>
            <motion.a
              href="/placeholder"
              className="block hover:text-[#FFDD00] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              (099) 250 22 54
            </motion.a>
            <motion.a
              href="/placeholder"
              className="block hover:text-[#FFDD00] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              ittak.net@ukr.net
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

