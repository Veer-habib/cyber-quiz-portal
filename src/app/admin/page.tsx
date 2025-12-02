'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { QuizResult } from '@/types/quiz'

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(true)
  const [adminPassword, setAdminPassword] = useState('')
  const [results, setResults] = useState<QuizResult[]>([])
  const [selectedView, setSelectedView] = useState<'overview' | 'results' | 'analytics'>('overview')
  const [passwordInput, setPasswordInput] = useState('')

  const ADMIN_PASSWORD = 'CyberSecure2024'

  useEffect(() => {
    const stored = localStorage.getItem('adminAuth')
    if (stored === 'true') {
      setAuthenticated(true)
      setShowLoginForm(false)
    }
  }, [])

  useEffect(() => {
    if (authenticated) {
      const storedResults = localStorage.getItem('quizResults')
      if (storedResults) {
        setResults(JSON.parse(storedResults))
      }
    }
  }, [authenticated])

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setShowLoginForm(false)
      localStorage.setItem('adminAuth', 'true')
      setPasswordInput('')
    } else {
      alert('Invalid password')
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    setShowLoginForm(true)
    localStorage.removeItem('adminAuth')
    setResults([])
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-hacker-darker bg-grid flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-hacker-dark border-2 border-hacker-red rounded-lg p-8 shadow-lg shadow-hacker-red/30">
            <h1 className="text-3xl font-bold text-hacker-red mb-2 text-center drop-shadow-lg">
              ⚔️ ADMIN PORTAL
            </h1>
            <p className="text-hacker-cyan text-center text-sm font-mono mb-6">RESTRICTED ACCESS</p>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-hacker-cyan text-sm font-mono mb-2">Admin Password</label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-2 bg-hacker-dark border-2 border-hacker-red text-hacker-green rounded focus:outline-none focus:shadow-lg focus:shadow-hacker-red/50"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-hacker-red text-hacker-darker font-bold rounded hover:shadow-lg hover:shadow-hacker-red/50 transition hover:scale-105 active:scale-95"
              >
                ACCESS GRANTED
              </button>
            </form>

            <Link
              href="/"
              className="block text-center text-hacker-cyan hover:text-hacker-green text-sm mt-4 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Calculate statistics
  const totalSubmissions = results.length
  const certificateEligible = results.filter(r => r.eligible).length
  const averageScore = results.length > 0
    ? (results.reduce((sum, r) => sum + r.score, 0) / results.length).toFixed(1)
    : 0
  const averagePercentage = results.length > 0
    ? (results.reduce((sum, r) => sum + r.percentage, 0) / results.length).toFixed(1)
    : 0

  return (
    <div className="min-h-screen bg-hacker-darker bg-grid p-4">
      <div className="max-w-6xl mx-auto">
        {/* Admin Header */}
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-hacker-red/50">
          <div>
            <h1 className="text-3xl font-bold text-hacker-red drop-shadow-lg">⚔️ ADMIN DASHBOARD</h1>
            <p className="text-hacker-cyan text-sm font-mono">CYBERSECURITY QUIZ MANAGEMENT SYSTEM</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-hacker-red text-hacker-darker font-bold rounded hover:shadow-lg hover:shadow-hacker-red/50 transition"
          >
            LOGOUT
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {(['overview', 'results', 'analytics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedView(tab)}
              className={`px-4 py-2 rounded font-mono text-sm transition ${
                selectedView === tab
                  ? 'bg-hacker-red text-hacker-darker border-2 border-hacker-red'
                  : 'border-2 border-hacker-red text-hacker-red hover:bg-hacker-red/20'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {selectedView === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-hacker-dark border-2 border-hacker-green rounded-lg p-6 shadow-lg shadow-hacker-green/30">
              <div className="text-hacker-cyan text-sm font-mono mb-2">TOTAL SUBMISSIONS</div>
              <div className="text-4xl font-bold text-hacker-green">{totalSubmissions}</div>
            </div>

            <div className="bg-hacker-dark border-2 border-hacker-cyan rounded-lg p-6 shadow-lg shadow-hacker-cyan/30">
              <div className="text-hacker-cyan text-sm font-mono mb-2">ELIGIBLE FOR CERT</div>
              <div className="text-4xl font-bold text-hacker-cyan">{certificateEligible}</div>
            </div>

            <div className="bg-hacker-dark border-2 border-hacker-purple rounded-lg p-6 shadow-lg shadow-hacker-purple/30">
              <div className="text-hacker-cyan text-sm font-mono mb-2">AVG SCORE</div>
              <div className="text-4xl font-bold text-hacker-purple">{averageScore}/20</div>
            </div>

            <div className="bg-hacker-dark border-2 border-hacker-blue rounded-lg p-6 shadow-lg shadow-hacker-blue/30">
              <div className="text-hacker-cyan text-sm font-mono mb-2">AVG PERCENTAGE</div>
              <div className="text-4xl font-bold text-hacker-blue">{averagePercentage}%</div>
            </div>
          </div>
        )}

        {/* Results Tab */}
        {selectedView === 'results' && (
          <div className="bg-hacker-dark border-2 border-hacker-green rounded-lg p-6 shadow-lg shadow-hacker-green/30 overflow-x-auto">
            <h2 className="text-xl font-bold text-hacker-green mb-4">USER RESULTS</h2>
            {results.length > 0 ? (
              <table className="w-full text-sm font-mono">
                <thead>
                  <tr className="border-b border-hacker-green">
                    <th className="text-left p-2 text-hacker-cyan">NAME</th>
                    <th className="text-left p-2 text-hacker-cyan">EMAIL</th>
                    <th className="text-left p-2 text-hacker-cyan">USN</th>
                    <th className="text-left p-2 text-hacker-cyan">SCORE</th>
                    <th className="text-left p-2 text-hacker-cyan">PERCENTAGE</th>
                    <th className="text-left p-2 text-hacker-cyan">TIME</th>
                    <th className="text-left p-2 text-hacker-cyan">CERT</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index} className="border-b border-hacker-green/20 hover:bg-hacker-darker/50">
                      <td className="p-2 text-hacker-green">{result.userName}</td>
                      <td className="p-2 text-hacker-green">{result.userEmail}</td>
                      <td className="p-2 text-hacker-cyan">{result.usn}</td>
                      <td className="p-2 text-hacker-green font-bold">{result.score}/20</td>
                      <td className="p-2 text-hacker-green font-bold">{result.percentage.toFixed(1)}%</td>
                      <td className="p-2 text-hacker-cyan">{result.timeTakenFormatted}</td>
                      <td className={`p-2 font-bold ${result.eligible ? 'text-hacker-green' : 'text-hacker-red'}`}>
                        {result.eligible ? '✓' : '✗'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-hacker-cyan text-center py-4">No submissions yet</p>
            )}
          </div>
        )}

        {/* Analytics Tab */}
        {selectedView === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-hacker-dark border-2 border-hacker-cyan rounded-lg p-6 shadow-lg shadow-hacker-cyan/30">
              <h3 className="text-lg font-bold text-hacker-cyan mb-4">SCORE DISTRIBUTION</h3>
              <div className="space-y-3">
                {[
                  { range: '0-25%', count: results.filter(r => r.percentage < 25).length },
                  { range: '25-50%', count: results.filter(r => r.percentage >= 25 && r.percentage < 50).length },
                  { range: '50-75%', count: results.filter(r => r.percentage >= 50 && r.percentage < 75).length },
                  { range: '75-100%', count: results.filter(r => r.percentage >= 75).length },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-hacker-green">{item.range}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-4 bg-hacker-darker rounded overflow-hidden">
                        <div
                          className="h-full bg-hacker-green transition-all"
                          style={{ width: `${results.length > 0 ? (item.count / results.length) * 100 : 0}%` }}
                        />
                      </div>
                      <span className="text-hacker-cyan w-8 text-right">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-hacker-dark border-2 border-hacker-purple rounded-lg p-6 shadow-lg shadow-hacker-purple/30">
              <h3 className="text-lg font-bold text-hacker-purple mb-4">KEY STATISTICS</h3>
              <div className="space-y-3 text-hacker-green font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-hacker-cyan">Total Tests:</span>
                  <span>{totalSubmissions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hacker-cyan">Certificates Eligible:</span>
                  <span>{certificateEligible} ({totalSubmissions > 0 ? ((certificateEligible/totalSubmissions)*100).toFixed(1) : 0}%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hacker-cyan">Pass Rate (≥45%):</span>
                  <span className="text-hacker-green font-bold">
                    {totalSubmissions > 0 ? ((certificateEligible/totalSubmissions)*100).toFixed(1) : 0}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-hacker-cyan">Average Score:</span>
                  <span>{averageScore}/20 ({averagePercentage}%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Export Button */}
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={() => {
              const csv = [
                ['Name', 'Email', 'USN', 'Score', 'Percentage', 'Time', 'Eligible'],
                ...results.map(r => [
                  r.userName,
                  r.userEmail,
                  r.usn,
                  `${r.score}/20`,
                  `${r.percentage.toFixed(1)}%`,
                  r.timeTakenFormatted,
                  r.eligible ? 'Yes' : 'No'
                ])
              ].map(row => row.join(',')).join('\n')
              
              const blob = new Blob([csv], { type: 'text/csv' })
              const url = window.URL.createObjectURL(blob)
              const a = document.createElement('a')
              a.href = url
              a.download = `quiz-results-${new Date().toISOString().split('T')[0]}.csv`
              a.click()
            }}
            className="px-6 py-3 bg-hacker-green text-hacker-darker font-bold rounded hover:shadow-glow-green transition"
          >
            EXPORT CSV
          </button>
          <Link
            href="/"
            className="px-6 py-3 border-2 border-hacker-cyan text-hacker-cyan rounded hover:bg-hacker-cyan hover:text-hacker-darker transition"
          >
            RETURN HOME
          </Link>
        </div>
      </div>
    </div>
  )
}
