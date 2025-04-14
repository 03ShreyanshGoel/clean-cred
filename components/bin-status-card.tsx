import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, CheckCircle, Trash2 } from "lucide-react"
import Link from "next/link"

export function BinStatusCard() {
  const bins = [
    {
      id: 1,
      name: "Biodegradable Waste",
      location: "Flat B-301",
      status: "ok",
      fillLevel: 35,
      lastEmptied: "Today, 8:00 AM",
    },
    {
      id: 2,
      name: "Non-biodegradable Waste",
      location: "Flat B-301",
      status: "warning",
      fillLevel: 85,
      lastEmptied: "Yesterday, 4:30 PM",
    },
    {
      id: 3,
      name: "Common Area Bin",
      location: "3rd Floor Corridor",
      status: "ok",
      fillLevel: 50,
      lastEmptied: "Today, 10:15 AM",
    },
  ]

  return (
    <div className="space-y-4">
      {bins.map((bin) => (
        <div key={bin.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{bin.name}</p>
              <p className="text-xs text-muted-foreground">{bin.location}</p>
            </div>
            <StatusBadge status={bin.status} />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Fill Level: {bin.fillLevel}%</span>
              <span>Last emptied: {bin.lastEmptied}</span>
            </div>
            <Progress
              value={bin.fillLevel}
              className={`h-2 ${
                bin.fillLevel > 80
                  ? "bg-muted text-orange-500"
                  : bin.fillLevel > 60
                    ? "bg-muted text-yellow-500"
                    : "bg-muted text-emerald-500"
              }`}
            />
          </div>

          {bin.status === "warning" && (
            <Button size="sm" variant="outline" className="w-full" asChild>
              <Link href="/scan">
                <Trash2 className="mr-2 h-3 w-3" />
                Report Bin Full
              </Link>
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  if (status === "ok") {
    return (
      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
        <CheckCircle className="mr-1 h-3 w-3" />
        OK
      </Badge>
    )
  }

  if (status === "warning") {
    return (
      <Badge variant="outline" className="bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-400">
        <AlertTriangle className="mr-1 h-3 w-3" />
        Almost Full
      </Badge>
    )
  }

  return null
}
