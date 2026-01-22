import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { resources as initialResources } from '@/lib/data'
import { Upload, X, FileText } from 'lucide-react'

export default function Resources() {
  const [resources, setResources] = useState(initialResources)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    category: 'Study Guide',
    file: null
  })

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title || !formData.file) {
      alert('Please fill all fields')
      return
    }

    const newResource = {
      id: String(resources.length + 1),
      title: formData.title,
      category: formData.category,
      uploaded: new Date().toISOString().split('T')[0],
      fileUrl: '#',
      fileName: formData.file.name
    }

    setResources([newResource, ...resources])
    setFormData({ title: '', category: 'Study Guide', file: null })
    setShowForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resources</h1>
          <p className="text-muted-foreground mt-2">Access study materials and course resources</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2">
          <Upload className="h-4 w-4" />
          Add Resource
        </Button>
      </div>

      {showForm && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Upload New Resource</span>
              <button onClick={() => setShowForm(false)}>
                <X className="h-5 w-5" />
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Resource Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Calculus Final Exam Guide"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Study Guide</option>
                  <option>Lecture Notes</option>
                  <option>Lab Manual</option>
                  <option>Assignments</option>
                  <option>Question Papers</option>
                  <option>Books</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Upload File</Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  onChange={handleInputChange}
                  required
                />
                {formData.file && (
                  <p className="text-sm text-muted-foreground">
                    Selected: {formData.file.name}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <Button type="submit">Upload Resource</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {resources.map((resource) => (
          <Card key={resource.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </div>
                </div>
                <Badge variant="outline">{resource.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Uploaded: {resource.uploaded}</p>
                <a
                  href={resource.fileUrl}
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  Download {resource.fileName && `(${resource.fileName})`}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
