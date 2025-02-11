"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  { title: "Вакансії", id: "vacancies", icon: "👥" },
  { title: "Виклик тех. бригади", id: "support", icon: "🛠️" },
  { title: "XPON?", id: "xpon", icon: "🌐" },
  { title: "Чому немає інтернету?", id: "no-internet", icon: "❓" },
  { title: "Відео котрі вам допоможуть", id: "help-videos", icon: "🎥" },
  { title: "Перевірка швидкості", id: "speed-test", icon: "⚡" },
  { title: "F.A.Q.", id: "faq", icon: "📚" },
  { title: "CAT 5 vs CAT7", id: "cat-comparison", icon: "🔌" },
  { title: "Купити обладнання", id: "buy-equipment", icon: "🛒" },
]

export function Services() {
  return (
    <section className="py-12 md:py-16 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Інформаційний Центр
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link href={`/placeholder`} key={service.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px -15px rgba(255, 221, 0, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Card className="bg-gray-300/10 hover:bg-gray-300/20 transition-colors cursor-pointer backdrop-blur h-full">
                    <CardContent className="flex flex-col items-center justify-center p-4 md:p-8 h-full">
                      <motion.div
                        className="text-3xl md:text-4xl mb-2 md:mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-base md:text-xl font-medium text-center">{service.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

