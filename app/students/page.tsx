"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Star, Trophy, Zap, Target, Play, CheckCircle, Lock, Flame, Award, Users } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function StudentsPage() {
  const [currentLevel, setCurrentLevel] = useState(7)
  const [xpPoints, setXpPoints] = useState(2450)
  const [streak, setStreak] = useState(12)

  const subjects = [
    {
      name: "Math Adventures",
      icon: Target,
      progress: 85,
      level: 8,
      color: "bg-chart-1",
      textColor: "text-chart-1",
      borderColor: "border-chart-1/20",
      unlocked: true,
      nextReward: "Golden Calculator Badge",
    },
    {
      name: "Science Quest",
      icon: Zap,
      progress: 72,
      level: 6,
      color: "bg-primary",
      textColor: "text-primary",
      borderColor: "border-primary/20",
      unlocked: true,
      nextReward: "Lab Master Trophy",
    },
    {
      name: "Reading Kingdom",
      icon: BookOpen,
      progress: 94,
      level: 9,
      color: "bg-chart-3",
      textColor: "text-chart-3",
      borderColor: "border-chart-3/20",
      unlocked: true,
      nextReward: "Storyteller Crown",
    },
    {
      name: "History Explorer",
      icon: Trophy,
      progress: 45,
      level: 4,
      color: "bg-accent",
      textColor: "text-accent-foreground",
      borderColor: "border-accent/20",
      unlocked: true,
      nextReward: "Time Traveler Badge",
    },
    {
      name: "Art Studio",
      icon: Star,
      progress: 0,
      level: 1,
      color: "bg-muted",
      textColor: "text-muted-foreground",
      borderColor: "border-muted",
      unlocked: false,
      nextReward: "Creative Genius Badge",
    },
  ]

  const recentBadges = [
    { name: "Speed Reader", icon: "📚", color: "bg-chart-3" },
    { name: "Math Wizard", icon: "🧙‍♂️", color: "bg-chart-1" },
    { name: "Science Star", icon: "⭐", color: "bg-primary" },
    { name: "Perfect Week", icon: "🏆", color: "bg-accent" },
  ]

  const achievements = [
    { title: "7-Day Streak", description: "Learned every day this week!", icon: Flame, completed: true },
    { title: "Level 10 Master", description: "Reach level 10 in any subject", icon: Trophy, completed: false },
    { title: "Badge Collector", description: "Collect 25 badges", icon: Award, completed: false },
    { title: "Study Buddy", description: "Help 5 classmates", icon: Users, completed: true },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-chart-1/5">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <header className="bg-secondary text-secondary-foreground p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xl font-bold font-poppins text-primary-foreground">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold font-poppins">Hey Alex! 👋</h1>
              <p className="text-secondary-foreground/80 font-poppins">Ready for another awesome day?</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Flame className="h-5 w-5 text-accent" />
              <span className="font-bold font-poppins text-accent">{streak} day streak!</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-accent" />
              <span className="font-bold font-poppins">{xpPoints.toLocaleString()} XP</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Level Progress */}
        <Card className="bg-gradient-to-r from-primary/10 to-chart-1/10 border-primary/20 rounded-2xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold font-poppins text-primary">Level {currentLevel}</h2>
                <p className="text-muted-foreground font-poppins">Learning Champion</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground font-poppins">Next Level</p>
                <p className="text-2xl font-bold font-poppins text-chart-1">250 XP to go!</p>
              </div>
            </div>
            <Progress value={75} className="h-4 rounded-full" />
            <div className="flex justify-between mt-2 text-sm font-poppins text-muted-foreground">
              <span>Level {currentLevel}</span>
              <span>Level {currentLevel + 1}</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Learning Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold font-poppins text-foreground">Your Adventures</h2>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-semibold rounded-xl">
                <Play className="mr-2 h-4 w-4" />
                Continue Learning
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {subjects.map((subject, index) => {
                const IconComponent = subject.icon
                return (
                  <Card
                    key={index}
                    className={`${subject.borderColor} border-2 rounded-2xl hover:shadow-lg transition-all hover:scale-105 ${
                      subject.unlocked ? "cursor-pointer" : "opacity-60"
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-xl ${subject.color} flex items-center justify-center`}>
                            {subject.unlocked ? (
                              <IconComponent className="h-6 w-6 text-white" />
                            ) : (
                              <Lock className="h-6 w-6 text-white" />
                            )}
                          </div>
                          <div>
                            <CardTitle className={`font-poppins font-bold ${subject.textColor}`}>
                              {subject.name}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground font-poppins">Level {subject.level}</p>
                          </div>
                        </div>
                        {subject.unlocked && (
                          <Badge className={`${subject.color} text-white font-poppins`}>{subject.progress}%</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      {subject.unlocked ? (
                        <>
                          <Progress value={subject.progress} className="mb-4 h-3 rounded-full" />
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground font-poppins">Next reward:</p>
                            <p className="text-sm font-semibold font-poppins text-accent">{subject.nextReward}</p>
                          </div>
                          <Button
                            className={`w-full mt-4 ${subject.color} hover:opacity-90 text-white font-poppins font-semibold rounded-xl`}
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Continue
                          </Button>
                        </>
                      ) : (
                        <div className="text-center py-4">
                          <Lock className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground font-poppins">
                            Complete Math Adventures to unlock!
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Badges */}
            <Card className="rounded-2xl border-accent/20">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-accent flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Recent Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {recentBadges.map((badge, index) => (
                    <div
                      key={index}
                      className={`${badge.color} rounded-xl p-4 text-center text-white hover:scale-105 transition-transform cursor-pointer`}
                    >
                      <div className="text-2xl mb-2">{badge.icon}</div>
                      <p className="text-xs font-poppins font-semibold">{badge.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Goals */}
            <Card className="rounded-2xl border-chart-1/20">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-chart-1 flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Today's Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-chart-1" />
                  <span className="font-poppins text-sm line-through text-muted-foreground">
                    Complete 3 math problems
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-chart-1" />
                  <span className="font-poppins text-sm line-through text-muted-foreground">Read for 20 minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground"></div>
                  <span className="font-poppins text-sm">Take science quiz</span>
                </div>
                <div className="pt-2">
                  <Progress value={66} className="h-2 rounded-full" />
                  <p className="text-xs text-muted-foreground font-poppins mt-1">2 of 3 goals complete</p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="rounded-2xl border-chart-3/20">
              <CardHeader>
                <CardTitle className="font-poppins font-bold text-chart-3 flex items-center">
                  <Trophy className="mr-2 h-5 w-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-xl ${
                        achievement.completed ? "bg-chart-3/10 border border-chart-3/20" : "bg-muted/50"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          achievement.completed ? "bg-chart-3 text-white" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-poppins font-semibold text-sm ${
                            achievement.completed ? "text-chart-3" : "text-muted-foreground"
                          }`}
                        >
                          {achievement.title}
                        </p>
                        <p className="text-xs text-muted-foreground font-poppins">{achievement.description}</p>
                      </div>
                      {achievement.completed && <CheckCircle className="h-4 w-4 text-chart-3" />}
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
