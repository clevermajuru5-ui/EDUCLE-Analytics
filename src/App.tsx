import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { ProtectedRoute } from '@/components/Auth/ProtectedRoute'
import { Console } from '@/components/Common/Console'
import Landing from '@/pages/Landing'
import AdminLogin from '@/pages/admin/Login'
import AdminDashboard from '@/pages/admin/Dashboard'
import SchoolLogin from '@/pages/school/Login'
import SchoolDashboard from '@/pages/school/Dashboard'
import StudentVerification from '@/pages/student/Verification'
import StudentReportCard from '@/pages/student/ReportCard'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/school/login" element={<SchoolLogin />} />
          <Route path="/student/verify" element={<StudentVerification />} />

          {/* Protected Routes - Admin */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute roles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes - School */}
          <Route
            path="/school/dashboard"
            element={
              <ProtectedRoute roles={['school_admin', 'teacher']}>
                <SchoolDashboard />
              </ProtectedRoute>
            }
          />

          {/* Protected Routes - Student */}
          <Route
            path="/student/report/:studentId"
            element={
              <ProtectedRoute roles={['student']}>
                <StudentReportCard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Console />
      </AuthProvider>
    </Router>
  )
}

export default App
