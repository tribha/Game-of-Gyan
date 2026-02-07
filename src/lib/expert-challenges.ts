
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
  // C++ Daily Routine Game
  {
    id: 'expert-cpp-routine-1',
    type: 'mcq' as const,
    language: 'cplusplus',
    level: 'advanced' as const,
    title: 'C++ Routine: Wake Up',
    description: 'Level 1: The alarm is ringing! Choose the correct code to turn it off.',
    content: {
      question: 'You are creating a `SmartHome` class. A boolean `isAlarmOn` is true. Which option correctly defines a method to turn the alarm off?',
      options: [
        'void turnOffAlarm() { isAlarmOn = false; }',
        'void turnOffAlarm() { isAlarmOn = "false"; }',
        'turnOffAlarm() => isAlarmOn = false;',
        'function turnOffAlarm() { this.isAlarmOn = false; }'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-cpp-routine-2',
    type: 'mcq' as const,
    language: 'cplusplus',
    level: 'advanced' as const,
    title: 'C++ Routine: Turn on Fan',
    description: 'Level 2: It\'s getting warm. You have a `Fan` object named `myFan`. How do you turn it on?',
    content: {
      question: 'Given a `Fan` class with a public method `void turnOn()`, and an instance `Fan myFan;`, which code correctly calls the method?',
      options: [
        'myFan->turnOn();',
        'Fan.turnOn();',
        'myFan.turnOn();',
        'turnOn(myFan);'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-cpp-routine-3',
    type: 'mcq' as const,
    language: 'cplusplus',
    level: 'advanced' as const,
    title: 'C++ Routine: Go to Market',
    description: 'Level 3: Time to buy groceries. Add "milk" and "eggs" to your shopping list.',
    content: {
      question: 'You have a `std::vector<std::string> shoppingList;`. Which code correctly adds "milk" and "eggs" to the list?',
      options: [
        'shoppingList.add("milk"); shoppingList.add("eggs");',
        'shoppingList.push("milk", "eggs");',
        'shoppingList += "milk"; shoppingList += "eggs";',
        'shoppingList.push_back("milk"); shoppingList.push_back("eggs");'
      ],
      answer: 3
    }
  },
  // Java Daily Routine Game
  {
    id: 'expert-java-routine-1',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Wake Up',
    description: 'Level 1: The alarm is ringing! Choose the correct code to turn it off.',
    content: {
      question: 'You are creating a `SmartHome` class. A boolean field `isAlarmOn` is true. Which option correctly defines a method to turn the alarm off?',
      options: [
        'public void turnOffAlarm() { this.isAlarmOn = false; }',
        'void turnOffAlarm() { isAlarmOn = "false"; }',
        'public void turnOffAlarm() { isAlarmOn = 0; }',
        'function turnOffAlarm() { isAlarmOn = false; }'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-java-routine-2',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Cook Breakfast',
    description: 'Level 2: Let\'s make an omelette! You have a `Stove` object named `myStove`.',
    content: {
      question: 'Given a `Stove` class with a method `public void cook(String foodItem)` and an instance `Stove myStove = new Stove();`, how do you cook an "omelette"?',
      options: [
        'myStove.cook("omelette");',
        'Stove.cook("omelette");',
        'myStove->cook("omelette");',
        'cook(myStove, "omelette");'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-java-routine-3',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Go to Sleep',
    description: 'Level 3: It has been a long day. Time to get some rest.',
    content: {
      question: 'You have a `Person` class with a `private boolean isAwake = true;` and a public method `public void sleep()`. Which implementation of `sleep()` is correct?',
      options: [
        'public void sleep() { isAwake = false; }',
        'public void sleep() { return false; }',
        'public void sleep() { isAwake = "sleeping"; }',
        'public void sleep() { this.isAwake = 0; }'
      ],
      answer: 0
    }
  },
];
