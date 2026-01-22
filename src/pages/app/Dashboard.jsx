import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { events, clubs, timetable } from '@/lib/data'
import { ArrowRight, BookOpen, Calendar, Users, Clock, Search } from 'lucide-react'

export default function Dashboard() {
  const today = new Date().toISOString().split('T')[0]
  const upcomingEvents = events.filter(e => e.date >= today).slice(0, 3)
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  const todaySlots = timetable.filter(slot => slot.day === todayName).slice(0, 2)

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, get a quick overview of your campus life.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Upcoming Events */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Upcoming Events</span>
              <Link to="/app/events" className="text-sm font-medium text-primary hover:underline">
                View All
              </Link>
            </CardTitle>
            <CardDescription>Don't miss out on what's happening on campus.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                    <div className="flex flex-col items-center justify-center p-2 bg-primary/10 text-primary rounded-md">
                      <span className="text-sm font-bold">
                        {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric' })}
                      </span>
                      <span className="text-xs">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {event.startTime} - {event.endTime} @ {event.location}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No upcoming events.</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaySlots.length > 0 ? (
                todaySlots.map((slot) => (
                  <div key={slot.id} className="flex items-start gap-3">
                    <Clock className="w-5 h-5 mt-1 text-primary" />
                    <div>
                      <p className="font-semibold">{slot.courseName}</p>
                      <p className="text-sm text-muted-foreground">
                        {slot.startTime} - {slot.endTime}
                      </p>
                      <p className="text-sm text-muted-foreground">{slot.location}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No classes scheduled for today.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              <Users className="w-4 h-4 inline mr-2" />
              Total Clubs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{clubs.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              <Calendar className="w-4 h-4 inline mr-2" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              <Clock className="w-4 h-4 inline mr-2" />
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todaySlots.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              <BookOpen className="w-4 h-4 inline mr-2" />
              Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
