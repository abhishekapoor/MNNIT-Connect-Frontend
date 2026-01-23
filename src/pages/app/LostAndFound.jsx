import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle, Loader } from 'lucide-react'
import api from '@/services/api'

export default function LostAndFound() {
  const [tab, setTab] = useState('found')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    item: '',
    description: '',
    location: '',
    contact: ''
  })

  useEffect(() => {
    fetchItems()
  }, [tab])

  const fetchItems = async () => {
    try {
      setLoading(true)
      setError('')
      const status = tab === 'found' ? 'FOUND' : 'LOST'
      const res = await api.get(`/lostfound?status=${status}`)
      setItems(res.data.items || [])
    } catch (err) {
      console.error('Error fetching items:', err)
      setError('Failed to load items')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError('')
      
      await api.post('/lostfound', {
        ...formData,
        status: 'LOST'
      })

      alert('Item posted successfully!')
      setFormData({ item: '', description: '', location: '', contact: '' })
      setTab('found')
      fetchItems()
    } catch (err) {
      console.error('Error posting item:', err)
      setError('Failed to post item: ' + (err.response?.data?.message || err.message))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Lost & Found</h1>
        <p className="text-muted-foreground mt-2">Report or find lost items on campus</p>
      </div>

      <div className="flex gap-4">
        <Button
          variant={tab === 'found' ? 'default' : 'outline'}
          onClick={() => setTab('found')}
        >
          Found Items
        </Button>
        <Button
          variant={tab === 'lost' ? 'default' : 'outline'}
          onClick={() => setTab('lost')}
        >
          Report Lost Item
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {tab === 'found' && (
        <>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <Card key={item._id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="capitalize">{item.item}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm space-y-2">
                      <p><span className="font-medium">Location:</span> {item.location}</p>
                      <p><span className="font-medium">Posted:</span> {new Date(item.createdAt).toLocaleDateString()}</p>
                      <p><span className="font-medium">Contact:</span> {item.contact}</p>
                      {item.postedBy && (
                        <p><span className="font-medium">Posted By:</span> {item.postedBy.name}</p>
                      )}
                    </div>
                    <Button className="w-full" size="sm" variant="outline">
                      Contact Owner
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No found items yet</p>
              </CardContent>
            </Card>
          )}
        </>
      )}

      {tab === 'lost' && (
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Report a Lost Item</CardTitle>
            <CardDescription>Help others find your lost belongings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="item">Item Name *</Label>
                <Input 
                  id="item"
                  name="item"
                  placeholder="What did you lose?"
                  value={formData.item}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea 
                  id="description"
                  name="description"
                  placeholder="Describe your lost item..."
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Last Seen Location *</Label>
                <Input 
                  id="location"
                  name="location"
                  placeholder="Where did you lose it?"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact">Contact Information *</Label>
                <Input 
                  id="contact"
                  name="contact"
                  placeholder="Your email or phone"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Posting...' : 'Report Item'}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
