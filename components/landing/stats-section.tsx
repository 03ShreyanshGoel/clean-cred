import { CheckCircle, Leaf, Recycle, Users } from "lucide-react"

export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 dark:bg-emerald-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Making a Difference Together
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
              Our community is working together to create a cleaner, more sustainable campus environment.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Recycle className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">5,280 kg</div>
            <div className="text-sm text-white/80">Waste Properly Segregated</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">12,450</div>
            <div className="text-sm text-white/80">Bins Emptied On Time</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">1,200+</div>
            <div className="text-sm text-white/80">Active Users</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white">24</div>
            <div className="text-sm text-white/80">Clean Drives Organized</div>
          </div>
        </div>
      </div>
    </section>
  )
}
