import { useLocation, Link, Outlet, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Users,
  Calendar,
  Library,
  Clock,
  Search,
  GraduationCap,
  Bell,
  Settings,
  LogOut,
  User,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { useState } from 'react'

const navItems = [
  { href: '/app/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/app/clubs', icon: Users, label: 'Clubs' },
  { href: '/app/events', icon: Calendar, label: 'Events' },
  { href: '/app/resources', icon: Library, label: 'Resources' },
  { href: '/app/timetable', icon: Clock, label: 'Timetable' },
  { href: '/app/lost-and-found', icon: Search, label: 'Lost and Found' },
]

export default function DashboardLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const userAvatar = PlaceHolderImages.find(p => p.id === 'user-avatar')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [userProfile, setUserProfile] = useState({
    name: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).name : 'Student User',
    email: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).email : 'student@campus.edu',
    registrationNumber: 'CB2024001',
    role: 'Student',
    image: null
  })
  const [editMode, setEditMode] = useState(false)
  const [editData, setEditData] = useState({ ...userProfile })

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setEditData(prev => ({
          ...prev,
          image: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveProfile = () => {
    setUserProfile(editData)
    setEditMode(false)
    localStorage.setItem('userProfile', JSON.stringify(editData))
  }

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:relative w-64 h-screen bg-background border-r transition-transform duration-300 z-50 md:z-auto ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-4 flex justify-center border-b">
          <Link to="/app/dashboard" className="flex items-center gap-2" title="MNNIT-Connect">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-xl font-semibold">MNNIT-Connect</span>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href)
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t space-y-2">
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg w-full text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 rounded-lg w-full text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Avatar className="h-9 w-9">
                {userProfile.image ? (
                  <AvatarImage
                    src={userProfile.image}
                    alt={userProfile.name}
                  />
                ) : userAvatar ? (
                  <AvatarImage
                    src={userAvatar.imageUrl}
                    alt={userAvatar.description}
                  />
                ) : null}
                <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </button>
          </div>
        </header>

        {/* User Profile Sidebar */}
        {profileOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setProfileOpen(false)} />
        )}
        <div className={`fixed md:absolute right-0 top-14 md:top-14 w-80 max-h-screen bg-background border-l shadow-lg transition-transform ${
          profileOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40 md:z-30 overflow-y-auto`}>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Profile</h2>
              <button
                onClick={() => setProfileOpen(false)}
                className="p-2 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {editMode ? (
              <div className="space-y-4">
                <div className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    {editData.image ? (
                      <AvatarImage src={editData.image} alt={editData.name} />
                    ) : null}
                    <AvatarFallback>{editData.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <label className="text-sm text-primary cursor-pointer hover:underline">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    Change Image
                  </label>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Registration Number</label>
                  <input
                    type="text"
                    value={editData.registrationNumber}
                    onChange={(e) => setEditData(prev => ({ ...prev, registrationNumber: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Role</label>
                  <input
                    type="text"
                    value={editData.role}
                    onChange={(e) => setEditData(prev => ({ ...prev, role: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleSaveProfile} className="flex-1">Save</Button>
                  <Button onClick={() => {
                    setEditMode(false)
                    setEditData({ ...userProfile })
                  }} variant="outline" className="flex-1">Cancel</Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    {userProfile.image ? (
                      <AvatarImage src={userProfile.image} alt={userProfile.name} />
                    ) : userAvatar ? (
                      <AvatarImage src={userAvatar.imageUrl} alt={userAvatar.description} />
                    ) : null}
                    <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>

                <div className="space-y-3 border-t pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Name</p>
                    <p className="font-semibold">{userProfile.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm">{userProfile.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Registration Number</p>
                    <p className="text-sm">{userProfile.registrationNumber}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Role</p>
                    <p className="text-sm">{userProfile.role}</p>
                  </div>
                </div>

                <Button onClick={() => setEditMode(true)} variant="outline" className="w-full">
                  Edit Profile
                </Button>

                <Button onClick={handleLogout} variant="destructive" className="w-full flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:px-6 sm:py-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
