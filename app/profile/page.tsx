import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, CheckCircle, Clock, Medal, Recycle, Trash2, Trophy } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="container py-6 md:py-10">
      <div className="mb-6 flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Your Profile</h1>
        <p className="text-muted-foreground">Track your cleanliness performance and achievements</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Rahul Sharma</CardTitle>
              <CardDescription>Flat B-301, 3rd Floor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="h-24 w-24 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">RS</span>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Student ID: 2021BCS1234</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Cleanliness Score</span>
                  <span className="font-medium">87/100</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium">Achievements</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Award className="h-3 w-3" />
                    <span>Clean Champion</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Recycle className="h-3 w-3" />
                    <span>Segregation Star</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Medal className="h-3 w-3" />
                    <span>Top 5 Rank</span>
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="stats" className="space-y-4">
            <TabsList>
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            </TabsList>

            <TabsContent value="stats" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cleanliness Breakdown</CardTitle>
                  <CardDescription>Your cleanliness performance by category</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Waste Segregation</span>
                      <span className="font-medium">92/100</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Bin Maintenance</span>
                      <span className="font-medium">85/100</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Room Cleanliness</span>
                      <span className="font-medium">88/100</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Common Area Contribution</span>
                      <span className="font-medium">78/100</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Waste Segregation Accuracy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">94%</div>
                    <p className="text-xs text-muted-foreground">+2% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Clean Drive Participation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3 Events</div>
                    <p className="text-xs text-muted-foreground">In the last 3 months</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Activity History</CardTitle>
                  <CardDescription>Your recent waste management activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activityHistory.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 border-b pb-4 last:border-0">
                        <div className={`rounded-full p-2 ${getActivityIconBg(activity.type)}`}>
                          {getActivityIcon(activity.type)}
                        </div>
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
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rewards" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Rewards</CardTitle>
                  <CardDescription>Rewards earned through your cleanliness efforts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900">
                            <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div>
                            <p className="font-medium">Free Canteen Meal</p>
                            <p className="text-sm text-muted-foreground">Valid until April 30, 2025</p>
                          </div>
                        </div>
                        <Badge>Active</Badge>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                            <Medal className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="font-medium">Amazon Voucher (₹100)</p>
                            <p className="text-sm text-muted-foreground">Earned on March 15, 2025</p>
                          </div>
                        </div>
                        <Badge variant="outline">Redeemed</Badge>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                            <Trophy className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="font-medium">Cleanest Flat of the Month (February)</p>
                            <p className="text-sm text-muted-foreground">Certificate of Recognition</p>
                          </div>
                        </div>
                        <Badge variant="secondary">Achievement</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

const activityHistory = [
  {
    type: "segregation",
    title: "Waste Properly Segregated",
    description: "Biodegradable and non-biodegradable waste correctly separated",
    time: "Today, 9:30 AM",
  },
  {
    type: "report",
    title: "Bin Full Report",
    description: "Reported biodegradable waste bin as full",
    time: "Yesterday, 8:15 PM",
  },
  {
    type: "clean",
    title: "Room Cleaning Verified",
    description: "Weekly room cleaning verified by hostel staff",
    time: "April 12, 2025",
  },
  {
    type: "event",
    title: "Campus Cleanup Participation",
    description: "Participated in the monthly campus cleanup drive",
    time: "April 5, 2025",
  },
]

function getActivityIcon(type: string) {
  switch (type) {
    case "segregation":
      return <Recycle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
    case "report":
      return <Trash2 className="h-4 w-4 text-orange-600 dark:text-orange-400" />
    case "clean":
      return <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
    case "event":
      return <Award className="h-4 w-4 text-purple-600 dark:text-purple-400" />
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
    case "event":
      return "bg-purple-100 dark:bg-purple-900"
    default:
      return "bg-gray-100 dark:bg-gray-800"
  }
}
