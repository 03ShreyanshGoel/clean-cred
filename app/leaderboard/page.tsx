"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Medal, Trophy } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function LeaderboardPage() {
  const { toast } = useToast()
  const [leaderboardData, setLeaderboardData] = useState([
    { flat: "D-102", floor: "1st", score: 85, change: 2 },
    { flat: "A-203", floor: "2nd", score: 83, change: -1 },
    { flat: "B-301", floor: "3rd", score: 82, change: 3 },
    { flat: "C-405", floor: "4th", score: 80, change: 0 },
    { flat: "A-102", floor: "1st", score: 78, change: -2 },
    { flat: "D-304", floor: "3rd", score: 76, change: 1 },
    { flat: "B-205", floor: "2nd", score: 75, change: -3 },
  ])

  const handleTabChange = (value: string) => {
    toast({
      title: "Leaderboard Updated",
      description: `Showing ${value} leaderboard rankings`,
    })
  }

  const handleFlatClick = (flat: string) => {
    toast({
      title: `Flat ${flat}`,
      description: `Viewing details for Flat ${flat}`,
    })
  }

  return (
    <div className="container py-6 md:py-10">
      <div className="mb-6 flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Leaderboard</h1>
        <p className="text-muted-foreground">
          See how your flat ranks against others in cleanliness and waste segregation
        </p>
      </div>

      <Tabs defaultValue="weekly" className="space-y-4" onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="alltime">All Time</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-lg">2nd Place</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-amber-200 p-2 dark:bg-amber-800">
                  <Medal className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold">Flat B-204</h3>
                <p className="text-sm text-muted-foreground">Score: 92/100</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-lg">1st Place</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-yellow-200 p-2 dark:bg-yellow-800">
                  <Trophy className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold">Flat A-105</h3>
                <p className="text-sm text-muted-foreground">Score: 98/100</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-lg">3rd Place</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-2 rounded-full bg-orange-200 p-2 dark:bg-orange-800">
                  <Award className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold">Flat C-103</h3>
                <p className="text-sm text-muted-foreground">Score: 87/100</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Rankings</CardTitle>
              <CardDescription>Based on cleanliness scores from the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {leaderboardData.map((item, index) => (
                  <div
                    key={item.flat}
                    className={`flex items-center justify-between rounded-lg p-3 ${
                      item.flat === "B-301" ? "bg-emerald-50 dark:bg-emerald-950/50" : "bg-muted/50"
                    } cursor-pointer hover:bg-muted transition-colors`}
                    onClick={() => handleFlatClick(item.flat)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted font-medium">
                        {index + 4}
                      </div>
                      <div>
                        <p className="font-medium">Flat {item.flat}</p>
                        <p className="text-xs text-muted-foreground">Floor {item.floor}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.score}/100</p>
                      <p
                        className={`text-xs ${item.change > 0 ? "text-emerald-500" : item.change < 0 ? "text-red-500" : "text-muted-foreground"}`}
                      >
                        {item.change > 0 ? `+${item.change}` : item.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Rankings</CardTitle>
              <CardDescription>Based on cleanliness scores from the past 30 days</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Monthly rankings will be available soon</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alltime" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All-Time Rankings</CardTitle>
              <CardDescription>Based on cleanliness scores since the beginning</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">All-time rankings will be available soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
