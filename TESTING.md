# CyberSecure Quiz Portal - Testing Guide

## 🧪 Test Scenarios

### Scenario 1: Complete User Quiz Flow

#### Setup
- Browser: Chrome/Firefox/Edge
- URL: http://localhost:3000
- Time: ~15 minutes

#### Steps

**1. Home Page**
```
Action: Open http://localhost:3000
Expected Results:
✓ Page loads with hacker theme (green text, dark background)
✓ "CYBERSECURE" title visible with ⚔️ emoji
✓ Portal information displayed
✓ "START QUIZ" button visible and clickable
```

**2. Registration Form**
```
Action: Click "START QUIZ" button
Expected Results:
✓ Form appears with fields:
  - Full Name
  - Email
  - USN/Roll No
  - User Type (dropdown: Student/Faculty)
✓ All fields are required
✓ "PROCEED TO QUIZ" button is visible
```

**3. Fill Registration**
```
Test Data:
- Name: John Doe
- Email: john@example.com
- USN: CS2024001
- Type: Student

Action: Fill form and click "PROCEED TO QUIZ"
Expected Results:
✓ Form data validated
✓ Data stored in LocalStorage
✓ Redirects to quiz page
```

**4. Quiz Interface**
```
Action: First load of quiz page
Expected Results:
✓ Quiz page loads (url: http://localhost:3000/quiz)
✓ Question 1 displays with 4 options
✓ Timer shows at top right (format: MM:SS)
✓ Progress bar at 5% (1/20)
✓ Navigation buttons visible
✓ "NEXT" button enabled
✓ "PREVIOUS" button disabled
✓ Question grid shows all 20 questions
```

**5. Answer Questions**
```
Action: 
1. Click on an option (select answer)
2. Click "NEXT" to proceed

Expected Results:
✓ Selected option highlights in green
✓ Navigation works smoothly
✓ Progress bar increases
✓ Question number updates
✓ Previously answered questions show in grid with checkmark
✓ Can go back using "PREVIOUS" and see selected answer
```

**6. Complete Quiz**
```
Action: Answer all 20 questions and reach last question
Expected Results:
✓ "SUBMIT QUIZ" button appears instead of "NEXT"
✓ Question number shows "20 of 20"
✓ Progress bar shows 100%
```

**7. Submit Quiz**
```
Action: Click "SUBMIT QUIZ"
Expected Results:
✓ Quiz submits and calculates score
✓ Results page loads
✓ Shows Score: X/20
✓ Shows Percentage: X%
✓ Shows Time Taken: MM:SS format + nanoseconds
✓ Certificate eligibility displayed
```

**8. Results Page**
```
Expected to see:
✓ Score card with 4 metrics:
  - Score (e.g., 18/20)
  - Percentage (e.g., 90%)
  - Time Taken (with nanoseconds)
  - Certificate Status
✓ User info (name, email, USN, timestamp)
✓ Certificate eligibility message (if ≥45%)
✓ "RETURN HOME" and "ADMIN PORTAL" buttons
```

---

### Scenario 2: Test Admin Dashboard

#### Setup
- Browser: Chrome/Firefox
- URL: http://localhost:3000/admin
- Prerequisites: Complete at least one quiz (Scenario 1)

#### Steps

**1. Admin Login**
```
Action: Navigate to http://localhost:3000/admin
Expected Results:
✓ Admin login page appears
✓ Text says "ADMIN PORTAL" with ⚔️
✓ "RESTRICTED ACCESS" subtitle visible
✓ Password input field
✓ "ACCESS GRANTED" button
```

**2. Authentication**
```
Action: Enter password: CyberSecure2024
Expected Results:
✓ Password field accepts input
✓ Click "ACCESS GRANTED" button
✓ Authentication succeeds
✓ Redirects to admin dashboard
```

**3. Wrong Password**
```
Action: Try wrong password (e.g., "wrong123")
Expected Results:
✓ Shows alert: "Invalid password"
✓ Stays on login page
✓ Can retry
```

