import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hacker-dark': '#0a0e27',
        'hacker-darker': '#050810',
        'hacker-green': '#0eff00',
        'hacker-green-dark': '#00cc00',
        'hacker-cyan': '#00ffff',
        'hacker-purple': '#8b00ff',
        'hacker-red': '#ff0055',
        'hacker-blue': '#0080ff',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, 0.05) 75%, rgba(0, 255, 0, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, 0.05) 25%, rgba(0, 255, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, 0.05) 75%, rgba(0, 255, 0, 0.05) 76%, transparent 77%, transparent)',
      },
      backgroundSize: {
        'grid-size': '50px 50px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-lines': 'scan-lines 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'shimmer': 'shimmer 2s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 10px rgba(0, 255, 0, 0.8)' },
          '50%': { opacity: '0.8', textShadow: '0 0 20px rgba(0, 255, 0, 1)' },
        },
        'scan-lines': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
        },
        'slide-in': {
          'from': { transform: 'translateX(-20px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 255, 0, 0.8)' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(0, 255, 0, 0.5)',
        'glow-blue': '0 0 20px rgba(0, 128, 255, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 0, 255, 0.5)',
      },
    },
  },
  plugins: [],
}

export default config
