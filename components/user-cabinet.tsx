import { Button } from "@/components/ui/button"

export function UserCabinet() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Кабінет Користувача</h2>
        <p className="text-center text-lg mb-8">
          Керуйте своїм обліковим записом, перевіряйте баланс та змінюйте тарифний план у нашому зручному кабінеті
          користувача.
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FFDD00] to-[#0057B7] text-white border-none text-lg px-8 py-6 h-auto"
            onClick={() => window.open("https://billing.ittak.net/index.cgi", "_blank")}
          >
            Увійти до кабінету
          </Button>
        </div>
      </div>
    </section>
  )
}

