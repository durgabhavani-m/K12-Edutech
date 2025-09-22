import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, Star, Zap, Crown, Users } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out our platform",
      icon: Users,
      color: "text-muted-foreground",
      bgColor: "bg-muted/10",
      borderColor: "border-muted",
      buttonStyle: "bg-muted text-muted-foreground hover:bg-muted/80",
      popular: false,
      features: [
        { name: "Access to 3 subjects", included: true },
        { name: "Basic progress tracking", included: true },
        { name: "5 lessons per month", included: true },
        { name: "Community support", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Unlimited lessons", included: false },
        { name: "Priority support", included: false },
        { name: "Custom learning paths", included: false },
      ],
    },
    {
      name: "Premium",
      price: "$19",
      period: "per month",
      description: "Everything you need for comprehensive learning",
      icon: Star,
      color: "text-accent-foreground",
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
      buttonStyle: "bg-accent hover:bg-accent/90 text-accent-foreground",
      popular: true,
      features: [
        { name: "Access to all subjects", included: true },
        { name: "Advanced progress tracking", included: true },
        { name: "Unlimited lessons", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom learning paths", included: true },
        { name: "Downloadable certificates", included: true },
        { name: "Parent dashboard", included: true },
      ],
    },
    {
      name: "Family",
      price: "$39",
      period: "per month",
      description: "Perfect for families with multiple children",
      icon: Crown,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      borderColor: "border-chart-3",
      buttonStyle: "bg-chart-3 hover:bg-chart-3/90 text-white",
      popular: false,
      features: [
        { name: "Up to 4 student accounts", included: true },
        { name: "All Premium features", included: true },
        { name: "Family progress dashboard", included: true },
        { name: "Priority phone support", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom learning paths", included: true },
        { name: "Downloadable certificates", included: true },
        { name: "Dedicated account manager", included: true },
      ],
    },
  ]

  const faqs = [
    {
      question: "Can I switch between UK and US curriculum?",
      answer:
        "Yes! You can easily switch between UK National Curriculum and US Common Core standards at any time in your account settings.",
    },
    {
      question: "Is there a free trial for Premium plans?",
      answer: "Yes, we offer a 14-day free trial for all Premium and Family plans. No credit card required to start.",
    },
    {
      question: "What happens if I cancel my subscription?",
      answer:
        "You can cancel anytime. Your account will remain active until the end of your billing period, then revert to the Free plan.",
    },
    {
      question: "Do you offer discounts for schools?",
      answer:
        "Yes! We offer special pricing for schools and educational institutions. Contact our sales team for custom quotes.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-chart-1 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold font-merriweather mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-white/80 font-poppins max-w-3xl mx-auto">
            Choose the perfect plan for your learning journey. Start free, upgrade when you're ready.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Pricing Cards */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <Card
                  key={index}
                  className={`rounded-2xl border-2 ${plan.borderColor} ${plan.bgColor} hover:shadow-xl transition-all relative ${
                    plan.popular ? "scale-105 shadow-lg" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-accent text-accent-foreground font-poppins font-bold px-4 py-2 text-sm">
                        <Zap className="mr-1 h-4 w-4" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl ${plan.bgColor} flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className={`h-8 w-8 ${plan.color}`} />
                    </div>
                    <CardTitle className={`font-merriweather font-bold text-2xl ${plan.color}`}>{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className={`text-5xl font-bold font-merriweather ${plan.color}`}>{plan.price}</span>
                      <span className="text-muted-foreground font-poppins">/{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground font-poppins mt-2">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <Button
                      className={`w-full mb-6 font-poppins font-semibold text-lg py-3 rounded-xl ${plan.buttonStyle}`}
                    >
                      {plan.name === "Free" ? "Get Started Free" : "Start Free Trial"}
                    </Button>

                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          {feature.included ? (
                            <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                          )}
                          <span
                            className={`font-poppins text-sm ${
                              feature.included ? "text-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Features Comparison */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-merriweather text-foreground mb-4">Why Choose Premium?</h2>
            <p className="text-xl text-muted-foreground font-poppins max-w-3xl mx-auto">
              Unlock the full potential of our learning platform with advanced features designed for serious learners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="rounded-2xl border-chart-1/20 bg-chart-1/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-chart-1 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-merriweather font-bold text-lg mb-2 text-chart-1">Unlimited Access</h3>
                <p className="text-muted-foreground font-poppins text-sm">
                  Access all subjects and lessons without any monthly limits
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-primary/20 bg-primary/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-merriweather font-bold text-lg mb-2 text-primary">Advanced Analytics</h3>
                <p className="text-muted-foreground font-poppins text-sm">
                  Detailed insights into learning progress and performance
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-chart-3/20 bg-chart-3/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-chart-3 flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-merriweather font-bold text-lg mb-2 text-chart-3">Priority Support</h3>
                <p className="text-muted-foreground font-poppins text-sm">
                  Get help when you need it with priority customer support
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-accent/20 bg-accent/5 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-merriweather font-bold text-lg mb-2 text-accent-foreground">Custom Paths</h3>
                <p className="text-muted-foreground font-poppins text-sm">
                  Personalized learning paths adapted to individual needs
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-merriweather text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground font-poppins max-w-3xl mx-auto">
              Got questions? We've got answers. Here are the most common questions about our pricing and plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="rounded-2xl border-muted/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-merriweather font-bold text-lg mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground font-poppins">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <h2 className="text-4xl font-bold font-merriweather text-foreground mb-4">Ready to Transform Learning?</h2>
          <p className="text-xl text-muted-foreground font-poppins mb-8 max-w-2xl mx-auto">
            Join thousands of families who have already discovered the joy of personalized, engaging education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-lg px-8 py-4 rounded-2xl"
            >
              <Star className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-poppins font-semibold text-lg px-8 py-4 rounded-2xl bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
