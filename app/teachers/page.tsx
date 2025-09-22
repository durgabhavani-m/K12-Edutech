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
  BarChart3,
  Users,
  BookOpen,
  TrendingUp,
  Calendar,
  MessageSquare,
  Download,
  Plus,
  Search,
  Filter,
  Bell,
  CheckCircle,
  Clock,
} from "lucide-react"

export default function TeachersPage() {
  const [selectedClass, setSelectedClass] = useState("Grade 5A")

  const classStats = {
    totalStudents: 28,
    activeToday: 24,
    averageProgress: 78,
    completedAssignments: 156,
    pendingAssignments: 12,
  }

  const recentActivity = [
    {
      student: "Emma Johnson",
      action: "Completed Math Quiz Chapter 5",
      score: "95%",
      time: "2 hours ago",
      status: "excellent",
    },
    {
      student: "Michael Chen",
      action: "Submitted Science Project",
      score: "Pending Review",
      time: "3 hours ago",
      status: "pending",
    },
    {
      student: "Sarah Williams",
      action: "Struggling with Reading Assignment",
      score: "45%",
      time: "4 hours ago",
      status: "needs-help",
    },
    {
      student: "David Rodriguez",
      action: "Completed History Essay",
      score: "88%",
      time: "5 hours ago",
      status: "good",
    },
  ]

  const subjectProgress = [
    { subject: "Mathematics", progress: 85, students: 28, color: "bg-chart-1" },
    { subject: "Science", progress: 72, students: 26, color: "bg-primary" },
    { subject: "English", progress: 91, students: 28, color: "bg-chart-3" },
    { subject: "History", progress: 68, students: 25, color: "bg-secondary" },
    { subject: "Art", progress: 94, students: 22, color: "bg-accent" },
  ]

  const upcomingDeadlines = [
    { assignment: "Math Test - Fractions", dueDate: "Tomorrow", class: "Grade 5A", submitted: 18, total: 28 },
    { assignment: "Science Project Presentation", dueDate: "Friday", class: "Grade 5A", submitted: 12, total: 28 },
    { assignment: "Reading Comprehension Quiz", dueDate: "Next Monday", class: "Grade 5B", submitted: 0, total: 25 },
  ]

  const topPerformers = [
    { name: "Emma Johnson", subject: "Mathematics", score: 98, trend: "up" },
    { name: "Alex Thompson", subject: "Science", score: 96, trend: "up" },
    { name: "Sofia Martinez", subject: "English", score: 95, trend: "stable" },
    { name: "James Wilson", subject: "History", score: 94, trend: "up" },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      {/* Header */}
      <header className="bg-secondary text-secondary-foreground p-6 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold font-merriweather">Teacher Dashboard</h1>
              <p className="text-secondary-foreground/80 font-poppins">Welcome back, Ms. Anderson</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="bg-transparent border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10"
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                New Assignment
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-lg px-4 py-2 font-poppins text-secondary-foreground"
            >
              <option>Grade 5A</option>
              <option>Grade 5B</option>
              <option>Grade 4A</option>
            </select>
            <Badge className="bg-chart-1 text-white font-poppins">{classStats.totalStudents} Students</Badge>
            <Badge className="bg-primary text-white font-poppins">{classStats.activeToday} Active Today</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <Card className="rounded-xl border-chart-1/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-poppins text-muted-foreground">Total Students</p>
                  <p className="text-3xl font-bold font-merriweather text-chart-1">{classStats.totalStudents}</p>
                </div>
                <Users className="h-8 w-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-poppins text-muted-foreground">Active Today</p>
                  <p className="text-3xl font-bold font-merriweather text-primary">{classStats.activeToday}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-chart-3/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-poppins text-muted-foreground">Avg Progress</p>
                  <p className="text-3xl font-bold font-merriweather text-chart-3">{classStats.averageProgress}%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-chart-3" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-secondary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-poppins text-muted-foreground">Completed</p>
                  <p className="text-3xl font-bold font-merriweather text-secondary">
                    {classStats.completedAssignments}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-poppins text-muted-foreground">Pending</p>
                  <p className="text-3xl font-bold font-merriweather text-accent-foreground">
                    {classStats.pendingAssignments}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card rounded-xl p-1">
            <TabsTrigger value="overview" className="font-poppins font-medium">
              Overview
            </TabsTrigger>
            <TabsTrigger value="students" className="font-poppins font-medium">
              Students
            </TabsTrigger>
            <TabsTrigger value="assignments" className="font-poppins font-medium">
              Assignments
            </TabsTrigger>
            <TabsTrigger value="analytics" className="font-poppins font-medium">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Subject Progress */}
              <div className="lg:col-span-2">
                <Card className="rounded-xl">
                  <CardHeader>
                    <CardTitle className="font-merriweather font-bold text-secondary flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Subject Progress Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {subjectProgress.map((subject, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-poppins font-medium">{subject.subject}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-muted-foreground font-poppins">
                              {subject.students} students
                            </span>
                            <Badge className={`${subject.color} text-white font-poppins`}>{subject.progress}%</Badge>
                          </div>
                        </div>
                        <Progress value={subject.progress} className="h-3 rounded-full" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Deadlines */}
              <Card className="rounded-xl">
                <CardHeader>
                  <CardTitle className="font-merriweather font-bold text-secondary flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-poppins font-semibold text-sm mb-2">{deadline.assignment}</h4>
                      <p className="text-xs text-muted-foreground font-poppins mb-2">Due: {deadline.dueDate}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-poppins text-muted-foreground">
                          {deadline.submitted}/{deadline.total} submitted
                        </span>
                        <Progress value={(deadline.submitted / deadline.total) * 100} className="w-16 h-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="rounded-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-merriweather font-bold text-secondary flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Recent Student Activity
                  </CardTitle>
                  <Button variant="outline" size="sm" className="font-poppins bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Export Report
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            activity.status === "excellent"
                              ? "bg-chart-1"
                              : activity.status === "good"
                                ? "bg-primary"
                                : activity.status === "pending"
                                  ? "bg-accent"
                                  : "bg-destructive"
                          }`}
                        ></div>
                        <div>
                          <p className="font-poppins font-semibold text-sm">{activity.student}</p>
                          <p className="text-sm text-muted-foreground font-poppins">{activity.action}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-poppins font-semibold text-sm ${
                            activity.status === "excellent"
                              ? "text-chart-1"
                              : activity.status === "good"
                                ? "text-primary"
                                : activity.status === "pending"
                                  ? "text-accent-foreground"
                                  : "text-destructive"
                          }`}
                        >
                          {activity.score}
                        </p>
                        <p className="text-xs text-muted-foreground font-poppins">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card className="rounded-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-merriweather font-bold text-secondary">Top Performers This Week</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {topPerformers.map((student, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-chart-1/5 to-primary/5 rounded-lg border border-chart-1/20"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-poppins font-semibold">{student.name}</h4>
                        <TrendingUp
                          className={`h-4 w-4 ${student.trend === "up" ? "text-chart-1" : "text-muted-foreground"}`}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground font-poppins mb-2">{student.subject}</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-chart-1 text-white font-poppins">{student.score}%</Badge>
                        <span className="text-xs text-muted-foreground font-poppins">Excellent Progress</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="font-merriweather font-bold text-secondary">Assignment Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-merriweather font-bold text-xl mb-2">Assignment Center</h3>
                  <p className="text-muted-foreground font-poppins mb-6">
                    Create, manage, and track all your assignments in one place.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 font-poppins font-semibold">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Assignment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="rounded-xl">
              <CardHeader>
                <CardTitle className="font-merriweather font-bold text-secondary">Detailed Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-merriweather font-bold text-xl mb-2">Advanced Analytics</h3>
                  <p className="text-muted-foreground font-poppins mb-6">
                    Deep insights into student performance, engagement, and learning patterns.
                  </p>
                  <Button className="bg-chart-3 hover:bg-chart-3/90 text-white font-poppins font-semibold">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    View Full Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
