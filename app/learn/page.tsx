import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle, Clock, Play, Star } from "lucide-react"

export default function LearnPage() {
  return (
    <div className="container py-6 md:py-10">
      <div className="mb-6 flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Learning Hub</h1>
        <p className="text-muted-foreground">Learn about waste management and proper cleanliness practices</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Your Progress</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Modules Completed</span>
                  <span className="text-sm font-medium">3/7</span>
                </div>
                <Progress value={43} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Quizzes Passed</span>
                  <span className="text-sm font-medium">2/5</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Knowledge Points</span>
                  <span className="text-sm font-medium">125</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Required Modules</h2>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>Monthly module due in 8 days</span>
          </Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <Badge>Required</Badge>
                <Badge variant="outline">10 min</Badge>
              </div>
              <CardTitle className="mt-2">Waste Segregation Basics</CardTitle>
              <CardDescription>Learn how to properly segregate different types of waste</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>Completed on April 5, 2025</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Play className="mr-2 h-4 w-4" />
                Review Module
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <Badge>Required</Badge>
                <Badge variant="outline">15 min</Badge>
              </div>
              <CardTitle className="mt-2">Hostel Cleanliness Guidelines</CardTitle>
              <CardDescription>Standard procedures for maintaining cleanliness in hostels</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex items-center gap-2 text-sm text-emerald-500">
                <Star className="h-4 w-4" />
                <span>Current monthly module</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Play className="mr-2 h-4 w-4" />
                Start Module
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between">
                <Badge>Required</Badge>
                <Badge variant="outline">8 min</Badge>
              </div>
              <CardTitle className="mt-2">Recycling Best Practices</CardTitle>
              <CardDescription>How to recycle effectively in campus settings</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>Completed on March 12, 2025</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Play className="mr-2 h-4 w-4" />
                Review Module
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Additional Learning</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {additionalModules.map((module, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{module.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">{module.description}</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <BookOpen className="h-3 w-3" />
                  <span>{module.duration}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <Play className="mr-2 h-3 w-3" />
                  Start
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const additionalModules = [
  {
    title: "Composting 101",
    description: "Learn how to create and maintain a compost system",
    duration: "12 min",
  },
  {
    title: "Plastic-Free Living",
    description: "Tips to reduce plastic usage in daily life",
    duration: "8 min",
  },
  {
    title: "E-Waste Management",
    description: "Proper disposal of electronic waste",
    duration: "10 min",
  },
  {
    title: "Water Conservation",
    description: "Techniques to save water in hostel settings",
    duration: "7 min",
  },
]
