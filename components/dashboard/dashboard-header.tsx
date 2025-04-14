import Link from "next/link"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to CleanCred, your smart waste management platform.</p>
      </div>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="/scan">Scan Bin QR</Link>
        </Button>
      </div>
    </div>
  )
}
