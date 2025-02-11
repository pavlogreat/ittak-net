"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { MenuIcon, X } from "lucide-react"
import { AnimatedLogo } from "./animated-logo"

const menuItems = [
  { title: "Послуги", href: "/placeholder" },
  { title: "ТБ", href: "/placeholder" },
  { title: "Документи", href: "/placeholder" },
  { title: "Новини", href: "/placeholder" },
  { title: "Контакти", href: "/placeholder" },
  { title: "Акції", href: "/placeholder" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <AnimatedLogo />
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://billing.ittak.net" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="bg-gradient-to-r from-[#FFDD00] to-[#0057B7] text-white border-none font-tektur text-sm md:text-base"
            >
              Кабінет користувача
            </Button>
          </a>
          <Button
            variant="outline"
            className="bg-gradient-to-r from-[#FFDD00] to-[#0057B7] text-white border-none font-tektur text-sm md:text-base"
            onClick={() => setIsMenuOpen(true)}
          >
            Меню
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <MenuIcon className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-b from-[#40E0D0]/20 to-[#40E0D0]/5 backdrop-blur-lg p-6 shadow-lg">
            <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setIsMenuOpen(false)}>
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <nav className="mt-8 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-base md:text-lg font-tektur py-2 md:py-3 px-4 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

