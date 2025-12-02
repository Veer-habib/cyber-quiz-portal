'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { quizQuestions } from '@/utils/quizData'
import { getNanosecondTime, formatSeconds, calculateDurationNanoseconds } from '@/utils/timingUtils'
import { QuizResult } from '@/types/quiz'

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [startTime, setStartTime] = useState<bigint | null>(null)
  const [elapsed, setElapsed] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)
  const [userProfile, setUserProfile] = useState<any>(null)

  const QUIZ_DURATION_SECONDS = 3600 // 1 hour

  useEffect(() => {
    const profile = localStorage.getItem('userProfile')
    if (profile) {
      setUserProfile(JSON.parse(profile))
    }
    setStartTime(getNanosecondTime())
  }, [])

  useEffect(() => {
    if (!startTime || submitted) return

    const interval = setInterval(() => {
      const now = getNanosecondTime()
      setElapsed(Number(calculateDurationNanoseconds(startTime, now)) / 1_000_000_000)
    }, 100)

    return () => clearInterval(interval)
  }, [startTime, submitted])

  const handleAnswerSelect = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }))
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    if (!startTime || !userProfile) return

    const endTime = getNanosecondTime()
    const duration = calculateDurationNanoseconds(startTime, endTime)

    let score = 0
    quizQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++
      }
    })

    const percentage = (score / quizQuestions.length) * 100
    const eligible = percentage >= 45

    const resultData: QuizResult = {
      userId: userProfile.usn,
      userName: userProfile.name,
      userEmail: userProfile.email,
      usn: userProfile.usn,
      score,
      totalQuestions: quizQuestions.length,
      percentage,
      timeTakenNanoseconds: duration,
      timeTakenFormatted: formatSeconds(Number(duration) / 1_000_000_000),
      answers,
      submittedAt: new Date().toISOString(),
      eligible
    }

    setResult(resultData)
    setSubmitted(true)

    // Store result
    const results = JSON.parse(localStorage.getItem('quizResults') || '[]')
    results.push(resultData)
    localStorage.setItem('quizResults', JSON.stringify(results))
  }

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-hacker-darker flex items-center justify-center">
        <div className="text-center">
          <div className="text-hacker-green text-2xl font-bold mb-4">Loading...</div>
          <Link href="/" className="text-hacker-cyan hover:text-hacker-green">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  if (submitted && result) {
    return (
      <div className="min-h-screen bg-hacker-darker bg-grid p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-bounce-in">
            <h1 className={`text-5xl font-black mb-2 drop-shadow-lg animate-pulse-glow
              ${result.eligible ? 'text-hacker-green' : 'text-hacker-cyan'}`}
              style={{
                textShadow: result.eligible 
                  ? '0 0 30px rgba(0,255,0,0.9), 0 0 60px rgba(0,255,0,0.5)'
                  : '0 0 30px rgba(0,255,255,0.8), 0 0 60px rgba(0,255,255,0.4)'
              }}>
              {result.eligible ? '🎖️ CONGRATULATIONS!' : '✓ QUIZ COMPLETED'}
            </h1>
          </div>

          <div className="bg-hacker-dark border-2 border-hacker-green rounded-lg p-8 shadow-lg shadow-hacker-green/40 mb-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 border-2 border-hacker-green rounded-lg bg-hacker-darker hover:shadow-glow-green transition transform hover:scale-105 duration-300">
                <div className="text-hacker-cyan text-sm font-mono mb-3 font-bold">📊 FINAL SCORE</div>
                <div className="text-5xl font-black text-hacker-green drop-shadow-lg">
                  {result.score}/{result.totalQuestions}
                </div>
                <div className="text-hacker-green text-lg mt-3 font-bold">
                  {result.percentage.toFixed(1)}%
                </div>
              </div>

              <div className="text-center p-6 border-2 border-hacker-cyan rounded-lg bg-hacker-darker hover:shadow-lg hover:shadow-hacker-cyan/50 transition transform hover:scale-105 duration-300">
                <div className="text-hacker-cyan text-sm font-mono mb-3 font-bold">⏱️ TIME TAKEN</div>
                <div className="text-4xl font-bold text-hacker-cyan drop-shadow-lg">
                  {result.timeTakenFormatted}
                </div>
                <div className="text-hacker-cyan text-xs mt-3 font-mono break-all opacity-75">
                  NS: {result.timeTakenNanoseconds.toString().slice(0, 12)}...
                </div>
              </div>

              <div className={`text-center p-6 border-2 rounded-lg bg-hacker-darker transition transform hover:scale-105 duration-300
                ${result.eligible 
                  ? 'border-hacker-green shadow-lg shadow-hacker-green/50' 
                  : 'border-hacker-red shadow-lg shadow-hacker-red/30'}`}>
                <div className="text-hacker-cyan text-sm font-mono mb-3 font-bold">🎯 CERTIFICATE</div>
                <div className={`text-4xl font-black drop-shadow-lg ${result.eligible ? 'text-hacker-green' : 'text-hacker-red'}`}>
                  {result.eligible ? '✓ ELIGIBLE' : '✗ TRY AGAIN'}
                </div>
                <div className="text-hacker-green text-xs mt-3 font-mono">
                  Min Required: 45%
                </div>
              </div>
            </div>

            {result.eligible && (
              <div className="p-6 bg-gradient-to-r from-hacker-green/20 to-hacker-cyan/20 border-2 border-hacker-green rounded-lg mb-6 animate-bounce-in">
                <p className="text-hacker-green text-center font-mono text-lg font-bold mb-2">
                  🏆 CERTIFICATE ELIGIBILITY CONFIRMED 🏆
                </p>
                <p className="text-hacker-cyan text-center text-sm font-mono opacity-90">
                  Your certificate will be emailed to <strong>{result.userEmail}</strong>
                </p>
              </div>
            )}

            <div className="p-6 bg-hacker-darker/50 border border-hacker-cyan/30 rounded-lg mb-6">
              <p className="text-hacker-cyan text-sm font-mono mb-3">📈 PERFORMANCE BREAKDOWN</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-hacker-green">Correct Answers:</span>
                  <span className="text-hacker-cyan font-bold">{result.score}</span>
                </div>
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-hacker-green">Wrong Answers:</span>
                  <span className="text-hacker-red font-bold">{result.totalQuestions - result.score}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-4 bg-hacker-green text-hacker-darker font-bold rounded-lg hover:shadow-glow-green transition transform hover:scale-105 active:scale-95 text-center font-mono"
              >
                🏠 RETURN HOME
              </Link>
              <Link
                href="/admin"
                className="px-8 py-4 border-2 border-hacker-cyan text-hacker-cyan rounded-lg hover:bg-hacker-cyan hover:text-hacker-darker hover:shadow-glow-blue transition transform hover:scale-105 active:scale-95 text-center font-mono font-bold"
              >
                👨‍💼 ADMIN PORTAL
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const timeRemaining = Math.max(0, QUIZ_DURATION_SECONDS - elapsed)
  const progressPercent = (currentQuestion / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-hacker-darker bg-grid p-4">
      <div className="max-w-5xl mx-auto">
        {/* Top Header with Integrated Timer */}
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-between items-start gap-6 mb-6">
            {/* Left Section */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-hacker-green drop-shadow-[0_0_20px_rgba(0,255,0,0.6)] animate-pulse-glow mb-2">
                ⚔️ CYBERSECURITY QUIZ
              </h1>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-hacker-cyan/20 border border-hacker-cyan rounded-lg">
                  <p className="text-hacker-cyan text-sm font-mono">Question <span className="text-hacker-green font-bold text-lg">{currentQuestion + 1}</span>/<span className="text-hacker-purple font-bold">{quizQuestions.length}</span></p>
                </div>
                <div className="px-4 py-2 bg-hacker-purple/20 border border-hacker-purple rounded-lg">
                  <p className="text-hacker-purple text-sm font-mono">Category: <span className="text-hacker-green font-bold">{question.category}</span></p>
                </div>
              </div>
            </div>

            {/* Timer Card - Integrated and Smooth */}
            <div className={`w-48 p-6 rounded-xl border-2 backdrop-blur-sm transition-all duration-500 ${
              timeRemaining < 60
                ? 'border-hacker-red bg-hacker-red/10 shadow-lg shadow-hacker-red/50 animate-pulse'
                : timeRemaining < 300
                ? 'border-hacker-purple bg-hacker-purple/10 shadow-lg shadow-hacker-purple/30'
                : 'border-hacker-green bg-hacker-green/10 shadow-lg shadow-hacker-green/40 hover:shadow-glow-green'
            }`}>
              <p className="text-hacker-cyan text-xs font-mono text-center mb-3 uppercase tracking-widest">⏱️ Time</p>
              <div className={`text-5xl font-black font-mono text-center drop-shadow-lg transition-all duration-300 ${
                timeRemaining < 60 ? 'text-hacker-red animate-pulse' : 'text-hacker-green'
              }`}>
                {formatSeconds(timeRemaining)}
              </div>
              <div className="mt-4 h-1.5 bg-hacker-darker rounded-full overflow-hidden border border-hacker-cyan/20">
                <div
                  className={`h-full transition-all duration-300 ease-linear rounded-full ${
                    timeRemaining < 60 ? 'bg-hacker-red shadow-lg shadow-hacker-red/50' : 'bg-gradient-to-r from-hacker-green to-hacker-cyan shadow-lg shadow-hacker-green/40'
                  }`}
                  style={{ width: `${(timeRemaining / QUIZ_DURATION_SECONDS) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Smooth Progress Bar */}
          <div className="bg-hacker-darker border-2 border-hacker-cyan/50 rounded-xl p-5 shadow-lg shadow-hacker-cyan/20 hover:shadow-glow-blue transition-all duration-500">
            <div className="flex justify-between text-xs text-hacker-cyan font-mono mb-3 uppercase tracking-wider">
              <span>📊 Quiz Progress</span>
              <span className="text-hacker-green font-bold text-sm">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-2.5 bg-hacker-dark rounded-full overflow-hidden border border-hacker-green/30">
              <div
                className="h-full bg-gradient-to-r from-hacker-green via-hacker-cyan to-hacker-purple transition-all duration-500 ease-out shadow-lg shadow-hacker-green/50 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between text-xs text-hacker-cyan/70 font-mono">
              <span>✓ {Object.keys(answers).length} Answered</span>
              <span>○ {quizQuestions.length - Object.keys(answers).length} Remaining</span>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-hacker-dark border-2 border-hacker-green rounded-xl p-8 shadow-lg shadow-hacker-green/40 mb-8 animate-scale-in transform transition-all duration-500 hover:shadow-glow-green">
          <div className="mb-2 inline-block px-3 py-1 bg-hacker-cyan/20 border border-hacker-cyan rounded text-hacker-cyan text-xs font-mono">
            {question.category}
          </div>
          
          <h2 className="text-2xl font-bold text-hacker-green mb-8 leading-relaxed drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]">
            ❓ {question.question}
          </h2>

          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full text-left px-5 py-4 rounded-lg border-2 transition-all duration-300 font-mono text-sm transform hover:scale-102
                  ${answers[currentQuestion] === option
                    ? 'border-hacker-green bg-hacker-green/25 text-hacker-green shadow-lg shadow-hacker-green/50 scale-102'
                    : 'border-hacker-cyan/40 text-hacker-cyan hover:border-hacker-green hover:text-hacker-green hover:bg-hacker-green/10 hover:shadow-lg hover:shadow-hacker-green/30'
                  }
                `}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 border-2 border-current rounded-lg mr-4 bg-hacker-darker font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-4 justify-between pt-8 border-t-2 border-hacker-green/30">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-3 border-2 border-hacker-cyan text-hacker-cyan rounded-lg hover:bg-hacker-cyan hover:text-hacker-darker hover:shadow-glow-blue transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed font-mono font-bold"
            >
              ← PREVIOUS
            </button>

            {currentQuestion === quizQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-hacker-green text-hacker-darker font-bold rounded-lg hover:shadow-glow-green transition-all duration-300 hover:scale-105 active:scale-95 font-mono"
              >
                ✓ SUBMIT QUIZ
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-hacker-green text-hacker-darker font-bold rounded-lg hover:shadow-glow-green transition-all duration-300 hover:scale-105 active:scale-95 font-mono"
              >
                NEXT →
              </button>
            )}
          </div>
        </div>

        {/* Question Navigation */}
        <div className="bg-hacker-dark border-2 border-hacker-cyan/50 rounded-lg p-5 shadow-lg shadow-hacker-cyan/20 animate-fade-in">
          <p className="text-hacker-cyan text-xs font-mono mb-3 font-bold">🎯 QUESTION NAVIGATOR (Click to Jump)</p>
          <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 gap-2">
            {quizQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-10 h-10 rounded-lg border-2 font-mono text-xs font-bold transition-all duration-200 transform hover:scale-110
                  ${currentQuestion === index
                    ? 'bg-hacker-green text-hacker-darker border-hacker-green shadow-lg shadow-hacker-green/60 scale-110'
                    : answers[index]
                    ? 'bg-hacker-green/40 border-hacker-green text-hacker-green hover:bg-hacker-green/60'
                    : 'border-hacker-cyan/40 text-hacker-cyan hover:border-hacker-green hover:text-hacker-green'
                  }
                `}
                title={`Question ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-hacker-cyan/30 grid grid-cols-3 gap-4 text-xs font-mono">
            <div className="text-center">
              <div className="text-hacker-green font-bold">{Object.keys(answers).length}</div>
              <div className="text-hacker-cyan">Answered</div>
            </div>
            <div className="text-center">
              <div className="text-hacker-cyan font-bold">{quizQuestions.length - Object.keys(answers).length}</div>
              <div className="text-hacker-cyan">Remaining</div>
            </div>
            <div className="text-center">
              <div className="text-hacker-purple font-bold">{Math.round(progressPercent)}%</div>
              <div className="text-hacker-cyan">Complete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
