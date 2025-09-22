import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Globe, Users, CheckCircle, Star, Award } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CurriculumPage() {
  const ukCurriculum = [
    {
      keyStage: "Key Stage 1",
      ages: "5-7 years",
      grades: "Years 1-2",
      subjects: [
        { name: "English", topics: ["Phonics", "Reading", "Writing", "Speaking & Listening"] },
        { name: "Mathematics", topics: ["Number", "Measurement", "Geometry", "Statistics"] },
        { name: "Science", topics: ["Plants", "Animals", "Materials", "Seasonal Changes"] },
        { name: "Computing", topics: ["Algorithms", "Programming", "Data", "Technology"] },
      ],
    },
    {
      keyStage: "Key Stage 2",
      ages: "7-11 years",
      grades: "Years 3-6",
      subjects: [
        { name: "English", topics: ["Grammar", "Comprehension", "Creative Writing", "Poetry"] },
        { name: "Mathematics", topics: ["Fractions", "Decimals", "Algebra", "Problem Solving"] },
        { name: "Science", topics: ["Biology", "Chemistry", "Physics", "Scientific Method"] },
        { name: "History", topics: ["Ancient Civilizations", "British History", "World Wars"] },
      ],
    },
  ]

  const usCurriculum = [
    {
      grade: "Elementary (K-2)",
      ages: "5-8 years",
      standards: "Common Core & State Standards",
      subjects: [
        { name: "English Language Arts", topics: ["Phonics", "Reading Fluency", "Writing", "Vocabulary"] },
        { name: "Mathematics", topics: ["Counting", "Addition", "Subtraction", "Shapes"] },
        { name: "Science", topics: ["Life Science", "Physical Science", "Earth Science"] },
        { name: "Social Studies", topics: ["Community", "Geography", "History", "Citizenship"] },
      ],
    },
    {
      grade: "Elementary (3-5)",
      ages: "8-11 years",
      standards: "Common Core & State Standards",
      subjects: [
        { name: "English Language Arts", topics: ["Reading Comprehension", "Essay Writing", "Grammar"] },
        { name: "Mathematics", topics: ["Multiplication", "Division", "Fractions", "Geometry"] },
        { name: "Science", topics: ["Scientific Method", "Ecosystems", "Matter", "Energy"] },
        { name: "Social Studies", topics: ["US History", "Geography", "Government", "Economics"] },
      ],
    },
  ]

  const features = [
    {
      icon: Globe,
      title: "Dual Curriculum Support",
      description: "Seamlessly switch between UK National Curriculum and US Common Core standards",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Adaptive Learning",
      description: "Personalized learning paths that adjust to each student's pace and ability",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
    },
    {
      icon: Award,
      title: "Standards Alignment",
      description: "Every lesson and activity is carefully aligned with official curriculum standards",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      icon: Star,
      title: "Progress Tracking",
      description: "Detailed analytics showing mastery of curriculum objectives and learning goals",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <header className="bg-secondary text-secondary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold font-merriweather mb-4">Comprehensive Curriculum</h1>
          <p className="text-xl text-secondary-foreground/80 font-poppins max-w-3xl mx-auto">
            Supporting both UK National Curriculum and US Common Core standards with engaging, interactive content
            designed for modern learners.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-merriweather text-foreground mb-4">Why Our Curriculum Works</h2>
            <p className="text-xl text-muted-foreground font-poppins max-w-3xl mx-auto">
              Built by educators, for educators. Our curriculum combines the best of traditional learning with modern
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className={`rounded-2xl border-2 ${feature.bgColor} hover:shadow-lg transition-shadow`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className={`font-merriweather font-bold text-lg mb-3 ${feature.color}`}>{feature.title}</h3>
                    <p className="text-muted-foreground font-poppins text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* UK Curriculum Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-chart-3 text-white font-merriweather text-lg px-4 py-2 mb-4">
              UK National Curriculum
            </Badge>
            <h2 className="text-4xl font-bold font-merriweather text-foreground mb-4">British Education Standards</h2>
            <p className="text-xl text-muted-foreground font-poppins max-w-3xl mx-auto">
              Aligned with the UK National Curriculum, covering all key stages with comprehensive subject coverage.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {ukCurriculum.map((stage, index) => (
              <Card key={index} className="rounded-2xl border-chart-3/20 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-chart-3/10 to-chart-3/5 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-merriweather font-bold text-2xl text-chart-3">
                        {stage.keyStage}
                      </CardTitle>
                      <p className="text-muted-foreground font-poppins">
                        {stage.ages} • {stage.grades}
                      </p>
                    </div>
                    <BookOpen className="h-8 w-8 text-chart-3" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {stage.subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="border-l-4 border-chart-3/20 pl-4">
                        <h4 className="font-merriweather font-semibold text-lg mb-2">{subject.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {subject.topics.map((topic, topicIndex) => (
                            <Badge
                              key={topicIndex}
                              className="bg-chart-3/10 text-chart-3 font-poppins border border-chart-3/20"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* US Curriculum Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-primary text-white font-merriweather text-lg px-4 py-2 mb-4">
              US Common Core Standards
            </Badge>
            <h2 className="text-4xl font-bold font-merriweather text-foreground mb-4">American Education Standards</h2>
            <p className="text-xl text-muted-foreground font-poppins max-w-3xl mx-auto">
              Comprehensive coverage of Common Core State Standards and additional state-specific requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {usCurriculum.map((grade, index) => (
              <Card key={index} className="rounded-2xl border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-merriweather font-bold text-2xl text-primary">{grade.grade}</CardTitle>
                      <p className="text-muted-foreground font-poppins">
                        {grade.ages} • {grade.standards}
                      </p>
                    </div>
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {grade.subjects.map((subject, subIndex) => (
                      <div key={subIndex} className="border-l-4 border-primary/20 pl-4">
                        <h4 className="font-merriweather font-semibold text-lg mb-2">{subject.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {subject.topics.map((topic, topicIndex) => (
                            <Badge
                              key={topicIndex}
                              className="bg-primary/10 text-primary font-poppins border border-primary/20"
                            >
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-primary/10 to-chart-1/10 rounded-2xl p-12">
          <h2 className="text-4xl font-bold font-merriweather text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground font-poppins mb-8 max-w-2xl mx-auto">
            Join thousands of students, teachers, and parents who are already experiencing the future of education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-lg px-8 py-4 rounded-2xl"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-poppins font-semibold text-lg px-8 py-4 rounded-2xl bg-transparent"
            >
              View Pricing Plans
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
