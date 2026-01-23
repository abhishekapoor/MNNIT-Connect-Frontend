import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AlertCircle, Users } from 'lucide-react'
import api from '@/services/api'

export default function Clubs() {
  const [clubsList, setClubsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [joining, setJoining] = useState(null)
  const [joinedClubs, setJoinedClubs] = useState([])
  
  useEffect(() => {
    fetchClubs()
  }, [])

  const fetchClubs = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await api.get('/club')
      setClubsList(response.data.clubs || [])
    } catch (err) {
      console.error('Error fetching clubs:', err)
      setError('Failed to load clubs')
    } finally {
      setLoading(false)
    }
  }

  const handleJoinClub = async (clubId) => {
    try {
      setJoining(clubId)
      await api.post(`/club/${clubId}/join`)
      setJoinedClubs([...joinedClubs, clubId])
      alert('Successfully joined club!')
      fetchClubs()
    } catch (err) {
      console.error('Error joining club:', err)
      alert('Failed to join club: ' + (err.response?.data?.message || err.message))
    } finally {
      setJoining(null)
    }
  }

  const handleLeaveClub = async (clubId) => {
    try {
      setJoining(clubId)
      await api.post(`/club/${clubId}/leave`)
      setJoinedClubs(joinedClubs.filter(id => id !== clubId))
      alert('Successfully left club!')
      fetchClubs()
    } catch (err) {
      console.error('Error leaving club:', err)
      alert('Failed to leave club: ' + (err.response?.data?.message || err.message))
    } finally {
      setJoining(null)
    }
  }

  const isClubMember = (clubId) => {
    return joinedClubs.includes(clubId)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Clubs</h1>
        <p className="text-muted-foreground mt-2">Explore campus clubs and join your interests</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {loading ? (
        <p className="text-muted-foreground">Loading clubs...</p>
      ) : clubsList.length === 0 ? (
        <p className="text-muted-foreground">No clubs available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubsList.map((club) => (
            <Card 
              key={club._id} 
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle>{club.name}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Badge variant="outline">{club.domain}</Badge>
                </CardDescription>
                {club.description && (
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{club.description}</p>
                )}
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  {club.contactEmail && (
                    <p className="text-muted-foreground">
                      <strong>Email:</strong> {club.contactEmail}
                    </p>
                  )}
                  {club.contactPhone && (
                    <p className="text-muted-foreground">
                      <strong>Phone:</strong> {club.contactPhone}
                    </p>
                  )}
                  <p className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <strong>{club.members?.length || 0} members</strong>
                  </p>
                </div>
                {isClubMember(club._id) ? (
                  <Button 
                    className="w-full" 
                    variant="destructive"
                    disabled={joining === club._id}
                    onClick={() => handleLeaveClub(club._id)}
                  >
                    {joining === club._id ? 'Leaving...' : 'Leave Club'}
                  </Button>
                ) : (
                  <Button 
                    className="w-full"
                    disabled={joining === club._id}
                    onClick={() => handleJoinClub(club._id)}
                  >
                    {joining === club._id ? 'Joining...' : 'Join Club'}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
