import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="container py-6 md:py-10">
      <div className="mb-6 flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Clean Drives & Events</h1>
        <p className="text-muted-foreground">Join upcoming clean drives and waste management events</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <Badge className="bg-emerald-500 hover:bg-emerald-600">Upcoming</Badge>
              <Badge variant="outline">10 Points</Badge>
            </div>
            <CardTitle className="mt-2">Campus Cleanup Day</CardTitle>
            <CardDescription>Join us for a campus-wide cleanup initiative</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Saturday, April 20, 2025</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>10:00 AM - 1:00 PM</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Main Campus Grounds</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>42 participants registered</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Register Now</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <Badge className="bg-emerald-500 hover:bg-emerald-600">Upcoming</Badge>
              <Badge variant="outline">15 Points</Badge>
            </div>
            <CardTitle className="mt-2">Waste Segregation Workshop</CardTitle>
            <CardDescription>Learn proper waste segregation techniques</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Wednesday, April 24, 2025</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>4:00 PM - 5:30 PM</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>Hostel Common Room</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>18 participants registered</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Register Now</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <Badge variant="secondary">Completed</Badge>
              <Badge variant="outline">8 Points</Badge>
            </div>
            <CardTitle className="mt-2">Hostel Cleanliness Competition</CardTitle>
            <CardDescription>Inter-floor cleanliness competition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>March 15, 2025</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>All Day Event</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>All Hostel Blocks</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>124 participants</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Results
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Past Events</h2>
        <div className="space-y-4">
          {pastEvents.map((event, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <div className="hidden sm:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <Calendar className="h-6 w-6 text-muted-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              <Badge variant="outline">{event.participants} Participants</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const pastEvents = [
  {
    title: "Waste Reduction Awareness Drive",
    date: "March 5, 2025",
    location: "Campus Auditorium",
    participants: 86,
  },
  {
    title: "Recycling Workshop",
    date: "February 18, 2025",
    location: "Science Block",
    participants: 42,
  },
  {
    title: "Clean Hostel Initiative",
    date: "January 25, 2025",
    location: "All Hostel Blocks",
    participants: 112,
  },
  {
    title: "Eco-Friendly Living Seminar",
    date: "January 10, 2025",
    location: "Main Hall",
    participants: 64,
  },
]
