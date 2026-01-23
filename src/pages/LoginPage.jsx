import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GraduationCap } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import api from '@/services/api'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [localError, setLocalError] = useState('')
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotLoading, setForgotLoading] = useState(false)
  const [forgotMessage, setForgotMessage] = useState('')
  const navigate = useNavigate()
  const { login, loading } = useAuth()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLocalError('')
    
    if (!email || !password) {
      setLocalError('Please fill in all fields')
      return
    }

    try {
      // Map frontend role names to backend role names
      const roleMap = {
        'student': 'STUDENT',
        'club_admin': 'CLUB_ADMIN',
        'super_admin': 'ADMIN'
      }
      
      await login(email, password, roleMap[role])
      
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

  const handleForgotPassword = async (e) => {
    e.preventDefault()
    setForgotMessage('')
    setForgotLoading(true)

    if (!forgotEmail) {
      setForgotMessage('Please enter your email')
      setForgotLoading(false)
      return
    }

    try {
      const response = await api.post('/auth/forget-password', { email: forgotEmail })
      setForgotMessage('Check your email for password reset instructions')
      setForgotEmail('')
      setTimeout(() => {
        setShowForgotPassword(false)
        setForgotMessage('')
      }, 3000)
    } catch (error) {
      setForgotMessage(error.response?.data?.message || 'Failed to process request')
    } finally {
      setForgotLoading(false)
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
            {showForgotPassword ? (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Reset Your Password</h3>
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="forgotEmail">Email Address</Label>
                    <Input
                      id="forgotEmail"
                      type="email"
                      placeholder="your@email.com"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      required
                    />
                  </div>
                  {forgotMessage && (
                    <div className={`p-3 rounded-lg text-sm ${
                      forgotMessage.includes('Check') 
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {forgotMessage}
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={forgotLoading}>
                    {forgotLoading ? 'Sending...' : 'Send Reset Link'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setShowForgotPassword(false)
                      setForgotMessage('')
                    }}
                  >
                    Back to Login
                  </Button>
                </form>
              </div>
            ) : (
              <>
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
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      <button
                        type="button"
                        onClick={() => setShowForgotPassword(true)}
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot?
                      </button>
                    </div>
                    <Input 
                      id="password" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {localError && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                      {localError}
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                  </Button>
                </form>

                <div className="mt-4 text-center text-sm">
                  Don't have an account?{' '}
                  <Link to="/signup" className="underline">
                    Sign up
                  </Link>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
