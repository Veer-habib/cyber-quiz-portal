'use client'

interface QuestionProps {
  question: string
  options: string[]
  selectedAnswer: string | null
  onSelect: (answer: string) => void
  questionNumber: number
  totalQuestions: number
}

export default function QuestionCard({
  question,
  options,
  selectedAnswer,
  onSelect,
  questionNumber,
  totalQuestions
}: QuestionProps) {
  return (
    <div className="w-full bg-hacker-dark border-2 border-hacker-green rounded-lg p-6 shadow-lg shadow-hacker-green/30">
      {/* Question Number and Progress */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-hacker-green/50">
        <div className="text-hacker-cyan text-sm font-mono">
          QUESTION {questionNumber}/{totalQuestions}
        </div>
        <div className="text-hacker-green text-xs">
          {Math.round((questionNumber / totalQuestions) * 100)}% COMPLETE
        </div>
      </div>

      {/* Question Text */}
      <h2 className="text-xl font-bold text-hacker-green mb-6 leading-relaxed">
        {question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className={`w-full text-left px-4 py-3 rounded border-2 transition-all duration-300 font-mono text-sm
              ${selectedAnswer === option
                ? 'border-hacker-green bg-hacker-green/20 text-hacker-green shadow-glow-green'
                : 'border-hacker-cyan/50 text-hacker-cyan hover:border-hacker-green hover:text-hacker-green'
              }
            `}
          >
            <span className="inline-block w-6 h-6 border border-current rounded mr-3 text-center align-text-bottom">
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
