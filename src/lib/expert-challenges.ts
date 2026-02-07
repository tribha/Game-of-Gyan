
export const expertChallenges = [
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
