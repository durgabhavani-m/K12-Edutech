import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Award, BarChart3, Star, Play, CheckCircle, Zap } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground font-poppins font-medium">
                  🚀 New Platform Launch
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-foreground leading-tight">
                  Learning Made
                  <span className="text-primary"> Fun </span>&<span className="text-chart-1"> Smart</span>
                </h1>
                <p className="text-xl text-muted-foreground font-poppins leading-relaxed">
                  The ultimate K-12 hybrid learning platform that gamifies education for students, empowers teachers
                  with analytics, and keeps parents engaged in their child's journey.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/students">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-lg px-8 py-4 rounded-2xl w-full sm:w-auto"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Start Learning Today
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-poppins font-semibold text-lg px-8 py-4 rounded-2xl bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-chart-1 flex items-center justify-center text-white text-sm font-bold">
                      S
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                      T
                    </div>
                    <div className="w-8 h-8 rounded-full bg-chart-3 flex items-center justify-center text-white text-sm font-bold">
                      P
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground font-poppins">Students, Teachers, Parents</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2 font-poppins">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card border-2 border-primary/20 rounded-2xl transform rotate-2 hover:rotate-0 transition-transform">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-chart-1 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-chart-1">Level Up!</h3>
                        <p className="text-sm text-muted-foreground">Math Quest Complete</p>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-chart-1 h-2 rounded-full w-4/5"></div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-2 border-accent/20 rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform mt-8">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <Award className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-accent-foreground">Gold Badge</h3>
                        <p className="text-sm text-muted-foreground">Reading Champion</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-accent"></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-2 border-chart-3/20 rounded-2xl transform rotate-1 hover:rotate-0 transition-transform">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-chart-3 flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-chart-3">Analytics</h3>
                        <p className="text-sm text-muted-foreground">Student Progress</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Math</span>
                        <span className="text-chart-1">95%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Science</span>
                        <span className="text-chart-1">87%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-2 border-secondary/20 rounded-2xl transform -rotate-1 hover:rotate-0 transition-transform mt-4">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <Users className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-secondary">Class Hub</h3>
                        <p className="text-sm text-muted-foreground">24 Students Online</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-accent" />
                      <span className="text-sm font-poppins">Live Session Active</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-merriweather text-foreground mb-4">
              One Platform, Three Experiences
            </h2>
            <p className="text-xl text-muted-foreground font-poppins max-w-3xl mx-auto">
              Designed specifically for students, teachers, and parents with unique interfaces that cater to each user's
              needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-chart-1/5 border-primary/20 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Play className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-primary mb-4">For Students</h3>
                <p className="text-muted-foreground font-poppins mb-6">
                  Gamified learning experience with rewards, badges, and interactive content that makes education fun
                  and engaging.
                </p>
                <Link href="/students">
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl font-poppins font-semibold">
                    Explore Student Hub
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-chart-1/5 border-secondary/20 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-merriweather text-secondary mb-4">For Teachers</h3>
                <p className="text-muted-foreground font-poppins mb-6">
                  Professional dashboard with analytics, class management tools, and insights to track student progress
                  effectively.
                </p>
                <Link href="/teachers">
                  <Button
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-xl font-merriweather font-bold bg-transparent"
                  >
                    View Teacher Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-chart-3/5 to-accent/5 border-chart-3/20 rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-chart-3 flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-merriweather text-chart-3 mb-4">For Parents</h3>
                <p className="text-muted-foreground font-poppins mb-6">
                  Elegant portal to monitor your child's progress, achievements, and stay connected with their learning
                  journey.
                </p>
                <Link href="/parents">
                  <Button
                    variant="outline"
                    className="w-full border-chart-3 text-chart-3 hover:bg-chart-3 hover:text-white rounded-xl font-merriweather font-bold bg-transparent"
                  >
                    Access Parent Portal
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
