import { createDomain } from 'zustand'
import { create } from 'zustand'

export interface QuizState {
  userId: string
  userName: string
  userEmail: string
  currentQuestion: number
  answers: Record<number, string>
  startTime: bigint
  endTime: bigint | null
  score: number
  isSubmitted: boolean
  setUser: (id: string, name: string, email: string) => void
  setCurrentQuestion: (question: number) => void
  setAnswer: (questionId: number, answer: string) => void
  setStartTime: (time: bigint) => void
  setEndTime: (time: bigint) => void
  setScore: (score: number) => void
  setSubmitted: (submitted: boolean) => void
  reset: () => void
}

export const useQuizStore = create<QuizState>((set) => ({
  userId: '',
  userName: '',
  userEmail: '',
  currentQuestion: 0,
  answers: {},
  startTime: 0n,
  endTime: null,
  score: 0,
  isSubmitted: false,
  setUser: (id, name, email) => set({ userId: id, userName: name, userEmail: email }),
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  setAnswer: (questionId, answer) => set((state) => ({
    answers: { ...state.answers, [questionId]: answer },
  })),
  setStartTime: (time) => set({ startTime: time }),
  setEndTime: (time) => set({ endTime: time }),
  setScore: (score) => set({ score }),
  setSubmitted: (submitted) => set({ isSubmitted: submitted }),
  reset: () => set({
    currentQuestion: 0,
    answers: {},
    startTime: 0n,
    endTime: null,
    score: 0,
    isSubmitted: false,
  }),
}))
