// Type definitions for Educle Analytics

export interface School {
  id: string
  name: string
  email: string
  phone: string
  address: string
  logo_url?: string
  subscription_tier: 'free' | 'basic' | 'pro' | 'enterprise'
  status: 'pending' | 'approved' | 'active' | 'inactive'
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  school_id?: string
  email: string
  password_hash: string
  role: 'admin' | 'school_admin' | 'teacher' | 'student'
  first_name: string
  last_name: string
  created_at: string
}

export interface Student {
  id: string
  school_id: string
  user_id: string
  class: string
  photo_url?: string
  enrollment_date: string
  status: 'active' | 'inactive'
  user?: User
  created_at: string
}

export interface Subject {
  id: string
  school_id: string
  name: string
  code: string
  created_at: string
}

export interface Mark {
  id: string
  student_id: string
  subject_id: string
  term: 'term1' | 'term2' | 'term3'
  year: number
  score: number
  grade: 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
  subject?: Subject
  created_at: string
}

export interface AccessCode {
  id: string
  student_id: string
  code: string
  email: string
  expires_at: string
  used_at?: string
  created_at: string
}

export interface Subscription {
  id: string
  school_id: string
  plan_type: 'free' | 'basic' | 'pro' | 'enterprise'
  stripe_subscription_id?: string
  status: 'active' | 'cancelled'
  current_students: number
  max_students: number
  next_billing_date?: string
  created_at: string
}

export interface ReportCard {
  student: Student
  marks: Mark[]
  term: string
  year: number
  classAverage: number
  studentAverage: number
  termAverages: TermAverage[]
}

export interface TermAverage {
  term: string
  year: number
  average: number
}

export interface ChartData {
  subject: string
  studentScore: number
  classAverage: number
}

export interface TermChartData {
  term: string
  average: number
}

export interface AuthContextType {
  user: User | null
  school?: School | null
  token: string | null
  login: (email: string, password: string, role: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}
