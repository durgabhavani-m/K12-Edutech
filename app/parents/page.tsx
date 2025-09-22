"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  User,
  Award,
  BookOpen,
  Calendar,
  MessageCircle,
  TrendingUp,
  Star,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  Download,
} from "lucide-react"

export default function ParentsPage() {
  const [selectedChild, setSelectedChild] = useState("Alex Johnson")

  const childData = {
    name: "Alex Johnson",
    grade: "Grade 5A",
    teacher: "Ms. Anderson",
    overallProgress: 82,
    currentLevel: 7,
    streakDays: 12,
    totalBadges: 15,
  }

  const subjectProgress = [
    {
      subject: "Mathematics",
      progress: 85,
      grade: "A-",
      trend: "improving",
      lastActivity: "Completed fractions quiz",
      color: "text-chart-1",
      bgColor: "bg-chart-1/10",
      borderColor: "border-chart-1/20",
    },
    {
      subject: "Science",
      progress: 78,
      grade: "B+",
      trend: "stable",
      lastActivity: "Submitted lab report",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      subject: "English",
      progress: 92,
      grade: "A",
      trend: "excellent",
      lastActivity: "Finished reading assignment",
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      borderColor: "border-chart-3/20",
    },
    {
      subject: "History",
      progress: 74,
      grade: "B",
      trend: "needs-attention",
      lastActivity: "Working on essay project",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
    },
  ]

  const recentAchievements = [
    {
      title: "Math Wizard",
      description: "Mastered multiplication tables",
      date: "2 days ago",
      icon: "🧙‍♂️",
      color: "bg-chart-1",
    },
    {
      title: "Reading Champion",
      description: "Read 5 books this month",
      date: "1 week ago",
      icon: "📚",
      color: "bg-chart-3",
    },
    {
      title: "Perfect Attendance",
      description: "No missed days this month",
      date: "2 weeks ago",
      icon: "⭐",
      color: "bg-accent",
    },
  ]

  const upcomingEvents = [
    {
      title: "Parent-Teacher Conference",
      date: "Tomorrow, 3:00 PM",
      type: "meeting",
      priority: "high",
    },
    {
      title: "Science Fair Project Due",
      date: "Friday, March 15",
      type: "assignment",
      priority: "medium",
    },
    {
      title: "Spring Break",
      date: "March 25 - April 1",
      type: "holiday",
      priority: "low",
    },
  ]

  const teacherMessages = [
    {
      from: "Ms. Anderson",
      subject: "Great progress in Math!",
      preview: "Alex has shown excellent improvement in fractions and is ready for the next chapter...",
      time: "2 hours ago",
      read: false,
    },
    {
      from: "Mr. Thompson (Science)",
      subject: "Science Fair Project",
      preview: "Reminder about the upcoming science fair project deadline. Alex has chosen a great topic...",
      time: "1 day ago",
      read: true,
    },
    {
      from: "School Administration",
      subject: "Spring Break Schedule",
      preview: "Important information about the upcoming spring break and school closure dates...",
      time: "3 days ago",
      read: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Component */}
      <Navigation />

      {/* Header */}
      <header className="bg-gradient-to-r from-secondary to-chart-3 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold font-merriweather">Parent Portal</h1>
              <p className="text-white/80 font-merriweather">Monitor your child's learning journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/10 font-merriweather"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Messages
              </Button>
              <Button className="bg-white text-secondary hover:bg-white/90 font-merriweather font-semibold">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <select
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 font-merriweather text-white backdrop-blur-sm"
            >
              <option value="Alex Johnson">Alex Johnson</option>
              <option value="Emma Johnson">Emma Johnson</option>
            </select>
            <Badge className="bg-white/20 text-white font-merriweather border-white/20">{childData.grade}</Badge>
            <Badge className="bg-chart-1 text-white font-merriweather">Level {childData.currentLevel}</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="rounded-xl border-chart-3/20 bg-gradient-to-br from-chart-3/5 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-merriweather text-muted-foreground">Overall Progress</p>
                  <p className="text-3xl font-bold font-merriweather text-chart-3">{childData.overallProgress}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-chart-3" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-chart-1/20 bg-gradient-to-br from-chart-1/5 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-merriweather text-muted-foreground">Learning Streak</p>
                  <p className="text-3xl font-bold font-merriweather text-chart-1">{childData.streakDays} days</p>
                </div>
                <Star className="h-8 w-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-accent/20 bg-gradient-to-br from-accent/5 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-merriweather text-muted-foreground">Badges Earned</p>
                  <p className="text-3xl font-bold font-merriweather text-accent-foreground">{childData.totalBadges}</p>
                </div>
                <Award className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-secondary/20 bg-gradient-to-br from-secondary/5 to-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-merriweather text-muted-foreground">Current Level</p>
                  <p className="text-3xl font-bold font-merriweather text-secondary">{childData.currentLevel}</p>
                </div>
                <User className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="progress" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card rounded-xl p-1">
            <TabsTrigger value="progress" className="font-merriweather font-medium">
              Academic Progress
            </TabsTrigger>
            <TabsTrigger value="achievements" className="font-merriweather font-medium">
              Achievements
            </TabsTrigger>
            <TabsTrigger value="communication" className="font-merriweather font-medium">
              Communication
            </TabsTrigger>
            <TabsTrigger value="schedule" className="font-merriweather font-medium">
              Schedule & Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-6">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="font-merriweather font-bold text-secondary flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Subject Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {subjectProgress.map((subject, index) => (
                    <Card
                      key={index}
                      className={`${subject.borderColor} border-2 rounded-xl ${subject.bgColor} hover:shadow-md transition-shadow`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className={`font-merriweather font-bold text-lg ${subject.color}`}>{subject.subject}</h3>
                          <Badge
                            className={`${
                              subject.trend === "excellent"
                                ? "bg-chart-1 text-white"
                                : subject.trend === "improving"
                                  ? "bg-primary text-white"
                                  : subject.trend === "stable"
                                    ? "bg-muted text-muted-foreground"
                                    : "bg-accent text-accent-foreground"
                            } font-merriweather`}
                          >
                            {subject.grade}
                          </Badge>
                        </div>
                        <Progress value={subject.progress} className="mb-4 h-3 rounded-full" />
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-merriweather text-muted-foreground">Progress</span>
                            <span className={`font-merriweather font-semibold ${subject.color}`}>
                              {subject.progress}%
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground font-merriweather">{subject.lastActivity}</p>
                          <div className="flex items-center space-x-2">
                            {subject.trend === "excellent" || subject.trend === "improving" ? (
                              <TrendingUp className="h-4 w-4 text-chart-1" />
                            ) : subject.trend === "needs-attention" ? (
                              <AlertCircle className="h-4 w-4 text-accent" />
                            ) : (
                              <CheckCircle className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span
                              className={`text-xs font-merriweather ${
                                subject.trend === "excellent" || subject.trend === "improving"
                                  ? "text-chart-1"
                                  : subject.trend === "needs-attention"
                                    ? "text-accent-foreground"
                                    : "text-muted-foreground"
                              }`}
                            >
                              {subject.trend === "excellent"
                                ? "Excellent progress"
                                : subject.trend === "improving"
                                  ? "Improving steadily"
                                  : subject.trend === "stable"
                                    ? "Steady performance"
                                    : "Needs attention"}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="font-merriweather font-bold text-chart-3 flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-gradient-to-r from-chart-3/5 to-white rounded-xl border border-chart-3/20"
                    >
                      <div className={`w-12 h-12 rounded-full ${achievement.color} flex items-center justify-center`}>
                        <span className="text-2xl">{achievement.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-merriweather font-bold text-chart-3">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground font-merriweather">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground font-merriweather mt-1">{achievement.date}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-chart-3/20 text-chart-3 hover:bg-chart-3/10 font-merriweather"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Certificate
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-6">
            <Card className="rounded-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-merriweather font-bold text-secondary flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Messages from Teachers
                  </CardTitle>
                  <Button className="bg-secondary hover:bg-secondary/90 text-white font-merriweather">
                    <Mail className="mr-2 h-4 w-4" />
                    Compose Message
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teacherMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border transition-colors cursor-pointer hover:bg-muted/30 ${
                        message.read ? "border-muted bg-muted/10" : "border-primary/20 bg-primary/5"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${message.read ? "bg-muted-foreground" : "bg-primary"}`}
                          ></div>
                          <h4 className="font-merriweather font-semibold">{message.from}</h4>
                        </div>
                        <span className="text-xs text-muted-foreground font-merriweather">{message.time}</span>
                      </div>
                      <h5 className="font-merriweather font-medium mb-2">{message.subject}</h5>
                      <p className="text-sm text-muted-foreground font-merriweather">{message.preview}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-secondary/20">
              <CardHeader>
                <CardTitle className="font-merriweather font-bold text-secondary flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Teacher Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary/5 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-merriweather font-bold text-secondary">Ms. Anderson</h4>
                      <p className="text-sm text-muted-foreground font-merriweather">Primary Teacher - Grade 5A</p>
                      <p className="text-sm text-muted-foreground font-merriweather mt-2">
                        anderson@school.edu • (555) 123-4567
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="bg-transparent border-secondary/20 text-secondary hover:bg-secondary/10 font-merriweather"
                    >
                      Schedule Meeting
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="font-merriweather font-bold text-secondary flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Events & Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border-l-4 ${
                        event.priority === "high"
                          ? "border-l-destructive bg-destructive/5"
                          : event.priority === "medium"
                            ? "border-l-accent bg-accent/5"
                            : "border-l-chart-1 bg-chart-1/5"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-merriweather font-semibold">{event.title}</h4>
                          <p className="text-sm text-muted-foreground font-merriweather">{event.date}</p>
                        </div>
                        <Badge
                          className={`${
                            event.priority === "high"
                              ? "bg-destructive text-white"
                              : event.priority === "medium"
                                ? "bg-accent text-accent-foreground"
                                : "bg-chart-1 text-white"
                          } font-merriweather`}
                        >
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
