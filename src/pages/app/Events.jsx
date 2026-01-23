import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AlertCircle, Calendar, MapPin, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import api from '@/services/api'

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [registering, setRegistering] = useState(null)
  const [registeredEvents, setRegisteredEvents] = useState([])

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await api.get('/event')
      setEvents(response.data.events || response.data)
    } catch (err) {
      console.error('Error fetching events:', err)
      setError('Failed to load events')
    } finally {
      setLoading(false)
    }
  }

  const handleRegisterEvent = async (eventId) => {
    try {
      setRegistering(eventId)
      await api.post(`/event/${eventId}/register`)
      setRegisteredEvents([...registeredEvents, eventId])
      alert('Successfully registered for event!')
      fetchEvents()
    } catch (err) {
      console.error('Error registering:', err)
      alert('Failed to register: ' + (err.response?.data?.message || err.message))
    } finally {
      setRegistering(null)
    }
  }

  const handleUnregisterEvent = async (eventId) => {
    try {
      setRegistering(eventId)
      await api.post(`/event/${eventId}/unregister`)
      setRegisteredEvents(registeredEvents.filter(id => id !== eventId))
      alert('Successfully unregistered from event!')
      fetchEvents()
    } catch (err) {
      console.error('Error unregistering:', err)
      alert('Failed to unregister: ' + (err.response?.data?.message || err.message))
    } finally {
      setRegistering(null)
    }
  }

  const isRegistered = (eventId) => {
    return registeredEvents.includes(eventId)
  }

  const getCategoryColor = (category) => {
    const colors = {
      WORKSHOP: 'bg-blue-100 text-blue-800',
      FEST: 'bg-purple-100 text-purple-800',
      CULTURAL: 'bg-pink-100 text-pink-800',
      SPORTS: 'bg-green-100 text-green-800',
      ACADEMIC: 'bg-yellow-100 text-yellow-800',
      OTHER: 'bg-gray-100 text-gray-800'
    }
    return colors[category] || colors.OTHER
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Events</h1>
        <p className="text-muted-foreground mt-2">Discover and attend campus events</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {loading ? (
        <p className="text-muted-foreground">Loading events...</p>
      ) : events.length === 0 ? (
        <p className="text-muted-foreground">No events available yet.</p>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <Card key={event._id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description || 'No description'}</CardDescription>
                  </div>
                  <Badge className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-muted-foreground text-xs">Date & Time</p>
                      <p className="font-medium">
                        {new Date(event.eventDate).toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {event.eventTime || '10:00 AM'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-muted-foreground text-xs">Location</p>
                      <p className="font-medium">{event.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-muted-foreground text-xs">Registrations</p>
                      <p className="font-medium">
                        {event.registeredUsers?.length || 0} / {event.maxAttendees || 'Unlimited'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  {isRegistered(event._id) ? (
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex-1"
                      disabled={registering === event._id}
                      onClick={() => handleUnregisterEvent(event._id)}
                    >
                      {registering === event._id ? 'Unregistering...' : 'Unregister'}
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      className="flex-1"
                      disabled={registering === event._id}
                      onClick={() => handleRegisterEvent(event._id)}
                    >
                      {registering === event._id ? 'Registering...' : 'Register'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
