import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { href: "/students", label: "For Students" },
        { href: "/teachers", label: "For Teachers" },
        { href: "/parents", label: "For Parents" },
        { href: "/curriculum", label: "Curriculum" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/pricing", label: "Pricing" },
        { href: "#", label: "Help Center" },
        { href: "#", label: "Blog" },
        { href: "#", label: "Webinars" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", label: "About Us" },
        { href: "#", label: "Careers" },
        { href: "#", label: "Press" },
        { href: "#", label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
        { href: "#", label: "Cookie Policy" },
        { href: "#", label: "GDPR" },
      ],
    },
  ]

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-merriweather">EduFun</span>
            </Link>
            <p className="text-secondary-foreground/80 font-poppins mb-6 max-w-sm">
              Making learning fun and smart for students, teachers, and parents worldwide. Join our community of
              learners today.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-poppins">hello@edufun.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-poppins">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-poppins">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-merriweather font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors font-poppins text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-secondary-foreground/60 font-poppins text-sm mb-4 md:mb-0">
            © 2024 EduFun. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <Link
                  key={index}
                  href={social.href}
                  className="text-secondary-foreground/60 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
