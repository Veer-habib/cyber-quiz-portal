# 🚀 QUICKSTART - CyberSecure Quiz Portal

## Installation (5 minutes)

### Step 1: Open PowerShell
Press `Win + X` and select "Windows PowerShell (Administrator)" or go to `c:\Users\pandu\Downloads\cyber quiz`

### Step 2: Install Dependencies
```powershell
npm install
```

### Step 3: Start Development Server
```powershell
npm run dev
```

### Step 4: Open Browser
Go to: **http://localhost:3000**

## 🎯 Portal Layouts

### User Portal Flow
```
Home (/)
  ↓
Registration Form
  ↓
Quiz Page (/quiz)
  ↓
Results Page
```

### Admin Portal
```
Admin Dashboard (/admin)
  ├─ Login (Password: CyberSecure2024)
  ├─ Overview Tab (Statistics)
  ├─ Results Tab (User Submissions)
  ├─ Analytics Tab (Performance Metrics)
  └─ Export Button (Download CSV)
```

## 🎨 Theme Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Hacker Green | #0eff00 | Primary, Text, Borders |
| Hacker Cyan | #00ffff | Secondary, Accents |
| Hacker Purple | #8b00ff | Highlights |
| Hacker Red | #ff0055 | Admin Portal |
| Hacker Blue | #0080ff | Tertiary |
| Dark Background | #0a0e27 | Main BG |
| Darker Background | #050810 | Component BG |

## 📊 Quiz Statistics

- **Total Questions**: 20
- **Passing Score**: 45%+ (9 out of 20 correct)
- **Time Limit**: 1 hour
- **Certificate Threshold**: 45%

## 🔐 Credentials

**Admin Portal**
- URL: `/admin`
- Password: `CyberSecure2024`

## 🛠️ Building for Production

```powershell
# Build
npm run build

# Start production server
npm start
```

## 📦 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14+ | React Framework |
| React | 18+ | UI Library |
| TypeScript | 5+ | Type Safety |
| Tailwind CSS | 3+ | Styling |
| Zustand | 4+ | State Management |
| Framer Motion | 10+ | Animations |

## 🎯 Nanosecond Timing

The application measures quiz completion time with nanosecond precision using:
- JavaScript `performance.now()` API
- BigInt for large number precision
- Custom formatting utilities

Example output: `45312850000 nanoseconds` ≈ 45.31 seconds

## 🌐 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📝 Customization Guide

### Add More Questions
Edit `src/utils/quizData.ts`:
```typescript
{
  id: 21,
  question: 'Your question here?',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer: 'Option A',
  category: 'Category Name'
}
```

### Change Quiz Duration
Edit `src/app/quiz/page.tsx`:
```typescript
const QUIZ_DURATION_SECONDS = 3600 // Change this value
```

### Change Admin Password
Edit `src/app/admin/page.tsx`:
```typescript
const ADMIN_PASSWORD = 'YourNewPassword'
```

## 🧪 Testing Features

### Test User Flow
1. Go to `/`
2. Fill form with test data
3. Start quiz
4. Answer questions
5. Submit and view results

### Test Admin Panel
1. Go to `/admin`
2. Enter: `CyberSecure2024`
3. View different tabs
4. Download CSV export

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| npm: command not found | Install Node.js from nodejs.org |
| Port 3000 in use | Use `npm run dev -- -p 3001` |
| Styles not loading | Clear cache: Ctrl+Shift+Delete |
| Page not updating | Check console for errors (F12) |

## 📞 File Locations

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Home page |
| `src/app/quiz/page.tsx` | Quiz page |
| `src/app/admin/page.tsx` | Admin dashboard |
| `src/utils/quizData.ts` | Quiz questions |
| `tailwind.config.ts` | Color theme |
| `src/app/globals.css` | Global styles |

## ✅ Checklist

- [ ] Node.js installed (18+)
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Home page loads at localhost:3000
- [ ] Quiz page accessible
- [ ] Admin portal working (password: CyberSecure2024)
- [ ] Results save to localStorage
- [ ] Responsive on mobile view

## 🎓 Quiz Categories Covered

✓ Cybersecurity Fundamentals
✓ Network Security
✓ Data Protection
✓ Password Hygiene
✓ Social Engineering
✓ Phishing Prevention
✓ Anti-Corruption
✓ Compliance
✓ Authentication
✓ Cyber Threats

## 🚀 Next Steps

1. **Customize content**
   - Edit quiz questions in `quizData.ts`
   - Modify colors in `tailwind.config.ts`
   - Update admin password

2. **Test thoroughly**
   - Take quiz as user
   - Check admin dashboard
   - Verify timing accuracy

3. **Deploy**
   - Connect to GitHub
   - Deploy to Vercel or other platforms
   - Set environment variables

4. **Share with students**
   - Send quiz link
   - Monitor submissions
   - Issue certificates

---

**Version**: 1.0.0
**Theme**: Hacker/Cybersecurity
**License**: Open Source (Educational)
**Made with ⚔️ for Cybersecurity Awareness**
