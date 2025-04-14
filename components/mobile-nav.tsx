"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Award, BookOpen, Calendar, Home, LineChart, Menu, QrCode, User } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
      icon: <LineChart className="mr-2 h-4 w-4" />,
    },
    {
      title: "Scan Bin",
      href: "/scan",
      icon: <QrCode className="mr-2 h-4 w-4" />,
    },
    {
      title: "Events",
      href: "/events",
      icon: <Calendar className="mr-2 h-4 w-4" />,
    },
    {
      title: "Learn",
      href: "/learn",
      icon: <BookOpen className="mr-2 h-4 w-4" />,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Award className="mr-2 h-6 w-6 text-emerald-500" />
            <span className="font-bold">CleanCred</span>
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center px-7 py-2 text-sm font-medium",
                pathname === item.href ? "bg-muted" : "hover:bg-muted",
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
