// Quiz data with cybersecurity and anti-corruption questions
export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  category: string
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'What is the primary purpose of a firewall in network security?',
    options: [
      'To prevent computer overheating',
      'To block unauthorized access between networks',
      'To increase internet speed',
      'To monitor user browsing history'
    ],
    correctAnswer: 'To block unauthorized access between networks',
    category: 'Network Security'
  },
  {
    id: 2,
    question: 'Which of the following is a strong password practice?',
    options: [
      'Using only lowercase letters',
      'Using a combination of uppercase, lowercase, numbers, and symbols',
      'Using your name or birthdate',
      'Using the same password for all accounts'
    ],
    correctAnswer: 'Using a combination of uppercase, lowercase, numbers, and symbols',
    category: 'Password Hygiene'
  },
  {
    id: 3,
    question: 'What is phishing?',
    options: [
      'A type of fishing in computer networking',
      'An attempt to trick users into revealing sensitive information',
      'A method to improve network speed',
      'A backup system for data'
    ],
    correctAnswer: 'An attempt to trick users into revealing sensitive information',
    category: 'Social Engineering'
  },
  {
    id: 4,
    question: 'What does encryption do?',
    options: [
      'Deletes confidential data',
      'Converts data into unreadable code that can only be decoded with a key',
      'Increases internet bandwidth',
      'Prevents viruses from spreading'
    ],
    correctAnswer: 'Converts data into unreadable code that can only be decoded with a key',
    category: 'Data Protection'
  },
  {
    id: 5,
    question: 'What is anti-corruption in an organization?',
    options: [
      'Preventing computer corruption from viruses',
      'Policies and practices to prevent dishonest or fraudulent activities',
      'Regular maintenance of computer systems',
      'Backup of important files'
    ],
    correctAnswer: 'Policies and practices to prevent dishonest or fraudulent activities',
    category: 'Anti-Corruption'
  },
  {
    id: 6,
    question: 'Which type of attack involves overwhelming a server with traffic?',
    options: [
      'Phishing attack',
      'SQL injection',
      'DDoS (Distributed Denial of Service) attack',
      'Social engineering'
    ],
    correctAnswer: 'DDoS (Distributed Denial of Service) attack',
    category: 'Cyber Attacks'
  },
  {
    id: 7,
    question: 'What is multi-factor authentication (MFA)?',
    options: [
      'Using multiple email addresses for one account',
      'A security method requiring multiple verification steps',
      'Changing password multiple times',
      'Using multiple browsers'
    ],
    correctAnswer: 'A security method requiring multiple verification steps',
    category: 'Authentication'
  },
  {
    id: 8,
    question: 'What should you do if you suspect a fraudulent transaction in your organization?',
    options: [
      'Ignore it and continue working',
      'Report it immediately to the compliance officer',
      'Discuss it with colleagues only',
      'Post about it on social media'
    ],
    correctAnswer: 'Report it immediately to the compliance officer',
    category: 'Anti-Corruption'
  },
  {
    id: 9,
    question: 'What is social engineering in cybersecurity?',
    options: [
      'Improving social media presence',
      'Using psychology to manipulate people into divulging confidential information',
      'Building better relationships at work',
      'Creating new software features'
    ],
    correctAnswer: 'Using psychology to manipulate people into divulging confidential information',
    category: 'Social Engineering'
  },
  {
    id: 10,
    question: 'Which data protection principle requires organizations to handle personal data securely?',
    options: [
      'Data deletion',
      'Data encryption and access control',
      'Data duplication',
      'Data sharing'
    ],
    correctAnswer: 'Data encryption and access control',
    category: 'Data Protection'
  },
  {
    id: 11,
    question: 'What is a vulnerability in cybersecurity?',
    options: [
      'A strength in the system',
      'A weakness that can be exploited by attackers',
      'A type of password',
      'A security certificate'
    ],
    correctAnswer: 'A weakness that can be exploited by attackers',
    category: 'Cybersecurity Fundamentals'
  },
  {
    id: 12,
    question: 'What should you do with confidential company information?',
    options: [
      'Share it freely with friends',
      'Post it on social networks',
      'Keep it confidential and only share with authorized personnel',
      'Store it in insecure locations'
    ],
    correctAnswer: 'Keep it confidential and only share with authorized personnel',
    category: 'Anti-Corruption'
  },
  {
    id: 13,
    question: 'What is a zero-day exploit?',
    options: [
      'An attack on a vulnerability before it\'s publicly known',
      'An antivirus software',
      'A type of firewall',
      'A password recovery tool'
    ],
    correctAnswer: 'An attack on a vulnerability before it\'s publicly known',
    category: 'Cyber Threats'
  },
  {
    id: 14,
    question: 'Why is it important to update software regularly?',
    options: [
      'To improve graphics quality',
      'To patch security vulnerabilities',
      'To add new games',
      'No particular reason'
    ],
    correctAnswer: 'To patch security vulnerabilities',
    category: 'Cybersecurity Fundamentals'
  },
  {
    id: 15,
    question: 'What is whistleblowing in anti-corruption context?',
    options: [
      'Making noise during meetings',
      'Reporting illegal or unethical activities within an organization',
      'Resigning from a job',
      'Spreading rumors'
    ],
    correctAnswer: 'Reporting illegal or unethical activities within an organization',
    category: 'Anti-Corruption'
  },
  {
    id: 16,
    question: 'Which of the following is NOT a cybersecurity best practice?',
    options: [
      'Using strong passwords',
      'Enabling two-factor authentication',
      'Sharing passwords with colleagues',
      'Keeping antivirus software updated'
    ],
    correctAnswer: 'Sharing passwords with colleagues',
    category: 'Cybersecurity Fundamentals'
  },
  {
    id: 17,
    question: 'What is the purpose of a security audit?',
    options: [
      'To increase company expenses',
      'To identify security weaknesses and compliance issues',
      'To fire employees',
      'To promote employees'
    ],
    correctAnswer: 'To identify security weaknesses and compliance issues',
    category: 'Cybersecurity Fundamentals'
  },
  {
    id: 18,
    question: 'What should you do if you receive a suspicious email?',
    options: [
      'Click on all links immediately',
      'Download all attachments',
      'Report it to your IT department and do not click suspicious links',
      'Forward it to all contacts'
    ],
    correctAnswer: 'Report it to your IT department and do not click suspicious links',
    category: 'Phishing Prevention'
  },
  {
    id: 19,
    question: 'What is the concept of "need-to-know" in information security?',
    options: [
      'Everyone should know everything',
      'Only authorized personnel should have access to information they need',
      'Information should be public',
      'No one should access any information'
    ],
    correctAnswer: 'Only authorized personnel should have access to information they need',
    category: 'Data Protection'
  },
  {
    id: 20,
    question: 'Which act is commonly used for data protection compliance?',
    options: [
      'Tourism Act',
      'General Data Protection Regulation (GDPR) and local data protection laws',
      'Transportation Act',
      'Entertainment Act'
    ],
    correctAnswer: 'General Data Protection Regulation (GDPR) and local data protection laws',
    category: 'Compliance'
  },
  {
    id: 21,
    question: 'What is ransomware?',
    options: [
      'A type of advertising software',
      'Malware that encrypts files and demands payment for decryption',
      'A web browser extension',
      'A network protocol'
    ],
    correctAnswer: 'Malware that encrypts files and demands payment for decryption',
    category: 'Cyber Threats'
  },
  {
    id: 22,
    question: 'What is the concept of "Defense in Depth" in cybersecurity?',
    options: [
      'Using only one security measure',
      'Implementing multiple layers of security controls',
      'Ignoring minor threats',
      'Focusing only on firewalls'
    ],
    correctAnswer: 'Implementing multiple layers of security controls',
    category: 'Cybersecurity Fundamentals'
  },
  {
    id: 23,
    question: 'Which of the following is a common sign of a phishing email?',
    options: [
      'Professional formatting',
      'Sender\'s verified email address',
      'Requests for urgent action and password confirmation',
      'Links to official company websites'
    ],
    correctAnswer: 'Requests for urgent action and password confirmation',
    category: 'Phishing Prevention'
  },
  {
    id: 24,
    question: 'What is biometric authentication?',
    options: [
      'Using biological weapons for security',
      'Authentication using unique biological characteristics like fingerprints or facial recognition',
      'A type of password',
      'Sharing personal information'
    ],
    correctAnswer: 'Authentication using unique biological characteristics like fingerprints or facial recognition',
    category: 'Authentication'
  },
  {
    id: 25,
    question: 'What should be done with outdated security protocols?',
    options: [
      'Continue using them indefinitely',
      'Retire them and replace with updated, secure protocols',
      'Share them with external parties',
      'Ignore them completely'
    ],
    correctAnswer: 'Retire them and replace with updated, secure protocols',
    category: 'Cybersecurity Fundamentals'
  },
  {
    id: 26,
    question: 'What is the purpose of a VPN (Virtual Private Network)?',
    options: [
      'To increase internet speed significantly',
      'To encrypt internet traffic and secure data transmission',
      'To remove antivirus protection',
      'To access multiple email accounts'
    ],
    correctAnswer: 'To encrypt internet traffic and secure data transmission',
    category: 'Network Security'
  },
  {
    id: 27,
    question: 'Which action is considered a conflict of interest in anti-corruption?',
    options: [
      'Providing excellent work quality',
      'Taking advantage of your position for personal or family gain',
      'Requesting transparent pricing',
      'Asking for clarification on policies'
    ],
    correctAnswer: 'Taking advantage of your position for personal or family gain',
    category: 'Anti-Corruption'
  },
  {
    id: 28,
    question: 'What is the principle of "Least Privilege" in access control?',
    options: [
      'Everyone gets full system access',
      'Users should have only the minimum access necessary to perform their job',
      'Administrators should have no restrictions',
      'Access should be granted without verification'
    ],
    correctAnswer: 'Users should have only the minimum access necessary to perform their job',
    category: 'Data Protection'
  },
  {
    id: 29,
    question: 'What is SQL injection?',
    options: [
      'A medical procedure',
      'An attack where malicious SQL code is inserted into input fields',
      'A database maintenance task',
      'A programming language'
    ],
    correctAnswer: 'An attack where malicious SQL code is inserted into input fields',
    category: 'Cyber Threats'
  },
  {
    id: 30,
    question: 'What is the significance of having a documented incident response plan?',
    options: [
      'It has no importance',
      'It enables quick and effective response to security incidents',
      'It increases security costs',
      'It prevents all attacks'
    ],
    correctAnswer: 'It enables quick and effective response to security incidents',
    category: 'Cybersecurity Fundamentals'
  }
]
