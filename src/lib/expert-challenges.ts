

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
    description: "Your character is trying to sleep, but their smart alarm is beeping. You must write the code to turn it off. The alarm's state is controlled by a JavaScript object.",
    content: {
      question: "The alarm is represented by `let smartAlarm = { isOn: true };`. Your code needs to change `isOn` to `false` to make the character's alarm stop. Which line of code accomplishes this?",
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
    description: "Now that they're awake, your character needs coffee. Their choice of drink is determined by their mood. Your code will decide what they drink.",
    content: {
      question: "Your character's mood is `'sleepy'`. Use a ternary operator to write the code that sets their `beverage` to 'Coffee'. If their mood was anything else, it would be 'Tea'. Which code does this?",
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
    description: "Before getting dressed, your character needs to check the weather. The result of your code will determine if they remember to take an umbrella.",
    content: {
      question: "The weather report is `const weather = { isRaining: true };`. Your character has an empty `items` array. Write the `if` statement that adds 'umbrella' to their items because it's raining.",
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
    description: "Your character needs to plan their day. Your code will add a new task to their to-do list.",
    content: {
      question: "The to-do list is `const todos = ['Work', 'Gym'];`. Which line of code will you use to `push` 'Grocery Shopping' onto the end of their list?",
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
    description: "Time to head out. Traffic is bad. Your code will calculate how long the commute will take for the character based on the traffic report.",
    content: {
      question: "The `trafficStatus` is 'heavy'. Use a `switch` statement to set `myCommuteTime` to 60, representing the character's 60-minute commute.",
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
    description: "At the store, your character needs a way to add items to their digital cart. You'll write the function that makes this possible.",
    content: {
      question: 'Which is a valid arrow function `addToCart` that takes an `item` and a `cart` array, allowing the character to add items by executing `cart.push(item)`?',
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
    description: "The character is at the checkout with a cart full of items. Your code will calculate their total bill.",
    content: {
      question: 'The item prices are in an array: `const prices = [10, 20, 5];`. Which `reduce` function correctly sums the array, telling the character their total cost?',
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
    description: "Back home, it's movie night. Your character wants to watch 'Inception'. Your code will find it in their movie library.",
    content: {
      question: "The library is `const movies = [{title: 'Inception', genre: 'Sci-Fi'}, {title: 'Joker', genre: 'Drama'}];`. Which code will correctly `find` and return the object for 'Inception' so your character can watch it?",
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
    description: "Your character is hungry and wants to make pasta. Your code will access the recipe to get the list of ingredients they need.",
    content: {
      question: "The recipe is `const recipe = { name: 'Pasta', ingredients: ['Noodles', 'Sauce', 'Cheese'] };`. Which code will access the `ingredients` property so your character knows what to get out?",
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
    description: "The character is going to bed. You need to write the code that schedules their smart lights to turn off automatically.",
    content: {
      question: 'You have a function `turnOffLights()`. Which code will you use to `setTimeout` and schedule the lights to turn off for the character in 1 second (1000ms)?',
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
    description: "It's the weekend! Your character has a default set of plans but wants to make a separate, modifiable copy for this specific weekend. Your code will create that copy.",
    content: {
      question: 'The template is `const weekendPlans = ["Hike", "Read"];`. How do you use the spread operator to create a completely new array, `myPlans`, that your character can change without affecting the original?',
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
    description: "Your character opens their email client. Your code will quickly scan the inbox to see if there's any new mail for them to read.",
    content: {
      question: 'The inbox is an array of objects: `const mail = [{id: 1, read: true}, {id: 2, read: false}];`. Which method will you use to check if `some` of the emails have `read: false` and return `true` to alert the character?',
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
    description: "The character's virtual desk is messy. Your code will help them clean up by removing an unnecessary property from their desk object.",
    content: {
      question: 'The desk is `let desk = { books: 5, clutter: "papers" };`. Which command will you use to `delete` the `clutter` property, cleaning up the character\'s workspace?',
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
    description: "Your character wants to call a friend. This action is asynchronous. Your code needs to handle the connection when the friend finally answers.",
    content: {
      question: 'The `callFriend()` function returns a Promise. How do you use `.then()` to specify what the character should do (the callback function) once the call is successfully connected?',
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
    description: "It's time to bake! The oven must preheat before the cake goes in. Your code will use `async/await` to make the character wait for the oven.",
    content: {
      question: 'Inside an `async` function, what is the effect of placing the `await` keyword before a function call that returns a Promise (like `await preheatOven()`)?',
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
    description: "Your character is going on a trip and needs to pack. Your code will combine their `clothes` list and their `toiletries` list into one `suitcase`.",
    content: {
      question: 'You have `const clothes = ["shirt"];` and `const toiletries = ["toothbrush"];`. How do you `concat` these two arrays into a single `suitcase` array for your character?',
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
    description: "The character's pet is hungry! The pet is an object created from a class. Your code will instantiate the pet and then call the method to feed it.",
    content: {
      question: 'You have a `Pet` class. How do you correctly create a `new Pet` named "doggy" and then call its `feed()` method to make the character feed their pet?',
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
    description: "Your character has a list of book objects. They just want a simple list of the book titles. Your code will extract these titles for them.",
    content: {
      question: 'Given `const books = [{title: "1984"}, {title: "Brave New World"}];`, which code will `map` over the array to create a new array containing just the `title` of each book for your character to read?',
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
    description: "A friend sends your character their contact info as a JSON string. Your code must parse this string into a usable object so the character can save the contact.",
    content: {
      question: 'You receive `const json = \'{"name": "John"}\';`. How do you use `JSON.parse()` to turn this string into an object that your character\'s address book can understand?',
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
    description: "Your character wants to know what's in their smart fridge, but the fridge's API might be offline. Your code must be robust enough to handle a potential network error without crashing.",
    content: {
      question: 'The `getGroceries()` function might throw an error. How do you use a `try...catch` block to safely attempt the call and handle any error, preventing the character\'s smart home system from crashing?',
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

    


    

