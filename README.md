# ⚔️ CyberSecure Quiz Portal

A modern, hacker-themed web application designed to raise awareness about cybersecurity and anti-corruption among students and faculty members. Features dual portals for users and administrators with nanosecond-precision timing.

## ✨ Key Features

- **⚡ Nanosecond Precision Timing**: Measures quiz completion time with BigInt nanosecond accuracy
- **🎨 Hacker Theme UI**: Dark, futuristic cybersecurity-inspired design with glowing effects
- **👤 User Portal**: 
  - User registration and profile management
  - Real-time quiz interface with progress indicators
  - Instant results with detailed analytics
  - Certificate eligibility display
  
- **🛡️ Admin Portal**: 
  - Secure admin dashboard (password-protected)
  - Real-time analytics and statistics
  - User results table with filtering
  - Score distribution analytics
  - CSV export functionality
  - Performance metrics

- **📜 Certificate Generation**: 
  - Automatic eligibility for scores ≥ 45%
  - Certificate details with user information
  - Email notification system

- **📊 Analytics Dashboard**: 
  - Real-time statistics and performance metrics
  - Score distribution charts
  - Pass rate analytics
  - Time tracking and performance analysis

- **📱 Responsive Design**: 
  - Mobile-first approach
  - Tablet optimization
  - Desktop full experience
  - Touch-friendly interface

- **🔐 Security**: 
  - Admin authentication
  - LocalStorage data persistence
  - Secure data handling

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom hacker theme
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: (Local storage for demo, can integrate with backend)

## Project Structure

```
cyber-quiz-portal/
├── src/
│   ├── app/
│   │   ├── (user)/
│   │   │   ├── page.tsx
│   │   │   ├── quiz/page.tsx
│   │   │   └── results/page.tsx
│   │   ├── (admin)/
│   │   │   ├── dashboard/page.tsx
│   │   │   ├── analytics/page.tsx
│   │   │   └── certificates/page.tsx
│   │   ├── api/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── HackerTerminal.tsx
│   │   ├── QuizCard.tsx
│   │   ├── ResultsCard.tsx
│   │   ├── AdminChart.tsx
│   │   └── Certificate.tsx
│   ├── store/
│   │   └── quizStore.ts
│   ├── types/
│   │   └── quiz.ts
│   ├── utils/
│   │   ├── quizData.ts
│   │   └── timingUtils.ts
│   └── lib/
│       └── cn.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 8+

### Installation

1. **Clone or download the project**
```bash
cd "path/to/cyber quiz"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to: `http://localhost:3000`

## 📖 Usage Guide

### User Portal
1. Visit home page at `/`
2. Click **START QUIZ** button
3. Fill in your details:
   - Full Name
   - Email Address
   - USN/Roll Number
   - User Type (Student/Faculty)
4. Click **PROCEED TO QUIZ**
5. Answer all 20 questions
6. Submit quiz
7. View results and certificate status

### Admin Portal
1. Navigate to `/admin`
2. Enter admin password: `CyberSecure2024`
3. Access three views:
   - **Overview**: Key statistics dashboard
   - **Results**: Detailed user submissions table
   - **Analytics**: Score distribution and metrics
4. Export data as CSV for records

## 🎯 Quiz Specification

| Aspect | Details |
|--------|---------|
| Total Questions | 20 |
| Question Types | Multiple choice (4 options each) |
| Passing Score | 45% or higher (9/20) |
| Certificate Eligibility | ≥ 45% score |
| Time Limit | 1 hour |
| Topics Covered | Cybersecurity, Anti-Corruption, Data Protection, Social Engineering, Network Security, etc. |

## 📚 Quiz Topics

The portal covers 20 questions across these categories:

- **Cybersecurity Fundamentals**: Basic concepts and best practices
- **Network Security**: Firewalls, intrusion detection, protocols
- **Data Protection**: Encryption, access control, GDPR compliance
- **Password Hygiene**: Strong passwords, MFA, password management
- **Social Engineering**: Manipulation tactics and awareness
- **Phishing Prevention**: Email threats and malicious links
- **Anti-Corruption**: Ethical behavior, whistleblowing, reporting
- **Authentication**: Multi-factor auth, security tokens
- **Cyber Threats**: DDoS, malware, zero-day exploits
- **Compliance**: Data protection regulations and policies

## 📊 User Interface

### Home Page (`/`)
- Welcome screen with portal information
- Quick facts about the quiz
- Registration form
- Start button

