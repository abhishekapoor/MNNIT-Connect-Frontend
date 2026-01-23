import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import api from '@/services/api'

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await api.get('/event')
      setEvents(response.data)
    } catch (err) {
      console.error('Error fetching events:', err)
      setError('Failed to load events')
    } finally {
      setLoading(false)
    }
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
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description || 'No description'}</CardDescription>
                  </div>
                  {event.category && <Badge>{event.category}</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Date</p>
                    <p className="font-medium">
                      {new Date(event.eventDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Time</p>
                    <p className="font-medium">
                      {new Date(event.eventDate).toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium">{event.venue || 'TBA'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
