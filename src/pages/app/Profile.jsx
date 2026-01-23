import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import api from '@/services/api'

export default function Profile() {
  const { user } = useContext(AuthContext)
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    course: '',
    branch: ''
  })
  const [originalData, setOriginalData] = useState({})

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      setLoading(true)
      const res = await api.get('/auth/profile')
      const { user } = res.data
      setFormData({
        name: user.name,
        regNo: user.regNo,
        course: user.course,
        branch: user.branch
      })
      setOriginalData({
        name: user.name,
        regNo: user.regNo,
        course: user.course,
        branch: user.branch
      })
    } catch (error) {
      console.error('Error fetching profile:', error)
      toast({
        title: 'Error',
        description: 'Failed to load profile',
        variant: 'destructive'
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = async () => {
    try {
      setLoading(true)
      const res = await api.put('/auth/profile/update', formData)
      
      toast({
        title: 'Success',
        description: 'Profile updated successfully'
      })
      
      setOriginalData(formData)
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating profile:', error)
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Failed to update profile',
        variant: 'destructive'
      })
      // Revert changes
      setFormData(originalData)
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setFormData(originalData)
    setIsEditing(false)
  }

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your account information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent>
          {loading && !isEditing ? (
            <div className="text-center py-8">
              <p>Loading profile...</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email (Read-only) */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={originalData.email || ''}
                    disabled
                    placeholder="Email"
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                </div>

                {/* Registration Number */}
                <div className="space-y-2">
                  <Label htmlFor="regNo">Registration Number</Label>
                  <Input
                    id="regNo"
                    name="regNo"
                    value={formData.regNo}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Enter your registration number"
                  />
                </div>

                {/* Course */}
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Input
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Enter your course"
                  />
                </div>

                {/* Branch */}
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch</Label>
                  <Input
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Enter your branch"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} size="lg">
                    Edit Profile
                  </Button>
                ) : (
                  <>
                    <Button 
                      onClick={handleSave} 
                      size="lg"
                      disabled={loading}
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </Button>
                    <Button 
                      onClick={handleCancel} 
                      variant="outline" 
                      size="lg"
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
