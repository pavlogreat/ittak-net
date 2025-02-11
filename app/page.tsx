import { Header } from "@/components/header"
import { TariffPlans } from "@/components/tariff-plans"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { NetworkFeatures } from "@/components/network-features"
import { UserCabinet } from "@/components/user-cabinet"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#001324] to-[#0a0a0a] text-white overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <Header />
      <HeroSection />
      <NetworkFeatures />
      <TariffPlans />
      <Services />
      <UserCabinet />
      <Footer />
    </main>
  )
}

