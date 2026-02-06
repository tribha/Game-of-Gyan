
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
  type: 'code' as const,
  language: 'javascript',
  level: 'beginner' as const,
  title: 'Variable Swap',
  content: {
    question: 'Write a JavaScript function `swap(a, b)` that takes two variables and returns an array with their values swapped.',
    initialCode: `function swap(a, b) {\n  // Your code here\n\n  return [a, b];\n}`,
  }
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
                  type: 'mcq' as const,
                  language: 'javascript',
                  level: 'beginner' as const,
                  title: 'Declaring Variables',
                  content: {
                    question: 'Which keyword is used to declare a variable in modern JavaScript that can be reassigned?',
                    options: ['var', 'let', 'const', 'variable'],
                    answer: 1,
                  }
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
                  type: 'mcq' as const,
                  language: 'javascript',
                  level: 'beginner' as const,
                  title: 'Addition Operator',
                  content: {
                    question: 'What is the result of the expression `5 + "5"` in JavaScript?',
                    options: ['10', '"55"', '55', 'Error'],
                    answer: 1,
                  }
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
                  type: 'mcq' as const,
                  language: 'javascript',
                  level: 'beginner' as const,
                  title: 'Function Declaration',
                  content: {
                    question: 'How do you correctly call a function named `myFunction`?',
                    options: ['call myFunction;', 'myFunction;', 'myFunction()', 'call function myFunction()'],
                    answer: 2,
                  }
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
                    type: 'mcq' as const,
                    language: 'javascript',
                    level: 'intermediate' as const,
                    title: 'Equality Check',
                    content: {
                        question: 'Which operator checks for both value and type equality?',
                        options: ['==', '===', '=', '!='],
                        answer: 1,
                    }
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
                    type: 'mcq' as const,
                    language: 'javascript',
                    level: 'intermediate' as const,
                    title: 'For Loop Syntax',
                    content: {
                        question: 'Which `for` loop is written correctly?',
                        options: ['for (i = 0; i < 5; i++)', 'for (i = 0 to 5)', 'for (i < 5; i++)', 'for i in 1..5'],
                        answer: 0,
                    }
                  },
                ],
            },
            {
              id: 'js-6',
              levelNumber: 6,
              title: 'Arrays',
              description: 'Work with ordered lists of data.',
              games: [
                {
                  type: 'mcq' as const,
                  language: 'javascript',
                  level: 'intermediate' as const,
                  title: 'Accessing Array Elements',
                  content: {
                      question: 'Given `const arr = ["a", "b", "c"];`, how do you access the element "b"?',
                      options: ['arr(1)', 'arr[1]', 'arr.1', 'arr.get(1)'],
                      answer: 1,
                  }
                },
              ],
            },
             {
              id: 'js-7',
              levelNumber: 7,
              title: 'Objects',
              description: 'Understand key-value pairs for storing structured data.',
              games: [
                {
                  type: 'mcq' as const,
                  language: 'javascript',
                  level: 'intermediate' as const,
                  title: 'Accessing Object Properties',
                  content: {
                      question: 'Given `const person = { name: "John" };`, how do you access the name property?',
                      options: ['person["name"]', 'person.name', 'Both A and B', 'person.get("name")'],
                      answer: 2,
                  }
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
                  type: 'mcq' as const,
                  language: 'python',
                  level: 'beginner' as const,
                  title: 'Python Syntax',
                  content: {
                    question: 'In Python, how do you print "Hello, World!" to the console?',
                    options: ['console.log("Hello, World!")', 'echo "Hello, World!"', 'print("Hello, World!")', 'System.out.println("Hello, World!")'],
                    answer: 2,
                  }
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
                  type: 'mcq' as const,
                  language: 'python',
                  level: 'beginner' as const,
                  title: 'Variable Naming',
                  content: {
                    question: 'Which of the following is a valid variable name in Python?',
                    options: ['my-var', '2myvar', '_myvar', 'my var'],
                    answer: 2,
                  }
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
                    type: 'mcq' as const,
                    language: 'python',
                    level: 'beginner' as const,
                    title: 'Accessing List Items',
                    content: {
                        question: 'Given `my_list = [10, 20, 30]`, what does `my_list[1]` return?',
                        options: ['10', '20', '30', 'Error'],
                        answer: 1,
                    }
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
                    type: 'mcq' as const,
                    language: 'python',
                    level: 'intermediate' as const,
                    title: 'Accessing Dictionary Values',
                    content: {
                        question: 'Given `my_dict = {"name": "Alice"}`, how do you get the value "Alice"?',
                        options: ['my_dict.name', 'my_dict(0)', 'my_dict["name"]', 'my_dict.get_value("name")'],
                        answer: 2,
                    }
                  },
                ],
            },
            {
                id: 'py-5',
                levelNumber: 5,
                title: 'Functions',
                description: 'Define reusable blocks of code.',
                games: [
                  {
                    type: 'mcq' as const,
                    language: 'python',
                    level: 'intermediate' as const,
                    title: 'Defining a Function',
                    content: {
                        question: 'Which keyword is used to define a function in Python?',
                        options: ['function', 'def', 'fun', 'define'],
                        answer: 1,
                    }
                  },
                ],
            },
             {
                id: 'py-6',
                levelNumber: 6,
                title: 'String Manipulation',
                description: 'Learn common operations on strings.',
                games: [
                  {
                    type: 'mcq' as const,
                    language: 'python',
                    level: 'intermediate' as const,
                    title: 'String Length',
                    content: {
                        question: 'Which function returns the length of a string `s`?',
                        options: ['s.length()', 'len(s)', 'length(s)', 's.size()'],
                        answer: 1,
                    }
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
                  type: 'mcq' as const,
                  language: 'sql',
                  level: 'beginner' as const,
                  title: 'Basic Query',
                  content: {
                    question: 'Which SQL statement is used to extract data from a database?',
                    options: ['GET', 'OPEN', 'SELECT', 'EXTRACT'],
                    answer: 2,
                  }
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
                  type: 'mcq' as const,
                  language: 'sql',
                  level: 'beginner' as const,
                  title: 'Filtering Data',
                  content: {
                    question: 'Which clause is used to filter records?',
                    options: ['FILTER BY', 'WHERE', 'HAVING', 'SORT'],
                    answer: 1,
                  }
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
                    type: 'mcq' as const,
                    language: 'sql',
                    level: 'intermediate' as const,
                    title: 'Combining Tables',
                    content: {
                        question: 'Which type of JOIN returns all records when there is a match in either the left or right table?',
                        options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
                        answer: 3,
                    }
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
                    type: 'mcq' as const,
                    language: 'sql',
                    level: 'intermediate' as const,
                    title: 'Counting Rows',
                    content: {
                        question: 'Which function returns the number of rows?',
                        options: ['COUNT()', 'NUMBER()', 'SUM()', 'TOTAL()'],
                        answer: 0,
                    }
                  },
                ],
              },
               {
                id: 'sql-5',
                levelNumber: 5,
                title: 'GROUP BY',
                description: 'Group rows that have the same values.',
                games: [
                  {
                    type: 'mcq' as const,
                    language: 'sql',
                    level: 'intermediate' as const,
                    title: 'Grouping Data',
                    content: {
                        question: 'The GROUP BY statement is often used with aggregate functions to group the result-set by one or more columns. Which aggregate function is commonly used?',
                        options: ['CONCAT()', 'MID()', 'COUNT()', 'FORMAT()'],
                        answer: 2,
                    }
                  },
                ],
              },
              {
                id: 'sql-6',
                levelNumber: 6,
                title: 'ORDER BY',
                description: 'Sort the result set in ascending or descending order.',
                games: [
                  {
                    type: 'mcq' as const,
                    language: 'sql',
                    level: 'intermediate' as const,
                    title: 'Sorting Data',
                    content: {
                        question: 'How do you sort the results in descending order?',
                        options: ['ORDER BY column DESC', 'SORT BY column DESC', 'ORDER BY column DSC', 'SORT BY column DSC'],
                        answer: 0,
                    }
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
                  type: 'mcq' as const,
                  language: 'java',
                  level: 'beginner' as const,
                  title: 'Java Entry Point',
                  content: {
                    question: 'What is the most common name for the main method in a Java program, which serves as the entry point?',
                    options: ['start()', 'run()', 'main()', 'execute()'],
                    answer: 2,
                  }
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
                  type: 'mcq' as const,
                  language: 'java',
                  level: 'beginner' as const,
                  title: 'Method Syntax',
                  content: {
                    question: 'How do you declare a method that does not return any value?',
                    options: ['function myMethod() {}', 'method myMethod() {}', 'void myMethod() {}', 'None myMethod() {}'],
                    answer: 2,
                  }
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
                    type: 'mcq' as const,
                    language: 'java',
                    level: 'beginner' as const,
                    title: 'If-Else Statement',
                    content: {
                        question: 'Which keyword is used to handle the case where an `if` condition is false?',
                        options: ['or', 'else if', 'else', 'next'],
                        answer: 2,
                    }
                  },
                ],
            },
            {
                id: 'java-4',
                levelNumber: 4,
                title: 'Classes and Objects',
                description: 'Understand the core concepts of Object-Oriented Programming.',
                games: [
                  {
                    type: 'mcq' as const,
                    language: 'java',
                    level: 'intermediate' as const,
                    title: 'Creating an Object',
                    content: {
                        question: 'Which keyword is used to create a new object in Java?',
                        options: ['new', 'create', 'alloc', 'object'],
                        answer: 0,
                    }
                  },
                ],
            },
             {
                id: 'java-5',
                levelNumber: 5,
                title: 'Data Types',
                description: 'Learn about primitive data types in Java.',
                games: [
                  {
                    type: 'mcq' as const,
                    language: 'java',
                    level: 'intermediate' as const,
                    title: 'Integer Type',
                    content: {
                        question: 'Which data type is used to store whole numbers in Java?',
                        options: ['String', 'double', 'boolean', 'int'],
                        answer: 3,
                    }
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
                  type: 'mcq' as const,
                  language: 'cplusplus',
                  level: 'beginner' as const,
                  title: 'C++ Header Files',
                  content: {
                    question: 'Which preprocessor directive is used to include a header file in C++?',
                    options: ['#import', '#include', '#using', '#add'],
                    answer: 1,
                  }
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
                    type: 'mcq' as const,
                    language: 'cplusplus',
                    level: 'beginner' as const,
                    title: 'Declaring an Integer',
                    content: {
                        question: 'How do you declare an integer variable named `age`?',
                        options: ['integer age;', 'int age;', 'age as int;', 'declare age as int;'],
                        answer: 1,
                    }
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
                    type: 'mcq' as const,
                    language: 'cplusplus',
                    level: 'beginner' as const,
                    title: 'Output Stream',
                    content: {
                        question: 'Which object is used to print to the console in C++?',
                        options: ['cin', 'cout', 'con', 'cerr'],
                        answer: 1,
                    }
                  },
                ],
            },
            {
                id: 'cpp-4',
                levelNumber: 4,
                title: 'Pointers',
                description: 'Understand memory addresses and pointers.',
                games: [
                  {
                    type: 'mcq' as const,
                    language: 'cplusplus',
                    level: 'intermediate' as const,
                    title: 'Pointer Declaration',
                    content: {
                        question: 'Which symbol is used to declare a pointer?',
                        options: ['&', '*', '#', '$'],
                        answer: 1,
                    }
                  },
                ],
            },
             {
                id: 'cpp-5',
                levelNumber: 5,
                title: 'Classes',
                description: 'Define your own data types with classes.',
                games: [
                  {
                    type: 'mcq' as const,
                    language: 'cplusplus',
                    level: 'intermediate' as const,
                    title: 'Class Keyword',
                    content: {
                        question: 'Which keyword is used to define a class in C++?',
                        options: ['class', 'struct', 'object', 'type'],
                        answer: 0,
                    }
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
                  type: 'mcq' as const,
                  language: 'html',
                  level: 'beginner' as const,
                  title: 'HTML for Links',
                  content: {
                    question: 'Which HTML tag is used to create a hyperlink?',
                    options: ['<link>', '<a>', '<href>', '<hyperlink>'],
                    answer: 1,
                  }
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
                    type: 'mcq' as const,
                    language: 'html',
                    level: 'beginner' as const,
                    title: 'CSS Selectors',
                    content: {
                        question: 'How do you select an element with id "header"?',
                        options: ['.header', '#header', 'header', '*header'],
                        answer: 1,
                    }
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
                    type: 'mcq' as const,
                    language: 'html',
                    level: 'intermediate' as const,
                    title: 'Box Model Components',
                    content: {
                        question: 'Which of these is NOT part of the CSS Box Model?',
                        options: ['Margin', 'Padding', 'Border', 'Spacing'],
                        answer: 3,
                    }
                  },
                ],
            },
            {
                id: 'css-3',
                levelNumber: 4,
                title: 'Flexbox',
                description: 'Create flexible layouts with Flexbox.',
                games: [
                  {
                    type: 'mcq' as const,
                    language: 'html',
                    level: 'intermediate' as const,
                    title: 'Flex Container',
                    content: {
                        question: 'To use Flexbox, you need to apply `display: flex;` to...',
                        options: ['The parent container', 'The child elements', 'Both parent and children', 'The body element'],
                        answer: 0,
                    }
                  },
                ],
            },
            {
              id: 'html-2',
              levelNumber: 5,
              title: 'HTML Forms',
              description: 'Learn to collect user input with forms.',
              games: [
                {
                  type: 'mcq' as const,
                  language: 'html',
                  level: 'intermediate' as const,
                  title: 'Text Input Field',
                  content: {
                    question: 'Which tag is used to create a single-line text input field?',
                    options: ['<textfield>', '<input type="text">', '<textinput>', '<input type="textfield">'],
                    answer: 1,
                  }
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
