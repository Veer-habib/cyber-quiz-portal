# CyberSecure Quiz Portal - Architecture Guide

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT (Browser)                         │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Next.js Frontend (React)                │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  Pages:                                              │  │
│  │  • Home Page (/)                                     │  │
│  │  • Quiz Interface (/quiz)                            │  │
│  │  • Admin Dashboard (/admin)                          │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Component Layer                         │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  • HackerTerminal                                    │  │
│  │  • QuestionCard                                      │  │
│  │  • ResultsCard                                       │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Utility & Business Logic                     │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  • Timing Utils (nanosecond precision)              │  │
│  │  • Quiz Data (20 questions)                         │  │
│  │  • Type Definitions                                 │  │
│  └──────────────────────────────────────────────────────┘  │
│                           ↓                                   │
│  ┌──────────────────────────────────────────────────────┐  │
│  │            Browser LocalStorage                      │  │
│  ├──────────────────────────────────────────────────────┤  │
│  │  • User Profile Data                                │  │
│  │  • Quiz Results History                             │  │
│  │  • Admin Authentication                             │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## 📦 Component Architecture

```
App (layout.tsx)
│
├── Home Portal (page.tsx)
│   ├── Welcome Screen
│   ├── Registration Form
│   └── Start Quiz Button
│
├── Quiz Page (quiz/page.tsx)
│   ├── QuestionCard Component
│   ├── Timer Display
│   ├── Progress Bar
│   ├── Navigation Buttons
│   └── Results Display
│
└── Admin Dashboard (admin/page.tsx)
    ├── Auth Layer
    ├── Overview Tab
    │   └── Statistics Cards
    ├── Results Tab
    │   └── User Results Table
    ├── Analytics Tab
    │   └── Charts & Graphs
    └── Export Button
```

## 🔄 Data Flow

### User Quiz Flow

```
User Registration
    ↓
Input Validation
    ↓
Store in LocalStorage (userProfile)
    ↓
Navigate to Quiz
    ↓
Start Quiz (get nanosecond start time)
    ↓
Answer Questions & Track Time
    ↓
Submit Quiz
    ↓
Calculate Score & Duration
    ↓
Create Result Object
    ↓
Store in LocalStorage (quizResults)
    ↓
Display Results Page
    ↓
Check Certificate Eligibility (≥45%)
    ↓
Offer Download/Share Options
```

### Admin Flow

```
Visit /admin
    ↓
Enter Password
    ↓
Authenticate (store in LocalStorage)
    ↓
Fetch quizResults from LocalStorage
    ↓
Process & Display Data
    ├─ Overview: Calculate Statistics
    ├─ Results: Display Raw Data
    ├─ Analytics: Create Charts
    └─ Export: Generate CSV
```

## 🎨 State Management

### Using Zustand (Optional - Currently in Store)

```typescript
quizStore
├── userId
├── currentQuestion
├── answers []
├── startTime (BigInt)
├── endTime (BigInt)
├── score
└── isSubmitted
```

### LocalStorage Structure

```json
{
  "userProfile": {
    "name": "string",
    "email": "string",
    "usn": "string",
    "userType": "student|faculty"
  },
  "quizResults": [
    {
      "userId": "string",
      "userName": "string",
      "score": "number",
      "percentage": "number",
      "timeTakenNanoseconds": "bigint",
      "eligible": "boolean",
      "submittedAt": "ISO string"
    }
  ],
  "adminAuth": "boolean"
}
```

## ⏱️ Timing System Architecture

```
Performance.now() API
    ↓
Returns high-resolution timestamp (milliseconds)
    ↓
Convert to Nanoseconds (multiply by 1,000,000)
    ↓
Store in BigInt (preserves precision)
    ↓
Calculate Duration = endTime - startTime
    ↓
Format for Display
    └─ Nanoseconds (ns)
    └─ Microseconds (μs)
    └─ Milliseconds (ms)
    └─ Seconds (s)
```

## 🎨 Styling Architecture

