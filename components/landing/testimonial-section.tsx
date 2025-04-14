export function TestimonialSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Hear from students and staff who have experienced the benefits of CleanCred.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-700 font-medium">AR</span>
              </div>
              <div>
                <p className="text-sm font-medium">Ananya Rao</p>
                <p className="text-xs text-muted-foreground">Computer Science, 3rd Year</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                "CleanCred has transformed how we manage waste in our hostel. The leaderboard creates healthy
                competition, and the rewards are a great incentive!"
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-700 font-medium">RK</span>
              </div>
              <div>
                <p className="text-sm font-medium">Rahul Kumar</p>
                <p className="text-xs text-muted-foreground">Mechanical Engineering, 2nd Year</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                "The QR code system makes it so easy to report when bins need emptying. Our floor has never been
                cleaner, and we're currently #2 on the leaderboard!"
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-700 font-medium">SP</span>
              </div>
              <div>
                <p className="text-sm font-medium">Sanjay Patel</p>
                <p className="text-xs text-muted-foreground">Hostel Warden</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                "As a warden, CleanCred has made my job much easier. I can monitor cleanliness levels across all floors
                and address issues promptly. The students are more engaged too!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
