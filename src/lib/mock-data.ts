
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
    { 
        id: 'javascript', 
        name: 'JavaScript', 
        icon: 'SiJavascript', 
        description: 'Master the language of the web, from basics to advanced concepts.',
        levels: [
            {
              id: 'js-1',
              levelNumber: 1,
              title: 'Variables and Data Types',
              description: 'Learn the basics of storing and using data in JavaScript.',
              games: [
                {
                  language: 'javascript',
                  level: 'beginner' as const,
                  title: 'Declare a Variable',
                  question: 'Declare a variable named `myVariable` and assign it the value `Hello, World!`. Then return it.',
                  initialCode: `function declareVar() {\n  // Your code here\n\n  return myVariable;\n}`,
                },
              ],
            },
            {
              id: 'js-2',
              levelNumber: 2,
              title: 'Operators',
              description: 'Understand how to perform operations on variables.',
              games: [
                {
                  language: 'javascript',
                  level: 'beginner' as const,
                  title: 'Add two numbers',
                  question: 'Write a function `add(a, b)` that returns the sum of two numbers.',
                  initialCode: `function add(a, b) {\n  // Your code here\n}`,
                },
              ],
            },
            {
              id: 'js-3',
              levelNumber: 3,
              title: 'Functions',
              description: 'Learn to write reusable blocks of code.',
              games: [
                {
                  language: 'javascript',
                  level: 'beginner' as const,
                  title: 'Create a "Hello" Function',
                  question: 'Write a function named `sayHello` that takes a `name` as an argument and returns a string "Hello, [name]!".',
                  initialCode: `function sayHello(name) {\n  // Your code here\n}`,
                },
              ],
            },
        ]
    },
    { 
        id: 'python', 
        name: 'Python', 
        icon: 'SiPython', 
        description: 'Learn a versatile language used in web dev, data science, and more.', 
        levels: [
            {
              id: 'py-1',
              levelNumber: 1,
              title: 'Hello, Python!',
              description: 'Get started with Python by printing to the console.',
              games: [
                {
                  language: 'python',
                  level: 'beginner' as const,
                  title: 'Print "Hello, World!"',
                  question: 'Write a Python function `hello()` that prints "Hello, World!" to the console. Note: The testing environment will capture print output, you don\'t need to return anything.',
                  initialCode: `def hello():\n  # Your code here`,
                },
              ],
            },
            {
              id: 'py-2',
              levelNumber: 2,
              title: 'Python Variables',
              description: 'Learn how to store data in Python.',
              games: [
                {
                  language: 'python',
                  level: 'beginner' as const,
                  title: 'Create a Variable',
                  question: 'Create a function `create_var()` that declares a variable `my_message` with the value "I love Python" and returns it.',
                  initialCode: `def create_var():\n  # Your code here`,
                },
              ],
            },
        ] 
    },
    { 
        id: 'sql', 
        name: 'SQL', 
        icon: 'Database', 
        description: 'Become proficient in managing and querying relational databases.', 
        levels: [
            {
              id: 'sql-1',
              levelNumber: 1,
              title: 'SELECT statements',
              description: 'Learn how to retrieve data from a database.',
              games: [
                {
                  language: 'sql',
                  level: 'beginner' as const,
                  title: 'Select All Customers',
                  question: 'Write a SQL query to select all columns from the `customers` table.',
                  initialCode: `// Your SQL query here`,
                },
              ],
            },
             {
              id: 'sql-2',
              levelNumber: 2,
              title: 'WHERE clause',
              description: 'Learn how to filter data.',
              games: [
                {
                  language: 'sql',
                  level: 'beginner' as const,
                  title: 'Select Customers from London',
                  question: 'Write a SQL query to select all customers who are from the city "London".',
                  initialCode: `// Your SQL query here`,
                },
              ],
            },
        ] 
    },
    { 
        id: 'java', 
        name: 'Java', 
        icon: 'SiJava', 
        description: 'Build robust, enterprise-scale applications with Java.', 
        levels: [
            {
              id: 'java-1',
              levelNumber: 1,
              title: 'Hello, Java!',
              description: 'Your first steps into the world of Java.',
              games: [
                {
                  language: 'java',
                  level: 'beginner' as const,
                  title: 'Hello, World!',
                  question: 'Write a Java method `hello()` that returns the string "Hello, World!".',
                  initialCode: `class Solution {\n  public String hello() {\n    // Your code here\n  }\n}`,
                },
              ],
            },
             {
              id: 'java-2',
              levelNumber: 2,
              title: 'Java Methods',
              description: 'Learn to create and use methods.',
              games: [
                {
                  language: 'java',
                  level: 'beginner' as const,
                  title: 'Add two integers',
                  question: 'Write a Java method `add(int a, int b)` that returns the sum of two integers.',
                  initialCode: `class Solution {\n  public int add(int a, int b) {\n    // Your code here\n  }\n}`,
                },
              ],
            },
        ] 
    },
    { 
        id: 'cplusplus', 
        name: 'C++', 
        icon: 'SiCplusplus', 
        description: 'Dive deep into system programming and game development with C++.', 
        levels: [
            {
              id: 'cpp-1',
              levelNumber: 1,
              title: 'Your First C++ Program',
              description: 'Start your C++ journey.',
              games: [
                {
                  language: 'cplusplus',
                  level: 'beginner' as const,
                  title: 'Return a string',
                  question: 'Write a C++ function `hello()` that returns a `std::string` with the value "Hello, World!".',
                  initialCode: `#include <string>\n\nstd::string hello() {\n  // Your code here\n}`,
                },
              ],
            },
        ] 
    },
    { 
        id: 'html-css', 
        name: 'HTML/CSS', 
        icon: 'SiHtml5', 
        description: 'Create beautiful and responsive web pages from scratch.', 
        levels: [
            {
              id: 'html-1',
              levelNumber: 1,
              title: 'HTML Basics',
              description: 'Learn the fundamental tags of HTML.',
              games: [
                {
                  language: 'html',
                  level: 'beginner' as const,
                  title: 'Create a Heading',
                  question: 'Write a function `createHeading()` that returns an HTML string for a top-level heading (h1) with the text "My First Web Page".',
                  initialCode: `function createHeading() {\n  // Return an HTML string\n}`,
                },
              ],
            },
        ] 
    }
];

export const mockData = {
  userProfile,
  courseProgress,
  achievements,
  dailyChallenge,
  courses
};
