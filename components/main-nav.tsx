"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Award, BookOpen, Calendar, Home, LineChart, QrCode } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Award className="h-6 w-6 text-emerald-500" />
        <span className="hidden font-bold sm:inline-block">CleanCred</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </div>
        </Link>
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/dashboard") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link
          href="/leaderboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/leaderboard") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-1">
            <LineChart className="h-4 w-4" />
            <span>Leaderboard</span>
          </div>
        </Link>
        <Link
          href="/scan"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/scan") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-1">
            <QrCode className="h-4 w-4" />
            <span>Scan Bin</span>
          </div>
        </Link>
        <Link
          href="/events"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/events") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Events</span>
          </div>
        </Link>
        <Link
          href="/learn"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/learn") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>Learn</span>
          </div>
        </Link>
      </nav>
    </div>
  )
}
