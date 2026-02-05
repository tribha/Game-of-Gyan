
export const userProfile = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  level: 'Intermediate',
  xp: 1550,
  completedCourses: 2,
  streak: 12,
};

export const courseProgress = [
  {
    id: 'js-101',
    name: 'JavaScript Basics',
    progress: 75,
    imageUrl: 'https://picsum.photos/seed/coursejs/400/200',
    imageHint: 'code abstract',
  },
  {
    id: 'py-101',
    name: 'Python for Beginners',
    progress: 40,
    imageUrl: 'https://picsum.photos/seed/coursepy/400/200',
    imageHint: 'circuit board',
  },
   {
    id: 'sql-101',
    name: 'SQL Fundamentals',
    progress: 90,
    imageUrl: 'https://picsum.photos/seed/coursesql/400/200',
    imageHint: 'data network',
  },
];

export const achievements = [
  { id: 'ach1', name: 'First Code', date: '2023-10-01', iconUrl: 'https://picsum.photos/seed/ach1/100/100', imageHint: 'gold medal' },
  { id: 'ach2', name: 'JS Novice', date: '2023-10-15', iconUrl: 'https://picsum.photos/seed/ach2/100/100', imageHint: 'silver medal' },
  { id: 'ach3', name: 'Pythonista', date: '2023-11-05', iconUrl: 'https://picsum.photos/seed/ach3/100/100', imageHint: 'bronze medal' },
  { id: 'ach4', name: 'Perfect Score', date: '2023-11-20', iconUrl: 'https://picsum.photos/seed/ach4/100/100', imageHint: 'trophy' },
];

export const dailyChallenge = {
  language: 'javascript',
  level: 'beginner',
  title: 'Variable Swap',
  question: 'Write a JavaScript function `swap(a, b)` that takes two variables and returns an array with their values swapped.',
  initialCode: `function swap(a, b) {
  // Your code here

  return [a, b];
}`,
};

export const courses = [
    { id: 'javascript', name: 'JavaScript', icon: 'SiJavascript', levels: 15, description: 'Master the language of the web, from basics to advanced concepts.' },
    { id: 'python', name: 'Python', icon: 'SiPython', levels: 20, description: 'Learn a versatile language used in web dev, data science, and more.' },
    { id: 'sql', name: 'SQL', icon: 'Database', levels: 10, description: 'Become proficient in managing and querying relational databases.' },
    { id: 'java', name: 'Java', icon: 'SiJava', levels: 25, description: 'Build robust, enterprise-scale applications with Java.' },
    { id: 'cplusplus', name: 'C++', icon: 'SiCplusplus', levels: 30, description: 'Dive deep into system programming and game development with C++.' },
    { id: 'html-css', name: 'HTML/CSS', icon: 'SiHtml5', levels: 12, description: 'Create beautiful and responsive web pages from scratch.' }
];

export const mockData = {
  userProfile,
  courseProgress,
  achievements,
  dailyChallenge,
  courses
};
