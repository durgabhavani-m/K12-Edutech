"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X, Users, BarChart3, Award, GraduationCap, DollarSign } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/students", label: "For Students", icon: Users, color: "text-primary" },
    { href: "/teachers", label: "For Teachers", icon: BarChart3, color: "text-secondary" },
    { href: "/parents", label: "For Parents", icon: Award, color: "text-chart-3" },
    { href: "/curriculum", label: "Curriculum", icon: GraduationCap, color: "text-chart-1" },
    { href: "/pricing", label: "Pricing", icon: DollarSign, color: "text-accent-foreground" },
  ]

  return (
    <nav className="bg-secondary text-secondary-foreground px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold font-merriweather">EduFun</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 hover:text-primary transition-colors font-poppins"
              >
                <IconComponent className={`h-4 w-4 ${item.color}`} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="text-secondary-foreground border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent font-poppins"
          >
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 font-poppins font-semibold">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-secondary-foreground/20">
          <div className="space-y-4 pt-4">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 py-2 hover:text-primary transition-colors font-poppins"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent className={`h-5 w-5 ${item.color}`} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
            <div className="flex flex-col space-y-2 pt-4 border-t border-secondary-foreground/20">
              <Button
                variant="outline"
                className="text-secondary-foreground border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent font-poppins"
              >
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90 font-poppins font-semibold">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
