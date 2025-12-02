export type { Question } from './quizData'

export interface QuizResult {
  userId: string
  userName: string
  userEmail: string
  usn: string
  score: number
  totalQuestions: number
  percentage: number
  timeTakenNanoseconds: bigint
  timeTakenFormatted: string
  answers: Record<number, string>
  submittedAt: string
  eligible: boolean
}

export interface CertificateData {
  name: string
  date: string
  score: number
  certificateId: string
}

export interface AdminUser {
  id: string
  email: string
  role: 'admin' | 'superadmin'
}

export interface UserProfile {
  id: string
  name: string
  email: string
  usn: string
  type: 'student' | 'faculty'
}
