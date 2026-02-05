
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
            {
                id: 'js-4',
                levelNumber: 4,
                title: 'Conditional Statements',
                description: 'Make decisions in your code with if-else statements.',
                games: [
                  {
                    language: 'javascript',
                    level: 'intermediate' as const,
                    title: 'Check if a number is even or odd',
                    question: 'Write a function `isEvenOrOdd(num)` that takes a number and returns the string "even" if the number is even, and "odd" if it is odd.',
                    initialCode: `function isEvenOrOdd(num) {\n  // Your code here\n}`,
                  },
                ],
            },
            {
                id: 'js-5',
                levelNumber: 5,
                title: 'Loops',
                description: 'Repeat actions with for and while loops.',
                games: [
                  {
                    language: 'javascript',
                    level: 'intermediate' as const,
                    title: 'Sum an array',
                    question: 'Write a function `sumArray(arr)` that takes an array of numbers and returns their sum.',
                    initialCode: `function sumArray(arr) {\n  let sum = 0;\n  // Your code here\n\n  return sum;\n}`,
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
            {
                id: 'py-3',
                levelNumber: 3,
                title: 'Lists and Loops',
                description: 'Work with ordered collections of data.',
                games: [
                  {
                    language: 'python',
                    level: 'beginner' as const,
                    title: 'Find the largest number',
                    question: 'Write a function `find_max(numbers)` that takes a list of numbers and returns the largest one.',
                    initialCode: `def find_max(numbers):\n  # Your code here`,
                  },
                ],
            },
            {
                id: 'py-4',
                levelNumber: 4,
                title: 'Dictionaries',
                description: 'Understand key-value pairs for flexible data storage.',
                games: [
                  {
                    language: 'python',
                    level: 'intermediate' as const,
                    title: 'Count word frequency',
                    question: 'Write a function `word_count(text)` that takes a string and returns a dictionary with the frequency of each word.',
                    initialCode: `def word_count(text):\n  # Your code here`,
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
            {
                id: 'sql-3',
                levelNumber: 3,
                title: 'JOINs',
                description: 'Combine rows from two or more tables.',
                games: [
                  {
                    language: 'sql',
                    level: 'intermediate' as const,
                    title: 'Get Order Details',
                    question: 'Write a SQL query to select the order ID and the customer name for each order by joining `orders` and `customers` tables on `customer_id`.',
                    initialCode: `// Your SQL query here`,
                  },
                ],
              },
              {
                id: 'sql-4',
                levelNumber: 4,
                title: 'Aggregate Functions',
                description: 'Perform calculations on a set of values.',
                games: [
                  {
                    language: 'sql',
                    level: 'intermediate' as const,
                    title: 'Count Total Customers',
                    question: 'Write a SQL query to count the total number of customers in the `customers` table.',
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
            {
                id: 'java-3',
                levelNumber: 3,
                title: 'Control Flow',
                description: 'Use loops and conditional statements.',
                games: [
                  {
                    language: 'java',
                    level: 'beginner' as const,
                    title: 'FizzBuzz',
                    question: 'Write a Java method `fizzBuzz(int n)` that returns "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both, and the number as a string otherwise.',
                    initialCode: `class Solution {\n  public String fizzBuzz(int n) {\n    // Your code here\n  }\n}`,
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
            {
                id: 'cpp-2',
                levelNumber: 2,
                title: 'Variables and Types',
                description: 'Learn about fundamental data types in C++.',
                games: [
                  {
                    language: 'cplusplus',
                    level: 'beginner' as const,
                    title: 'Integer Sum',
                    question: 'Write a C++ function `sum(int a, int b)` that returns the sum of two integers.',
                    initialCode: `int sum(int a, int b) {\n  // Your code here\n}`,
                  },
                ],
            },
            {
                id: 'cpp-3',
                levelNumber: 3,
                title: 'Basic I/O',
                description: 'Learn to use cin and cout for input/output.',
                games: [
                  {
                    language: 'cplusplus',
                    level: 'beginner' as const,
                    title: 'Echo Input',
                    question: 'Write a C++ function `echo()` that reads an integer from standard input and prints it to standard output.',
                    initialCode: `#include <iostream>\n\nvoid echo() {\n  // Your code here\n}`,
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
            {
                id: 'css-1',
                levelNumber: 2,
                title: 'Basic CSS Styling',
                description: 'Style your HTML elements with CSS.',
                games: [
                  {
                    language: 'html',
                    level: 'beginner' as const,
                    title: 'Style a Paragraph',
                    question: 'Write a function `styleParagraph()` that returns an HTML string for a paragraph with red text color. The text should be "This is a red paragraph."',
                    initialCode: `function styleParagraph() {\n  // Return an HTML string with inline styles\n}`,
                  },
                ],
            },
            {
                id: 'css-2',
                levelNumber: 3,
                title: 'The Box Model',
                description: 'Understand margin, padding, and borders.',
                games: [
                  {
                    language: 'html',
                    level: 'intermediate' as const,
                    title: 'Create a Padded Box',
                    question: 'Write a function `createBox()` that returns a div with a 1px solid black border and 20px of padding. The content of the div should be "I am in a box".',
                    initialCode: `function createBox() {\n  // Return an HTML string with a styled div\n}`,
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
