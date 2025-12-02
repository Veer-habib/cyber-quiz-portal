'use client'

import { ReactNode } from 'react'

interface HackerTerminalProps {
  children?: ReactNode
  title?: string
  status?: 'active' | 'idle' | 'alert'
}

export default function HackerTerminal({ 
  children, 
  title = 'SYSTEM', 
  status = 'active' 
}: HackerTerminalProps) {
  const statusColor = {
    active: 'text-hacker-green',
    idle: 'text-hacker-green opacity-60',
    alert: 'text-hacker-red'
  }

  return (
    <div className="w-full rounded border-2 border-hacker-green p-4 bg-hacker-dark relative overflow-hidden">
      {/* CRT Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
          backgroundSize: '100% 2px'
        }} />
      </div>

      {/* Terminal Header */}
      <div className={`flex items-center gap-2 pb-2 border-b border-hacker-green mb-3 ${statusColor[status]}`}>
        <div className="w-2 h-2 rounded-full bg-hacker-green animate-pulse" />
        <span className="text-sm font-mono">{title}</span>
        <span className="text-xs opacity-50 ml-auto">$ {status.toUpperCase()}</span>
      </div>

      {/* Terminal Content */}
      <div className="font-mono text-sm leading-relaxed">
        {children}
      </div>

      {/* Terminal Footer */}
      <div className="mt-3 pt-2 border-t border-hacker-green border-opacity-30 text-xs text-hacker-green opacity-50">
        › root@cybersecure
      </div>
    </div>
  )
}