```
Tailwind CSS (Utility-first)
    ├── Custom Theme (tailwind.config.ts)
    │   ├── Hacker Colors
    │   ├── Custom Animations
    │   └── Extended Spacing
    │
├── Global Styles (globals.css)
    ├── Typography
    ├── CRT Scan Effects
    ├── Grid Background
    └── Custom Utilities
    │
└── Component-level Styles
    ├── Inline classNames
    ├── Dynamic Classes
    └── Responsive Design
```

## 🔐 Security Considerations

```
Authentication (Admin)
├── Password Protection
├── LocalStorage Flag
└── Session-based (browser-based)

Data Protection
├── Client-side Storage
├── No Backend Transmission
├── Browser Cache
└── LocalStorage Persistence

User Data
├── Profile Info (Name, Email, USN)
├── Quiz Answers
├── Results & Scores
└── Timestamps
```

## 📊 Quiz Engine Architecture

```
QuizData (20 Questions)
    ↓
Question Interface
├── id (number)
├── question (string)
├── options (string[])
├── correctAnswer (string)
└── category (string)
    ↓
Quiz Logic
├── Current Question Tracking
├── Answer Storage
├── Score Calculation
├── Time Tracking
└── Result Generation
    ↓
Result Object
├── User Info
├── Score & Percentage
├── Time Taken (ns)
├── Eligibility Status
└── Timestamp
```

## 🚀 Performance Optimization

```
Frontend Performance
├── Next.js SSR
├── Image Optimization
├── Code Splitting
├── CSS Optimization
└── Client-side Caching

Runtime Performance
├── Efficient State Updates
├── Minimal Re-renders
├── Event Handler Optimization
├── LocalStorage Batch Operations
└── Memoization (where applicable)
```

## 🧪 Testing Architecture

```
User Flow Testing
├── Registration Flow
├── Quiz Taking Flow
├── Results Display
└── Certificate Eligibility

Admin Testing
├── Authentication
├── Data Display
├── Analytics Calculations
└── Export Functionality

Timing Precision
├── Nanosecond Accuracy
├── Timer Display
├── Duration Calculation
└── Format Conversion
```

## 📈 Scalability Considerations

### Current (Client-side Only)
- Data stored in browser LocalStorage
- No backend required
- Perfect for ~1000-5000 concurrent users per instance

### Future (With Backend)
```
Client (React)
    ↓
API Layer (Next.js API Routes)
    ↓
Database (MongoDB/PostgreSQL)
    ↓
Authentication (JWT)
    ↓
Email Service (Certificates)
```

## 🌐 Deployment Architecture

### Development
```
localhost:3000
├── HMR (Hot Module Reload)
├── Development API
└── LocalStorage
```

### Production
```
Vercel / Cloud Provider
├── Optimized Build
├── Caching Headers
├── CDN Distribution
└── Environment Variables
```

## 📱 Responsive Architecture

```
Mobile First Approach

Base Styles (Mobile - <640px)
    ↓
Tablet Styles (640px - 1024px)
    ├── Adjusted Layouts
    ├── Larger Touch Targets
    └── Optimized Navigation
    ↓
Desktop Styles (>1024px)
    ├── Full Layout
    ├── Multi-column Views
    └── Advanced Features
```

## 🔄 Component Lifecycle

```
Initial Load
├── Load UserProfile from LocalStorage
├── Check Admin Auth
└── Initialize Quiz State

During Quiz
├── Track Time (BigInt)
├── Update Answers
├── Render Current Question
├── Handle Navigation
└── Monitor Progress

On Submission
├── Calculate Final Score
├── Format Results
├── Store in LocalStorage
├── Determine Eligibility
└── Display Results

Admin View
├── Fetch All Results
├── Process Statistics
├── Render Dashboard
├── Handle Export
└── Manage Sessions
```

---

**Architecture Version**: 1.0.0
**Framework**: Next.js 14 + React 18 + TypeScript 5
**Last Updated**: November 2024
