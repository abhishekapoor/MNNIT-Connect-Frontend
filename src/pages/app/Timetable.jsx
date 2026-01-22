import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { timetables, courses } from '@/lib/data'

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export default function Timetable() {
  const [selectedCourse, setSelectedCourse] = useState('B.Tech')
  const [selectedSemester, setSelectedSemester] = useState('1')
  
  const currentTimetable = timetables[selectedCourse]?.[selectedSemester] || []
  
  // Get available semesters for selected course
  const availableSemesters = Object.keys(timetables[selectedCourse] || {}).sort((a, b) => {
    if (a === 'Other') return 1
    if (b === 'Other') return -1
    return parseInt(a) - parseInt(b)
  })
  
  const organizedTimetable = daysOfWeek.reduce((acc, day) => {
    acc[day] = currentTimetable.filter(slot => slot.day === day)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Timetable</h1>
        <p className="text-muted-foreground mt-2">Your weekly class schedule</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center gap-4">
          <label htmlFor="course-select" className="text-sm font-medium whitespace-nowrap">Course:</label>
          <select
            id="course-select"
            value={selectedCourse}
            onChange={(e) => {
              setSelectedCourse(e.target.value)
              setSelectedSemester('1')
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="semester-select" className="text-sm font-medium whitespace-nowrap">Semester:</label>
          <select
            id="semester-select"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {availableSemesters.map((semester) => (
              <option key={semester} value={semester}>
                {semester === 'Other' ? 'Other Courses' : `Semester ${semester}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {daysOfWeek.map((day) => (
          <Card key={day}>
            <CardHeader>
              <CardTitle className="text-lg">{day}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {organizedTimetable[day].length === 0 ? (
                <p className="text-sm text-muted-foreground">No classes</p>
              ) : (
                organizedTimetable[day].map((slot) => (
                  <div key={slot.id} className="space-y-1 p-3 bg-muted rounded-lg">
                    <p className="font-semibold text-sm">{slot.courseName}</p>
                    <p className="text-xs text-muted-foreground">{slot.courseCode}</p>
                    <p className="text-xs">{slot.startTime} - {slot.endTime}</p>
                    <p className="text-xs text-muted-foreground">{slot.location}</p>
                    <p className="text-xs text-muted-foreground">Prof. {slot.lecturer}</p>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
