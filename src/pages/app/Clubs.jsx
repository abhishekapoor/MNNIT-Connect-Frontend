import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'
import api from '@/services/api'

export default function Clubs() {
  const [clubsList, setClubsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
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
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardHeader>
                <CardTitle>{club.name}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Badge variant="outline">{club.domain}</Badge>
                </CardDescription>
                {club.description && (
                  <p className="text-sm text-muted-foreground mt-2">{club.description}</p>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  {club.contactEmail && (
                    <p className="text-muted-foreground">
                      <strong>Contact:</strong> {club.contactEmail}
                    </p>
                  )}
                  {club.achievements && (
                    <p className="text-muted-foreground">
                      <strong>Achievements:</strong> {club.achievements}
                    </p>
                  )}
                </div>
                <Button className="w-full mt-4" variant="outline">Join Club</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