**4. Overview Tab** (Default view)
```
Expected to see:
✓ 4 statistics cards:
  - TOTAL SUBMISSIONS: count
  - ELIGIBLE FOR CERT: count
  - AVG SCORE: X/20
  - AVG PERCENTAGE: X%
✓ Each card has different colored border (green, cyan, purple, blue)
✓ Data matches user submissions
```

**5. Results Tab**
```
Action: Click "RESULTS" button
Expected Results:
✓ Table displays with columns:
  - NAME
  - EMAIL
  - USN
  - SCORE (X/20)
  - PERCENTAGE (X%)
  - TIME (formatted)
  - CERT (✓ or ✗)
✓ Each submitted quiz shows as row
✓ Data is accurate
✓ Hover effect on rows
```

**6. Analytics Tab**
```
Action: Click "ANALYTICS" button
Expected Results:
✓ Left panel: Score Distribution
  - Shows ranges: 0-25%, 25-50%, 50-75%, 75-100%
  - Bar charts showing count in each range
  - Numbers on right

✓ Right panel: Key Statistics
  - Total Tests
  - Certificates Eligible
  - Pass Rate (≥45%)
  - Average Score
  - All values calculated correctly
```

**7. Export CSV**
```
Action: Click "EXPORT CSV" button
Expected Results:
✓ File downloads: quiz-results-YYYY-MM-DD.csv
✓ File contains:
  - Header row: Name, Email, USN, Score, Percentage, Time, Cert
  - Data rows for each submission
  - Values properly formatted
```

**8. Logout**
```
Action: Click "LOGOUT" button
Expected Results:
✓ Returns to login page
✓ Clears admin authentication
✓ "RESTRICTED ACCESS" message shows
✓ Must re-enter password
```

---

### Scenario 3: Certificate Eligibility Testing

#### Test Cases

**Test 3.1: Score ≥ 45% (Eligible)**
```
Answers: 9 correct, 11 incorrect (45%)
Result: 
✓ Score: 9/20
✓ Percentage: 45%
✓ Status: ELIGIBLE ✓ (green text)
✓ Certificate message shows
✓ Admin dashboard shows eligible count increases
```

**Test 3.2: Score = 44.5% (Not Eligible)**
```
Answers: 8 correct, 12 incorrect (40%)
Result:
✓ Score: 8/20
✓ Percentage: 40%
✓ Status: NOT ELIGIBLE ✗ (red text)
✓ No certificate message
✓ Admin dashboard shows not eligible
```

**Test 3.3: Perfect Score (100%)**
```
Answers: All 20 correct
Result:
✓ Score: 20/20
✓ Percentage: 100%
✓ Status: ELIGIBLE ✓ (green)
✓ Certificate message
✓ Shows in admin with 100%
```

**Test 3.4: Minimum Passing**
```
Answers: Exactly 9 correct (45%)
Result:
✓ Score: 9/20
✓ Percentage: 45.0%
✓ Status: ELIGIBLE ✓
✓ Included in certificate count
```

---

### Scenario 4: Timing Precision Testing

#### Test Cases

**Test 4.1: Quick Completion**
```
Time: Complete quiz in 2 minutes
Expected:
✓ Timer updates smoothly
✓ Final time shows ~2:00 (MM:SS)
✓ Nanoseconds value is ~120,000,000,000 ns
✓ Format: "120,000,000,000 ns" or similar
```

**Test 4.2: Slow Completion**
```
Time: Pause and complete in 15 minutes
Expected:
✓ Timer updates continuously
✓ Final time shows ~15:00 (MM:SS)
✓ Nanoseconds value is ~900,000,000,000 ns
✓ Accurate time recording
```

**Test 4.3: Time Display Format**
```
Expected Formats:
- Display: "45:32" (MM:SS format)
- Stored: "45312850000" (nanoseconds)
- Both shown in results page
```

---

### Scenario 5: Data Persistence Testing

#### Test Cases

**Test 5.1: LocalStorage Verification**
```
Steps:
1. Open DevTools (F12)
2. Go to Application → LocalStorage
3. Select http://localhost:3000
4. Register and complete quiz

Expected to see:
✓ userProfile key with user data
✓ quizResults key with array of results
✓ Data persists after page refresh
```

