"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { CheckCircle, Clock, Recycle, Trash2 } from "lucide-react"

export function RecentActivities() {
  const { toast } = useToast()
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "segregation",
      title: "Waste Properly Segregated",
      description: "Biodegradable and non-biodegradable waste correctly separated",
      time: "Today, 9:30 AM",
    },
    {
      id: 2,
      type: "report",
      title: "Bin Full Report",
      description: "Reported biodegradable waste bin as full",
      time: "Yesterday, 8:15 PM",
    },
    {
      id: 3,
      type: "clean",
      title: "Room Cleaning Verified",
      description: "Weekly room cleaning verified by hostel staff",
      time: "April 12, 2025",
    },
    {
      id: 4,
      type: "segregation",
      title: "Waste Segregation Quiz Completed",
      description: "Scored 9/10 on the monthly waste segregation quiz",
      time: "April 10, 2025",
    },
  ])

  const handleActivityClick = (activity: any) => {
    toast({
      title: activity.title,
      description: activity.description,
    })
  }

  const handleLoadMore = () => {
    const newActivities = [
      {
        id: 5,
        type: "clean",
        title: "Common Area Cleaning",
        description: "Participated in floor common area cleaning",
        time: "April 8, 2025",
      },
      {
        id: 6,
        type: "report",
        title: "Maintenance Request",
        description: "Reported broken bin lid in the corridor",
        time: "April 5, 2025",
      },
    ]

    setActivities([...activities, ...newActivities])

    toast({
      title: "Activities Loaded",
      description: "Loaded 2 more activities",
    })
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-start gap-4 border-b pb-4 last:border-0 cursor-pointer hover:bg-muted/50 p-2 rounded-md transition-colors"
          onClick={() => handleActivityClick(activity)}
        >
          <div className={`rounded-full p-2 ${getActivityIconBg(activity.type)}`}>{getActivityIcon(activity.type)}</div>
          <div className="space-y-1">
            <p className="font-medium">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              <span>{activity.time}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center pt-2">
        <Button variant="outline" size="sm" onClick={handleLoadMore}>
          Load More
        </Button>
      </div>
    </div>
  )
}

function getActivityIcon(type: string) {
  switch (type) {
    case "segregation":
      return <Recycle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
    case "report":
      return <Trash2 className="h-4 w-4 text-orange-600 dark:text-orange-400" />
    case "clean":
      return <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
    default:
      return <Clock className="h-4 w-4" />
  }
}

function getActivityIconBg(type: string) {
  switch (type) {
    case "segregation":
      return "bg-emerald-100 dark:bg-emerald-900"
    case "report":
      return "bg-orange-100 dark:bg-orange-900"
    case "clean":
      return "bg-blue-100 dark:bg-blue-900"
    default:
      return "bg-gray-100 dark:bg-gray-800"
  }
}
