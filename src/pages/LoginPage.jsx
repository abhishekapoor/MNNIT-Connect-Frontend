import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GraduationCap } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [localError, setLocalError] = useState('')
  const navigate = useNavigate()
  const { login, loading } = useAuth()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLocalError('')
    
    if (!email || !password) {
      setLocalError('Please fill in all fields')
      return
    }


    // If demo credentials didn't match, try backend
    try {
      await login(email, password, role)
      
      // Navigate based on role
      if (role === 'club_admin') {
        navigate('/admin/club')
      } else if (role === 'super_admin') {
        navigate('/admin/super')
      } else {
        navigate('/app/dashboard')
      }
    } catch (error) {
      setLocalError('Invalid credentials. Please check and try again.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Link to="/" className="flex items-center justify-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-semibold text-2xl">MNNIT-Connect</span>
          </Link>
        </div>
        <Card>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Role Selection */}
            <div className="space-y-3 mb-4">
              <Label>Select Your Role</Label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'student', label: 'Student' },
                  { value: 'club_admin', label: 'Club Admin' },
                  { value: 'super_admin', label: 'Admin' }
                ].map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setRole(r.value)}
                    className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                      role === r.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-accent'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>

            <div className="mt-4 text-center text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </div>

            {/* Demo Credentials Info */}
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs max-h-48 overflow-y-auto">
              <p className="font-semibold text-blue-900 mb-2">📝 Demo Credentials:</p>
              <div className="space-y-1 text-blue-800">
                <p><strong>Student:</strong> student@mnnit.ac.in / student123</p>
                <p><strong>Super Admin:</strong> superadmin@mnnit.ac.in / admin123</p>
                <p className="font-semibold mt-2">11 Club Admins (password: admin123):</p>
                <p>• rahul.kumar@mnnit.ac.in (Tech Club)</p>
                <p>• priya.sharma@mnnit.ac.in (Cultural)</p>
                <p>• amit.patel@mnnit.ac.in (Sports)</p>
                <p>• rohit.verma@mnnit.ac.in (Entrepreneurship)</p>
                <p>• sneha.gupta@mnnit.ac.in (Art & Design)</p>
                <p>• vikrant.singh@mnnit.ac.in (Music)</p>
                <p>• ankita.gupta@mnnit.ac.in (Coding)</p>
                <p>• deepak.patel@mnnit.ac.in (Robotics)</p>
                <p>• sakshi.negi@mnnit.ac.in (Environment)</p>
                <p>• tanvi.singh@mnnit.ac.in (Debating)</p>
                <p>• vaibhav.singh@mnnit.ac.in (Photography)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
