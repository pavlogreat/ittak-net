import { Activity, Shield, Cpu, Network } from "lucide-react"

export function NetworkFeatures() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Переваги Технології{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFDD00] to-[#0057B7]">xPON</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FFDD00] to-[#0057B7] opacity-25 group-hover:opacity-50 transition-opacity" />
            <div className="relative p-6 bg-black/40 rounded-lg backdrop-blur">
              <Shield className="h-12 w-12 mb-4 text-[#FFDD00]" />
              <h3 className="text-xl font-semibold mb-2">Надійна Архітектура</h3>
              <p className="text-gray-400">Оптоволоконна мережа з резервуванням та захистом від збоїв</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FFDD00] to-[#0057B7] opacity-25 group-hover:opacity-50 transition-opacity" />
            <div className="relative p-6 bg-black/40 rounded-lg backdrop-blur">
              <Activity className="h-12 w-12 mb-4 text-[#0057B7]" />
              <h3 className="text-xl font-semibold mb-2">Швидкість до 10 Гбіт/с</h3>
              <p className="text-gray-400">Надшвидкісний симетричний інтернет для будь-яких потреб</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FFDD00] to-[#0057B7] opacity-25 group-hover:opacity-50 transition-opacity" />
            <div className="relative p-6 bg-black/40 rounded-lg backdrop-blur">
              <Cpu className="h-12 w-12 mb-4 text-[#FFDD00]" />
              <h3 className="text-xl font-semibold mb-2">Розумна Мережа</h3>
              <p className="text-gray-400">Автоматична діагностика та оптимізація роботи мережі</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#FFDD00] to-[#0057B7] opacity-25 group-hover:opacity-50 transition-opacity" />
            <div className="relative p-6 bg-black/40 rounded-lg backdrop-blur">
              <Network className="h-12 w-12 mb-4 text-[#0057B7]" />
              <h3 className="text-xl font-semibold mb-2">Готовність до Майбутнього</h3>
              <p className="text-gray-400">Інфраструктура з можливістю розширення під нові технології</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

