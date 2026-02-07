
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
    title: 'C Routine: Turn on Fan',
    description: 'Level 2: It\'s getting warm. You have a `Fan` object. How do you turn it on?',
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
    id: 'expert-c-routine-3',
    type: 'mcq' as const,
    language: 'c',
    level: 'advanced' as const,
    title: 'C Routine: Go to Market',
    description: 'Level 3: Time to buy groceries. Add "milk" to your shopping list.',
    content: {
      question: 'You have a shopping list `char *shoppingList[10];` and a counter `int itemCount = 0;`. Which code correctly adds "milk" as the next item?',
      options: [
        'shoppingList.add("milk");',
        'shoppingList[itemCount] = "milk"; itemCount++;',
        'shoppingList[itemCount++] = &"milk";',
        'strcpy(shoppingList[itemCount++], "milk");'
      ],
      answer: 1
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
