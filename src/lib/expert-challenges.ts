

export const expertChallenges = [
  // C Daily Routine Game
  {
    id: 'expert-c-routine-1',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Wake Up',
    description: 'Level 1: The alarm is ringing! Choose the correct code to turn it off.',
    content: {
      question: 'You have `struct SmartHome { int isAlarmOn; };`. A function `void turnOffAlarm(struct SmartHome *home)` needs to set `isAlarmOn` to 0. What is the correct implementation inside the function?',
      options: [
        'home.isAlarmOn = 0;',
        'home->isAlarmOn = 0;',
        '(*home).isAlarmOn = "false";',
        'isAlarmOn = 0;'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-c-routine-2',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Check Time',
    description: 'Level 2: What time is it? You need to get the current time.',
    content: {
      question: 'To work with time, you need to include a specific header. Which one is it?',
      options: [
        '#include <time.h>',
        '#include <stdio.h>',
        '#include <datetime.h>',
        '#include <system.h>'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-c-routine-3',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Make Coffee',
    description: 'Level 3: Time for coffee. You need to allocate memory for your coffee preferences.',
    content: {
      question: 'You want to store your coffee type "Espresso" in a dynamically allocated string. What is the correct way to do it?',
      options: [
        'char *coffee = "Espresso";',
        'char *coffee = malloc(9); strcpy(coffee, "Espresso");',
        'char coffee[9]; coffee = "Espresso";',
        'char *coffee = new char[9];'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-c-routine-4',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Read News',
    description: 'Level 4: Read the morning news from a file.',
    content: {
      question: 'How do you correctly open a file named "news.txt" for reading?',
      options: [
        'FILE *f = open("news.txt", "r");',
        'file *f = fopen("news.txt", "read");',
        'FILE *f = fopen("news.txt", "r");',
        'file f = open("news.txt");'
      ],
      answer: 2
    }
  },
   {
    id: 'expert-c-routine-5',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Water Plants',
    description: 'Level 5: Water the plants. You have an array of plant structs.',
    content: {
      question: '`struct Plant { char name[20]; int waterLevel; }; struct Plant myPlants[3];` How do you access the water level of the first plant using a pointer `p` that points to the start of the array?',
      options: [
        'p[0]->waterLevel;',
        'p.waterLevel;',
        '(p+0).waterLevel;',
        'p->waterLevel;'
      ],
      answer: 3
    }
  },
  {
    id: 'expert-c-routine-6',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Commute to Work',
    description: 'Level 6: Calculate commute time.',
    content: {
      question: 'A function pointer `int (*calculate)(int, int)` is defined. `int time(int speed, int dist) { return dist/speed; }`. How do you assign `time` to `calculate`?',
      options: [
        '*calculate = &time;',
        'calculate = time;',
        'calculate = *time;',
        'calculate = &time;'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-c-routine-7',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Go to Market',
    description: 'Level 7: Time to buy groceries. Add "milk" to your shopping list.',
    content: {
      question: 'You have a shopping list `char *shoppingList[10];` and a counter `int itemCount = 0;`. Which code correctly adds "milk" as the next item?',
      options: [
        'shoppingList.add("milk");',
        'shoppingList[itemCount++] = "milk";',
        'shoppingList[itemCount++] = &"milk";',
        'strcpy(shoppingList[itemCount++], "milk");'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-c-routine-8',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Pay for Groceries',
    description: 'Level 8: Use a union to handle different payment types.',
    content: {
      question: '`union Payment { int cardNum; char cash[4]; };` How much memory does an instance of `union Payment` typically occupy?',
      options: [
        'Sum of sizes of all members',
        'Size of the largest member',
        'Size of the smallest member',
        'It depends on the compiler'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-c-routine-9',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Turn on Fan',
    description: 'Level 9: It\'s getting warm. You have a `Fan` object. How do you turn it on?',
    content: {
      question: 'You have a `struct Fan myFan;` and a function `void setFanSpeed(struct Fan *f, int speed);`. How do you correctly call the function to set the fan speed to 3?',
      options: [
        'setFanSpeed(myFan, 3);',
        'myFan.setFanSpeed(3);',
        'setFanSpeed(&myFan, 3);',
        'setFanSpeed(*myFan, 3);'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-c-routine-10',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Debugging',
    description: 'Level 10: Find the error in a bitwise operation.',
    content: {
      question: 'To turn on the 3rd bit (from right, 0-indexed) of an integer `flags`, what is the correct operation?',
      options: [
        'flags = flags | (1 << 2);',
        'flags = flags & (1 << 2);',
        'flags = flags | (1 >> 2);',
        'flags = flags ^ (1 << 2);'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-c-routine-11',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Free Memory',
    description: 'Level 11: Your coffee is finished. Free the memory.',
    content: {
      question: 'You allocated memory for `char *coffee` using `malloc`. How do you release it?',
      options: [
        'delete(coffee);',
        'remove(coffee);',
        'free(coffee);',
        'clear(coffee);'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-c-routine-12',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Write a Report',
    description: 'Level 12: Write a report to a file.',
    content: {
      question: 'How do you write the string "Done" to a file pointed to by `FILE *f`?',
      options: [
        'fputs("Done", f);',
        'fput("Done", f);',
        'f << "Done";',
        'write(f, "Done");'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-c-routine-13',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Sort Tasks',
    description: 'Level 13: Sort your to-do list alphabetically.',
    content: {
      question: 'Which standard library function is used for sorting arrays?',
      options: [
        'sort()',
        'qsort()',
        'array_sort()',
        'order()'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-c-routine-14',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Close a file',
    description: 'Level 14: You are done with the news file.',
    content: {
      question: 'Which function is used to close a file handle `FILE *f`?',
      options: [
        'close(f);',
        'file_close(f);',
        'fclose(f);',
        'f.close();'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-c-routine-15',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Linked List',
    description: 'Level 15: Create a playlist as a linked list.',
    content: {
      question: '`struct Node { char *song; struct Node *next; };`. How do you access the next node from a pointer `current_node`?',
      options: [
        'current_node.next',
        'current_node->next',
        '(*current_node).next_node',
        '&current_node.next'
      ],
      answer: 1
    }
  },
   {
    id: 'expert-c-routine-16',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Packing Data',
    description: 'Level 16: You need to send data over a network efficiently.',
    content: {
      question: 'Which C feature is often used to control the memory alignment of struct members for network protocols?',
      options: [
        '#align',
        '__attribute__((aligned))',
        '#pragma pack',
        'alignas'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-c-routine-17',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Command Line Args',
    description: 'Level 17: Run a program with custom settings.',
    content: {
      question: 'How is the `main` function declared to accept command-line arguments?',
      options: [
        'int main()',
        'int main(int argc, char *argv[])',
        'int main(char *args)',
        'int main(int count, char **args)'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-c-routine-18',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Environment Variables',
    description: 'Level 18: Check a system setting.',
    content: {
      question: 'Which function is used to get the value of an environment variable like "PATH"?',
      options: [
        'getenv()',
        'get_env()',
        'environ()',
        'system_env()'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-c-routine-19',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Preprocessor Macro',
    description: 'Level 19: Define a constant for PI.',
    content: {
      question: 'How do you define a preprocessor macro for PI?',
      options: [
        'const double PI = 3.14159;',
        '#define PI 3.14159',
        'macro PI 3.14159;',
        'define(PI, 3.14159);'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-c-routine-20',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Conditional Compilation',
    description: 'Level 20: Include code only for a specific OS.',
    content: {
      question: 'Which directives would you use to include code only when compiling on Windows?',
      options: [
        '#if OS == "Windows" ... #endif',
        '#ifdef _WIN32 ... #endif',
        '#case "Windows" ... #endcase',
        '#when _WIN32 ... #endwhen'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-c-routine-21',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Static variable',
    description: 'Level 21: Count how many times a function has been called.',
    content: {
      question: 'Which type of variable retains its value between function calls?',
      options: [
        'global',
        'local',
        'static',
        'volatile'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-c-routine-22',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: `sizeof` operator',
    description: 'Level 22: Check how much memory a data structure uses.',
    content: {
      question: 'How do you find the size in bytes of a `struct MyData`?',
      options: [
        'size(MyData)',
        'sizeof(struct MyData)',
        'length(MyData)',
        'MyData.size'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-c-routine-23',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: `typedef`',
    description: 'Level 23: Create a simpler name for a complex type.',
    content: {
      question: 'How do you create an alias `uint` for `unsigned int`?',
      options: [
        'alias uint = unsigned int;',
        'rename unsigned int to uint;',
        'typedef unsigned int uint;',
        '#define uint unsigned int'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-c-routine-24',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: `goto` statement',
    description: 'Level 24: Handle a critical error by jumping to an error handler.',
    content: {
      question: 'Which statement provides an unconditional jump to a labeled statement within the same function?',
      options: [
        'jump',
        'switch',
        'break',
        'goto'
      ],
      answer: 3
    }
  },
  {
    id: 'expert-c-routine-25',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Sleep',
    description: 'Level 25: A long day is over. Time to sleep.',
    content: {
      question: 'To pause the program, you might use a function like `sleep()`. On a POSIX system (like Linux), which header is needed for `sleep()`?',
      options: [
        '<stdio.h>',
        '<stdlib.h>',
        '<unistd.h>',
        '<dos.h>'
      ],
      answer: 2
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
    title: 'Java Routine: Check Notifications',
    description: 'Level 2: Check your phone notifications.',
    content: {
      question: 'Your notifications are stored in a `List<String> notifications`. Which is the safest way to iterate through them to avoid a `ConcurrentModificationException`?',
      options: [
        'for (String n : notifications) { if(n.contains("spam")) notifications.remove(n); }',
        'Iterator<String> i = notifications.iterator(); while (i.hasNext()) { i.next(); i.remove(); }',
        'for (int i=0; i<notifications.size(); i++) { notifications.remove(i); }',
        'notifications.forEach(n -> notifications.clear());'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-java-routine-3',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Brew Coffee',
    description: 'Level 3: The coffee machine is a singleton.',
    content: {
      question: 'How do you ensure only one instance of `CoffeeMachine` can be created?',
      options: [
        'Make the class final.',
        'Make the constructor private and provide a static `getInstance()` method.',
        'Make all methods static.',
        'Use the `synchronized` keyword on the class.'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-java-routine-4',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Cook Breakfast',
    description: 'Level 4: Let\'s make an omelette! You have a `Stove` object named `myStove`.',
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
    id: 'expert-java-routine-5',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Check Weather',
    description: 'Level 5: The weather API can fail.',
    content: {
      question: 'A method `getWeather()` throws a checked `IOException`. How must you handle this?',
      options: [
        'Ignore it, it\'s just a warning.',
        'Use an `if-else` block to check for the error.',
        'Wrap the call in a `try-catch` block or declare that your method also throws it.',
        'Use an `assert` statement.'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-java-routine-6',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Choose Transport',
    description: 'Level 6: Decide whether to take a `Car` or `Bus`. Both are `Vehicles`.',
    content: {
      question: '`Car` and `Bus` both implement the `Vehicle` interface, which has a `drive()` method. This is an example of:',
      options: [
        'Encapsulation',
        'Inheritance',
        'Polymorphism',
        'Abstraction'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-java-routine-7',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Attend Meeting',
    description: 'Level 7: The meeting has attendees of different types: `Employee`, `Manager`.',
    content: {
      question: 'To store attendees, `List<Person> attendees = new ArrayList<>();` is used, where `Manager` extends `Employee` and `Employee` extends `Person`. What concept makes this possible?',
      options: [
        'Generics and Polymorphism',
        'Method Overloading',
        'Final Classes',
        'Static Binding'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-java-routine-8',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Write Code',
    description: 'Level 8: Compare two `Programmer` objects.',
    content: {
      question: 'To correctly compare two `Programmer` objects for equality based on their `id`, what method should you override?',
      options: [
        'compareTo()',
        'equals() and hashCode()',
        'isEqual()',
        'compare()'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-java-routine-9',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Deploy to Server',
    description: 'Level 9: The deployment must be thread-safe.',
    content: {
      question: 'Which keyword is used to ensure that a method is accessed by only one thread at a time?',
      options: [
        'volatile',
        'transient',
        'synchronized',
        'atomic'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-java-routine-10',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Order Groceries',
    description: 'Level 10: Use a `Map` to store your grocery list with quantities.',
    content: {
      question: 'Which is the correct way to declare a `Map` for grocery items (String) and their quantities (Integer)?',
      options: [
        'Map<String, Integer> groceries = new HashMap<>();',
        'HashMap<String, int> groceries = new HashMap<>();',
        'Map<String, Integer> groceries = new Map<>();',
        'List<String, Integer> groceries = new ArrayList<>();'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-java-routine-11',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Pay Bills',
    description: 'Level 11: Using a generic `Payment` processor.',
    content: {
      question: 'A generic class `Payment<T>`. What does `T` represent?',
      options: [
        'A static type',
        'A thread',
        'A type parameter that will be specified when an object is created',
        'A terminal operation'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-java-routine-12',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Lambda Functions',
    description: 'Level 12: Sort a list of employees by name using a lambda.',
    content: {
      question: 'Which is the correct lambda expression to sort `employees` list by name?',
      options: [
        'Collections.sort(employees, (e1, e2) -> e1.getName().compareTo(e2.getName()));',
        'employees.sort((e1, e2) -> e1.name == e2.name);',
        'sort(employees, (e1, e2) -> e1 > e2);',
        'employees.sortByName();'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-java-routine-13',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Stream API',
    description: 'Level 13: Find all employees in the "Engineering" department.',
    content: {
      question: 'How would you use the Stream API to filter a list of employees?',
      options: [
        'employees.stream().filter(e -> e.getDept().equals("Engineering")).collect(Collectors.toList());',
        'employees.filter(e -> e.getDept() == "Engineering");',
        'new Stream(employees).filter(...);',
        'for(Employee e : employees) { if (e.getDept().equals("Engineering")) ... }'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-java-routine-14',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Annotations',
    description: 'Level 14: Mark a method as outdated.',
    content: {
      question: 'Which annotation is used to mark a method as no longer recommended for use?',
      options: [
        '@Override',
        '@Deprecated',
        '@SuppressWarnings',
        '@FunctionalInterface'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-java-routine-15',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Garbage Collection',
    description: 'Level 15: An object is no longer needed.',
    content: {
      question: 'When is an object eligible for garbage collection?',
      options: [
        'When you call `delete` on it.',
        'When it is set to `null`.',
        'When it is no longer reachable by any live threads.',
        'After it has existed for 5 minutes.'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-java-routine-16',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: `final` Keyword',
    description: 'Level 16: Your birth date cannot be changed.',
    content: {
      question: 'Which keyword would you use for a variable that should not be modified after it is assigned?',
      options: [
        'const',
        'static',
        'final',
        'volatile'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-java-routine-17',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: `finally` block',
    description: 'Level 17: You must close a network connection whether an error occurs or not.',
    content: {
      question: 'In a `try-catch` structure, which block is always executed regardless of whether an exception occurred?',
      options: [
        'try',
        'catch',
        'finally',
        'else'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-java-routine-18',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Read an E-book',
    description: 'Level 18: Read character data from a file.',
    content: {
      question: 'Which of these classes is most suitable for reading character files?',
      options: [
        'FileInputStream',
        'BufferedReader',
        'ObjectInputStream',
        'DataInputStream'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-java-routine-19',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Enums',
    description: 'Level 19: Define a fixed set of directions: NORTH, SOUTH, EAST, WEST.',
    content: {
      question: 'What is the best way to represent a fixed set of constants in Java?',
      options: [
        'A class with public static final String variables.',
        'An interface with constant definitions.',
        'An `enum` type.',
        'A `switch` statement.'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-java-routine-20',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: `super` vs `this`',
    description: 'Level 20: Differentiate between the current object and its parent.',
    content: {
      question: 'In a class constructor, what is the purpose of `super()`?',
      options: [
        'To call a method from the superclass.',
        'To access a variable from the superclass.',
        'To call the constructor of the superclass.',
        'To refer to the current object instance.'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-java-routine-21',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Watch TV',
    description: 'Level 21: You have a `Television` and a `SmartTelevision`.',
    content: {
      question: '`SmartTelevision extends Television`. Both have a `turnOn()` method. This is method...',
      options: [
        'Overloading',
        'Overriding',
        'Hiding',
        'Finalizing'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-java-routine-22',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: String Pool',
    description: 'Level 22: Understanding string equality.',
    content: {
      question: 'If `String s1 = "Java";` and `String s2 = new String("Java");`. What is `s1 == s2`?',
      options: [
        'true',
        'false',
        'Compiler Error',
        'Depends on the JVM'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-java-routine-23',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Autoboxing',
    description: 'Level 23: The compiler helps with primitive types.',
    content: {
      question: 'The automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper classes is called...',
      options: [
        'Casting',
        'Autoboxing',
        'Unboxing',
        'Serialization'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-java-routine-24',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Reflection',
    description: 'Level 24: Inspecting a class at runtime.',
    content: {
      question: 'Which API is used to examine or modify the behavior of methods, classes, and interfaces at runtime?',
      options: [
        'The Stream API',
        'The Collections Framework',
        'Java Native Interface (JNI)',
        'The Reflection API'
      ],
      answer: 3
    }
  },
  {
    id: 'expert-java-routine-25',
    type: 'mcq' as const,
    language: 'java',
    level: 'advanced' as const,
    title: 'Java Routine: Go to Sleep',
    description: 'Level 25: It has been a long day. Time to get some rest.',
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
  // JavaScript Helper Route Game
  {
    id: 'expert-js-routine-1',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 1: The Morning Alarm',
    description: "The first rays of sunlight peek through your window, but the insistent beep of your smart alarm is what really pulls you from your dreams. Time to start the day. Your smart home is controlled by JavaScript objects. First task: silence that alarm!",
    content: {
      question: "Your alarm is represented by the object `let smartAlarm = { isOn: true, time: '07:00' };`. Which line of code will set the `isOn` property to `false`, finally giving you peace?",
      options: [
        'smartAlarm.isOn = false;',
        'smartAlarm(isOn, false);',
        'set smartAlarm.isOn = false;',
        'smartAlarm.isOn(false);',
      ],
      answer: 0,
    },
  },
  {
    id: 'expert-js-routine-2',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 2: The Essential Brew',
    description: "With the alarm silenced, the next logical step is coffee. Your choice of beverage depends entirely on your mood. Today, you're feeling sleepy. You need to write a quick line of code to decide your morning drink.",
    content: {
      question: "You have `let mood = 'sleepy';`. Use a ternary operator to set the `beverage` variable to 'Coffee' if the mood is 'sleepy', and 'Tea' otherwise.",
      options: [
        "let beverage = mood === 'sleepy' ? 'Coffee' : 'Tea';",
        "let beverage = mood ? 'Coffee' : 'Tea';",
        "let beverage = if (mood === 'sleepy') 'Coffee' else 'Tea';",
        "let beverage = 'Coffee' || 'Tea';",
      ],
      answer: 0,
    },
  },
  {
    id: 'expert-js-routine-3',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 3: The Weather Check',
    description: "Before getting dressed, a wise person checks the weather. Your home automation system has fetched the latest weather data for you. It looks like rain. You'll need to use your coding skills to remember to grab an umbrella.",
    content: {
      question: "You have a weather object: `const weather = { isRaining: true, temp: 15 };` and an empty array `let items = [];`. Which `if` statement correctly adds 'umbrella' to your `items` array?",
      options: [
        "if (weather.isRaining) { items.push('umbrella'); }",
        "if (weather.isRaining == true) items.add('umbrella');",
        "if (weather) { items.push('umbrella'); }",
        "items.push(weather.isRaining ? 'umbrella' : null);",
      ],
      answer: 0,
    },
  },
  {
    id: 'expert-js-routine-4',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 4: The Daily Plan',
    description: "Coffee in hand, it's time to plan the day. You keep your tasks in a simple array. Today, you need to add \"Grocery Shopping\" to your list.",
    content: {
      question: "Your to-do list is `const todos = ['Work', 'Gym'];`. How do you add \"Grocery Shopping\" to the end of this list?",
      options: [
        "todos.add('Grocery Shopping');",
        "todos[2] = 'Grocery Shopping';",
        "todos.push('Grocery Shopping');",
        "todos.append('Grocery Shopping');",
      ],
      answer: 2,
    },
  },
  {
    id: 'expert-js-routine-5',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 5: The Morning Commute',
    description: "Time to head to work. You check your traffic app, which reports that traffic is 'heavy' today. Your commute time will vary based on this report. Let's write the logic.",
    content: {
      question: "You have `const trafficStatus = 'heavy';` and an unassigned variable `let myCommuteTime;`. How do you use a `switch` statement to set `myCommuteTime` to 60 when `trafficStatus` is 'heavy'?",
      options: [
        "switch(trafficStatus) { case 'heavy': myCommuteTime = 60; break; }",
        "switch(myCommuteTime) { case 'heavy': myCommuteTime = 60; }",
        "switch('heavy') { case trafficStatus: myCommuteTime = 60; }",
        "switch trafficStatus { case 'heavy': myCommuteTime = 60; }",
      ],
      answer: 0,
    },
  },
  {
    id: 'expert-js-routine-6',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 6: The Grocery Run',
    description: "Later in the day, you're at the market. To keep track of your shopping, you've decided to write a helper function that adds items to your digital cart.",
    content: {
      question: 'Which is a valid arrow function `addToCart` that takes an `item` and a `cart` array and correctly adds the item to the cart?',
      options: [
        'const addToCart = (item, cart) -> cart.push(item);',
        'const addToCart = (item, cart) => cart.push(item);',
        'function addToCart(item, cart) => cart.push(item);',
        'const addToCart = { (item, cart) => cart.push(item) };',
      ],
      answer: 1,
    },
  },
  {
    id: 'expert-js-routine-7',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 7: Checking Out',
    description: "You've got your items, and now you're at the checkout. The prices are scanned into an array. You need to write a line of code to calculate the total bill.",
    content: {
      question: 'The prices are in an array: `const prices = [10, 20, 5];`. Which `reduce` function correctly sums the array to get your total cost?',
      options: [
        'prices.reduce((total, current) => total + current, 0);',
        'prices.reduce((total, current) => total, 0);',
        'prices.reduce(function(total, current) { total + current });',
        'prices.reduce(total + current);',
      ],
      answer: 0,
    },
  },
  {
    id: 'expert-js-routine-8',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 8: Evening Entertainment',
    description: "The day is winding down. Time to relax with a movie. You have a list of available movies as an array of objects. Your task is to find the movie object for 'Inception'.",
    content: {
      question: "Your movie list is `const movies = [{title: 'Inception', genre: 'Sci-Fi'}, {title: 'Joker', genre: 'Drama'}];`. How do you find and return the specific movie object for 'Inception'?",
      options: [
        "movies.find(movie => movie.title === 'Inception');",
        "movies.filter(movie => movie.title === 'Inception');",
        "movies.search(movie => movie.title === 'Inception');",
        "movies.get(movie => movie.title === 'Inception');",
      ],
      answer: 0,
    },
  },
  {
    id: 'expert-js-routine-9',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 9: Dinner Time',
    description: "You've decided to make pasta for dinner. The recipe is stored as a JavaScript object. You need to get just the list of ingredients to make sure you have everything.",
    content: {
      question: "The recipe object is `const recipe = { name: 'Pasta', ingredients: ['Noodles', 'Sauce', 'Cheese'] };`. How do you get just the array of ingredients?",
      options: [
        'Object.values(recipe.ingredients)',
        'recipe.ingredients',
        'Object.keys(recipe.ingredients)',
        "recipe.get('ingredients')",
      ],
      answer: 1,
    },
  },
  {
    id: 'expert-js-routine-10',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 10: Lights Out',
    description: "You're heading to bed, but you want the lights to turn off automatically in 30 minutes. You need to use a JavaScript timer to schedule this action.",
    content: {
      question: 'You have a function called `turnOffLights()`. Which code snippet correctly schedules it to run once after 1000 milliseconds (1 second)?',
      options: [
        'setInterval(turnOffLights, 1000);',
        'setTimeout(turnOffLights, 1000);',
        'wait(1000, turnOffLights);',
        'sleep(1000, turnOffLights);',
      ],
      answer: 1,
    },
  },
  {
    id: 'expert-js-routine-11',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 11: Planning the Weekend',
    description: "The work week is over! It's time to plan the weekend. You have a template for your plans, and you want to make a copy that you can modify without changing the original.",
    content: {
      question: 'You have an array `const weekendPlans = ["Hike", "Read"];`. How do you create a completely separate new array, `myPlans`, that contains the same items?',
      options: [
        'const myPlans = weekendPlans;',
        'const myPlans = [...weekendPlans];',
        'const myPlans = weekendPlans.copy();',
        'const myPlans = Object.assign({}, weekendPlans);'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-js-routine-12',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 12: Checking the Mailbox',
    description: "You open your email client and see a list of new messages. You need to write a quick piece of code to see if there's *any* unread mail that needs your attention.",
    content: {
      question: 'Your inbox is an array of objects: `const mail = [{id: 1, read: true}, {id: 2, read: false}];`. Which method efficiently returns `true` if at least one email has its `read` property set to `false`?',
      options: [
        'mail.some(m => m.read === false)',
        'mail.every(m => m.read === false)',
        'mail.includes({read: false})',
        'mail.find(m => m.read === false)'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-js-routine-13',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 13: Tidying Up',
    description: "Your desk is getting a bit messy. It's represented as an object, and you want to get rid of the \"clutter\" property entirely.",
    content: {
      question: 'Your desk object is `let desk = { books: 5, clutter: "papers", laptop: 1 };`. Which command completely removes the `clutter` property from the object?',
      options: [
        'desk.clutter = null;',
        'delete desk.clutter;',
        'desk.remove("clutter");',
        'desk.clutter.delete();'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-js-routine-14',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 14: Calling a Friend',
    description: "You decide to call a friend. In JavaScript, making a call is an asynchronous operation—it returns a Promise that will resolve when your friend answers. You need to be ready to handle their response.",
    content: {
      question: 'A function `callFriend()` returns a Promise. How do you correctly specify a callback function to handle the successful response when the Promise resolves?',
      options: [
        'callFriend().then(response => { ... });',
        'callFriend().success(response => { ... });',
        'on(callFriend(), response => { ... });',
        'try { callFriend() } then (response => { ... });'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-js-routine-15',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 15: Baking a Cake',
    description: "It's a special occasion! You're baking a cake. The recipe says you must wait for the oven to preheat before you put the cake batter in. This is a perfect use case for async/await.",
    content: {
      question: 'Inside an `async function bake()`, you call `await preheatOven();` before `putInCake();`. What is the primary role of the `await` keyword here?',
      options: [
        'It runs `preheatOven` in the background without stopping the function.',
        "It pauses the `bake` function's execution until the `preheatOven` promise is settled.",
        'It immediately cancels the `preheatOven` function.',
        'It tells `preheatOven` to run faster.'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-js-routine-16',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 16: Packing for a Trip',
    description: "You're going on a trip! You have your clothes in one list and your toiletries in another. You need to combine them into a single 'suitcase' list.",
    content: {
      question: 'You have `const clothes = ["shirt", "pants"];` and `const toiletries = ["toothbrush"];`. How do you combine these into a single new array called `suitcase`?',
      options: [
        'const suitcase = clothes + toiletries;',
        'const suitcase = [clothes, toiletries];',
        'const suitcase = clothes.concat(toiletries);',
        'const suitcase = clothes.join(toiletries);'
      ],
      answer: 2
    }
  },
  {
    id: 'expert-js-routine-17',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 17: Feeding the Pet',
    description: "Your pet is giving you 'the look'. It's dinner time. Your pet is an object created from a `Pet` class. You need to create your pet and then call its `feed` method.",
    content: {
      question: 'You have a class `class Pet { constructor(name) { ... } feed() { ... } }`. How do you correctly create a new pet named "doggy" and then call its `feed()` method?',
      options: [
        'Pet.feed("doggy");',
        'let myPet = new Pet("doggy"); myPet.feed();',
        'new Pet().feed("doggy");',
        'let myPet = Pet("doggy"); myPet.feed();'
      ],
      answer: 1
    }
  },
  {
    id: 'expert-js-routine-18',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 18: A Trip to the Library',
    description: "You have an array of book objects that you've borrowed from the library. You want to create a simple list containing only the titles of the books.",
    content: {
      question: 'Given `const books = [{title: "1984"}, {title: "Brave New World"}];`, which code uses the `map` method to produce an array of just the titles: `["1984", "Brave New World"]`?',
      options: [
        'books.map(book => book.title)',
        'books.forEach(book => book.title)',
        'books.filter(book => book.title)',
        'books.reduce(book => book.title)'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-js-routine-19',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 19: Checking Your Contacts',
    description: "A friend sent you their contact info as a JSON string. To use it in your JavaScript code, you first need to parse it into a JavaScript object.",
    content: {
      question: 'You have the string `const json = \'{"name": "John"}\';`. How do you convert this string into a usable JavaScript object?',
      options: [
        'JSON.parse(json)',
        'JSON.stringify(json)',
        'json.toObject()',
        'new Object(json)'
      ],
      answer: 0
    }
  },
  {
    id: 'expert-js-routine-20',
    type: 'mcq' as const,
    language: 'javascript',
    level: 'advanced' as const,
    title: 'Chapter 20: The Smart Fridge',
    description: "You try to get a list of groceries from your smart fridge, but it might be offline. You need to write code that can handle this potential error without crashing your whole home system.",
    content: {
      question: 'A function `getGroceries()` might throw an error if the network is down. How do you safely call this function and handle any potential error?',
      options: [
        'if(getGroceries()) { ... } else { ... }',
        'try { getGroceries(); } catch (error) { ... }',
        'getGroceries().onError(error => { ... });',
        'when(getGroceries()).failed(error => { ... });'
      ],
      answer: 1
    }
  }
];

    


    