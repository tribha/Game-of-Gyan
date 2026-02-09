
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
    }
];
