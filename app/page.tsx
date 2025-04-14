import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, Recycle } from "lucide-react"
import { HeroSection } from "@/components/landing/hero-section"
import { FeatureSection } from "@/components/landing/feature-section"
import { TestimonialSection } from "@/components/landing/testimonial-section"
import { StatsSection } from "@/components/landing/stats-section"
import { CTASection } from "@/components/landing/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />

        <FeatureSection />

        <StatsSection />

        <section className="bg-gradient-to-b from-white to-emerald-50 py-16 dark:from-background dark:to-emerald-950/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple Steps to a Cleaner Campus
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our smart waste management system makes it easy to maintain cleanliness and track your progress.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 mt-12">
              <Card className="relative overflow-hidden border-none bg-emerald-50 shadow-md dark:bg-emerald-950/20">
                <div className="absolute right-2 top-2 rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/40">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">1</span>
                </div>
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="mt-4 text-xl font-bold">Scan Bin QR Code</h3>
                  <p className="mt-2 text-muted-foreground">
                    Scan the QR code on your bin to report its status or request emptying.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden border-none bg-emerald-50 shadow-md dark:bg-emerald-950/20">
                <div className="absolute right-2 top-2 rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/40">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">2</span>
                </div>
                <CardContent className="p-6">
                  <Recycle className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="mt-4 text-xl font-bold">Segregate Waste</h3>
                  <p className="mt-2 text-muted-foreground">
                    Properly segregate your waste into biodegradable and non-biodegradable bins.
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden border-none bg-emerald-50 shadow-md dark:bg-emerald-950/20">
                <div className="absolute right-2 top-2 rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/40">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">3</span>
                </div>
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="mt-4 text-xl font-bold">Earn Rewards</h3>
                  <p className="mt-2 text-muted-foreground">
                    Earn points and rewards for maintaining cleanliness and proper waste management.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <TestimonialSection />

        <CTASection />
      </main>
    </div>
  )
}
