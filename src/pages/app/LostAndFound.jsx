import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { foundItems } from '@/lib/data'

export default function LostAndFound() {
  const [tab, setTab] = useState('found')

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

      {tab === 'found' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foundItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-1">
                  <p><span className="font-medium">Found:</span> {item.dateFound}</p>
                  <p><span className="font-medium">Location:</span> {item.locationFound}</p>
                </div>
                <Button className="w-full" size="sm">Claim Item</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {tab === 'lost' && (
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Report a Lost Item</CardTitle>
            <CardDescription>Help others find your lost belongings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Item Name</label>
              <input type="text" placeholder="What did you lose?" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <textarea placeholder="Describe your lost item..." className="w-full px-3 py-2 border rounded-md" rows={4} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Last Seen Location</label>
              <input type="text" placeholder="Where did you lose it?" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Information</label>
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 border rounded-md" />
            </div>
            <Button className="w-full">Report Item</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
