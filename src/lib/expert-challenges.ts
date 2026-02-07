
export const expertChallenges = [
  {
    id: 'expert-js-debounce',
    type: 'code' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Implement Debounce',
    description: 'Limit the rate at which a function gets executed. A classic frontend interview question.',
    content: {
      question: 'Write a debounce function that takes a function and a delay as arguments. The returned function should only be executed after it has not been called for the specified delay. It should also correctly handle arguments passed to the debounced function.',
      initialCode: `function debounce(func, delay) {\n  // Your code here\n}`
    }
  },
  {
    id: 'expert-python-lru-cache',
    type: 'code' as const,
    language: 'python',
    level: 'advanced' as const,
    title: 'LRU Cache',
    description: 'Implement a Least Recently Used (LRU) cache, a common data structure problem.',
    content: {
      question: 'Design a data structure for a Least Recently Used (LRU) cache. It should support `get(key)` and `put(key, value)` operations. When the cache reaches its capacity, it should invalidate the least recently used item before inserting a new one.',
      initialCode: `class LRUCache:\n\n  def __init__(self, capacity: int):\n    # Your code here\n\n  def get(self, key: int) -> int:\n    # Your code here\n\n  def put(self, key: int, value: int) -> None:\n    # Your code here\n`
    }
  },
  {
    id: 'expert-sql-window-func',
    type: 'mcq' as const,
    language: 'sql',
    level: 'advanced' as const,
    title: 'SQL Window Functions',
    description: 'Test your knowledge of advanced SQL window functions for complex analysis.',
    content: {
      question: 'Which window function can be used to calculate a running total of salaries within each department, ordered by hire date?',
      options: [
        'SUM(salary) OVER (PARTITION BY department)',
        'TOTAL(salary) OVER (PARTITION BY department ORDER BY hire_date)',
        'SUM(salary) OVER (PARTITION BY department ORDER BY hire_date)',
        'AGG(salary) PARTITION BY department'
      ],
      answer: 2
    }
  },
    {
    id: 'expert-css-grid-layout',
    type: 'code' as const,
    language: 'css',
    level: 'advanced' as const,
    title: 'Advanced CSS Grid',
    description: 'Create a complex responsive layout using CSS Grid.',
    content: {
      question: 'Using CSS Grid, create a responsive 3-column layout inside a container with the class "grid-container". On screens wider than 768px, the middle column should be twice as wide as the side columns. On smaller screens, the columns should stack into a single column. The items have a class of "grid-item". Your code should only contain the CSS.',
      initialCode: `.grid-container {\n  display: grid;\n  /* Your code here */\n}`
    }
  },
];
