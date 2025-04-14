import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-emerald-50 dark:from-background dark:to-emerald-950/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
              Introducing CleanCred
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Smart Waste Management for a Cleaner Campus
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Track, manage, and improve cleanliness with our innovative waste management platform. Earn rewards for
                your contribution to a cleaner environment.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/learn">Learn More</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Leaf className="h-4 w-4 text-emerald-500" />
                <span className="text-muted-foreground">Eco-friendly</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4 text-emerald-500" />
                <span className="text-muted-foreground">Reward-based</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted md:h-[450px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="rounded-full bg-white/90 p-4 dark:bg-black/80">
                  <Award className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-white drop-shadow-md dark:text-white">
                  Join the CleanCred Movement
                </h2>
                <p className="mt-2 max-w-md text-white/90 drop-shadow-md dark:text-white/90">
                  Over 1,000+ students are already using CleanCred to make their campus cleaner and more sustainable.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="rounded-lg bg-white/90 p-3 text-center dark:bg-black/80">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">5K+</div>
                    <div className="text-xs text-muted-foreground">Waste Reports</div>
                  </div>
                  <div className="rounded-lg bg-white/90 p-3 text-center dark:bg-black/80">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">24</div>
                    <div className="text-xs text-muted-foreground">Hostels</div>
                  </div>
                  <div className="rounded-lg bg-white/90 p-3 text-center dark:bg-black/80">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">98%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
