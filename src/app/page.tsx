'use client'

import { useState } from 'react'
import Link from 'next/link'

interface UserData {
  name: string
  email: string
  usn: string
  userType: 'student' | 'faculty'
}

export default function UserPortal() {
  const [step, setStep] = useState<'welcome' | 'form' | 'started'>('welcome')
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    usn: '',
    userType: 'student'
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setUserData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userData.name && userData.email && userData.usn) {
      localStorage.setItem('userProfile', JSON.stringify(userData))
      setStep('started')
    }
  }

  if (step === 'welcome') {
    return (
      <div className="min-h-screen bg-hacker-darker bg-grid flex items-center justify-center p-4 overflow-hidden">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12 animate-bounce-in">
            <div className="text-7xl font-black text-hacker-green mb-4 drop-shadow-lg animate-pulse-glow" style={{
              textShadow: '0 0 30px rgba(0,255,0,0.9), 0 0 60px rgba(0,255,0,0.5), inset 0 0 10px rgba(0,255,0,0.3)'
            }}>
              ⚔️ CYBER SECURE
            </div>
            <div className="text-hacker-cyan text-2xl font-mono mb-3 animate-slide-in font-bold">
              🛡️ AWARENESS & INTEGRITY QUIZ PORTAL
            </div>
            <p className="text-hacker-green text-sm opacity-85 max-w-md mx-auto font-mono leading-relaxed">
              Master cybersecurity and anti-corruption knowledge with precision timing
            </p>
          </div>

          {/* Welcome Card */}
          <div className="bg-hacker-dark border-2 border-hacker-green rounded-lg p-8 shadow-lg shadow-hacker-green/40 mb-6 animate-fade-in transform hover:shadow-glow-green transition-all duration-300">
            <h2 className="text-3xl font-bold text-hacker-green mb-6 drop-shadow-[0_0_10px_rgba(0,255,0,0.6)]">
              🚀 WELCOME TO THE PORTAL
            </h2>
            
            <div className="space-y-5 text-hacker-green text-sm font-mono mb-8">
              <div className="flex items-start gap-4 p-3 border-l-2 border-hacker-cyan rounded-r-lg hover:bg-hacker-green/5 transition">
                <span className="text-hacker-cyan text-xl">✓</span>
                <span>Test your knowledge on cybersecurity and anti-corruption</span>
              </div>
              <div className="flex items-start gap-4 p-3 border-l-2 border-hacker-cyan rounded-r-lg hover:bg-hacker-green/5 transition">
                <span className="text-hacker-cyan text-xl">⏱️</span>
                <span><strong>30 challenging questions</strong> with nanosecond precision timing</span>
              </div>
              <div className="flex items-start gap-4 p-3 border-l-2 border-hacker-cyan rounded-r-lg hover:bg-hacker-green/5 transition">
                <span className="text-hacker-cyan text-xl">🎖️</span>
                <span>Score <strong>45% or above</strong> to receive a FREE CERTIFICATE</span>
              </div>
              <div className="flex items-start gap-4 p-3 border-l-2 border-hacker-cyan rounded-r-lg hover:bg-hacker-green/5 transition">
                <span className="text-hacker-cyan text-xl">👥</span>
                <span>Open to all <strong>students and faculty members</strong></span>
              </div>
            </div>

            <button
              onClick={() => setStep('form')}
              className="w-full px-6 py-4 bg-gradient-to-r from-hacker-green to-hacker-cyan text-hacker-darker font-bold text-lg rounded-lg hover:shadow-glow-green transition-all hover:scale-105 active:scale-95 transform duration-300 drop-shadow-lg"
            >
              🎯 START QUIZ NOW
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-hacker-dark border border-hacker-cyan/50 rounded p-4 text-center hover:border-hacker-green hover:shadow-glow-green transition transform hover:scale-105 duration-300">
              <div className="text-2xl mb-2">📚</div>
              <div className="text-hacker-green text-xs font-mono font-bold">30 Questions</div>
            </div>
            <div className="bg-hacker-dark border border-hacker-cyan/50 rounded p-4 text-center hover:border-hacker-green hover:shadow-glow-green transition transform hover:scale-105 duration-300">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-hacker-green text-xs font-mono font-bold">1 Hour Duration</div>
            </div>
            <div className="bg-hacker-dark border border-hacker-cyan/50 rounded p-4 text-center hover:border-hacker-green hover:shadow-glow-green transition transform hover:scale-105 duration-300">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-hacker-green text-xs font-mono font-bold">45% Pass Rate</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center space-y-2 animate-fade-in">
            <button
              onClick={() => {
                localStorage.removeItem('adminAuth')
                localStorage.removeItem('userProfile')
              }}
              className="text-hacker-cyan text-sm hover:text-hacker-green hover:underline transition duration-300 font-mono"
            >
              ↻ New User? Start Here
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (step === 'form') {
    return (
      <div className="min-h-screen bg-hacker-darker bg-grid flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-hacker-dark border-2 border-hacker-green rounded-lg p-8 shadow-lg shadow-hacker-green/40 animate-fade-in">
            <h2 className="text-3xl font-bold text-hacker-green mb-2 drop-shadow-[0_0_10px_rgba(0,255,0,0.6)]">
              📋 USER REGISTRATION
            </h2>
            <p className="text-hacker-cyan text-xs font-mono mb-6">Fill in your details to proceed</p>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-hacker-cyan text-sm font-mono mb-2 font-bold">👤 Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleFormChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-hacker-dark border-2 border-hacker-green text-hacker-green rounded focus:outline-none focus:shadow-lg focus:shadow-hacker-green/50 transition placeholder-hacker-green/40"
                  required
                />
              </div>

              <div>
                <label className="block text-hacker-cyan text-sm font-mono mb-2 font-bold">📧 Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleFormChange}
                  placeholder="your.email@domain.com"
                  className="w-full px-4 py-3 bg-hacker-dark border-2 border-hacker-green text-hacker-green rounded focus:outline-none focus:shadow-lg focus:shadow-hacker-green/50 transition placeholder-hacker-green/40"
                  required
                />
              </div>

              <div>
                <label className="block text-hacker-cyan text-sm font-mono mb-2 font-bold">🆔 USN/Roll No *</label>
                <input
                  type="text"
                  name="usn"
                  value={userData.usn}
                  onChange={handleFormChange}
                  placeholder="e.g., 1CS20EC001"
                  className="w-full px-4 py-3 bg-hacker-dark border-2 border-hacker-green text-hacker-green rounded focus:outline-none focus:shadow-lg focus:shadow-hacker-green/50 transition placeholder-hacker-green/40"
                  required
                />
              </div>

              <div>
                <label className="block text-hacker-cyan text-sm font-mono mb-2 font-bold">👨‍🎓 User Type *</label>
                <select
                  name="userType"
                  value={userData.userType}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-hacker-dark border-2 border-hacker-green text-hacker-green rounded focus:outline-none focus:shadow-lg focus:shadow-hacker-green/50 transition font-mono"
                >
                  <option value="student">🎓 Student</option>
                  <option value="faculty">👨‍🏫 Faculty</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-hacker-green to-hacker-cyan text-hacker-darker font-bold rounded-lg hover:shadow-glow-green transition-all hover:scale-105 active:scale-95 mt-6 transform duration-300 font-mono"
              >
                ✓ PROCEED TO QUIZ
              </button>
            </form>

            <button
              onClick={() => setStep('welcome')}
              className="w-full mt-3 px-6 py-2 border-2 border-hacker-cyan text-hacker-cyan rounded-lg hover:bg-hacker-cyan hover:text-hacker-darker hover:shadow-glow-blue transition font-mono font-bold"
            >
              ← BACK
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-hacker-darker bg-grid flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-4xl font-bold text-hacker-green mb-6 drop-shadow-lg">
          QUIZ STARTING...
        </div>
        <div className="space-y-4">
          <Link
            href="/quiz"
            className="inline-block px-8 py-3 bg-hacker-green text-hacker-darker font-bold rounded hover:shadow-glow-green transition-all hover:scale-105"
          >
            BEGIN ASSESSMENT
          </Link>
          <div className="text-hacker-cyan font-mono text-sm">
            Initializing cybersecurity awareness module...
          </div>
        </div>
      </div>
    </div>
  )
}
