import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowRight, BookOpen, Calendar, Users, Clock, Search, AlertCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import api from '@/services/api'

export default function Dashboard() {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [clubs, setClubs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      setError('')
      
      // Fetch events
      const eventsRes = await api.get('/event')
      const allEvents = eventsRes.data.events || eventsRes.data || []
      
      // Filter upcoming events
      const now = new Date()
      const upcoming = allEvents.filter(e => new Date(e.eventDate) > now).slice(0, 3)
      setUpcomingEvents(upcoming)
      
      // Fetch clubs
      const clubsRes = await api.get('/club')
      const clubsData = clubsRes.data.clubs || clubsRes.data || []
      setClubs(clubsData)
    } catch (err) {
      console.error('Error fetching dashboard data:', err)
      setError('Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, get a quick overview of your campus life.</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-800">{error}</p>
        </div>
      )}

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
              {loading ? (
                <p className="text-muted-foreground">Loading events...</p>
              ) : upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <div key={event._id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                    <div className="flex flex-col items-center justify-center p-2 bg-primary/10 text-primary rounded-md">
                      <span className="text-sm font-bold">
                        {new Date(event.eventDate).toLocaleDateString('en-US', { day: 'numeric' })}
                      </span>
                      <span className="text-xs">
                        {new Date(event.eventDate).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {event.category} @ {event.venue}
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

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Clubs</span>
                <span className="text-2xl font-bold">{clubs.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Upcoming Events</span>
                <span className="text-2xl font-bold">{upcomingEvents.length}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Clubs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Featured Clubs</span>
            <Link to="/app/clubs" className="text-sm font-medium text-primary hover:underline">
              Explore All
            </Link>
          </CardTitle>
          <CardDescription>Join a club and connect with like-minded students.</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-muted-foreground">Loading clubs...</p>
          ) : clubs.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {clubs.slice(0, 3).map((club) => (
                <Link key={club._id} to={`/app/clubs/${club._id}`} className="p-4 border rounded-lg hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">{club.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{club.domain}</p>
                  {club.description && (
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{club.description}</p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No clubs available yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
