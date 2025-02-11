"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Check, CreditCard } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const plans = [
  {
    name: "Оптичний Старт",
    price: "200",
    speed: "100",
    features: ["Оптоволоконне підключення", "Симетричний канал", "Безлімітний трафік"],
    gradient: "from-[#A9EFB7] to-transparent",
  },
  {
    name: "Оптичний Комфорт",
    price: "250",
    speed: "200",
    features: ["Оптоволоконне підключення", "Симетричний канал", "Безлімітний трафік", "Пріоритетна підтримка"],
    gradient: "from-[#59D9CF] to-transparent",
  },
  {
    name: "Оптичний Про",
    price: "300",
    speed: "300",
    features: [
      "Оптоволоконне підключення",
      "Симетричний канал",
      "Безлімітний трафік",
      "Пріоритетна підтримка",
      "Статична IP-адреса",
    ],
    gradient: "from-[#0057B7] to-[#FFDD00]",
  },
]

export function TariffPlans() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-16">
          Тарифні Плани на Базі{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDD00] to-[#0057B7]">xPON</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -15px rgba(255, 221, 0, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-black/40 backdrop-blur border-0 relative overflow-hidden h-full">
                  <CardHeader>
                    <CardTitle className="text-center text-lg md:text-xl">{plan.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4 md:space-y-6">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold">{plan.price}</div>
                      <div className="text-xs md:text-sm text-gray-400">грн/міс</div>
                    </div>

                    <div className="text-center">
                      <div className="text-xs md:text-sm text-gray-400">Швидкість до</div>
                      <motion.div
                        className={`h-16 w-16 md:h-24 md:w-24 mx-auto my-2 md:my-4 rounded-full bg-gradient-to-b ${plan.gradient} flex items-center justify-center relative`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Zap className="h-8 w-8 md:h-12 md:w-12 absolute" />
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            boxShadow: ["0 0 0 0px rgba(255, 255, 255, 0.4)", "0 0 0 20px rgba(255, 255, 255, 0)"],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1.5,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                      <div className="text-2xl md:text-3xl font-bold">{plan.speed}</div>
                      <div className="text-xs md:text-sm text-gray-400">МБ/с</div>
                    </div>

                    <div className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center text-xs md:text-sm text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Check className="h-3 w-3 md:h-4 md:w-4 mr-2 text-[#FFDD00]" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <Button
                            className="w-full bg-gradient-to-r from-[#FFDD00] to-[#0057B7] text-white border-none text-xs md:text-sm mb-2"
                            onClick={() => (window.location.href = "/placeholder")}
                          >
                            Обрати тариф
                          </Button>
                        </motion.div>
                      </AnimatePresence>

                      <motion.div
                        initial={{ opacity: 0, y: 20, height: 0 }}
                        whileHover={{ opacity: 1, y: 0, height: "auto" }}
                        className="overflow-hidden"
                      >
                        <Button
                          className="w-full bg-gradient-to-r from-[#FFDD00] to-[#0057B7] text-white border-none text-xs md:text-sm flex items-center justify-center gap-2"
                          onClick={() => (window.location.href = "https://billing.ittak.net")}
                        >
                          <CreditCard className="h-4 w-4" />
                          Поповнити
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