### Quiz Interface (`/quiz`)
- Question display with multiple choice options
- Real-time timer and progress bar
- Question navigation buttons
- Answer confirmation
- Submit button

### Results Page
- Score display with percentage
- Time taken (formatted and in nanoseconds)
- Certificate eligibility status
- Detailed statistics
- Option to return to home

### Admin Dashboard (`/admin`)
- Three-tab interface (Overview, Results, Analytics)
- Login authentication
- Statistics cards with key metrics
- Results table with sortable columns
- Score distribution chart
- CSV export button

## 📂 Project Structure

```
cyber-quiz-portal/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home/Welcome portal
│   │   ├── quiz/page.tsx         # Quiz taking interface
│   │   ├── admin/page.tsx        # Admin dashboard
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global & CRT styles
│   ├── components/
│   │   ├── HackerTerminal.tsx    # Terminal styled component
│   │   ├── QuestionCard.tsx      # Question display
│   │   └── ResultsCard.tsx       # Results display
│   ├── store/
│   │   └── quizStore.ts          # Zustand state (reserved for future)
│   ├── types/
│   │   └── quiz.ts               # TypeScript interfaces
│   ├── utils/
│   │   ├── quizData.ts           # 20 Quiz questions & categories
│   │   └── timingUtils.ts        # BigInt nanosecond timing
│   └── lib/
│       └── cn.ts                 # Utility helpers
├── public/                       # Static assets (to be added)
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind theme & colors
├── postcss.config.js             # PostCSS config
├── next.config.js                # Next.js config
├── .eslintrc.json                # ESLint rules
├── .gitignore                    # Git ignore rules
├── README.md                     # Main documentation
├── SETUP.md                      # Detailed setup guide
└── QUICKSTART.md                 # Quick start guide
```

## 🔐 Admin Credentials

| Field | Value |
|-------|-------|
| Portal URL | `/admin` |
| Password | `CyberSecure2024` |
| Authentication Type | Password-based |

⚠️ **Security Note**: Change default password in production before deploying!

## 💾 Data Persistence

The application uses **Browser LocalStorage** to store:
- User profile information
- Quiz answers and scores
- Quiz results history
- Admin authentication status

Data persists across browser sessions but clears when cache is emptied.

## 📱 Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Latest 2 versions recommended |
| Edge | ✅ Full | Chromium-based |
| Firefox | ✅ Full | Latest 2 versions recommended |
| Safari | ✅ Full | macOS and iOS latest versions |
| Mobile | ✅ Full | Responsive design optimized |

## 🔗 Available Routes

| Route | Purpose | Access |
|-------|---------|--------|
| `/` | Home & User Portal | Public |
| `/quiz` | Quiz Interface | After registration |
| `/admin` | Admin Dashboard | Password-protected |

## ⏱️ Nanosecond Timing System

The quiz measures completion time with nanosecond precision:

```
1 second = 1,000,000,000 nanoseconds (ns)
1 millisecond = 1,000,000 nanoseconds (ns)
1 microsecond = 1,000 nanoseconds (ns)

Example: 45312850000 ns = 45.31 seconds
```

Uses JavaScript's `performance.now()` API combined with BigInt for precision.

## 🎓 Educational Objectives

✅ Raise cybersecurity awareness among students
✅ Promote anti-corruption culture and ethics
✅ Test knowledge on security best practices
✅ Encourage vigilant and responsible behavior
✅ Provide certification for achievement
✅ Create awareness about data protection regulations

## 📞 Support & Troubleshooting

### Common Issues

**Issue**: "npm: command not found"
- **Solution**: Install Node.js from [nodejs.org](https://nodejs.org)

**Issue**: Port 3000 already in use
- **Solution**: `npm run dev -- -p 3001` (use different port)

**Issue**: Styles not displaying correctly
- **Solution**: Clear browser cache (Ctrl+Shift+Delete)

**Issue**: Quiz not starting after registration
- **Solution**: Check browser console (F12) for errors, ensure localStorage is enabled

See `SETUP.md` and `QUICKSTART.md` for more detailed troubleshooting.

## 📜 License & Attribution

This project is open-source and available for educational purposes.

**Objective**: Raise awareness about cybersecurity and anti-corruption among students, faculty members, and the general public.

**Certificate Awards**: Free certificates are awarded to participants who score 45% or above.

---

**Made with ⚔️ for Cybersecurity Awareness**

**Version**: 1.0.0
**Last Updated**: November 2024
**Theme**: Hacker/Cybersecurity
**Type**: Educational Quiz Platform
