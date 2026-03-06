'use client'

import { Info, House, UserRoundCheck, Folder } from "lucide-react"
import { useEffect, useState } from "react"
import clsx from "clsx"

export default function Header() {

  const [active, setActive] = useState("home")

  const navItems = [
    { id: "home", label: "HOME", icon: House },
    { id: "skills", label: "SKILLS", icon: UserRoundCheck },
    { id: "about", label: "ABOUT ME", icon: Info },
    { id: "project", label: "PROJECTS", icon: Folder },
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
      {
        rootMargin: "-40% 0px -40% 0px"
    }
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
      <div className="w-auto md:h-14 sm:h-12 flex gap-1 items-center md:rounded-4xl sm:rounded-2xl bg-[#212125]/80 backdrop-blur-md">

        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={clsx(
                "md:w-41 sm:w-22 md:h-14 sm:h-12 md:rounded-4xl sm:rounded-2xl flex items-center justify-center md:gap-2 sm:gap-2 md:px-3 sm:px-1 transition-all duration-300 cursor-pointer",
                isActive
                  ? "bg-[#FF1493] text-white"
                  : "text-[#C4C3C3] hover:bg-white/10"
              )}
            >
              <Icon size={12} className="md:w-4 md:h-4" />
              <p className="font-bold md:text-sm sm:text-xs">{item.label}</p>
            </button>
          )
        })}

      </div>
    </div>
  )
}