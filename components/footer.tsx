import Link from "next/link"
import { Award } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-emerald-500" />
          <span className="text-sm font-medium">CleanCred</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/about" className="text-xs text-muted-foreground hover:underline">
            About
          </Link>
          <Link href="/privacy" className="text-xs text-muted-foreground hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="text-xs text-muted-foreground hover:underline">
            Terms
          </Link>
          <Link href="/contact" className="text-xs text-muted-foreground hover:underline">
            Contact
          </Link>
        </nav>
        <div className="text-xs text-muted-foreground">© 2025 CleanCred. All rights reserved.</div>
      </div>
    </footer>
  )
}
