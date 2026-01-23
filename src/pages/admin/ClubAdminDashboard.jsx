import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Users, Mail, Phone, LogOut, AlertCircle, Loader } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import api from '@/services/api'

export default function ClubAdminDashboard() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  const [clubData, setClubData] = useState(null)
  const [events, setEvents] = useState([])
  const [formData, setFormData] = useState({
    title: '',
    category: 'WORKSHOP',
    venue: '',
    eventDate: '',
    eventTime: '10:00 AM',
    description: ''
  })
  const [isCreatingEvent, setIsCreatingEvent] = useState(false)

  useEffect(() => {
    if (!user?.email || user.role !== 'CLUB_ADMIN') {
      navigate('/login')
    } else {
      fetchClubData()
    }
  }, [user, navigate])

  const fetchClubData = async () => {
    try {
      setLoading(true)
      setError('')
      
      // Get user's clubs from their profile first (if needed)
      // For now, we'll find the club where this user is clubAdmin
      const clubsRes = await api.get('/club')
      const userClub = clubsRes.data.clubs.find(c => c.clubAdmin?._id === user._id || c.clubAdmin?.email === user.email)
      
      if (!userClub) {
        setError('No club found for this admin')
        setLoading(false)
        return
      }

      // Get full club data
      const clubRes = await api.get(`/club/${userClub._id}/admin/dashboard`)
      setClubData(clubRes.data.club)
      setEvents(clubRes.data.events || [])
    } catch (err) {
      console.error('Error fetching club data:', err)
      setError('Failed to load club data: ' + (err.response?.data?.message || err.message))
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCreateEvent = async (e) => {
    e.preventDefault()
    try {
      setIsCreatingEvent(true)
      
      const eventData = {
        ...formData,
        club: clubData._id,
        eventDate: new Date(formData.eventDate)
      }

      await api.post('/event', eventData)
      alert('Event created successfully!')
      
      setFormData({
        title: '',
        category: 'WORKSHOP',
        venue: '',
        eventDate: '',
        eventTime: '10:00 AM',
        description: ''
      })
      
      setActiveTab('events')
      fetchClubData()
    } catch (err) {
      console.error('Error creating event:', err)
      alert('Failed to create event: ' + (err.response?.data?.message || err.message))
    } finally {
      setIsCreatingEvent(false)
    }
  }

  const handleDeleteEvent = async (eventId) => {
    if (confirm('Are you sure you want to delete this event?')) {
      try {
        await api.delete(`/event/${eventId}`)
        alert('Event deleted successfully!')
        fetchClubData()
      } catch (err) {
        console.error('Error deleting event:', err)
        alert('Failed to delete event')
      }
    }
  }

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <Loader className="w-12 h-12 animate-spin text-primary mx-auto" />
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (error || !clubData) {
    return (
      <div className="space-y-6">
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-800">{error || 'Failed to load club data'}</p>
        </div>
        <Button onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    )
  }

  const upcomingEvents = events.filter(e => new Date(e.eventDate) > new Date())
  const pastEvents = events.filter(e => new Date(e.eventDate) <= new Date())

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Club Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage {clubData.name}</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>

      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="profile">Club Profile</TabsTrigger>
        </TabsList>

        {/* DASHBOARD TAB */}
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stats */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Total Members</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{clubData.members?.length || 0}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{upcomingEvents.length}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Total Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{events.length}</p>
              </CardContent>
            </Card>
          </div>

          {/* Club Info */}
          <Card>
            <CardHeader>
              <CardTitle>Club Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Club Name</p>
                  <p className="font-semibold text-lg">{clubData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Domain</p>
                  <Badge>{clubData.domain}</Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm">{clubData.contactEmail || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-sm">{clubData.contactPhone || 'Not provided'}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground">Description</p>
                  <p className="text-sm">{clubData.description || 'No description'}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingEvents.length > 0 ? (
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <div key={event._id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                        <Badge variant="outline">{event.category}</Badge>
                      </div>
                      <div className="grid grid-cols-2 text-sm text-muted-foreground">
                        <p>📅 {new Date(event.eventDate).toLocaleDateString()}</p>
                        <p>📍 {event.venue}</p>
                        <p>👥 {event.registeredUsers?.length || 0} registered</p>
                        <p>🕐 {event.eventTime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No upcoming events</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* EVENTS TAB */}
        <TabsContent value="events" className="space-y-6">
          {/* Create Event Form */}
          <Card>
            <CardHeader>
              <CardTitle>Create New Event</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateEvent} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Event Title *</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Event title"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="WORKSHOP">Workshop</option>
                      <option value="FEST">Fest</option>
                      <option value="CULTURAL">Cultural</option>
                      <option value="SPORTS">Sports</option>
                      <option value="ACADEMIC">Academic</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="venue">Venue *</Label>
                    <Input
                      id="venue"
                      name="venue"
                      value={formData.venue}
                      onChange={handleInputChange}
                      placeholder="Event venue"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Date *</Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventTime">Time</Label>
                    <Input
                      id="eventTime"
                      name="eventTime"
                      type="time"
                      value={formData.eventTime}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Event description"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <Button type="submit" disabled={isCreatingEvent}>
                  {isCreatingEvent ? 'Creating...' : 'Create Event'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* All Events */}
          <Card>
            <CardHeader>
              <CardTitle>All Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {events.length > 0 ? (
                events.map(event => (
                  <div key={event._id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                      <Badge variant="outline">{event.category}</Badge>
                    </div>
                    <div className="grid grid-cols-2 text-sm text-muted-foreground">
                      <p>📅 {new Date(event.eventDate).toLocaleDateString()}</p>
                      <p>📍 {event.venue}</p>
                      <p>👥 {event.registeredUsers?.length || 0} registered</p>
                      <p>🕐 {event.eventTime}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteEvent(event._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">No events yet</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* PROFILE TAB */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Club Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Club Name</p>
                  <p className="text-lg font-semibold mt-1">{clubData.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Domain</p>
                  <p className="text-lg font-semibold mt-1">{clubData.domain}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Contact Email</p>
                  <p className="text-sm mt-1">{clubData.contactEmail || 'Not provided'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Contact Phone</p>
                  <p className="text-sm mt-1">{clubData.contactPhone || 'Not provided'}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-muted-foreground">Description</p>
                  <p className="text-sm mt-1">{clubData.description || 'No description'}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-muted-foreground">Achievements</p>
                  <p className="text-sm mt-1">{clubData.achievements || 'No achievements'}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-4">Members ({clubData.members?.length || 0})</p>
                {clubData.members && clubData.members.length > 0 ? (
                  <div className="space-y-2">
                    {clubData.members.map(member => (
                      <div key={member._id} className="p-3 border rounded-lg">
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                        <p className="text-xs text-muted-foreground">{member.regNo}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No members yet</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
