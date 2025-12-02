'use client'

import { QuizResult } from '@/types/quiz'

interface ResultsCardProps {
  result: QuizResult
}

export default function ResultsCard({ result }: ResultsCardProps) {
  const getPerformanceLevel = (percentage: number): { level: string; color: string } => {
    if (percentage >= 90) return { level: 'ELITE', color: 'text-hacker-green' }
    if (percentage >= 75) return { level: 'ADVANCED', color: 'text-hacker-cyan' }
    if (percentage >= 60) return { level: 'PROFICIENT', color: 'text-hacker-blue' }
    if (percentage >= 45) return { level: 'CERTIFIED', color: 'text-hacker-green' }
    return { level: 'INSUFFICIENT', color: 'text-hacker-red' }
  }

  const performance = getPerformanceLevel(result.percentage)

  return (
    <div className="w-full bg-hacker-dark border-2 border-hacker-green rounded-lg p-8 shadow-lg shadow-hacker-green/30">
      {/* Result Status */}
      <div className="text-center mb-8 pb-6 border-b border-hacker-green/50">
        <h2 className={`text-3xl font-bold mb-2 ${performance.color}`}>
          {performance.level}
        </h2>
        <p className="text-hacker-green text-sm font-mono">
          SECURITY CLEARANCE LEVEL
        </p>
      </div>

      {/* Score Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4 border border-hacker-cyan/50 rounded bg-hacker-darker">
          <div className="text-hacker-cyan text-sm font-mono mb-2">SCORE</div>
          <div className="text-4xl font-bold text-hacker-green">
            {result.score}/{result.totalQuestions}
          </div>
          <div className="text-hacker-green text-sm mt-2">
            {result.percentage.toFixed(1)}%
          </div>
        </div>

        <div className="text-center p-4 border border-hacker-cyan/50 rounded bg-hacker-darker">
          <div className="text-hacker-cyan text-sm font-mono mb-2">TIME TAKEN</div>
          <div className="text-2xl font-bold text-hacker-green">
            {result.timeTakenFormatted}
          </div>
          <div className="text-hacker-green text-xs mt-2 break-all">
            {result.timeTakenNanoseconds.toString()} ns
          </div>
        </div>

        <div className="text-center p-4 border border-hacker-cyan/50 rounded bg-hacker-darker">
          <div className="text-hacker-cyan text-sm font-mono mb-2">CERTIFICATE</div>
          <div className={`text-2xl font-bold ${result.eligible ? 'text-hacker-green' : 'text-hacker-red'}`}>
            {result.eligible ? 'ELIGIBLE' : 'NOT ELIGIBLE'}
          </div>
          <div className="text-hacker-green text-xs mt-2">
            Min: 45%
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="border-t border-hacker-green/50 pt-6 space-y-3 text-sm font-mono">
        <div className="flex justify-between">
          <span className="text-hacker-cyan">USER:</span>
          <span className="text-hacker-green">{result.userName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-hacker-cyan">EMAIL:</span>
          <span className="text-hacker-green break-all">{result.userEmail}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-hacker-cyan">USN/ROLL:</span>
          <span className="text-hacker-green">{result.usn}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-hacker-cyan">SUBMITTED:</span>
          <span className="text-hacker-green">{new Date(result.submittedAt).toLocaleString()}</span>
        </div>
      </div>

      {/* Certificate Message */}
      {result.eligible && (
        <div className="mt-6 p-4 bg-hacker-green/10 border border-hacker-green rounded">
          <p className="text-hacker-green text-center font-mono text-sm">
            ✓ You are eligible for a FREE CERTIFICATE<br/>
            <span className="text-xs opacity-75">Your certificate will be sent to your registered email</span>
          </p>
        </div>
      )}
    </div>
  )
}
