
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
];

    