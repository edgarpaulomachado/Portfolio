'use client'

import { Info, House, UserRoundCheck, Folder } from "lucide-react"
import { useState, useEffect } from "react"
import clsx from "clsx"

export default function Header() {
  const [active, setActive] = useState("home")

  const navItems = [
    { id: "home", label: "HOME", icon: House, href: "#home"},
    { id: "about", label: "ABOUT ME", icon: Info, href: "#about" },
    { id: "skills", label: "SKILLS", icon: UserRoundCheck, href: "#skills" },
    { id: "projects", label: "PROJECTS", icon: Folder, href: "#projects" },
  ]

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    })
  }

  return (
    <div className="w-full h-22 flex justify-center items-center fixed top-0 z-50">
      <div className="w-auto h-14 flex justify-center gap-1 items-center rounded-4xl bg-[#212125]/80 backdrop-blur-md shadow-lg">
        <ul className="flex gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = active === item.id

            return (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={clsx(
                  "w-41 h-14 rounded-4xl flex justify-center items-center gap-2 px-3 transition-all duration-500 cursor-pointer",
                  isActive
                    ? "bg-[#FF1493] text-white scale-105 shadow-lg"
                    : "text-[#C4C3C3] hover:bg-white/10"
                )}
              >
                <Icon size={18} />
                <p className="font-bold text-sm">{item.label}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}