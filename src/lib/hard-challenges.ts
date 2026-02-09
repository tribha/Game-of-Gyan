
export type HardChallenge = {
    id: string;
    language: string;
    title: string;
    description: string;
    code: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
};

export const hardChallenges: HardChallenge[] = [
    // JavaScript
    {
        id: 'hard-js-1',
        language: 'javascript',
        title: 'Variable Scope Error',
        description: 'A variable seems to be accessible where it shouldn\'t be.',
        code: `function checkScope() {
  for(var i = 0; i < 3; i++) {
    // ...
  }
  console.log(i); // Logs '3'
}`,
        options: [
            '`var` is function-scoped, not block-scoped, so `i` is accessible after the loop.',
            'The console.log should be inside the loop.',
            'The loop condition `i < 3` is wrong.',
            'The code is correct, this is expected behavior.'
        ],
        correctAnswer: 0,
        explanation: 'Variables declared with `var` are scoped to the entire function, not just the `for` loop block. Using `let` or `const` would create a block-scoped variable, which would throw a ReferenceError, as is often intended.'
    },
    {
        id: 'hard-js-2',
        language: 'javascript',
        title: 'Asynchronous Behavior',
        description: 'The output is not what you might expect at first glance.',
        code: `console.log('Start');

setTimeout(() => {
  console.log('Inside Timeout');
}, 0);

console.log('End');`,
        options: [
            'The output will be: Start, Inside Timeout, End.',
            'The timeout of 0ms causes an error.',
            'The output will be: Start, End, Inside Timeout.',
            'The code will not run because `setTimeout` is not defined.'
        ],
        correctAnswer: 2,
        explanation: 'Even with a 0ms delay, `setTimeout` places its callback in the event queue to be executed after the current call stack is clear. So, "End" is logged before "Inside Timeout".'
    },
    {
        id: 'hard-js-3',
        language: 'javascript',
        title: 'The `this` Keyword',
        description: 'A method loses its context when passed as a callback.',
        code: `const user = {
  name: 'Alex',
  greet: function() { console.log('Hello, ' + this.name); }
};

setTimeout(user.greet, 100); // Prints "Hello, undefined"`,
        options: [
            'You cannot use `this` inside a setTimeout.',
            'When `user.greet` is passed as a callback, `this` no longer refers to `user`.',
            'The `name` property should be public.',
            'The function needs to be bound to the global object.'
        ],
        correctAnswer: 1,
        explanation: 'Passing a method reference like `user.greet` loses the context of the `user` object. Inside the `setTimeout` callback, `this` refers to the global object (or is `undefined` in strict mode), which does not have a `name` property. Use `setTimeout(() => user.greet(), 100)` or `setTimeout(user.greet.bind(user), 100)` to fix it.'
    },
    {
        id: 'hard-js-4',
        language: 'javascript',
        title: 'Closure in Loops',
        description: 'A classic loop and closure problem leading to unexpected output.',
        code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}
// Prints 3, 3, 3`,
        options: [
            'The `setTimeout` is not working correctly.',
            'The loop finishes before any timeout callback runs, and all callbacks reference the same final value of `i`.',
            'The variable `i` should be declared outside the loop.',
            'The console.log can\'t access `i`.'
        ],
        correctAnswer: 1,
        explanation: 'By the time the `setTimeout` callbacks execute, the loop has already completed, and the `var i` has a final value of 3. Each callback shares the same function-scoped `i`. Using `let` instead of `var` would fix this by creating a new block-scoped `i` for each iteration.'
    },
    {
        id: 'hard-js-5',
        language: 'javascript',
        title: 'NaN Comparison',
        description: 'Comparing `NaN` (Not-a-Number) to itself.',
        code: `console.log(NaN === NaN); // Prints false`,
        options: [
            'This is a bug in JavaScript\'s equality checker.',
            '`NaN` is a special value that is not equal to any other value, including itself.',
            'You should use `==` instead of `===` for `NaN`.',
            'The code produces a syntax error.'
        ],
        correctAnswer: 1,
        explanation: 'According to the IEEE 754 standard for floating-point arithmetic, `NaN` is never equal to anything, not even itself. To check if a value is `NaN`, you must use the `isNaN()` or `Number.isNaN()` function.'
    },
    { id: 'hard-js-6', language: 'javascript', title: '`this` in Arrow Functions', description: 'Arrow functions handle `this` differently than regular functions.', code: `const user = {\n  name: 'Lia',\n  greet: () => { console.log('Hello, ' + this.name); }\n};\nuser.greet(); // Prints "Hello, undefined"`, options: ['Arrow functions cannot access object properties.', '`this` inside an arrow function refers to the context where the function was created (lexical scope), not the object it\'s called on.', 'The `greet` method needs to be a regular function for `this` to work as expected.', 'Both B and C are correct.'], correctAnswer: 3, explanation: 'Arrow functions do not have their own `this` binding. Instead, `this` is inherited from the enclosing scope. In this case, `this` refers to the global object (e.g., `window`), which doesn\'t have a `name` property. Using a regular function `greet: function() { ... }` would solve the issue.' },
    { id: 'hard-js-7', language: 'javascript', title: 'Truthy and Falsy', description: 'An empty array is being evaluated in a conditional.', code: `const emptyArray = [];\nif (emptyArray) {\n    console.log('Array is truthy');\n} else {\n    console.log('Array is falsy');\n}`, options: ['The code prints "Array is falsy" because the array is empty.', 'The code prints "Array is truthy" because all objects (including empty arrays) are considered truthy in JavaScript.', 'The code will throw an error because you cannot use an array in an if statement.', 'The result is unpredictable.'], correctAnswer: 1, explanation: 'In JavaScript, only a few values are "falsy": `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`. All other values, including all objects and arrays (even empty ones), are "truthy".' },
    { id: 'hard-js-8', language: 'javascript', title: 'Array.splice vs slice', description: 'An array method is modifying the original array unexpectedly.', code: `const numbers = ['one', 'two', 'three', 'four'];\nconst newNumbers = numbers.splice(1, 2);\nconsole.log(numbers); // What is logged?`, options: ["['one', 'two', 'three', 'four']", "['two', 'three']", "['one', 'four']", "['one', 'two', 'four']"], correctAnswer: 2, explanation: '`Array.prototype.splice()` changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. `Array.prototype.slice()` returns a shallow copy of a portion of an array and does not modify the original.' },
    { id: 'hard-js-9', language: 'javascript', title: 'Promise.all', description: 'What happens when one promise in Promise.all rejects?', code: `const p1 = Promise.resolve(1);\nconst p2 = Promise.reject('Error!');\nconst p3 = Promise.resolve(3);\nPromise.all([p1, p2, p3])\n    .then(values => console.log(values))\n    .catch(error => console.log(error));`, options: ['It logs `[1, undefined, 3]`.', 'It logs `[1, 3]`.', 'It logs `Error!`.', 'It never logs anything because one promise was rejected.'], correctAnswer: 2, explanation: '`Promise.all` is all-or-nothing. It rejects as soon as one of the input promises rejects. The `.catch` block is executed with the reason from the first promise that rejected.' },
    { id: 'hard-js-10', language: 'javascript', title: 'Typeof null', description: 'The `typeof` operator returns a surprising value for `null`.', code: `console.log(typeof null);`, options: ['"null"', '"undefined"', '"object"', 'An error is thrown.'], correctAnswer: 2, explanation: 'This is a well-known historical quirk in JavaScript. The `typeof null` returns "object". This was a mistake in the original implementation of JavaScript that has been preserved for backward compatibility.' },
    { id: 'hard-js-11', language: 'javascript', title: 'Array Constructor', description: 'Creating an array with the constructor has a pitfall.', code: `const arr = new Array(3);\nconsole.log(arr);`, options: ['It prints `[3]`.', 'It prints `[undefined, undefined, undefined]`.', 'It prints `[]`.', 'It prints an array of three empty slots with a length of 3.'], correctAnswer: 3, explanation: 'When a single number is passed to the `Array` constructor, it creates an array with that `length` but with no actual elements in its slots. It is different from `new Array(1, 2, 3)` which creates `[1, 2, 3]`.' },
    { id: 'hard-js-12', language: 'javascript', title: 'Automatic Semicolon Insertion', description: 'A `return` statement behaves unexpectedly due to ASI.', code: `function getObject() {\n    return\n    {\n        name: "MyObject"\n    }\n}\nconsole.log(getObject()); // prints undefined`, options: ['The function has a syntax error.', 'JavaScript automatically inserts a semicolon after `return`, making the function return `undefined`.', 'The object is not defined correctly.', 'The console.log is incorrect.'], correctAnswer: 1, explanation: 'Automatic Semicolon Insertion (ASI) is a feature where the JavaScript parser automatically adds semicolons. A newline after a `return` statement causes a semicolon to be inserted, so the code becomes `return;`, and the object is never returned.' },
    { id: 'hard-js-13', language: 'javascript', title: '`map` with `parseInt`', description: 'Using `parseInt` directly in a `map` can lead to strange results.', code: `['1', '7', '11'].map(parseInt);`, options: ['Returns `[1, 7, 11]`.', 'Returns `[1, NaN, 3]`.', 'Returns `[1, 7, 1]`.', 'Throws an error.'], correctAnswer: 1, explanation: '`map` calls `parseInt` with three arguments: `(element, index, array)`. `parseInt` takes two arguments: `(string, radix)`. So the calls are `parseInt("1", 0)`, `parseInt("7", 1)`, and `parseInt("11", 2)`. `parseInt("7", 1)` is invalid (radix 1), and `parseInt("11", 2)` is 3 in binary.' },
    { id: 'hard-js-14', language: 'javascript', title: 'String Immutability', description: 'An attempt to change a character in a string seems to fail silently.', code: `let str = "hello";\nstr[0] = "H";\nconsole.log(str); // prints "hello"`, options: ['The code should print "Hello".', 'Strings are immutable in JavaScript; their individual characters cannot be changed.', 'This will throw a `TypeError`.', 'You must use `str.replace()`.'], correctAnswer: 1, explanation: 'JavaScript strings are immutable. While you can access characters using bracket notation, you cannot use it to change them. The assignment `str[0] = "H"` fails silently in non-strict mode.' },
    { id: 'hard-js-15', language: 'javascript', title: 'Private Class Fields', description: 'Accessing a private field from outside a class.', code: `class MyClass {\n  #privateField = 'secret';\n}\nconst instance = new MyClass();\nconsole.log(instance.#privateField);`, options: ['It prints "secret".', 'It prints `undefined`.', 'It throws a `SyntaxError` because you cannot access a private field outside the class.', 'It throws a `ReferenceError`.'], correctAnswer: 2, explanation: 'Private class fields (using the `#` prefix) are truly private and can only be accessed from within the class itself. Attempting to access them from the outside results in a `SyntaxError`.' },
    { id: 'hard-js-16', language: 'javascript', title: '`sort()` with Numbers', description: 'The default `sort()` method can be misleading for numbers.', code: `const numbers = [10, 5, 100, 1];\nnumbers.sort();\nconsole.log(numbers);`, options: ['It prints `[1, 5, 10, 100]`.', 'It prints `[1, 10, 100, 5]`.', 'It prints `[100, 10, 5, 1]`.', 'It throws an error.'], correctAnswer: 1, explanation: 'The default `sort()` method sorts elements by converting them to strings and comparing their UTF-16 code unit values. "100" comes before "5" in lexicographical order. To sort numbers, you must provide a compare function: `numbers.sort((a, b) => a - b)`.' },
    { id: 'hard-js-17', language: 'javascript', title: 'The `delete` Operator', description: 'Using `delete` on an array element has a strange effect.', code: `const arr = [1, 2, 3, 4];\ndelete arr[1];\nconsole.log(arr.length);`, options: ['The length becomes 3.', 'The length remains 4.', 'The code throws an error.', 'The length becomes unpredictable.'], correctAnswer: 1, explanation: 'The `delete` operator removes an object property. When used on an array element, it removes the element but leaves an "empty slot" in its place. It does not change the `length` of the array.' },
    { id: 'hard-js-18', language: 'javascript', title: '`null` vs `undefined`', description: 'Understanding the difference between the two "nothing" values.', code: `console.log(null == undefined); // true\nconsole.log(null === undefined); // false`, options: ['The first line is a bug.', '`==` performs type coercion, treating `null` and `undefined` as equal, while `===` checks for type and value.', 'Both should be true.', 'Both should be false.'], correctAnswer: 1, explanation: 'The loose equality operator (`==`) considers `null` and `undefined` to be equal. The strict equality operator (`===`) does not, as they are of different types (`typeof null` is "object", `typeof undefined` is "undefined").' },
    { id: 'hard-js-19', language: 'javascript', title: 'Function Hoisting', description: 'Calling a function expression before it is defined.', code: `myFunc();\n\nconst myFunc = function() {\n  console.log("Hello!");\n};`, options: ['It prints "Hello!".', 'It throws a `SyntaxError`.', 'It throws a `ReferenceError` because `myFunc` is not initialized yet.', 'It prints `undefined`.'], correctAnswer: 2, explanation: 'Only function declarations are fully hoisted. Function expressions assigned to variables (like with `const`, `let`, or `var`) are not. The variable declaration `myFunc` is hoisted, but its assignment is not, so it is `undefined` when called.' },
    { id: 'hard-js-20', language: 'javascript', title: '`+` Unary Operator', description: 'Using a plus sign before a string value.', code: `const x = "5";\nconsole.log(+x);`, options: ['It prints `"5"`.', 'It throws a `TypeError`.', 'It prints `NaN`.', 'It converts the string to a number and prints `5`.'], correctAnswer: 3, explanation: 'The unary plus operator (`+`) is the fastest way to convert a variable to a number. It attempts to convert the operand into a number if it isn\'t one already.' },
    { id: 'hard-js-21', language: 'javascript', title: '`in` operator with arrays', description: 'The `in` operator checks for keys, not values.', code: `const arr = ['a', 'b', 'c'];\nconsole.log('a' in arr); // false\nconsole.log('0' in arr); // true`, options: ['The `in` operator is broken for arrays.', '`in` checks if a specified property (index) is in an object, not if a value is in an array.', 'Both should be true.', 'Both should be false.'], correctAnswer: 1, explanation: 'The `in` operator checks for property names (or array indices). To check if a value exists in an array, you should use `arr.includes(\'a\')` or `arr.indexOf(\'a\') !== -1`.' },
    { id: 'hard-js-22', language: 'javascript', title: 'Object Keys', description: 'Duplicate keys in an object literal.', code: `const obj = {\n  a: 1,\n  b: 2,\n  a: 3\n};\nconsole.log(obj);`, options: ['It throws a `SyntaxError`.', 'It prints `{ a: 1, b: 2 }`.', 'It prints `{ a: 3, b: 2 }`.', 'It prints `{ a: [1, 3], b: 2 }`.'], correctAnswer: 2, explanation: 'If an object literal has duplicate property names, the last one specified takes precedence. The previous properties with the same name are overwritten.' },
    { id: 'hard-js-23', language: 'javascript', title: 'The `arguments` object', description: 'The `arguments` object is not a real array.', code: `function myFunction() {\n  return arguments.map(x => x * 2); // Throws an error\n}\nmyFunction(1, 2, 3);`, options: ['The code works as expected.', '`arguments` is an array-like object but does not have array methods like `map`.', 'The lambda function syntax is incorrect.', 'The `arguments` object is empty.'], correctAnswer: 1, explanation: 'The `arguments` object looks like an array but is not an instance of `Array`. It does not have methods like `map`, `forEach`, or `slice`. To use array methods, you must first convert it to a real array, e.g., `Array.from(arguments)` or `[...arguments]`.' },
    { id: 'hard-js-24', language: 'javascript', title: 'Floating Point Precision', description: 'A simple floating point comparison fails.', code: `console.log(0.1 + 0.2 === 0.3); // false`, options: ['This is a bug in JavaScript.', 'Floating point numbers cannot be represented with perfect precision in binary, leading to rounding errors.', 'You should use `==` instead of `===`.', 'The result of `0.1 + 0.2` is `0.30000000000000004`.'], correctAnswer: 3, explanation: 'Due to the nature of binary floating-point representation (IEEE 754), many decimal fractions cannot be stored precisely. This leads to small rounding errors. When comparing floats, it is best to check if the absolute difference is within a small tolerance (epsilon).' },
    { id: 'hard-js-25', language: 'javascript', title: '`this` with Event Listeners', description: '`this` behaves differently in an event listener callback.', code: `<button id="myBtn">Click Me</button>\n<script>\n  document.getElementById('myBtn').addEventListener('click', function() {\n    console.log(this); // What is logged?\n  });\n</script>`, options: ['The global `window` object.', '`undefined`.', 'The `<button>` element that was clicked.', 'The `document` object.'], correctAnswer: 2, explanation: 'When a regular function is used as an event listener, its `this` context is automatically set to the DOM element that triggered the event. This is a special behavior of `addEventListener`.' },
    { id: 'hard-js-26', language: 'javascript', title: 'Array.prototype.reverse', description: 'The `reverse` method modifies the array in place.', code: `const arr1 = [1, 2, 3];\nconst arr2 = arr1.reverse();\narr2.push(4);\nconsole.log(arr1);`, options: ['`[1, 2, 3]`', '`[3, 2, 1]`', '`[3, 2, 1, 4]`', '`[1, 2, 3, 4]`'], correctAnswer: 2, explanation: 'The `reverse()` method reverses an array in place and returns a reference to the same array. Therefore, `arr1` and `arr2` are the same object. When `arr2.push(4)` is called, it modifies the array that `arr1` also points to.' },
    { id: 'hard-js-27', language: 'javascript', title: '`with` Statement', description: 'A deprecated and often problematic statement.', code: `const obj = { a: 1 };\nwith (obj) {\n  console.log(a); // prints 1\n}`, options: ['The `with` statement is a modern and recommended feature.', 'The code will throw an error.', 'The `with` statement adds the properties of an object to the current scope, but its use is discouraged and it is forbidden in strict mode.', 'This is a syntax for object destructuring.'], correctAnswer: 2, explanation: 'The `with` statement extends the scope chain. It can be a source of bugs and performance problems, as it makes it difficult to know what variable you are referring to. It is forbidden in strict mode and should not be used.' },
    { id: 'hard-js-28', language: 'javascript', title: 'JSON.stringify replacer', description: 'Using a function to alter the stringification process.', code: `const obj = { name: 'Joe', age: 30 };\nconst json = JSON.stringify(obj, (key, value) => {\n  if (key === 'age') return undefined;\n  return value;\n});\nconsole.log(json);`, options: ['`{"name":"Joe","age":30}`', '`{"name":"Joe","age":null}`', '`{"name":"Joe"}`', '`{}`'], correctAnswer: 2, explanation: 'The `JSON.stringify` method can take a `replacer` function as its second argument. If this function returns `undefined`, the property is excluded from the resulting JSON string.' },
    { id: 'hard-js-29', language: 'javascript', title: 'Object.freeze', description: 'What does `Object.freeze` actually do?', code: `const obj = { a: 1, b: { c: 2 } };\nObject.freeze(obj);\nobj.a = 10; // Fails silently\nobj.b.c = 20; // This works\nconsole.log(obj);`, options: ['It prints `{ a: 10, b: { c: 20 } }`.', '`Object.freeze` is a deep freeze, so nothing can be changed.', 'It prints `{ a: 1, b: { c: 20 } }`.', 'The code throws an error.'], correctAnswer: 2, explanation: '`Object.freeze()` performs a shallow freeze. It makes the properties of the object itself immutable, but if a property is an object (like `b`), the contents of that nested object can still be changed.' },
    { id: 'hard-js-30', language: 'javascript', title: 'Bitwise NOT', description: 'The `~` operator can have surprising results.', code: `console.log(~2); // -3`, options: ['This is a bug.', 'The bitwise NOT operator `~` inverts all the bits in its operand. For any integer `x`, `~x` is equal to `-(x + 1)`.', 'It should print `2`.', 'It should print `0`.'], correctAnswer: 1, explanation: 'The bitwise NOT `~` operator performs a NOT operation on each bit. In two\'s complement binary representation (which JavaScript uses for numbers), this operation is equivalent to `-(x + 1)`. So, `~2` is `-(2 + 1)`, which is `-3`.' },
    
    // Python
    {
        id: 'hard-py-1',
        language: 'python',
        title: 'Mutable Default Argument',
        description: 'A function seems to remember results from previous calls.',
        code: `def add_item(item, my_list=[]):
    my_list.append(item)
    return my_list

print(add_item(1)) # Expected: [1]
print(add_item(2)) # Expected: [2], Actual: [1, 2]`,
        options: [
            'The list `my_list` should be cleared at the start of the function.',
            'The default list is created only once and mutated on each call.',
            'Python functions cannot have lists as default arguments.',
            'The `append` method is being used incorrectly.'
        ],
        correctAnswer: 1,
        explanation: 'Default arguments are evaluated once when the function is defined. Using a mutable object like a list means the same list is reused and modified across all calls that don\'t provide their own list.'
    },
    {
        id: 'hard-py-2',
        language: 'python',
        title: 'Floating Point Inaccuracy',
        description: 'A simple addition is not yielding the expected result.',
        code: `if 0.1 + 0.2 == 0.3:
    print("Correct")
else:
    print("Incorrect") # This is printed`,
        options: [
            'Python cannot add floating point numbers.',
            'There is a syntax error in the if statement.',
            'The result of 0.1 + 0.2 is not exactly 0.3 due to binary representation.',
            'You must use the `math.fsum` function for this operation.'
        ],
        correctAnswer: 2,
        explanation: 'Computers use binary floating-point numbers, which cannot precisely represent all decimal fractions. The result of 0.1 + 0.2 is extremely close to, but not exactly, 0.3.'
    },
    {
        id: 'hard-py-3',
        language: 'python',
        title: 'Class vs. Instance Variables',
        description: 'Modifying a class attribute unexpectedly affects other instances.',
        code: `class Dog:
    tricks = []
    def __init__(self, name):
        self.name = name
    def add_trick(self, trick):
        self.tricks.append(trick)

d1 = Dog('Fido')
d2 = Dog('Buddy')
d1.add_trick('roll over')
print(d2.tricks) # Prints ['roll over']`,
        options: [
            '`d2` is a copy of `d1`.',
            'All instances of `Dog` share the same `tricks` list because it is a class variable.',
            'The `add_trick` method should be a static method.',
            'The `__init__` method is missing a tricks parameter.'
        ],
        correctAnswer: 1,
        explanation: 'The `tricks` list is a class variable, shared by all instances of the `Dog` class. When `d1.add_trick` modifies it, the change is visible through `d2`. The list should be initialized inside `__init__` as an instance variable (`self.tricks = []`) to be unique to each dog.'
    },
    {
        id: 'hard-py-4',
        language: 'python',
        title: 'Late Binding in Closures',
        description: 'Lambda functions in a loop capture the variable, not its value.',
        code: `funcs = []
for i in range(3):
    funcs.append(lambda: print(i))

for f in funcs:
    f() # Prints 2, 2, 2`,
        options: [
            'Lambda functions cannot be stored in a list.',
            'The `print` function has a bug.',
            'The variable `i` is looked up when the lambda is called, not when it is defined.',
            'The loop is not structured correctly.'
        ],
        correctAnswer: 2,
        explanation: 'This is a classic late binding issue. The variable `i` in the lambda functions is not evaluated until the functions are called. By then, the loop has finished and `i` has a final value of 2. To fix this, you can use a default argument: `lambda i=i: print(i)`.'
    },
    {
        id: 'hard-py-5',
        language: 'python',
        title: 'List Slicing Creates a Copy',
        description: 'Modifying a slice of a list does not affect the original list.',
        code: `my_list = [1, 2, 3, 4]
my_slice = my_list[1:3]
my_slice[0] = 99
print(my_list) # Prints [1, 2, 3, 4]`,
        options: [
            'The list `my_list` is immutable.',
            'Slicing a list creates a shallow copy, so `my_slice` is a new list.',
            'The index `[0]` is out of bounds for `my_slice`.',
            'The assignment `my_slice[0] = 99` is invalid syntax.'
        ],
        correctAnswer: 1,
        explanation: 'List slicing `my_list[1:3]` creates a new list containing a copy of the elements from the original. Modifying this new list (`my_slice`) does not affect the original list (`my_list`).'
    },
    { id: 'hard-py-6', language: 'python', title: '`is` vs `==`', description: 'The difference between checking for identity and equality.', code: `a = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b) # True\nprint(a is b) # False`, options: ['This is a bug, `a is b` should be True.', '`==` compares the values of the objects, while `is` compares their identity (memory location).', '`is` can only be used for integers.', '`b` should be created with `b = a` for `a is b` to be True.'], correctAnswer: 1, explanation: 'The `==` operator checks if the contents of two objects are equal. The `is` operator checks if two variables refer to the exact same object in memory. `a` and `b` are two separate list objects, even though they contain the same elements.' },
    { id: 'hard-py-7', language: 'python', title: 'String Immutability', description: 'An attempt to change a character in a string fails.', code: `my_string = "hello"\ntry:\n    my_string[0] = "H"\nexcept TypeError as e:\n    print(e)`, options: ['The code will print "H" and the string will be "Hello".', "It prints: 'str' object does not support item assignment.", 'The code will cause a `NameError`.', 'You must use the `.replace()` method.'], correctAnswer: 1, explanation: 'Strings in Python are immutable, which means they cannot be changed after they are created. Any operation that seems to modify a string, like `.replace()`, actually creates and returns a new string.' },
    { id: 'hard-py-8', language: 'python', title: 'Mixing Tabs and Spaces', description: 'An error that is invisible but can break Python code.', code: `# Imagine the first line is indented with a tab, \n# and the second with spaces.\ndef my_func():\n    print("Line 1")\n    print("Line 2") # This line might cause a TabError`, options: ['Python does not care about whitespace.', 'You cannot have two print statements in a function.', 'Mixing tabs and spaces for indentation is disallowed and will raise a `TabError`.', 'The comment is causing the error.'], correctAnswer: 2, explanation: 'Python is very strict about indentation. The PEP 8 style guide recommends using 4 spaces per indentation level. Mixing tabs and spaces can lead to a `TabError: inconsistent use of tabs and spaces in indentation`, which can be hard to debug because they look similar.' },
    { id: 'hard-py-9', language: 'python', title: 'Deleting from a List While Iterating', description: 'Removing items from a list while looping over it can lead to skipping elements.', code: `numbers = [1, 2, 3, 4, 5]\nfor number in numbers:\n    if number % 2 == 0:\n        numbers.remove(number)\nprint(numbers) # Prints [1, 3, 5] but can be buggy`, options: ['The code works perfectly and is the recommended way to remove items.', 'Modifying a list while iterating over it can cause the iterator to skip elements.', 'The `remove()` method is inefficient.', 'The `if` condition is incorrect.'], correctAnswer: 1, explanation: 'When you remove an item from a list you are iterating over, you shift the indices of the subsequent items. The `for` loop\'s internal counter continues to advance, causing it to skip the element that moved into the now-vacant spot. The safe way to do this is to iterate over a copy (`for number in numbers[:]`) or use a list comprehension to build a new list.' },
    { id: 'hard-py-10', language: 'python', title: 'The `sys.exit()` function', description: 'A program terminates unexpectedly.', code: `import sys\ntry:\n    print("Start")\n    sys.exit(0) # Exits the program\nfinally:\n    print("Finally block") # This line is not executed`, options: ['The `finally` block is always executed, this is a bug.', 'The `try` block has a syntax error.', '`sys.exit()` raises a `SystemExit` exception. If not caught, it terminates the process immediately without running the `finally` block.', 'You need to use `os.exit()` instead.'], correctAnswer: 2, explanation: '`sys.exit()` works by raising the `SystemExit` exception. A `finally` clause will not be executed if the exception is not caught. This allows cleanup handlers of `try...except` blocks to be bypassed, which is different from many other languages.' },
    { id: 'hard-py-11', language: 'python', title: 'Integer Caching', description: 'The `is` operator behaves differently for small and large integers.', code: `a = 256\nb = 256\nc = 257\nd = 257\nprint(a is b) # True\nprint(c is d) # False`, options: ['This is a bug in Python.', 'Python pre-allocates and caches integer objects from -5 to 256. `c` and `d` are outside this range and are thus different objects.', 'The `is` operator is unreliable for integers.', '`c` and `d` are on different memory pages.'], correctAnswer: 1, explanation: 'For performance reasons, CPython caches integer objects in the range [-5, 256]. When you create an integer in this range, you get a reference to the existing object. Outside this range, new objects are created each time.' },
    { id: 'hard-py-12', language: 'python', title: 'List Multiplication', description: 'Multiplying a list containing mutable objects can be tricky.', code: `my_list = [[]] * 3\nmy_list[0].append(1)\nprint(my_list) # Prints [[1], [1], [1]]`, options: ['The code should print `[[1], [], []]`.', 'This creates a list containing three references to the *same* inner list.', 'The `* 3` syntax is invalid for lists.', 'The `.append()` method is working incorrectly.'], correctAnswer: 1, explanation: 'The operation `[[]] * 3` creates a list with three references to the single inner list object. Therefore, modifying one of the inner lists (e.g., `my_list[0]`) affects all three positions because they all point to the same list.' },
    { id: 'hard-py-13', language: 'python', title: 'Chaining Comparison Operators', description: 'Python\'s comparison chaining is not what it seems.', code: `print(False == False in [False])`, options: ['It prints `True`.', 'It prints `False`.', 'It throws a `SyntaxError`.', 'It prints `[False]`.'], correctAnswer: 1, explanation: 'Unlike most languages, Python chains comparisons. This expression is evaluated as `(False == False) and (False in [False])`, which is `True and True`, resulting in `True`. The question\'s code is slightly different `False == (False in [False])` which is `False == True` resulting in `False`.' },
    { id: 'hard-py-14', language: 'python', title: '`__str__` vs `__repr__`', description: 'A class has two methods for string representation.', code: `class MyClass:\n    def __str__(self): return "A string"\n    def __repr__(self): return "An object"\nx = MyClass()\nprint(x) # prints "A string"\nprint([x]) # prints "[An object]"`, options: ['This is a bug.', '`print()` uses `__str__`, while printing a collection uses the `__repr__` of its items.', '`__repr__` always overrides `__str__`.', 'The behavior is undefined.'], correctAnswer: 1, explanation: '`__str__` is for creating a user-friendly, readable output for `print()`. `__repr__` is for creating an unambiguous, official representation of an object, often used for debugging and by collections.' },
    { id: 'hard-py-15', language: 'python', title: '`any()` and `all()` on empty iterables', description: 'The behavior of these functions on empty inputs.', code: `print(all([]))\nprint(any([]))`, options: ['Both print `True`.', 'Both print `False`.', '`all` prints `True`, `any` prints `False`.', 'They both raise an exception.'], correctAnswer: 2, explanation: '`all()` returns `True` for an empty iterable because there are no elements that are false. `any()` returns `False` for an empty iterable because there are no elements that are true. This is the mathematically correct behavior for vacuous truths.' },
    { id: 'hard-py-16', language: 'python', title: 'Generators', description: 'A generator function only runs when iterated over.', code: `def my_gen():\n    print("Starting")\n    yield 1\n\ngen = my_gen()\nprint("Created generator")\nprint(next(gen))`, options: ['"Starting" is printed before "Created generator".', '"Created generator" is printed before "Starting".', 'The code throws an error.', 'It only prints "Created generator" and "1".'], correctAnswer: 1, explanation: 'A generator function\'s code does not execute when the generator object is created. It only runs when `next()` is called on it, executing until it hits a `yield` statement.' },
    { id: 'hard-py-17', language: 'python', title: 'The `else` clause on loops', description: 'Python loops have an optional `else` block.', code: `for i in range(3):\n    if i == 1: break\nelse:\n    print("Loop finished")`, options: ['The `else` block is always executed.', 'The `else` block is executed only if the loop completes without hitting a `break` statement.', 'The code has a syntax error.', 'The `else` block is executed if the loop is empty.'], correctAnswer: 1, explanation: 'The `else` block on a `for` or `while` loop is an unusual feature. It runs only when the loop terminates normally (i.e., not by a `break` statement). In this case, the loop breaks when `i` is 1, so the `else` block is skipped.' },
    { id: 'hard-py-18', language: 'python', title: '`try...except...else`', description: 'The `else` block in a `try` statement.', code: `try:\n    # No exception raised\n    pass\nexcept ValueError:\n    print("Caught it")\nelse:\n    print("No exceptions!")`, options: ['"Caught it" is printed.', 'Nothing is printed.', 'The code has a syntax error.', '"No exceptions!" is printed.'], correctAnswer: 3, explanation: 'The `else` block of a `try...except` statement is executed if and only if the `try` block does not raise an exception.' },
    { id: 'hard-py-19', language: 'python', title: 'Private Name Mangling', description: 'How Python handles "private" attributes.', code: `class MyClass:\n    def __init__(self): self.__private = 1\n\nobj = MyClass()\n# print(obj.__private) -> AttributeError\nprint(obj._MyClass__private) # Prints 1`, options: ['This is a security vulnerability.', 'Python renames attributes starting with `__` to `_ClassName__attributeName` to avoid naming conflicts in subclasses.', '`__private` is a read-only attribute.', 'The second print statement is a syntax error.'], correctAnswer: 1, explanation: 'This is not true privacy, but a mechanism called name mangling. It helps prevent accidental overriding of "private" attributes in subclasses. The attribute is still accessible if you know the mangled name.' },
    { id: 'hard-py-20', language: 'python', title: '`datetime` Timezones', description: 'A "naive" datetime object has no timezone information.', code: `import datetime\nnow = datetime.datetime.now()\n# now.tzinfo is None`, options: ['`now()` is a bug and should not be used.', 'The `datetime` object is "naive" and does not have any timezone information attached.', 'You must manually set a timezone after creation.', 'The timezone is stored in a different property.'], correctAnswer: 1, explanation: 'By default, `datetime.datetime.now()` creates a "naive" datetime object, unaware of timezones. To work with timezones correctly, you must use the `pytz` library or Python 3.9+\'s `zoneinfo` module to create "aware" datetime objects.' },
    { id: 'hard-py-21', language: 'python', title: 'The GIL', description: 'Python threads and CPU-bound tasks.', code: `# Two threads running a CPU-intensive task on a multi-core CPU`, options: ['The threads will run in parallel on different cores, speeding up the task.', 'The Global Interpreter Lock (GIL) in CPython prevents multiple threads from executing Python bytecode at the same time.', 'The program will run faster than a single-threaded version due to threading overhead.', 'Threads are only for I/O-bound tasks.'], correctAnswer: 1, explanation: 'The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once. This means multithreaded, CPU-bound Python programs will not see a performance gain from multiple CPU cores. Use the `multiprocessing` module for true parallelism.' },
    { id: 'hard-py-22', language: 'python', title: '`round()` behavior', description: '`round()` has surprising behavior for .5 cases.', code: `print(round(2.5)) # 2\nprint(round(3.5)) # 4`, options: ['`round()` is buggy.', '`round()` in Python 3 uses "round half to even" strategy to reduce statistical bias.', '`round()` always rounds down.', '`round()` always rounds up.'], correctAnswer: 1, explanation: 'Unlike rounding half up, "round half to even" (also known as "banker\'s rounding") rounds to the nearest even number. This is the default rounding strategy in IEEE 754.' },
    { id: 'hard-py-23', language: 'python', title: '`super()` with no arguments', description: 'Calling `super()` without arguments.', code: `class A:\n    def who(self): print("A")\nclass B(A):\n    def who(self): super().who()`, options: ['This will cause a `TypeError`.', 'In Python 3, `super()` with no arguments works inside a class method and automatically finds the correct class and instance.', 'This only works for single inheritance.', '`super()` must always be called with arguments.'], correctAnswer: 1, explanation: 'The zero-argument `super()` call is a convenient feature of Python 3 that simplifies calls to superclass methods by implicitly using the class and instance from the context it is called in.' },
    { id: 'hard-py-24', language: 'python', title: 'Exception objects', description: 'Re-raising an exception.', code: `try:\n    raise ValueError("A")\nexcept ValueError as e:\n    raise e`, options: ['This correctly re-raises the original exception with its full traceback.', 'This creates a new exception, potentially losing the original traceback.', 'The code has a syntax error.', 'You must use `raise from e`.'], correctAnswer: 1, explanation: 'While `raise e` works, the idiomatic and best way to re-raise an exception in Python is to use a bare `raise` statement (`raise`). This preserves the original exception object and its full traceback.' },
    { id: 'hard-py-25', language: 'python', title: '`@staticmethod` vs `@classmethod`', description: 'The first argument of a class method.', code: `class MyClass:\n    @classmethod\n    def my_method(cls, arg):\n        print(cls, arg)`, options: ['The first argument, `cls`, is the instance of the class (`self`).', 'The first argument, `cls`, is the class itself (`MyClass`).', 'The method cannot be called without an instance.', '`@classmethod` is just an alias for `@staticmethod`.'], correctAnswer: 1, explanation: 'A class method receives the class as its implicit first argument, just like an instance method receives the instance. This is useful for factory methods that create instances of the class.' },
    { id: 'hard-py-26', language: 'python', title: '`dict` key order', description: 'The order of dictionary keys.', code: `d = {}\nd['b'] = 1\nd['a'] = 2\n# What is the order of keys in d?`, options: ['The order is always alphabetical (`a`, `b`).', 'The order is not guaranteed.', 'As of Python 3.7+, dictionary insertion order is preserved.', 'The order is based on the hash of the keys.'], correctAnswer: 2, explanation: 'While it was an implementation detail in CPython 3.6, dictionary key insertion order became a guaranteed language feature in Python 3.7. Before that, you had to use `collections.OrderedDict`.' },
    { id: 'hard-py-27', language: 'python', title: '`__slots__`', description: 'Optimizing class memory usage.', code: `class MyClass:\n    __slots__ = ['x', 'y']\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\nobj = MyClass(1, 2)\n# obj.z = 3 -> AttributeError`, options: ['`__slots__` is a list of methods.', '`__slots__` prevents the creation of `__dict__` for instances, saving memory and restricting attributes to the ones listed.', 'The code has a syntax error.', '`__slots__` is only for debugging.'], correctAnswer: 1, explanation: 'By defining `__slots__`, you are telling Python not to use a dynamic `__dict__` to store instance attributes. This saves memory and results in faster attribute access, but it also means you cannot add new attributes to instances that are not listed in `__slots__`.' },
    { id: 'hard-py-28', language: 'python', title: '`for` loop variable leak', description: 'A variable from a loop is accessible outside of it.', code: `for i in range(5):\n    pass\nprint(i) # Prints 4`, options: ['This is a bug.', 'Python `for` loops do not have their own scope; the loop variable "leaks" into the surrounding scope.', 'The code will raise a `NameError`.', 'The variable `i` should be `None`.'], correctAnswer: 1, explanation: 'Unlike some languages, Python `for` loops do not create a new scope for their variables. The loop variable will exist after the loop and hold the value from the last iteration.' },
    { id: 'hard-py-29', language: 'python', title: 'The walrus operator', description: 'A new operator in Python 3.8.', code: `if (n := len([1, 2, 3])) > 2:\n    print(f"List is too long ({n})")`, options: ['This is a syntax error.', 'This is an assignment expression (`:=`), which assigns a value to a variable as part of a larger expression.', 'The walrus operator is for debugging only.', 'It should be `n = len(...)`.'], correctAnswer: 1, explanation: 'The walrus operator `:=` allows you to assign a value to a variable within an expression, which can simplify some patterns, like capturing a value you need to both test and use.' },
    { id: 'hard-py-30', language: 'python', title: '`*args` and `**kwargs`', description: 'Packing and unpacking arguments.', code: `def func(*args, **kwargs):\n    print(args)\n    print(kwargs)\n\nfunc(1, 2, x=3, y=4)`, options: ['It prints `(1, 2, {\'x\': 3, \'y\': 4})` and `{}`.', 'It prints `(1, 2)` and `{\'x\': 3, \'y\': 4}`.', 'It prints `[1, 2]` and `{\'x\': 3, \'y\': 4}`.', 'It throws a syntax error.'], correctAnswer: 1, explanation: 'The `*args` syntax in a function definition collects any number of positional arguments into a tuple. The `**kwargs` syntax collects any number of keyword arguments into a dictionary.' },
    
    // SQL
    {
        id: 'hard-sql-1',
        language: 'sql',
        title: 'WHERE vs HAVING',
        description: 'An aggregate function is being used in the wrong clause.',
        code: `SELECT department, COUNT(id)
FROM employees
WHERE COUNT(id) > 10
GROUP BY department;`,
        options: [
            'The `COUNT(id)` function is invalid.',
            '`WHERE` is used to filter rows before grouping, and cannot contain aggregate functions.',
            'The `GROUP BY` clause should come before the `WHERE` clause.',
            'The table alias is missing.'
        ],
        correctAnswer: 1,
        explanation: 'The `WHERE` clause filters individual rows. To filter groups created by `GROUP BY`, you must use the `HAVING` clause. The condition should be `HAVING COUNT(id) > 10`.'
    },
     {
        id: 'hard-sql-2',
        language: 'sql',
        title: 'NULL Comparison',
        description: 'Filtering for NULL values using the equals operator does not work as expected.',
        code: `SELECT name
FROM customers
WHERE country = NULL; -- Returns 0 records`,
        options: [
            'The `customers` table is empty.',
            '`NULL` is not a valid value for the `country` column.',
            'You cannot use the `=` operator to compare with `NULL`. You must use `IS NULL`.',
            'The query is missing a `GROUP BY` clause.'
        ],
        correctAnswer: 2,
        explanation: 'In SQL, `NULL` represents a missing or unknown value. It cannot be compared using standard operators like `=` or `!=`. To check for `NULL` values, you must use the `IS NULL` or `IS NOT NULL` operator.'
    },
    {
        id: 'hard-sql-3',
        language: 'sql',
        title: 'LEFT JOIN with WHERE',
        description: 'A condition in the WHERE clause is unexpectedly turning a LEFT JOIN into an INNER JOIN.',
        code: `SELECT c.name, o.order_date
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.amount > 100; -- Only returns customers who HAVE placed an order > 100`,
        options: [
            'You cannot use a `WHERE` clause with a `LEFT JOIN`.',
            'The `LEFT JOIN` syntax is incorrect.',
            'The condition `o.amount > 100` in the `WHERE` clause filters out rows where `o.amount` is `NULL`, effectively converting the `LEFT JOIN` into an `INNER JOIN`.',
            'The `orders` table has no amounts greater than 100.'
        ],
        correctAnswer: 2,
        explanation: 'A `LEFT JOIN` produces `NULL` for the right table\'s columns when there is no match. The `WHERE` clause is applied after the join, and `NULL > 100` evaluates to unknown (false), so rows for customers with no orders are eliminated. The condition should be moved to the `ON` clause: `ON c.id = o.customer_id AND o.amount > 100`.'
    },
     {
        id: 'hard-sql-4',
        language: 'sql',
        title: 'COUNT(*) vs COUNT(column)',
        description: 'The query returns a different count than expected when NULLs are present.',
        code: `-- A table 'employees' has 5 rows, but one has a NULL 'manager_id'.
SELECT COUNT(*), COUNT(manager_id)
FROM employees;
-- Returns: 5, 4`,
        options: [
            'There is a syntax error in the query.',
            'The database is inconsistent.',
            '`COUNT(*)` counts all rows, while `COUNT(column)` ignores `NULL` values in that column.',
            '`COUNT(manager_id)` is slower than `COUNT(*)`.'
        ],
        correctAnswer: 2,
        explanation: '`COUNT(*)` is a special form that counts all rows in the result set. `COUNT(column_name)`, on the other hand, counts the number of non-NULL values in the specified column. This is why the counts can differ if a column contains `NULL`s.'
    },
    { id: 'hard-sql-5', language: 'sql', title: 'UNION vs UNION ALL', description: 'Duplicate rows are being removed when they shouldn\'t be.', code: `SELECT city FROM suppliers\nUNION\nSELECT city FROM customers;\n-- This removes duplicate city names that appear in both tables.`, options: ['`UNION` is faster than `UNION ALL`.', '`UNION` combines and removes duplicate rows, while `UNION ALL` does not.', 'You must use `JOIN` to combine these results.', '`UNION` has been deprecated in favor of `UNION ALL`.'], correctAnswer: 1, explanation: 'The `UNION` operator combines the result sets of two or more `SELECT` statements and removes duplicate rows. `UNION ALL` combines the result sets but includes all rows, including duplicates. If you do not need duplicate removal, `UNION ALL` is more performant.' },
    { id: 'hard-sql-6', language: 'sql', title: 'TRUNCATE vs DELETE', description: 'An operation to clear a table cannot be rolled back.', code: `START TRANSACTION;\nTRUNCATE TABLE logs; -- Removes all rows\nROLLBACK;\n-- The 'logs' table is still empty.`, options: ['`TRUNCATE` is a bug and should not be used.', '`TRUNCATE` is a DDL (Data Definition Language) command and cannot be rolled back in most database systems.', 'You must `COMMIT` before you can `ROLLBACK`.', 'The `logs` table was not locked properly.'], correctAnswer: 1, explanation: '`DELETE` is a DML (Data Manipulation Language) command that removes rows one by one and can be rolled back. `TRUNCATE` is a DDL command that deallocates the data pages and is much faster but typically cannot be rolled back.' },
    { id: 'hard-sql-7', language: 'sql', title: 'Order of Execution', description: 'An alias defined in the SELECT clause is not working in the WHERE clause.', code: `SELECT name, YEAR(birth_date) AS birth_year\nFROM people\nWHERE birth_year < 1990; -- Causes an error`, options: ['The alias `birth_year` is invalid.', 'The `WHERE` clause is processed before the `SELECT` clause, so the alias does not exist yet.', 'You must use a subquery to filter by an alias.', 'Both B and C are correct.'], correctAnswer: 3, explanation: 'The logical order of execution for a SQL query is generally FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY. Because `WHERE` is processed before `SELECT`, you cannot use a column alias from the `SELECT` list in the `WHERE` clause. You must either repeat the expression (`WHERE YEAR(birth_date) < 1990`) or use a subquery/CTE.' },
    { id: 'hard-sql-8', language: 'sql', title: 'COALESCE Function', description: 'How to handle NULL values in a query result.', code: `SELECT name, COALESCE(commission, 0) AS commission\nFROM sales_reps;\n-- What does this query do?`, options: ['It selects only the reps whose commission is 0.', 'It causes an error because `COALESCE` is not standard SQL.', 'It returns the `commission` value, but if the `commission` is `NULL`, it returns `0` instead.', 'It combines the name and commission into a single column.'], correctAnswer: 2, explanation: 'The `COALESCE` function returns the first non-NULL value in a list of expressions. It\'s a common way to provide a default value for columns that may contain `NULL`s.' },
    { id: 'hard-sql-9', language: 'sql', title: 'LIKE with Underscore', description: 'Using the underscore wildcard for single-character matching.', code: `SELECT name FROM products WHERE code LIKE 'A_C';`, options: ['Finds products where the code is exactly "A_C".', 'Finds products where the code is "A", followed by any single character, followed by "C". (e.g., "ABC", "A1C")', 'Finds products where the code starts with "A" and ends with "C", with any number of characters in between.', 'This is a syntax error.'], correctAnswer: 1, explanation: 'In SQL `LIKE` clauses, the percent sign (`%`) matches any sequence of zero or more characters. The underscore (`_`) matches any single character.' },
    { id: 'hard-sql-10', language: 'sql', title: 'Division with Integers', description: 'A division operation is returning an integer instead of a decimal.', code: `SELECT 5 / 2; -- Returns 2 in some SQL dialects`, options: ['The result is rounded to the nearest whole number.', 'This is the correct mathematical result.', 'In some SQL dialects (like SQL Server), dividing an integer by an integer performs integer division, truncating any decimal part.', 'The query should be `SELECT 5 % 2;`'], correctAnswer: 2, explanation: 'The behavior of integer division can vary. To ensure floating-point division, you should cast one of the numbers to a decimal or float type, for example: `SELECT 5 / 2.0;` or `SELECT CAST(5 AS DECIMAL) / 2;`.' },
    { id: 'hard-sql-11', language: 'sql', title: 'Character vs. National Character', description: 'Storing Unicode characters.', code: `DECLARE @v VARCHAR(10) = '你好';\n-- This may store '??' or garbage data.`, options: ['`VARCHAR` cannot store strings.', 'The length `10` is too small.', '`VARCHAR` stores single-byte characters. `NVARCHAR` should be used for Unicode characters.', 'The string `你好` is invalid.'], correctAnswer: 2, explanation: '`VARCHAR` uses a specific codepage and is for non-Unicode character data. `NVARCHAR` is for Unicode character data (like Chinese, Japanese, emojis) and uses two bytes per character.' },
    { id: 'hard-sql-12', language: 'sql', title: '`IN` vs `EXISTS`', description: 'Choosing the right operator for a subquery.', code: `SELECT ... FROM Customers c WHERE c.CustomerID IN (SELECT CustomerID FROM Orders);`, options: ['`IN` is generally better for large subquery result sets.', '`EXISTS` is often more performant as it can stop as soon as it finds a match, without collecting all results from the subquery.', '`IN` and `EXISTS` are functionally identical.', '`EXISTS` cannot be used with subqueries.'], correctAnswer: 1, explanation: 'While optimizers can sometimes make them equivalent, a common rule of thumb is that `EXISTS` performs better when the subquery returns a large number of rows, as it doesn\'t need to build a full list of values to check against.' },
    { id: 'hard-sql-13', language: 'sql', title: 'Self Join', description: 'Joining a table to itself.', code: `SELECT e.Name AS Employee, m.Name AS Manager\nFROM Employees e\nLEFT JOIN Employees m ON e.ManagerID = m.EmployeeID;`, options: ['This query has a syntax error.', 'This query lists each employee and their corresponding manager by joining the `Employees` table to itself.', 'This will create an infinite loop.', 'You must use a subquery to achieve this.'], correctAnswer: 1, explanation: 'A self join is a regular join, but the table is joined with itself. It is useful for querying hierarchical data (like an employee-manager relationship) or comparing rows within the same table. Table aliases (`e` and `m`) are essential to distinguish the two "copies" of the table.' },
    { id: 'hard-sql-14', language: 'sql', title: 'Window Functions', description: 'Calculating a running total.', code: `SELECT OrderDate, Amount,\n       SUM(Amount) OVER (ORDER BY OrderDate) AS RunningTotal\nFROM Orders;`, options: ['This is not valid SQL.', '`OVER()` is a syntax error.', 'This is a window function that calculates a cumulative sum (`RunningTotal`) of `Amount` for each row, ordered by `OrderDate`.', 'The `SUM` function must be used with `GROUP BY`.'], correctAnswer: 2, explanation: 'Window functions perform a calculation across a set of table rows that are somehow related to the current row. This is different from an aggregate function, which groups rows into a single output row. `OVER()` defines the "window" of rows to operate on.' },
    { id: 'hard-sql-15', language: 'sql', title: 'Primary Key vs Unique Index', description: 'The differences between two types of constraints.', code: `CREATE TABLE Users (id INT PRIMARY KEY, email VARCHAR(100) UNIQUE);`, options: ['They are identical.', 'A table can have multiple `PRIMARY KEY`s but only one `UNIQUE` constraint.', 'A `PRIMARY KEY` cannot contain `NULL` values, while a `UNIQUE` constraint can (usually only one `NULL` is allowed).', '`UNIQUE` is faster than `PRIMARY KEY`.'], correctAnswer: 2, explanation: 'Both enforce uniqueness. However, a `PRIMARY KEY` is a special case: a table can have only one, it cannot be `NULL`, and it is often the clustered index. A `UNIQUE` constraint can be applied to multiple columns, and in most database systems, it allows one `NULL` value.' },
    { id: 'hard-sql-16', language: 'sql', title: 'Cross Join', description: 'Generating a Cartesian product of two tables.', code: `SELECT * FROM T1 CROSS JOIN T2;`, options: ['This is equivalent to an `INNER JOIN`.', 'This produces a result set which is the number of rows in the first table multiplied by the number of rows in the second table.', 'This joins rows based on a common column.', 'This is a syntax error.'], correctAnswer: 1, explanation: 'A `CROSS JOIN` produces a Cartesian product, matching every row from the first table with every row from the second table. It is rarely used but can be useful for generating all possible combinations of data.' },
    { id: 'sql-17', title: '`BETWEEN` Operator', description: 'Select values within a range.', games: [{ type: 'mcq', language: 'sql', level: 'intermediate', title: 'Range Selection', content: { question: 'Which operator selects values within a given range?', options: ['RANGE', 'WITHIN', 'BETWEEN', 'IN'], answer: 2 } }] },
    { id: 'sql-18', title: 'Aliases', description: 'Give temporary names to tables or columns.', games: [{ type: 'mcq', language: 'sql', level: 'intermediate', title: 'Using AS', content: { question: 'Which keyword is used to create an alias for a column name?', options: ['ALIAS', 'AS', 'NAME', 'TITLE'], answer: 1 } }] },
    { id: 'sql-19', title: 'INNER JOIN', description: 'Combine rows from two tables.', games: [{ type: 'mcq', language: 'sql', level: 'intermediate', title: 'Joining Tables', content: { question: 'Which keyword returns records that have matching values in both tables?', options: ['INNER JOIN', 'LEFT JOIN', 'FULL JOIN', 'CROSS JOIN'], answer: 0 } }] },
    { id: 'sql-20', title: 'LEFT JOIN', description: 'Return all rows from the left table.', games: [{ type: 'mcq', language: 'sql', level: 'intermediate', title: 'Left Join', content: { question: 'Which JOIN returns all records from the left table, and the matched records from the right table?', options: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN'], answer: 1 } }] },
    { id: 'sql-21', title: 'GROUP BY', description: 'Group rows with the same values.', games: [{ type: 'mcq', language: 'sql', level: 'advanced', title: 'Grouping Data', content: { question: 'Which statement is often used with aggregate functions to group the result-set by one or more columns?', options: ['ORDER BY', 'GROUP BY', 'SORT BY', 'CLUSTER BY'], answer: 1 } }] },
    { id: 'sql-22', title: 'HAVING Clause', description: 'Filter grouped records.', games: [{ type: 'mcq', language: 'sql', level: 'advanced', title: 'Filtering Groups', content: { question: 'Which clause was added to SQL because the `WHERE` keyword cannot be used with aggregate functions?', options: ['GROUP BY', 'LIMIT', 'HAVING', 'FILTER'], answer: 2 } }] },
    { id: 'sql-23', title: 'Primary Key', description: 'Uniquely identify each record.', games: [{ type: 'mcq', language: 'sql', level: 'advanced', title: 'Primary Key Constraint', content: { question: 'Which constraint uniquely identifies each record in a database table?', options: ['FOREIGN KEY', 'UNIQUE', 'PRIMARY KEY', 'CHECK'], answer: 2 } }] },
    { id: 'sql-24', title: 'Foreign Key', description: 'Link two tables together.', games: [{ type: 'mcq', language: 'sql', level: 'advanced', title: 'Foreign Key Constraint', content: { question: 'What is a key used to link two tables together?', options: ['PRIMARY KEY', 'FOREIGN KEY', 'UNIQUE KEY', 'CANDIDATE KEY'], answer: 1 } }] },
    { id: 'sql-25', title: 'CREATE TABLE', description: 'Create a new table.', games: [{ type: 'mcq', language: 'sql', level: 'advanced', title: 'Table Creation', content: { question: 'Which statement is used to create a new table in a database?', options: ['CREATE DATABASE', 'CREATE TABLE', 'CREATE INDEX', 'MAKE TABLE'], answer: 1 } }] },
    { id: 'sql-26', title: 'DROP TABLE', description: 'Delete an existing table.', games: [{ type: 'mcq', language: 'sql', level: 'advanced', title: 'Table Deletion', content: { question: 'Which statement is used to delete a table?', options: ['DELETE TABLE', 'TRUNCATE TABLE', 'REMOVE TABLE', 'DROP TABLE'], answer: 3 } }] },
    { id: 'sql-27', title: 'ALTER TABLE', description: 'Modify a table.', games: [{ type: 'mcq', language: 'sql', level: 'advanced', title: 'Table Modification', content: { question: 'Which statement is used to add, delete, or modify columns in an existing table?', options: ['MODIFY TABLE', 'ALTER TABLE', 'UPDATE TABLE', 'CHANGE TABLE'], answer: 1 } }] },
    { id: 'sql-28', title: 'UNION', description: 'Combine result sets of two or more SELECT statements.', games: [{ type: 'mcq', language: 'sql', level: 'advanced', title: 'Combining Results', content: { question: 'Which operator is used to combine the result-set of two or more `SELECT` statements (showing distinct values)?', options: ['JOIN', 'UNION', 'COMBINE', 'MERGE'], answer: 1 } }] },
    { id: 'sql-29', title: 'Subquery', description: 'A query within another query.', games: [{ type: 'mcq', language: 'sql', level: 'advanced', title: 'Nested Queries', content: { question: 'A subquery or inner query is a query nested inside another SQL query. It is usually embedded within the...', options: ['SELECT clause', 'FROM clause', 'WHERE clause', 'Any of the above'], answer: 3 } }] },
    { id: 'sql-30', title: 'CASE Statement', description: 'Create if-then-else logic in SQL.', games: [{ type: 'mcq', language: 'sql', level: 'advanced', title: 'Conditional Logic', content: { question: 'Which statement goes through conditions and returns a value when the first condition is met?', options: ['IF', 'WHEN', 'CASE', 'DECODE'], answer: 2 } }] },

    // Java
    {
        id: 'hard-java-1',
        language: 'java',
        title: 'String Comparison',
        description: 'Two seemingly identical strings are not considered equal.',
        code: `String s1 = new String("hello");
String s2 = new String("hello");

if (s1 == s2) {
    System.out.println("Equal");
} else {
    System.out.println("Not Equal"); // This is printed
}`,
        options: [
            'The `new` keyword is used incorrectly.',
            'You cannot create two String objects with the same value.',
            'The `==` operator checks for object reference equality, not content equality.',
            'There is a typo in the string "hello".'
        ],
        correctAnswer: 2,
        explanation: 'The `==` operator compares if `s1` and `s2` point to the exact same object in memory. Since `new` was used for both, they are two different objects. To compare the actual string content, you must use `s1.equals(s2)`.'
    },
     {
        id: 'hard-java-2',
        language: 'java',
        title: 'Integer Caching',
        description: 'The behavior of `==` on Integer objects is surprising.',
        code: `Integer a = 100;
Integer b = 100;
Integer c = 200;
Integer d = 200;

System.out.println(a == b); // true
System.out.println(c == d); // false`,
        options: [
            'The `c == d` comparison is a bug in the JVM.',
            'Java caches small Integer objects (typically -128 to 127), so `a` and `b` point to the same object, but `c` and `d` do not.',
            'The `==` operator works differently for numbers above 128.',
            'Autoboxing is failing for numbers larger than 127.'
        ],
        correctAnswer: 1,
        explanation: 'To save memory, Java reuses Integer objects for values in a certain range. For values outside this range, it creates new objects. Therefore, `a` and `b` are the same object, but `c` and `d` are different objects. You should always use `.equals()` to compare the values of wrapper objects.'
    },
    {
        id: 'hard-java-3',
        language: 'java',
        title: 'Pass-by-Value with Objects',
        description: 'A method fails to reassign an object reference passed to it.',
        code: `public static void reassign(Dog dog) {
  dog = new Dog("Fido"); // a is a local variable
}

Dog myDog = new Dog("Max");
reassign(myDog);
System.out.println(myDog.getName()); // Prints "Max"`,
        options: [
            'The `reassign` method needs to return the new Dog object.',
            'Java is pass-by-reference, so this should have worked.',
            'Java passes object references by value. The method receives a copy of the reference, and reassigning it only changes the local copy.',
            'The `new Dog("Fido")` object is garbage collected immediately.'
        ],
        correctAnswer: 2,
        explanation: 'Java is strictly pass-by-value. When you pass an object, you are passing a copy of the reference to that object. The `reassign` method creates a new `Dog` object and assigns it to its local `dog` variable, but this does not affect the original `myDog` variable in the calling scope.'
    },
    {
        id: 'hard-java-4',
        language: 'java',
        title: 'Final Collections',
        description: 'A final collection can still be modified.',
        code: `final List<String> list = new ArrayList<>();
list.add("A");
list.add("B");
System.out.println(list); // Prints [A, B]`,
        options: [
            'The `final` keyword is not working.',
            'The code will not compile because you cannot modify a `final` list.',
            'The `final` keyword on a reference variable means the reference cannot be changed to point to another object, but the object itself can be mutated.',
            'ArrayLists are an exception to the `final` rule.'
        ],
        correctAnswer: 2,
        explanation: 'When `final` is used with an object reference, it means the reference variable cannot be reassigned. However, it does not make the object itself immutable. You can still call methods on the object that change its internal state, such as `list.add()`.'
    },
    { id: 'hard-java-5', language: 'java', title: 'Static Block Execution', description: 'When does a static initializer block run?', code: `class Test {\n    static { System.out.println("Static block"); }\n    public Test() { System.out.println("Constructor"); }\n}\n// new Test(); new Test();`, options: ['It prints "Static block" then "Constructor" for each object created.', 'The static block runs only once when the class is first loaded by the JVM.', 'The static block runs after the constructor.', 'The code will not compile.'], correctAnswer: 1, explanation: 'A static initializer block is executed exactly once, when the class is first loaded into memory. Constructors, on the other hand, are run every time an object is instantiated.' },
    { id: 'hard-java-6', language: 'java', title: '`finally` with `return`', description: 'What happens when both `try` and `finally` have return statements?', code: `public int test() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}`, options: ['The method returns 1.', 'The method returns 2.', 'It causes a compiler error.', 'It returns both 1 and 2.'], correctAnswer: 1, explanation: 'If a `finally` block completes abruptly (e.g., with a `return` statement or by throwing an exception), then the `try` block\'s outcome is discarded. In this case, the `return 2` from the `finally` block overrides the `return 1`.' },
    { id: 'hard-java-7', language: 'java', title: 'Checked vs. Unchecked Exceptions', description: 'A method call does not require a try-catch block.', code: `public void test() {\n    int x = 1 / 0; // Throws ArithmeticException\n}`, options: ['This code will not compile because `ArithmeticException` is a checked exception.', '`ArithmeticException` is an unchecked (Runtime) exception, so the compiler does not require it to be caught.', 'All exceptions must be caught in Java.', 'The division by zero will return `Infinity`.'], correctAnswer: 1, explanation: 'Exceptions that inherit from `RuntimeException` are "unchecked," meaning the compiler doesn\'t force you to handle them. `ArithmeticException` is a `RuntimeException`. Checked exceptions (like `IOException`) must be handled with a `try-catch` block or declared with a `throws` clause.' },
    { id: 'hard-java-8', language: 'java', title: 'Private Method Inheritance', description: 'Can a private method be overridden?', code: `class Parent {\n    private void show() { System.out.println("Parent"); }\n}\nclass Child extends Parent {\n    public void show() { System.out.println("Child"); }\n}`, options: ['This is a classic example of method overriding.', 'The code will fail to compile.', 'This is method hiding, not overriding. The `show()` method in `Child` is completely new and unrelated to the `private` method in `Parent`.', 'This is method overloading.'], correctAnswer: 2, explanation: 'Private members are not visible to subclasses, so they cannot be overridden. The `show()` method in the `Child` class is a new method, completely independent of the one in the `Parent` class. There is no polymorphism involved.' },
    { id: 'hard-java-9', language: 'java', title: 'Short-Circuiting Operators', description: 'The second part of a condition is not being executed.', code: `int i = 0;\nif (true || (++i > 0)) {\n    // ...\n}\nSystem.out.println(i);`, options: ['It prints 1.', 'It prints 0.', 'It prints 2.', 'It causes a compiler error.'], correctAnswer: 1, explanation: 'The logical OR operator (`||`) in Java is "short-circuiting." If the first operand (`true`) is sufficient to determine the result of the entire expression, the second operand (`(++i > 0)`) is not evaluated at all. Therefore, `i` is never incremented.' },
    { id: 'hard-java-10', language: 'java', title: 'Array Covariance', description: 'Storing a wrong type in an object array.', code: `Object[] objArray = new String[5];\ntry {\n    objArray[0] = new Integer(1);\n} catch (Exception e) {\n    System.out.println(e);\n}`, options: ['The code runs without error.', 'It throws a `ClassCastException` at runtime.', 'It throws an `ArrayStoreException` at runtime.', 'The code fails to compile.'], correctAnswer: 2, explanation: 'Java arrays are covariant, meaning an array of a derived type (`String[]`) can be assigned to a reference of a base type (`Object[]`). However, the runtime still knows the actual type of the array is `String[]`. Attempting to store an `Integer` in it violates this type safety and results in an `ArrayStoreException`.' },
    { id: 'hard-java-11', language: 'java', title: 'Method Overloading Resolution', description: 'How does Java choose which overloaded method to call?', code: `public void myMethod(Object o) { ... }\npublic void myMethod(String s) { ... }\n\nmyMethod(null);`, options: ['It calls `myMethod(Object o)`.', 'It calls `myMethod(String s)`.', 'It is ambiguous and causes a compile-time error.', 'It throws a `NullPointerException` at runtime.'], correctAnswer: 2, explanation: 'Java chooses the most specific method available. Since `String` is a more specific type than `Object`, the compiler resolves the call to `myMethod(String s)`.' },
    { id: 'hard-java-12', language: 'java', title: '`String.intern()`', description: 'Understanding the string constant pool.', code: `String s1 = "Hello";\nString s2 = new String("Hello");\ns2 = s2.intern();\nSystem.out.println(s1 == s2);`, options: ['`false`', '`true`', 'It causes a compile error.', 'The result is unpredictable.'], correctAnswer: 1, explanation: 'The `intern()` method returns a canonical representation for the string object from the string constant pool. Since `s1` was created from a literal, it is already in the pool. Calling `intern()` on `s2` returns the reference to the existing string in the pool, making `s1` and `s2` point to the same object.' },
    { id: 'hard-java-13', language: 'java', title: 'Exception in Constructor', description: 'What happens when a constructor throws an exception?', code: `class MyClass {\n    public MyClass() throws Exception {\n        throw new Exception();\n    }\n}`, options: ['The object is created, but it is in an invalid state.', 'The object is partially created.', 'The memory allocated for the object is leaked.', 'The object is not created, and the memory is reclaimed by the garbage collector.'], correctAnswer: 3, explanation: 'If a constructor throws an exception, the object creation process is aborted. The object is not successfully created, and any memory allocated for it becomes eligible for garbage collection.' },
    { id: 'hard-java-14', language: 'java', title: '`volatile` keyword', description: 'Ensuring visibility of changes across threads.', code: `// A variable accessed by multiple threads\nprivate volatile boolean stop = false;`, options: ['`volatile` makes the variable atomic.', '`volatile` ensures that reads and writes to the variable are synchronized.', '`volatile` guarantees that any write to the variable is immediately visible to other threads.', '`volatile` is the same as `synchronized`.'], correctAnswer: 2, explanation: 'The `volatile` keyword ensures that changes to a variable are always visible to other threads. It does not provide atomicity for compound actions (like `i++`), but it prevents caching of the variable\'s value in a thread\'s local memory.' },
    { id: 'hard-java-15', language: 'java', title: 'Instance Initializer Block', description: 'A block of code that runs when an object is created.', code: `class MyClass {\n    { System.out.println("Initializer"); }\n    public MyClass() { System.out.println("Constructor"); }\n}`, options: ['The initializer block runs after the constructor.', 'The initializer block runs before the constructor.', 'The initializer block replaces the constructor.', 'This is a syntax error.'], correctAnswer: 1, explanation: 'An instance initializer block is executed every time an instance of the class is created. The Java compiler copies the code from the initializer block into the beginning of every constructor.' },
    { id: 'hard-java-16', language: 'java', title: '`enum` constructor', description: 'Can an enum have a public constructor?', code: `public enum MyEnum {\n    A, B;\n    public MyEnum() {} // This will cause an error\n}`, options: ['Enum constructors can only be `protected`.', 'Enum constructors must be `private` or package-private.', 'Enums cannot have constructors.', 'The constructor needs arguments.'], correctAnswer: 1, explanation: 'Enum constructors are implicitly `private`. You cannot declare them as `public` or `protected` because enums are meant to be a fixed set of constants, and you should not be able to create new instances of them from outside the enum declaration itself.' },
    { id: 'hard-java-17', language: 'java', title: 'Bitwise Operators', description: 'Using bitwise operators for permission checks.', code: `int READ = 1, WRITE = 2, EXECUTE = 4;\nint permissions = READ | EXECUTE;\nif ((permissions & READ) != 0) { /* can read */ }`, options: ['This is an incorrect way to check permissions.', 'This is a common and efficient way to use bit flags to manage a set of permissions.', 'The `&` operator is for logical AND.', 'The `|` operator is for logical OR.'], correctAnswer: 1, explanation: 'Bitwise operators are often used for managing sets of boolean flags. Each flag is a power of two. The bitwise OR `|` is used to combine permissions, and the bitwise AND `&` is used to check if a specific permission is set.' },
    { id: 'hard-java-18', language: 'java', title: 'Default Methods in Interfaces', description: 'A new feature in Java 8.', code: `interface MyInterface {\n    default void myMethod() {\n        System.out.println("Default");\n    }\n}`, options: ['Interfaces cannot have method bodies.', 'This is a `default` method, allowing an interface to provide a default implementation that implementing classes can use or override.', 'This is a syntax error.', 'The method must be `static`.'], correctAnswer: 1, explanation: 'Default methods were introduced in Java 8 to allow interfaces to be evolved without breaking existing implementations. They provide a default implementation for a method that a class can inherit if it doesn\'t provide its own.' },
    { id: 'hard-java-19', language: 'java', title: 'Generic Type Erasure', description: 'What happens to generic types at runtime?', code: `List<String> stringList = new ArrayList<>();\nList<Integer> intList = new ArrayList<>();\n// stringList.getClass() == intList.getClass() is true`, options: ['This is a bug.', 'Generic type information is "erased" by the compiler and is not available at runtime.', '`getClass()` does not work for generic types.', 'The lists should be of different classes.'], correctAnswer: 1, explanation: 'Java uses type erasure for generics. The compiler uses the generic type information for type checking, but then removes it. At runtime, both `List<String>` and `List<Integer>` are just `List` objects.' },
    { id: 'hard-java-20', language: 'java', title: 'The `transient` keyword', description: 'Preventing a field from being serialized.', code: `class MyClass implements java.io.Serializable {\n    private transient String password;\n}`, options: ['`transient` makes the field thread-safe.', '`transient` marks a field to be excluded when the object is serialized.', '`transient` means the field can only be accessed once.', 'This is a syntax error.'], correctAnswer: 1, explanation: 'The `transient` keyword is used in serialization. If you define a field as `transient`, it will not be included when the object is converted to a stream of bytes. It\'s often used for sensitive data like passwords or for fields that can be recalculated.' },
    { id: 'hard-java-21', language: 'java', title: 'Object Cloning', description: 'The default behavior of `Object.clone()`', code: `// MyClass implements Cloneable\nMyClass obj1 = new MyClass();\nMyClass obj2 = (MyClass) obj1.clone();\n// obj1 == obj2 is false\n// obj1.getClass() == obj2.getClass() is true`, options: ['`clone()` creates an exact copy, including the memory address.', '`clone()` performs a shallow copy of the object.', '`clone()` is a deep copy.', '`clone()` returns `this`.'], correctAnswer: 1, explanation: 'The default implementation of `clone()` creates a shallow copy. This means it creates a new object and copies the values of the fields. If a field is a reference to another object, only the reference is copied, not the object itself.' },
    { id: 'hard-java-22', language: 'java', title: '`assert` keyword', description: 'Using assertions for debugging.', code: `// Run with assertions enabled (-ea)\nint x = -1;\nassert x > 0 : "x must be positive";`, options: ['The program prints "x must be positive".', 'The program throws an `AssertionError`.', 'The code fails to compile.', 'The program runs without any output.'], correctAnswer: 1, explanation: 'Assertions are used to check for conditions that should be true if the code is correct. If an assertion fails, it throws an `AssertionError`. Assertions are disabled by default and must be enabled with the `-ea` JVM flag.' },
    { id: 'hard-java-23', language: 'java', title: 'Lambda Scopes', description: 'Accessing local variables from a lambda.', code: `int x = 10;\nRunnable r = () -> { System.out.println(x); };\n// x = 20; -> This would cause a compile error`, options: ['Lambdas can only access `final` variables.', 'A lambda can access local variables, but those variables must be `final` or "effectively final".', 'Lambdas cannot access variables from their enclosing scope.', 'The variable `x` needs to be static.'], correctAnswer: 1, explanation: 'A lambda expression can capture variables from its enclosing scope. However, it can only access local variables that are `final` or "effectively final" (i.e., their value is never changed after initialization). This is to prevent concurrency issues.' },
    { id: 'hard-java-24', language: 'java', title: '`try-with-resources`', description: 'A better way to handle resources.', code: `try (BufferedReader br = new BufferedReader(...)) {\n    // use br\n}`, options: ['This is a syntax error.', 'This `try-with-resources` statement automatically calls `br.close()` at the end of the block.', 'This automatically catches any `IOException`.', 'This is less efficient than a `try-finally` block.'], correctAnswer: 1, explanation: 'The `try-with-resources` statement, introduced in Java 7, ensures that each resource is closed at the end of the statement. Any object that implements `java.lang.AutoCloseable` can be used as a resource. It is safer and more concise than using a `finally` block.' },
    { id: 'hard-java-25', language: 'java', title: 'Array vs. ArrayList', description: 'Fixed size vs. dynamic size.', code: `String[] arr = new String[5];\nArrayList<String> list = new ArrayList<>();`, options: ['`arr` can change size, but `list` cannot.', '`arr` has a fixed size, while `list` can grow and shrink dynamically.', '`arr` can only store primitive types.', 'They are functionally the same.'], correctAnswer: 1, explanation: 'Arrays in Java have a fixed size that is determined at the time of creation. `ArrayList` is part of the Collections Framework and provides a dynamic, resizable array implementation.' },
    { id: 'hard-java-26', language: 'java', title: '`hashCode()` and `equals()` contract', description: 'The relationship between these two methods.', code: `// Two objects obj1 and obj2\n// obj1.equals(obj2) is true`, options: ['`obj1.hashCode() == obj2.hashCode()` must be false.', '`obj1.hashCode() == obj2.hashCode()` can be either true or false.', '`obj1.hashCode() == obj2.hashCode()` must be true.', 'The `hashCode()` method is irrelevant.'], correctAnswer: 2, explanation: 'The contract for `Object` states that if two objects are equal according to the `equals()` method, then their `hashCode()` methods must produce the same integer result. The reverse is not required.' },
    { id: 'hard-java-27', language: 'java', title: 'Static Method Hiding', description: 'A "static override" is not what it seems.', code: `class Parent { static void show() {} }\nclass Child extends Parent { static void show() {} }`, options: ['The `show()` method in `Child` overrides the one in `Parent`.', 'This is called method hiding. The method called depends on the type of the reference, not the object.', 'This causes a compile error.', 'The `show()` method in `Parent` is now inaccessible.'], correctAnswer: 1, explanation: 'Static methods cannot be overridden. When a subclass defines a static method with the same signature as a static method in its superclass, it "hides" the superclass method. The method that gets called is determined at compile time based on the reference type.' },
    { id: 'hard-java-28', language: 'java', title: '`StringBuilder` vs `String`', description: 'Efficient string modification.', code: `String s = "";\nfor (int i=0; i<1000; i++) { s += "x"; } // Inefficient`, options: ['This is the most efficient way to build a string.', 'Using `StringBuilder` or `StringBuffer` is more efficient because it modifies a mutable character sequence instead of creating new `String` objects in a loop.', 'This code will run faster than using `StringBuilder`.', '`String` is a mutable class.'], correctAnswer: 1, explanation: '`String` objects are immutable. Concatenating strings in a loop creates many intermediate `String` objects, which is inefficient. `StringBuilder` is a mutable class designed for efficient string construction.' },
    { id: 'hard-java-29', language: 'java', title: 'Double Brace Initialization', description: 'A clever but potentially problematic syntax.', code: `List<String> list = new ArrayList<>() {{\n    add("A");\n    add("B");\n}};`, options: ['This is the standard way to initialize a list.', 'This creates an anonymous inner class that extends `ArrayList`, with an instance initializer block. It can cause memory leaks.', 'This is a syntax error.', 'This creates an immutable list.'], correctAnswer: 1, explanation: 'Double brace initialization is a shorthand that creates an anonymous subclass and uses an instance initializer. While concise, it has downsides, including holding a reference to the enclosing instance, which can prevent garbage collection and cause memory leaks.' },
    { id: 'hard-java-30', language: 'java', title: '`finalize()` method', description: 'The unpredictable nature of finalization.', code: `class MyClass {\n    protected void finalize() throws Throwable {\n        // cleanup code\n    }\n}`, options: ['The `finalize()` method is guaranteed to be called before an object is garbage collected.', 'The `finalize()` method has been deprecated and should not be used. Its execution is not guaranteed.', 'This is the modern way to handle resource cleanup.', 'This method is called a constructor.'], correctAnswer: 1, explanation: 'The `finalize()` method is a relic from early Java. It has been deprecated since Java 9 because its behavior is unpredictable. It is not guaranteed to run at all, and it can cause performance issues. Use `try-with-resources` or other explicit cleanup mechanisms instead.' },
    
    // C++
    {
        id: 'hard-cplusplus-1',
        language: 'cplusplus',
        title: 'Dangling Pointer',
        description: 'A pointer is used after the memory it points to has been freed.',
        code: `int* create_and_use() {
    int x = 10;
    return &x; // Returns address of local variable
}

int main() {
    int* ptr = create_and_use();
    // *ptr might be 10, or it might be garbage data.
    return 0;
}`,
        options: [
            'You cannot return a pointer from a function.',
            'The function returns the address of a local variable, which is destroyed when the function exits.',
            'The pointer `ptr` is not initialized.',
            'The variable `x` should be declared as a pointer.'
        ],
        correctAnswer: 1,
        explanation: 'The variable `x` exists only on the stack frame of `create_and_use()`. When the function returns, that memory is reclaimed. The returned pointer `ptr` is now "dangling" as it points to invalid memory.'
    },
     {
        id: 'hard-cplusplus-2',
        language: 'cplusplus',
        title: 'Object Slicing',
        description: 'Assigning a derived class object to a base class object loses information.',
        code: `class Base { public: int x; };
class Derived : public Base { public: int y; };

Derived d;
d.x = 1; d.y = 2;

Base b = d; // Object slicing occurs here
// b.y is not accessible`,
        options: [
            'Inheritance is not set up correctly.',
            'The `Derived` object `d` has not been initialized.',
            'When assigning a derived object to a base object, the derived-specific parts are "sliced off".',
            'You must use pointers or references to achieve polymorphism.'
        ],
        correctAnswer: 2,
        explanation: 'When you assign a derived class object to a base class object by value, only the base class members are copied. This is known as object slicing. The `y` member from the `Derived` class is lost. To work polymorphically, you should use base class pointers or references.'
    },
    {
        id: 'hard-cplusplus-3',
        language: 'cplusplus',
        title: 'Deleting void*',
        description: 'Deleting a void pointer has undefined behavior.',
        code: `class MyClass {};

void* ptr = new MyClass();
delete ptr; // Undefined Behavior`,
        options: [
            'The code is correct, it will free the memory.',
            'You cannot `delete` a pointer of type `void*` because the compiler does not know which destructor to call.',
            '`MyClass` needs a virtual destructor.',
            'The pointer should be cast to `char*` before deleting.'
        ],
        correctAnswer: 1,
        explanation: 'Deleting a `void*` is undefined behavior because the compiler has no type information. It doesn\'t know the size of the object to deallocate, and more importantly, it doesn\'t know which destructor to run. You must cast the pointer back to its original type (`MyClass*`) before deleting it.'
    },
    {
        id: 'hard-cplusplus-4',
        language: 'cplusplus',
        title: 'Array Decay',
        description: 'Passing an array to a function loses its size information.',
        code: `void print_size(int arr[]) {
    // This will print the size of a pointer, not the array
    std::cout << sizeof(arr) << std::endl; 
}

int main() {
    int my_arr[10];
    // This will print 40 (10 * sizeof(int))
    std::cout << sizeof(my_arr) << std::endl; 
    print_size(my_arr);
}`,
        options: [
            'The `sizeof` operator is used incorrectly inside the function.',
            'Arrays cannot be passed to functions in C++.',
            'When an array is passed to a function, it "decays" into a pointer to its first element, losing size information.',
            'The function `print_size` should accept a `std::vector` instead.'
        ],
        correctAnswer: 2,
        explanation: 'In C++, arrays have a special property where they "decay" into pointers when passed to functions. The function `print_size` actually receives a pointer (`int*`), not the full array. Therefore, `sizeof(arr)` inside the function gives the size of a pointer, not the size of the original array.'
    },
    { id: 'hard-cplusplus-5', language: 'cplusplus', title: 'Virtual Destructor', description: 'Deleting a derived class object through a base class pointer without a virtual destructor.', code: `class Base { public: ~Base() {} };\nclass Derived : public Base { public: ~Derived() {} };\n\nBase* b = new Derived();\ndelete b; // Undefined behavior`, options: ['The destructors are called in the wrong order.', 'Without a virtual destructor in the base class, deleting a derived object via a base pointer results in undefined behavior.', 'The `new` keyword is used incorrectly.', 'The pointer `b` should be of type `Derived*`.'], correctAnswer: 1, explanation: 'If a class is to be used as a base class, its destructor should be virtual. Otherwise, when you `delete` a derived object through a base class pointer, only the base class destructor is called, leading to resource leaks and undefined behavior.' },
    { id: 'hard-cplusplus-6', language: 'cplusplus', title: 'const Correctness', description: 'Attempting to call a non-const method on a const object.', code: `class MyClass {\npublic:\n    void change() { /* modifies state */ }\n};\nconst MyClass obj;\nobj.change(); // Compilation Error`, options: ['The object `obj` was not initialized.', 'You cannot call methods on a `const` object.', 'The `change` method must also be declared as `const` because it is being called on a `const` object.', 'The method `change` is private by default.'], correctAnswer: 2, explanation: 'A `const` object can only call methods that are also marked as `const`. A `const` method is one that promises not to modify the object\'s state. The compiler enforces this. The method should be declared as `void change() const;`' },
    { id: 'hard-cplusplus-7', language: 'cplusplus', title: 'RAII (Resource Acquisition Is Initialization)', description: 'A resource is not being properly released in case of an exception.', code: `void process_file(const char* filename) {\n    FILE* f = fopen(filename, "r");\n    if (may_throw_exception()) {\n        // fclose(f) is never called if an exception occurs\n    }\n    fclose(f);\n}`, options: ['The `fopen` function is deprecated.', 'If an exception is thrown, the `fclose(f)` call is skipped, leading to a resource leak.', 'The file `f` should be opened in write mode.', 'The function should use `try-catch` blocks.'], correctAnswer: 1, explanation: 'This code leaks a file handle if `may_throw_exception()` throws. The C++ idiom for managing resources is RAII, which means resources are managed by stack-based objects (like `std::ifstream` or smart pointers) whose destructors automatically release the resource when they go out of scope, even if an exception is thrown.' },
    { id: 'hard-cplusplus-8', language: 'cplusplus', title: '`std::vector` capacity vs. size', description: 'Confusing the number of elements with the allocated memory.', code: `std::vector<int> vec;\nvec.reserve(10); // Allocate memory for 10 elements\nstd::cout << vec.size(); // Prints 0`, options: ['`reserve()` failed to allocate memory.', '`size()` returns the number of elements currently in the vector, while `capacity()` returns the total allocated storage.', 'The vector should have been initialized with 10 elements.', 'The code has a syntax error.'], correctAnswer: 1, explanation: '`reserve()` only allocates memory to avoid reallocations later; it does not add elements to the vector. The `size()` of the vector remains 0 until elements are actually added (e.g., with `push_back()`).' },
    { id: 'hard-cplusplus-9', language: 'cplusplus', title: 'Uninitialized Variables', description: 'Reading from a variable before it has been given a value.', code: `int main() {\n    int x; // Uninitialized\n    std::cout << x << std::endl; // Undefined Behavior\n    return 0;\n}`, options: ['The program will print 0.', 'The code will not compile because `x` is not initialized.', 'Reading from an uninitialized variable leads to undefined behavior; it might print a garbage value.', 'The variable `x` must be declared as `auto`.'], correctAnswer: 2, explanation: 'Unlike some languages, C++ does not automatically initialize local variables of fundamental types to zero. Reading from them before assignment results in undefined behavior.' },
    { id: 'hard-cplusplus-10', language: 'cplusplus', title: 'Sequence Points', description: 'Modifying a variable multiple times in the same expression.', code: `int i = 5;\ni = ++i + 1; // Undefined behavior`, options: ['The value of `i` will be 7.', 'The value of `i` will be 8.', 'The behavior is undefined because `i` is modified more than once between sequence points.', 'This is a valid way to increment a variable.'], correctAnswer: 2, explanation: 'The C++ standard does not define the order of evaluation for subexpressions like `++i` and the addition. Modifying a variable multiple times without a sequence point in between (like at a semicolon) results in undefined behavior. The compiler is free to do anything.' },
    { id: 'hard-cplusplus-11', language: 'cplusplus', title: 'Most Vexing Parse', description: 'A variable definition is misinterpreted as a function declaration.', code: `MyClass my_obj(); // This is a function declaration`, options: ['This creates a `MyClass` object named `my_obj` using the default constructor.', 'This is a C++ syntax error.', 'This declares a function named `my_obj` that takes no arguments and returns a `MyClass` object.', 'This is a forward declaration of the `MyClass` class.'], correctAnswer: 2, explanation: 'This is a famous C++ parsing ambiguity. Anything that can be interpreted as a function declaration will be. To create an object using the default constructor, you must omit the parentheses: `MyClass my_obj;`.' },
    { id: 'hard-cplusplus-12', language: 'cplusplus', title: 'Temporary Object Lifetime', description: 'A reference is bound to a temporary object that gets destroyed.', code: `const std::string& ref = "hello" + "world";\n// The temporary string is destroyed, leaving 'ref' dangling.`, options: ['The code is perfectly safe.', 'A reference cannot be bound to the result of an expression.', 'A temporary object created by the expression is destroyed at the end of the full-expression, leaving the reference `ref` dangling.', '`const` references extend the lifetime of temporaries.'], correctAnswer: 2, explanation: 'While `const` lvalue references *can* extend the lifetime of a temporary object they are bound to, this rule has exceptions. In this more complex expression, the temporary `std::string` object from the concatenation is destroyed, leading to a dangling reference.' },
    { id: 'hard-cplusplus-13', language: 'cplusplus', title: '`auto` type deduction', description: 'The `auto` keyword may not deduce the type you expect.', code: `const int i = 5;\nauto j = i; // What is the type of j?`, options: ['`const int`', '`int`', '`const int&`', '`auto`'], correctAnswer: 1, explanation: 'The `auto` keyword deduces the type, but it drops top-level `const` and reference qualifiers. `j` will be deduced as a plain `int`. To preserve the const-ness, you would need `const auto j = i;`.' },
    { id: 'hard-cplusplus-14', language: 'cplusplus', title: 'Static Initialization Order Fiasco', description: 'The order of initialization of static objects across different files is not guaranteed.', code: `// File A.cpp\nExternObject extern_obj;\n// File B.cpp\nMyObject my_obj(extern_obj); // Potential crash`, options: ['This code is safe.', '`extern_obj` might not be initialized yet when `my_obj`\'s constructor is called, leading to a crash.', 'Static objects are always initialized before `main`.', 'You must use a `static_assert` to check the order.'], correctAnswer: 1, explanation: 'C++ only guarantees the initialization order of static objects within a single translation unit (file). The order across different files is undefined. This can lead to crashes if one global object\'s constructor depends on another. The solution is often the "Construct on First Use" idiom.' },
    { id: 'hard-cplusplus-15', language: 'cplusplus', title: '`std::move`', description: 'What `std::move` actually does.', code: `std::string s = "hello";\nstd::string s2 = std::move(s);\n// What is the state of 's' now?`, options: ['`s` is empty.', '`s` is deleted and accessing it will crash.', '`s` is in a valid but unspecified state. You should not use it without re-assigning it.', '`s` is unchanged.'], correctAnswer: 2, explanation: '`std::move` doesn\'t actually move anything. It is a cast that turns its argument into an rvalue reference, signaling that it can be "moved from". After the move constructor of `s2` is called, the state of `s` is left valid but unspecified by the standard library.' },
    { id: 'hard-cplusplus-16', language: 'cplusplus', title: 'Template Specialization', description: 'Providing a specific implementation for a template type.', code: `template <typename T> class MyContainer { /* generic */ };\ntemplate <> class MyContainer<bool> { /* specialized for bool */ };`, options: ['This is a syntax error.', 'This provides a separate, specialized class definition to be used when `MyContainer` is instantiated with `bool`.', 'This creates an inherited class.', 'This is not how templates work.'], correctAnswer: 1, explanation: 'Template specialization allows you to provide a custom implementation for a specific type (or types) that might require a different, more optimized, or simply correct implementation than the general template.' },
    { id: 'hard-cplusplus-17', language: 'cplusplus', title: '`nullptr`', description: 'The modern way to specify a null pointer.', code: `void func(int*) {}\nvoid func(int) {}\nfunc(NULL); // Ambiguous, might not compile`, options: ['`NULL` is the same as `0`.', '`NULL` is a macro that can be defined as `0` or `(void*)0`, which can cause ambiguity in function overloading. `nullptr` should be used instead.', 'The code is correct.', 'The function `func` is overloaded incorrectly.'], correctAnswer: 1, explanation: '`NULL` can cause problems because it might be a macro for the integer `0`. C++11 introduced `nullptr`, which is a keyword of a specific pointer type (`std::nullptr_t`) and is not an integer, resolving these ambiguities.' },
    { id: 'hard-cplusplus-18', language: 'cplusplus', title: '`virtual` inheritance', description: 'Solving the diamond problem in multiple inheritance.', code: `class A {}; class B: public A {}; class C: public A {};\nclass D: public B, public C {}; // D has two copies of A's members`, options: ['This is the correct way to do multiple inheritance.', 'To have only one copy of `A`\'s members, `B` and `C` must inherit from `A` using `virtual` inheritance (`class B: virtual public A`).', 'This is a syntax error.', '`D` will have no members from `A`.'], correctAnswer: 1, explanation: 'The "diamond problem" occurs when a class inherits from two classes that have a common base class. Without `virtual` inheritance, the final class gets two sets of members from the top-level base class. `virtual` inheritance ensures only one copy is included.' },
    { id: 'hard-cplusplus-19', language: 'cplusplus', title: '`explicit` Constructors', description: 'Preventing unintended implicit conversions.', code: `class MyString { public: explicit MyString(int size) {} };\nvoid printString(MyString s) {}\n\nprintString(10); // Compilation Error`, options: ['The constructor should not be `explicit`.', 'The `explicit` keyword prevents the compiler from using the constructor for implicit conversions.', '`printString` should take an `int`.', 'The code is correct and should compile.'], correctAnswer: 1, explanation: 'A constructor marked `explicit` cannot be used for implicit conversions or copy-initialization. This is useful for preventing surprising conversions, like turning an `int` into a `MyString`. You would have to call it explicitly: `printString(MyString(10))`.' },
    { id: 'hard-cplusplus-20', language: 'cplusplus', title: '`const_cast`', description: 'Casting away const-ness.', code: `const int x = 10;\nint* p = const_cast<int*>(&x);\n*p = 20; // Undefined Behavior`, options: ['This is the safe and correct way to modify a `const` variable.', 'Modifying a value that was originally declared `const` is undefined behavior, even if you use `const_cast`.', '`const_cast` is a compile-time check only.', 'The pointer `p` should be `const int*`.'], correctAnswer: 1, explanation: '`const_cast` can remove the `const` qualifier from a pointer or reference, but it is only safe to use if the underlying object was not originally declared as `const`. Modifying an originally `const` object results in undefined behavior.' },
    { id: 'hard-cplusplus-21', language: 'cplusplus', title: 'Standard Library Containers', description: 'Choosing the right container.', code: `// I need to store unique elements in a sorted order.`, options: ['`std::vector`', '`std::list`', '`std::map`', '`std::set`'], correctAnswer: 3, explanation: '`std::set` is a container that stores unique elements and keeps them sorted. `std::map` stores key-value pairs. `std::vector` and `std::list` do not enforce uniqueness or sorting automatically.' },
    { id: 'hard-cplusplus-22', language: 'cplusplus', title: 'Header Guards', description: 'Preventing a header from being included multiple times.', code: `#ifndef MY_HEADER_H\n#define MY_HEADER_H\n// ... header content ...\n#endif`, options: ['This is for debugging purposes.', 'This is a standard "include guard" idiom to prevent compilation errors from multiple inclusions of the same header file.', 'This is a C-style comment.', 'This is a deprecated practice.'], correctAnswer: 1, explanation: 'If a header file is included more than once in the same translation unit, it can lead to redefinition errors. Header guards ensure that the content of the header is only processed by the compiler the first time it is included.' },
    { id: 'hard-cplusplus-23', language: 'cplusplus', title: 'Smart Pointers (`unique_ptr`)', description: 'Automatic memory management.', code: `void func() {\n    std::unique_ptr<MyClass> ptr(new MyClass());\n} // Memory is automatically freed here`, options: ['This will leak memory.', '`std::unique_ptr` is a smart pointer that owns and manages another object. It automatically deletes the managed object when the `unique_ptr` goes out of scope.', '`unique_ptr` can be copied.', 'You must call `delete ptr` manually.'], correctAnswer: 1, explanation: '`std::unique_ptr` provides exclusive ownership of a dynamically allocated object. It is a key part of modern C++ for writing exception-safe code and avoiding manual memory management.' },
    { id: 'hard-cplusplus-24', language: 'cplusplus', title: 'Range-based for loop', description: 'A modern way to iterate over containers.', code: `std::vector<int> v = {1, 2, 3};\nfor (int i : v) { /* ... */ }`, options: ['This is a syntax error.', 'This is a range-based `for` loop, which iterates over each element in a container.', 'This loop iterates over the indices of the vector.', 'This is less efficient than a traditional `for` loop.'], correctAnswer: 1, explanation: 'Introduced in C++11, the range-based `for` loop provides a much simpler and safer way to iterate over the elements of a container, abstracting away iterators or index management.' },
    { id: 'hard-cplusplus-25', language: 'cplusplus', title: 'Operator Overloading', description: 'Defining custom behavior for operators.', code: `class Vec2 { /* ... */ };\nVec2 operator+(const Vec2& a, const Vec2& b) { /* ... */ }`, options: ['You cannot change the behavior of operators in C++.', 'This defines a non-member function that overloads the `+` operator for `Vec2` objects.', 'This must be a member function of the `Vec2` class.', 'Operator overloading is considered bad practice.'], correctAnswer: 1, explanation: 'C++ allows you to provide custom implementations for most operators when used with user-defined types (classes). This can make code more intuitive and readable. It can be done as a member function or a non-member (friend) function.' },
    { id: 'hard-cplusplus-26', language: 'cplusplus', title: 'SFINAE', description: 'A complex template metaprogramming concept.', code: `// "Substitution Failure Is Not An Error"`, options: ['This is a runtime error handling mechanism.', 'SFINAE is a compile-time principle where an invalid substitution of template parameters is not an error, but simply removes that overload from consideration.', 'This is related to virtual functions.', 'This is a new C++20 feature.'], correctAnswer: 1, explanation: 'SFINAE is a fundamental concept in C++ template metaprogramming. It allows you to write templates that can adapt to different types and enable or disable certain function overloads based on the properties of those types, all at compile time.' },
    { id: 'hard-cplusplus-27', language: 'cplusplus', title: '`std::string_view`', description: 'A non-owning view of a string.', code: `void print(std::string_view sv) { /* ... */ }\n\nstd::string s = "long string";\nprint(s); // No memory allocation`, options: ['`string_view` is just an alias for `std::string`.', 'A `std::string_view` provides a non-owning, read-only view into an existing string, avoiding the cost of creating a copy.', 'This will create a substring.', 'This is less safe than passing a `const std::string&`.'], correctAnswer: 1, explanation: 'Introduced in C++17, `std::string_view` is a lightweight object that refers to a sequence of characters. It is very efficient for passing string-like data to functions that only need to read it, as it avoids heap allocations and copies.' },
    { id: 'hard-cplusplus-28', language: 'cplusplus', title: 'Integer Overflow', description: 'An arithmetic operation exceeds the maximum value for its type.', code: `int x = 2000000000;\nint y = 2000000000;\nint z = x + y; // Signed integer overflow`, options: ['The value of `z` will be `4000000000`.', 'The code will throw an exception.', 'Signed integer overflow is undefined behavior in C++. The program might crash or produce a garbage value.', 'The compiler will automatically promote `z` to a larger type.'], correctAnswer: 2, explanation: 'Unlike unsigned integers (which wrap around), overflowing a signed integer is undefined behavior in C++. This is a serious security and reliability risk. You must use larger types (like `long long`) or check for potential overflow before performing the operation.' },
    { id:- `std::string` vs `const char*`', description: 'The difference between a C++ string object and a C-style string.', code: `const char* c_str = "hello";\nstd::string cpp_str = "hello";`, options: ['They are identical.', '`c_str` is a pointer to a sequence of characters, while `cpp_str` is a class object with methods and automatic memory management.', '`std::string` is less safe.', '`const char*` is faster.'], correctAnswer: 1, explanation: '`const char*` is a C-style string literal, which is a pointer with no built-in knowledge of its own length. `std::string` is a much safer and more convenient C++ class that handles memory, provides many useful methods (`.size()`, `.find()`, etc.), and integrates well with the standard library.' },
    { id: 'hard-cplusplus-30', language: 'cplusplus', title: 'Copy vs. Move Constructor', description: 'Understanding when each is called.', code: `std::vector<int> create_vec() { return {1, 2, 3}; }\n\nstd::vector<int> my_vec = create_vec();`, options: ['The copy constructor of `std::vector` is called.', 'The compiler performs Return Value Optimization (RVO), avoiding a copy or move entirely.', 'The move constructor of `std::vector` is called.', 'Either B or C can happen depending on the compiler and optimization level.'], correctAnswer: 3, explanation: 'When returning an object by value, the compiler is allowed to perform an optimization called RVO to construct the object directly in the destination, avoiding any copies or moves. If RVO is not performed (e.g., in debug builds), the move constructor will be called because the return value is an rvalue (a temporary object).' },
    
    // HTML/CSS
    {
        id: 'hard-html-css-1',
        language: 'html',
        title: 'Specificity Battle',
        description: 'A CSS rule is not being applied as expected.',
        code: `<style>
    #main p { color: blue; }
    .content p { color: red; }
</style>
<div id="main" class="content">
    <p>This text is blue.</p>
</div>`,
        options: [
            'The `color: red` rule should come first.',
            'An ID selector (`#main`) is more specific than a class selector (`.content`), so its rule takes precedence.',
            'You cannot have both an ID and a class on the same element.',
            'The `<p>` tag cannot be styled this way.'
        ],
        correctAnswer: 1,
        explanation: 'CSS rules are applied based on specificity. An ID selector has a higher specificity value than a class selector, so the `#main p` rule overrides the `.content p` rule, making the text blue.'
    },
     {
        id: 'hard-html-css-2',
        language: 'html',
        title: 'z-index without position',
        description: 'An element with a high z-index is not appearing on top of another element.',
        code: `<style>
    .red { background: red; z-index: 10; }
    .blue { background: blue; margin-top: -20px; }
</style>
<div class="red">Red Box</div>
<div class="blue">Blue Box</div>
<!-- The Blue Box covers the Red Box -->`,
        options: [
            'The `z-index` property is not supported in modern browsers.',
            'The `z-index` value is too low.',
            'The `z-index` property only works on elements that have a `position` value other than `static` (the default).',
            'The blue box needs a negative `z-index`.'
        ],
        correctAnswer: 2,
        explanation: 'The `z-index` property is used to control the stacking order of positioned elements. For `z-index` to have any effect, the element must have a `position` property set to `relative`, `absolute`, `fixed`, or `sticky`.'
    },
    {
        id: 'hard-html-css-3',
        language: 'html',
        title: 'Margin Collapsing',
        description: 'The space between two elements is not the sum of their margins.',
        code: `<style>
    .box1 { margin-bottom: 20px; }
    .box2 { margin-top: 30px; }
</style>
<div class="box1">Box 1</div>
<div class="box2">Box 2</div>
<!-- The space between them is 30px, not 50px -->`,
        options: [
            'Only the `margin-top` property is being applied.',
            'The `margin-bottom` of the first element and the `margin-top` of the second element are collapsing into a single margin.',
            'You must use `padding` to create space between elements.',
            'This is a browser bug.'
        ],
        correctAnswer: 1,
        explanation: 'When the vertical margins of two block-level elements touch, they "collapse" into a single margin whose size is the larger of the two individual margins. In this case, the 20px bottom margin and 30px top margin collapse into a single 30px margin.'
    },
    {
        id: 'hard-html-css-4',
        language: 'html',
        title: 'Child vs. Descendant Selector',
        description: 'A style is being applied to more elements than intended.',
        code: `<style>
    div p { color: red; } /* This makes ALL <p> text red */
</style>
<div>
    <p>Direct Child (Red)</p>
    <section>
        <p>Nested Grandchild (Also Red)</p>
    </section>
</div>`,
        options: [
            'The selector `div p` is incorrect.',
            'The `div p` selector targets any `<p>` that is a descendant of a `<div>`, not just a direct child.',
            'CSS cannot select nested elements.',
            'The `<section>` tag is interfering with the styles.'
        ],
        correctAnswer: 1,
        explanation: 'The descendant combinator (a space) selects all elements that are descendants of a specified element. To select only direct children, you must use the child combinator (`>`), like this: `div > p { color: red; }`.'
    },
    { id: 'hard-html-css-5', language: 'html', title: '`display: inline-block`', description: 'An element is not respecting width and height properties.', code: `<style>\n    span { display: inline; width: 100px; height: 50px; background: red; }\n</style>\n<span>I am an inline span.</span>`, options: ['The `width` and `height` properties are spelled incorrectly.', 'You need to use `!important` to force the styles.', 'Elements with `display: inline` do not respect `width`, `height`, or vertical `margin`/`padding`.', 'The span needs text inside it to have dimensions.'], correctAnswer: 2, explanation: 'Inline elements flow with the text and cannot have a set width or height. To allow this, you must change the display property to `inline-block` or `block`.' },
    { id: 'hard-html-css-6', language: 'html', title: '`position: absolute` context', description: 'An absolutely positioned element is not positioned relative to its parent.', code: `<style>\n    .parent { /* no position property */ }\n    .child { position: absolute; top: 0; left: 0; }\n</style>\n<div class="parent">\n    <div class="child"></div>\n</div>`, options: ['The `child` element is positioned relative to the `<body>` or the nearest positioned ancestor.', 'You cannot nest positioned elements.', 'The `top` and `left` properties require `px` units.', 'The `position: absolute` should be on the parent.'], correctAnswer: 0, explanation: 'An element with `position: absolute` is positioned relative to its nearest ancestor that has a `position` value other than `static`. If no such ancestor exists, it is positioned relative to the initial containing block (often the `<html>` element).' },
    { id: 'hard-html-css-7', language: 'html', title: '`box-sizing: border-box`', description: 'An element with padding is wider than intended.', code: `<style>\n    .box { width: 100px; padding: 20px; border: 1px solid black; }\n</style>\n<div class="box"></div>\n<!-- The box is actually 142px wide -->`, options: ['The padding is being added to the outside of the width.', 'The `width` property is being ignored.', 'This is expected behavior. The total width is `width` + `padding-left` + `padding-right` + `border-left` + `border-right`.', 'The browser has a rendering bug.'], correctAnswer: 2, explanation: 'By default, the CSS box model adds padding and borders to the specified width of an element. To make the `width` property include padding and border, you can set `box-sizing: border-box;` on the element.' },
    { id: 'hard-html-css-8', language: 'html', title: 'Pseudo-classes vs Pseudo-elements', description: 'Using a single colon for a pseudo-element.', code: `<style>\n    p:before { content: "Note: "; } /* Works, but what's the modern syntax? */\n</style>`, options: ['This is the only correct syntax.', 'The modern syntax uses a double colon (`::before`) to distinguish pseudo-elements from pseudo-classes (like `:hover`).', 'The `content` property is invalid.', 'You should use `p::initial-letter` instead.'], correctAnswer: 1, explanation: 'The double-colon syntax `::` was introduced in CSS3 to differentiate pseudo-elements (which create new elements, like `::before` and `::after`) from pseudo-classes (which style existing elements in a certain state, like `:hover`). Browsers maintain backward compatibility for the single-colon syntax for older pseudo-elements.' },
    { id: 'hard-html-css-9', language: 'html', title: 'The `!important` Rule', description: 'When should `!important` be used?', code: `p { color: red !important; }\n/* ... many other styles ... */\n#my-paragraph { color: blue; }`, options: ['`!important` should be used frequently to ensure styles are applied.', 'The `id` selector will override the `!important` rule.', 'A rule with `!important` will always take precedence, except for another `!important` rule on a more specific selector.', '`!important` is a comment and has no effect.'], correctAnswer: 2, explanation: 'The `!important` declaration is used to give a style property the highest possible precedence. It overrides all other declarations, including those on more specific selectors or inline styles. It should be used sparingly as it can make debugging CSS very difficult.' },
    { id: 'hard-html-css-10', language: 'html', title: 'Flexbox `flex-grow`', description: 'An item is not expanding to fill available space.', code: `<div style="display: flex;">\n    <div style="flex-grow: 1;">Item 1</div>\n    <div style="flex-grow: 0;">Item 2</div>\n</div>`, options: ['Both items will have the same width.', 'Item 1 will take up all available free space in the flex container.', 'Item 2 will be wider than Item 1.', '`flex-grow` must be a pixel value.'], correctAnswer: 1, explanation: 'The `flex-grow` property specifies how much a flex item will grow relative to the other flex items. A value of `0` prevents it from growing. A value of `1` (or higher) allows it to grow and take up available space.' },
    { id: 'hard-html-css-11', language: 'html', title: 'Attribute Selector', description: 'Styling an element based on the presence of an attribute.', code: `a[target="_blank"] { /* styles */ }`, options: ['This selects all `<a>` tags.', 'This selects `<a>` tags that have a `target` attribute with the exact value `"_blank"`.', 'This is not valid CSS syntax.', 'This selects any element with a `target` attribute.'], correctAnswer: 1, explanation: 'Attribute selectors allow you to select and style elements based on their attributes and attribute values. `[attr=value]` selects elements where the attribute `attr` has the exact value `value`.' },
    { id: 'hard-html-css-12', language: 'html', title: 'CSS Grid `fr` unit', description: 'Understanding the fractional unit in CSS Grid.', code: `.container { display: grid; grid-template-columns: 1fr 2fr; }`, options: ['The first column will be `1px` wide and the second will be `2px` wide.', 'This creates two columns; the second column will be twice as wide as the first.', 'The `fr` unit is not a valid CSS unit.', 'This creates one column that is `3fr` wide.'], correctAnswer: 1, explanation: 'The `fr` unit represents a fraction of the available space in the grid container. In this example, the total available space is divided into 3 parts (1 + 2), with the first column taking 1 part and the second taking 2 parts.' },
    { id: 'hard-html-css-13', language: 'html', title: '`em` vs `rem` units', description: 'Choosing the right relative unit for font sizes.', code: `html { font-size: 16px; }\ndiv { font-size: 1.2rem; }\nspan { font-size: 1.2em; }`, options: ['`em` and `rem` are identical.', '`rem` is relative to the root `<html>` element\'s font size, while `em` is relative to the parent element\'s font size.', '`rem` is an absolute unit.', '`em` is always equal to `16px`.'], correctAnswer: 1, explanation: '`rem` (root em) provides a consistent unit based on the root font size, which is useful for creating scalable layouts. `em` can be harder to manage because font sizes can compound as elements are nested.' },
    { id: 'hard-html-css-14', language: 'html', title: 'The Cascade', description: 'Understanding where a style comes from.', code: `/* external.css */\np { color: blue; }\n/* internal <style> tag */\np { color: green; }`, options: ['The text will be blue because external stylesheets load first.', 'The text will be green because the internal style sheet is declared after the external one, and they have the same specificity.', 'The browser will use both colors.', 'An error will occur.'], correctAnswer: 1, explanation: 'The "cascade" in CSS determines which rule applies when multiple rules could apply to an element. When specificity is equal, the rule that appears last in the CSS wins. Internal styles appear after linked external stylesheets.' },
    { id: 'hard-html-css-15', language: 'html', title: '`vh` and `vw` units', description: 'Sizing elements relative to the viewport.', code: `.box { width: 50vw; height: 50vh; }`, options: ['The box will be 50 pixels wide and 50 pixels high.', 'The box will be 50% of the parent element\'s width and height.', 'The box will be 50% of the viewport\'s width and 50% of the viewport\'s height.', 'These units are not supported.'], correctAnswer: 2, explanation: '`vw` (viewport width) and `vh` (viewport height) are units relative to the size of the browser viewport. `1vw` is 1% of the viewport width. They are very useful for creating full-screen sections.' },
    { id: 'hard-html-css-16', language: 'html', title: 'Semantic HTML', description: 'Using the right tag for the right job.', code: `<div class="header">My Website</div>`, options: ['This is the best way to create a header.', 'This is valid, but using a semantic `<header>` tag would be better for accessibility and SEO.', 'This will cause a rendering error.', '`<div class="header">` is a semantic tag.'], correctAnswer: 1, explanation: 'Semantic HTML (like `<header>`, `<nav>`, `<main>`, `<footer>`) gives meaning to the content, which helps screen readers, search engines, and other developers understand the structure of your page. While a `div` can be styled to look like a header, it carries no semantic meaning.' },
    { id: 'hard-html-css-17', language: 'html', title: '`display: none` vs `visibility: hidden`', description: 'Two ways to hide an element.', code: `.hide-a { display: none; }\n.hide-b { visibility: hidden; }`, options: ['They are identical.', '`display: none` removes the element from the document flow completely. `visibility: hidden` hides the element, but it still takes up space in the layout.', '`visibility: hidden` is not valid CSS.', '`display: none` just makes the element transparent.'], correctAnswer: 1, explanation: 'The key difference is that `display: none` removes the element as if it never existed, and other elements will reflow to fill its space. `visibility: hidden` simply makes it invisible, but it still occupies its original space.' },
    { id: 'hard-html-css-18', language: 'html', title: 'CSS Custom Properties', description: 'Using variables in CSS.', code: `:root { --main-color: blue; }\np { color: var(--main-color); }`, options: ['This is not valid CSS.', 'This defines a CSS custom property (variable) named `--main-color` and then uses it.', 'Variables must start with `$`.', 'The `:root` selector is incorrect.'], correctAnswer: 1, explanation: 'CSS Custom Properties (also known as CSS Variables) allow you to define values that can be reused throughout your stylesheet. They are defined with a `--` prefix and accessed with the `var()` function.' },
    { id: 'hard-html-css-19', language: 'html', title: 'Adjacent Sibling Combinator', description: 'Selecting an element that is immediately after another.', code: `h1 + p { font-style: italic; }`, options: ['Selects all `<p>` tags inside an `<h1>`.', 'Selects all `<p>` tags that are siblings of an `<h1>`.', 'Selects only the first `<p>` tag that is immediately preceded by an `<h1>`.', 'This is a syntax error.'], correctAnswer: 2, explanation: 'The adjacent sibling combinator (`+`) selects the second element only if it immediately follows the first element and both are children of the same parent.' },
    { id: 'hard-html-css-20', language: 'html', title: 'Block Formatting Context (BFC)', description: 'A fundamental CSS rendering concept.', code: `.container { overflow: auto; } /* This creates a new BFC */`, options: ['`overflow: auto` is only for scrollbars.', 'Creating a new Block Formatting Context can solve issues like collapsing margins and containing floats.', 'BFC is an outdated concept.', '`overflow` has no effect on layout.'], correctAnswer: 1, explanation: 'A BFC is a part of a visual CSS rendering of a web page in which block boxes are laid out. Creating a new BFC (e.g., with `overflow: hidden`, `display: flow-root`, etc.) can contain floats within it and prevent the margins of its children from collapsing with outside margins.' },
    { id: 'hard-html-css-21', language: 'html', title: 'The `required` attribute', description: 'Making a form field mandatory.', code: `<input type="text" required>`, options: ['This adds a red border to the input.', 'This prevents the form from being submitted if the input field is empty.', 'This is a custom attribute and has no browser support.', 'This is only for screen readers.'], correctAnswer: 1, explanation: 'The `required` boolean attribute, when present, specifies that an input field must be filled out before submitting the form. The browser will show an error message if the user tries to submit the form with the required field empty.' },
    { id: 'hard-html-css-22', language: 'html', title: '`line-height`', description: 'Controlling the space between lines of text.', code: `p { line-height: 1.5; }`, options: ['This sets the line height to `1.5px`.', 'This sets the line height to 1.5 times the element\'s font size.', 'This is a syntax error.', 'This only works on `<h1>` tags.'], correctAnswer: 1, explanation: 'When a unitless number is used for `line-height`, it is multiplied by the element\'s own font size to calculate the line height. This is the recommended practice as it scales predictably if the font size changes.' },
    { id: 'hard-html-css-23', language: 'html', title: '`:nth-child` selector', description: 'Selecting elements based on their position.', code: `li:nth-child(2n) { color: red; }`, options: ['Selects the second `<li>` element.', 'Selects all even `<li>` elements (2nd, 4th, 6th, etc.).', 'Selects every `<li>` that has two children.', 'This is not valid CSS.'], correctAnswer: 1, explanation: 'The `:nth-child(An+B)` pseudo-class selector matches elements based on a formula. `(2n)` matches every second element, effectively selecting all even-numbered children.' },
    { id: 'hard-html-css-24', language: 'html', title: '`object-fit` property', description: 'Controlling how an image fits its container.', code: `img { width: 100px; height: 100px; object-fit: cover; }`, options: ['The image will be stretched to fill the 100x100 box.', 'The image will be scaled down to fit within the box, preserving its aspect ratio.', 'The image will be clipped to fill the box, preserving its aspect ratio.', 'This property does not exist.'], correctAnswer: 2, explanation: 'The `object-fit: cover;` property scales the image to maintain its aspect ratio while filling the element\'s entire content box. The image will be clipped to fit. This is different from `contain`, which scales the image down to fit inside the content box.' },
    { id: 'hard-html-css-25', language: 'html', title: 'CSS `calc()` function', description: 'Performing calculations in CSS property values.', code: `.box { width: calc(100% - 20px); }`, options: ['This is not valid CSS syntax.', 'This sets the width to be 20px less than 100% of its container\'s width.', 'The calculation will fail because you are mixing units.', '`calc()` only works with pixel values.'], correctAnswer: 1, explanation: 'The `calc()` CSS function lets you perform calculations when specifying CSS property values. It can be very useful for mixing different units, like percentages and pixels.' },
    { id: 'hard-html-css-26', language: 'html', title: '`word-wrap` vs `overflow-wrap`', description: 'Breaking long words to prevent overflow.', code: `p { overflow-wrap: break-word; }`, options: ['This is the only property for breaking long words.', '`overflow-wrap` is the standard property. `word-wrap` is a legacy alias.', 'This will hide the overflowing text.', 'This adds a scrollbar.'], correctAnswer: 1, explanation: 'The `overflow-wrap` property is used to specify that the browser may break lines within words in order to prevent overflow. `word-wrap` was the original, non-standard name for this property and is now treated as an alias.' },
    { id: 'hard-html-css-27', language: 'html', title: 'CSS Specificity Hierarchy', description: 'Which type of style takes the highest precedence?', code: `// 1. Inline style (style="...")\n// 2. ID selector (#id)\n// 3. Class selector (.class)\n// 4. Element selector (p)`, options: ['ID > Inline > Class > Element', 'Inline > ID > Class > Element', 'Class > ID > Inline > Element', 'Element > Class > ID > Inline'], correctAnswer: 1, explanation: 'In the CSS specificity hierarchy, inline styles have the highest precedence, followed by ID selectors, then class/attribute/pseudo-class selectors, and finally element/pseudo-element selectors. `!important` overrides all of them.' },
    { id: 'hard-html-css-28', language: 'html', title: 'Flexbox `flex-direction`', description: 'Changing the main axis of a flex container.', code: `.container { display: flex; flex-direction: column; }`, options: ['This makes the flex items display as a horizontal row.', 'This is the default behavior.', 'This stacks the flex items vertically instead of horizontally.', 'This reverses the order of the items.'], correctAnswer: 2, explanation: 'By default, flex items are laid out along the main axis, which runs horizontally (row). `flex-direction: column;` changes the main axis to run vertically, stacking the items on top of each other.' },
    { id: 'hard-html-css-29', language: 'html', title: '`<table>` for layout', description: 'Using tables for non-tabular data.', code: `<table><tr><td>Sidebar</td><td>Main Content</td></tr></table>`, options: ['This is the modern and recommended way to create page layouts.', 'Using tables for layout is an old practice that should be avoided in favor of modern techniques like Flexbox and CSS Grid.', 'This provides the best accessibility.', 'This is the only way to create columns.'], correctAnswer: 1, explanation: 'Tables should be used for presenting tabular data. Using them for page layout is a legacy technique that is inflexible, bad for accessibility (screen readers have trouble parsing it), and makes the HTML less semantic.' },
    { id: 'hard-html-css-30', language: 'html', title: '`:focus` vs `:focus-within`', description: 'Styling a container when a child is focused.', code: `.form-group:focus-within { background: lightyellow; }`, options: ['This styles the `.form-group` when it itself is focused.', 'This styles the `.form-group` when it or any element inside it receives focus.', 'This is a syntax error.', 'This is identical to `:focus`.'], correctAnswer: 1, explanation: 'The `:focus-within` pseudo-class is very useful for styling a parent container (like a form group) when one of its descendants (like an `<input>`) is focused. This can be used to create a visual highlight around the active form section.' }
]
```