**Test 5.2: Multiple Submissions**
```
Steps:
1. Complete first quiz (Score: 50%)
2. Return to home
3. Complete second quiz with different data (Score: 80%)
4. Check admin dashboard

Expected:
✓ Both submissions saved
✓ quizResults array has 2 entries
✓ Admin shows "2" submissions
✓ Both scores visible in table
```

**Test 5.3: Data Retrieval**
```
Steps:
1. Complete quiz (Note score)
2. Go to admin and view results
3. Check data matches

Expected:
✓ Score matches exactly
✓ Name/email correct
✓ Time recorded accurately
✓ Percentage calculated correctly
```

---

### Scenario 6: Responsive Design Testing

#### Test Cases

**Test 6.1: Mobile (375px width)**
```
Device: iPhone SE or smaller
Expected:
✓ Home page fits screen
✓ Quiz questions readable
✓ Buttons easily clickable (target size ≥44px)
✓ Options stack vertically
✓ Navigation works
✓ No horizontal scroll
```

**Test 6.2: Tablet (768px width)**
```
Device: iPad or tablet
Expected:
✓ Optimized layout
✓ Good use of space
✓ Text readable
✓ Table in admin fits
✓ Smooth interactions
```

**Test 6.3: Desktop (1920px width)**
```
Device: Desktop or large monitor
Expected:
✓ Full layout displayed
✓ All features visible
✓ Optimal spacing
✓ Admin dashboard shows charts
✓ Professional appearance
```

---

### Scenario 7: Accessibility Testing

#### Test Cases

**Test 7.1: Keyboard Navigation**
```
Steps:
1. Press Tab to navigate
2. Use arrow keys for options
3. Press Enter to select

Expected:
✓ Can navigate without mouse
✓ Focus indicators visible
✓ All buttons accessible via keyboard
✓ Submit works with keyboard
```

**Test 7.2: Color Contrast**
```
Check:
✓ Green text readable on dark background
✓ Cyan text readable
✓ White/light text readable
✓ Red text readable
✓ Color not only way to convey meaning
```

---

### Scenario 8: Error Handling

#### Test Cases

**Test 8.1: Missing Required Fields**
```
Action: Try to submit form without name
Expected:
✓ Browser validation prevents submission
✓ Error message indicates which field is required
✓ Form doesn't submit
```

**Test 8.2: Invalid Email**
```
Action: Enter "notanemail" as email
Expected:
✓ Browser validation catches invalid format
✓ Submit prevented
✓ Field marked as invalid
```

**Test 8.3: Quiz Interruption**
```
Action: Refresh page during quiz
Expected:
✓ User data still in LocalStorage
✓ Can return to quiz (if properly implemented)
✓ Progress not lost
```

---

## 📋 Test Results Template

```
Test Case: ___________________
Date: ___________________
Tester: ___________________
Browser: ___________________
OS: ___________________

Steps:
1. ___________________
2. ___________________

Expected Result:
___________________

Actual Result:
___________________

Status: ☐ PASS ☐ FAIL ☐ SKIP

Notes:
___________________
```

---

## 🔍 Quick Verification Checklist

### Home Page
- [ ] Page loads without errors
- [ ] Hacker theme visible (green text, dark background)
- [ ] "START QUIZ" button works
- [ ] Mobile responsive

### Registration
- [ ] Form fields appear
- [ ] All inputs required
- [ ] Accepts valid data
- [ ] Stores in LocalStorage

### Quiz Page
- [ ] Questions load
- [ ] Options selectable
- [ ] Navigation works
- [ ] Timer counts down
- [ ] Progress updates

### Results Page
- [ ] Score calculated correctly
- [ ] Percentage accurate
- [ ] Time displayed
- [ ] Certificate status shown

### Admin Dashboard
- [ ] Password protection works
- [ ] Displays submitted data
- [ ] Statistics calculated correctly
- [ ] Export works

---

## 🚀 Stress Testing

### Test with Multiple Users

```
Scenario: 10 users take quiz
Expected:
✓ Each user's data stored separately
✓ Admin shows all 10 results
✓ Statistics calculated for all
✓ Export includes all
✓ Performance remains good
```

---

**Test Guide Version**: 1.0
**Last Updated**: November 2024
**Status**: Ready for Testing
