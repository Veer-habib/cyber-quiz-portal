# CyberSecure Quiz Portal - Setup Guide

## 🎯 Project Overview

A sophisticated, hacker-themed web application designed to raise awareness about cybersecurity and anti-corruption among students and faculty members. The application features nanosecond-precision timing and dual portals for users and administrators.

## ⚡ Key Features

- **Nanosecond Precision Timing**: Measures quiz completion time with bigint nanosecond accuracy
- **Hacker Theme**: Dark, cyberpunk-inspired UI with glowing effects and terminal aesthetics
- **User Portal**: Registration, quiz-taking, and instant results
- **Admin Dashboard**: Analytics, results management, and CSV export
- **Certificate Generation**: Automatic eligibility for scores ≥ 45%
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Progress**: Visual progress indicators and question navigation

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 8+ (comes with Node.js)
- **Git** (optional, for version control)

### Installation Steps

1. **Navigate to project directory**
```bash
cd "c:\Users\pandu\Downloads\cyber quiz"
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
Navigate to `http://localhost:3000`

## 📱 Usage Guide

### For Users

1. **Home Page** (`/`)
   - Click "START QUIZ" button
   - Enter your details (Name, Email, USN/Roll No, User Type)
   - Click "PROCEED TO QUIZ"

2. **Quiz Page** (`/quiz`)
   - Answer 20 cybersecurity and anti-corruption questions
   - Timer shows time remaining (max 1 hour)
   - Progress bar indicates completion percentage
   - Select answers using the radio-style buttons
   - Use PREVIOUS/NEXT buttons to navigate
   - Click SUBMIT QUIZ when finished

3. **Results Page**
   - View your score, percentage, and time taken
   - Check certificate eligibility
   - Download results if needed

### For Admin

1. **Admin Portal** (`/admin`)
   - Enter admin password: `CyberSecure2024`
   - **Overview Tab**: View key statistics and metrics
   - **Results Tab**: See all user submissions in a table format
   - **Analytics Tab**: View score distribution and detailed statistics
   - **Export**: Download all results as CSV

## 📊 Quiz Details

**Total Questions**: 20
**Time Limit**: 1 hour
**Passing Score**: 45% or higher
**Certificate**: Free certificate for scores ≥ 45%

### Question Categories
- Cybersecurity Fundamentals
- Network Security
- Data Protection
- Password Hygiene
- Social Engineering
- Phishing Prevention
- Cyber Threats
- Anti-Corruption
- Compliance
- Authentication

## 🎨 Theme Customization

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  'hacker-dark': '#0a0e27',
  'hacker-darker': '#050810',
  'hacker-green': '#0eff00',
  'hacker-cyan': '#00ffff',
  'hacker-purple': '#8b00ff',
  'hacker-red': '#ff0055',
  'hacker-blue': '#0080ff',
}
```

## 📁 Project Structure

```
cyber-quiz-portal/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home/Welcome page
│   │   ├── quiz/page.tsx         # Quiz taking interface
│   │   ├── admin/page.tsx        # Admin dashboard
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── HackerTerminal.tsx    # Terminal component
│   │   ├── QuestionCard.tsx      # Question display
│   │   └── ResultsCard.tsx       # Results display
│   ├── store/
│   │   └── quizStore.ts          # Zustand state management
│   ├── types/
│   │   └── quiz.ts               # TypeScript interfaces
│   ├── utils/
│   │   ├── quizData.ts           # Quiz questions
│   │   └── timingUtils.ts        # Nanosecond timing utilities
│   └── lib/
│       └── cn.ts                 # Utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Data Storage

The application uses browser localStorage for data persistence:
- **userProfile**: Current user's registration data
- **quizResults**: Array of all quiz submissions
- **adminAuth**: Admin authentication status

### Sample Result Structure
```json
{
  "userId": "USN123",
  "userName": "John Doe",
  "userEmail": "john@example.com",
  "usn": "USN123",
  "score": 18,
  "totalQuestions": 20,
  "percentage": 90,
  "timeTakenNanoseconds": "45000000000",
  "timeTakenFormatted": "00:45",
  "eligible": true,
  "submittedAt": "2024-11-21T10:30:00.000Z"
}
```

## 🔐 Admin Access

**Default Admin Password**: `CyberSecure2024`

⚠️ **Important**: Change this password in production by editing `src/app/admin/page.tsx`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables if needed
5. Deploy

### Deploy to Other Platforms

The application can be deployed to any Node.js hosting platform:
- AWS, Azure, Google Cloud
- Heroku, Railway, Render
- Self-hosted servers

```bash
npm run build
npm start
```

## 📱 Browser Support

- Chrome/Edge: ✅ Latest 2 versions
- Firefox: ✅ Latest 2 versions
- Safari: ✅ Latest 2 versions
- Mobile browsers: ✅ Fully responsive

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# On Windows (PowerShell)
Get-Process | Where-Object {$_.Port -eq 3000} | Stop-Process

# On Mac/Linux
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
```

### Styling Not Applying
- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind CSS configuration
- Verify `globals.css` is imported in layout

## 📞 Support & Contact

For issues or questions:
1. Check the README.md
2. Review component documentation in code comments
3. Check browser console for error messages
4. Verify Node.js version (18+)

## 📜 License

This project is open-source and available for educational purposes.

## 🎓 Educational Objectives

This quiz portal helps achieve:
- Raise cybersecurity awareness
- Promote anti-corruption culture
- Test knowledge on security best practices
- Encourage ethical behavior
- Provide certification for achievement

---

**Made with ⚔️ for cybersecurity awareness**
**Version**: 1.0.0
**Last Updated**: November 21, 2024
