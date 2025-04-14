import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BarChart3, QrCode, Recycle, Shield, Users } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need for Waste Management
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our platform provides all the tools you need to manage waste effectively and maintain cleanliness.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <QrCode className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <CardTitle className="mt-2">QR Code Scanning</CardTitle>
              <CardDescription>Scan bin QR codes to report status and request emptying.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Each bin has a unique QR code that can be scanned to report its status, making waste management
                efficient and trackable.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <BarChart3 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <CardTitle className="mt-2">Leaderboard & Rankings</CardTitle>
              <CardDescription>Compete with other flats and floors for cleanliness.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                View your ranking on the leaderboard and compete with other flats and floors to maintain the highest
                cleanliness standards.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <CardTitle className="mt-2">Rewards & Recognition</CardTitle>
              <CardDescription>Earn points and rewards for your cleanliness efforts.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get rewarded for maintaining cleanliness with points that can be redeemed for various benefits and
                recognition.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Recycle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <CardTitle className="mt-2">Waste Segregation</CardTitle>
              <CardDescription>Learn and practice proper waste segregation.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our platform educates and encourages proper waste segregation, helping you contribute to a more
                sustainable environment.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <CardTitle className="mt-2">Community Events</CardTitle>
              <CardDescription>Participate in clean drives and community events.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Join clean drives and community events to make a bigger impact and earn additional rewards and
                recognition.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <CardTitle className="mt-2">Cleanliness Monitoring</CardTitle>
              <CardDescription>Track and monitor cleanliness levels in real-time.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our platform provides real-time monitoring of cleanliness levels, helping you maintain high standards
                and identify areas for improvement.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
