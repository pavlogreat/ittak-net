import { CircuitBoard, Wifi, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-yellow-500 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-6xl">
            Інтернет Майбутнього{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDD00] to-[#0057B7]">
              Вже Сьогодні
            </span>
          </h1>

          <p className="mb-12 text-xl text-gray-300">
            Ми впроваджуємо найсучасніші технології xPON для забезпечення надшвидкісного та стабільного підключення.
            Приєднуйтесь до мережі майбутнього!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 rounded-lg bg-white/5 backdrop-blur">
              <Wifi className="h-10 w-10 mb-4 text-[#FFDD00]" />
              <h3 className="text-lg font-semibold mb-2">Технологія xPON</h3>
              <p className="text-sm text-gray-400">Швидкість світла для вашого інтернету</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-white/5 backdrop-blur">
              <Zap className="h-10 w-10 mb-4 text-[#0057B7]" />
              <h3 className="text-lg font-semibold mb-2">Стабільність</h3>
              <p className="text-sm text-gray-400">Безперебійне з'єднання 24/7</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-white/5 backdrop-blur">
              <CircuitBoard className="h-10 w-10 mb-4 text-[#FFDD00]" />
              <h3 className="text-lg font-semibold mb-2">Смарт-мережа</h3>
              <p className="text-sm text-gray-400">Інтелектуальна інфраструктура</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FFDD00] to-[#0057B7] text-white border-none text-lg px-8 py-6 h-auto"
          >
            Підключити Інтернет Майбутнього
          </Button>
        </div>
      </div>
    </section>
  )
}

