"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Calendar, Heart } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Home", path: "/", icon: null },
    { name: "Resources", path: "/resources", icon: <BookOpen className="h-4 w-4" /> },
    { name: "Prayers", path: "/prayers", icon: <Heart className="h-4 w-4" /> },
    { name: "Calendar", path: "/calendar", icon: <Calendar className="h-4 w-4" /> },
  ]

  return (
    <nav className="bg-card-bg border-b border-border-color py-4">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center gap-1 md:gap-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  isActive(item.path)
                    ? "bg-accent-purple text-white"
                    : "text-gray-300 hover:bg-input-bg hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
