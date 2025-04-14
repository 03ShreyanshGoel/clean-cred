import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BarChart3, Calendar } from "lucide-react"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { BinStatusCard } from "@/components/dashboard/bin-status-card"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container grid items-start gap-4 pt-6 md:gap-8 md:pt-10">
          <DashboardHeader />

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <DashboardStats />

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Your Cleanliness Score</CardTitle>
                    <Award className="h-4 w-4 text-emerald-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87/100</div>
                    <p className="text-xs text-muted-foreground">+2.5% from last week</p>
                    <div className="mt-4">
                      <Link href="/profile" className="text-sm text-emerald-500 hover:underline">
                        View detailed breakdown →
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Flat Ranking</CardTitle>
                    <BarChart3 className="h-4 w-4 text-emerald-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">#3 of 24</div>
                    <p className="text-xs text-muted-foreground">Up 2 positions this week</p>
                    <div className="mt-4">
                      <Link href="/leaderboard" className="text-sm text-emerald-500 hover:underline">
                        View leaderboard →
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Clean Drive</CardTitle>
                    <Calendar className="h-4 w-4 text-emerald-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-md font-bold">Campus Cleanup Day</div>
                    <p className="text-xs text-muted-foreground">Saturday, 20 April • 10:00 AM</p>
                    <div className="mt-4">
                      <Link href="/events" className="text-sm text-emerald-500 hover:underline">
                        Register now →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Your waste management activities in the past week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentActivities />
                  </CardContent>
                </Card>

                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Bin Status</CardTitle>
                    <CardDescription>Current status of bins in your flat and floor</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BinStatusCard />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Waste Segregation Analytics</CardTitle>
                  <CardDescription>Your waste segregation performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <div className="h-full w-full rounded-md bg-muted/30 p-6">
                      <div className="flex h-full flex-col items-center justify-center gap-2">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">Analytics data will appear here</p>
                          <p className="text-xs text-muted-foreground">Tracking your waste management patterns</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Generate Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cleanliness Reports</CardTitle>
                  <CardDescription>Reports and feedback from janitors and admins</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <div className="h-full w-full rounded-md bg-muted/30 p-6">
                      <div className="flex h-full flex-col items-center justify-center gap-2">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">No reports available at the moment</p>
                          <p className="text-xs text-muted-foreground">Reports will appear here when available</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Request Inspection
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
