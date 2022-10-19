1.
use strict
    "use strict" directive was new in ECMAScript version 5
    purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    strict mode will start from line where we have written "use strict"
    Strict mode makes it easier to write "secure" JavaScript Code.
    eg
    x = 3.14;       // This will cause an error because x is not declared
    deleting variable or object or function is not allowed
    function x(p1, p1) {};   // This will cause an error because duplicating parameters
    let x = 010; //Octal numeric literals are not allowed
    let x = "\010"; // Octal escape characters are not allowed
    // Writing to a read-only property is not allowed
    const obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});
    obj.x = 3.14;
    // Undeleteble property cannot be deleted
    delete Object.prototype;
    // variable name eval, arguments is not allowed
    this keyword in function will return undefined



Dynamic Language
    When you declare a variable, you do not need to specify the type of the variable.
    Eg. In javascript, we declare variable and assign number,
     and after we can assign string or any other type values;





Data types - Primitives - 7, Object - 1
    Boolean type.
    Null type.
    Undefined type.
    Number type.
    BigInt type.
    String type.
    Symbol type.




Create Object
    1. using object literal
        const person = {
            firstName: 'testFirstName',
            lastName: 'testLastName'
        };

    2. using the ‘new’ keyword
        - user defined constructor function
            // constructor function 
            function Person(fname, lname) {
                this.firstName = fname;
                this.lastName = lname;
            }
            const personOne = new Person('testFirstNameOne', 'testLastNameOne');

        - built-in object constructor function
            const person = new Object();
            person.firstName = 'testFirstName';
            person.lastName = 'testLastName';

    3. using Object.create() 
        const employee = Object.create({property: 'value'})
    
    4. using Object.assign()
        const employee = Object.assign({}, {property: 'value'})

    5. using ES6 classes
        class Person {
            constructor(fname, lname) {
                this.firstName = fname;
                this.lastName = lname;
            }
        }

        const person = new Person('testFirstName', 'testLastName');


instanceof and typeof operator
    instanceof Checks the current object and returns true if the object is of the specified object type.
    instanceof returns Boolean
    eg
        const isEmployeeInstance = employee instanceof Employee;
    typeof operator to find the data type of a variable.
    typeof returns string
        NaN is number
        array, date, null is object
        function is function
        undefined variable is undefined
    // to check Date and Array
        dateVariable.constructor === Date; 
        arrVariable.constructor === Array







Setters and geters i.e. accessor properties
    Used to get or set the value of an object
    get - to define a getter method to get the property value
    set - to define a setter method to set the property value
    const student = {
        // data property
        firstName: 'Monica',
        // accessor property(getter)
        get getName() {
            return this.firstName;
        }
        //accessor property(setter)
        set changeName(newName) {
            this.firstName = newName;
        }
    };

    Using Object.defineProperty()
    Syntax
    Object.defineProperty(obj, prop, descriptor)

    const student = {
        firstName: 'Monica'
    }

    // getting property
    Object.defineProperty(student, "getName", {
        get : function () {
            return this.firstName;
        }
    });

    // setting property
    Object.defineProperty(student, "changeName", {
        set : function (value) {
            this.firstName = value;
        }
    });




args vs arguments
    When we have unknown number of parameters we use ...args (spread orerator) or arguments
    arguments is an array-like object

    eg
    function a(...args) {
        log(args)// all parameters as array
    }

    function a() {
        log(arguments[0], arguments[1])// prints first 2 parameters
    }
    arguments.length will tell you no of arguments passed
    function.length will tell you how much arguments it will take
    function func(a) {
        arguments[0] = 99; // updating arguments[0] also updates a
        console.log(a);
    }
    func(10); // 99




Coersion
    means implicit conversion of values from one data type to another (such as number to string);
    eg "Hi"  + 2; //Hi2; 2 converted to string 2
    [] to string comma separated values as string [] => '', [10,20] => '10,20'
    {} converts to strings as [Object Object]




Prototype
    prototype is a property and its value is object,
    prototype property associated with every function and object
     in JavaScript
    function's prototype property is accesible and we can modify it's value
    but objects prototype property is not visible
    eg
    function Student() {
        this.name = 'john';
    }
    Student.prototype.age = 30; // Add proprty to prototype property of function
    let student = new Student();
    When we create an object, __proto__ property gets added to instance,
     this property points to constructor functions's prototype property
     Means in other words when we access __proto__ property it will return
      prototype proprty of constructor function
    We use prototype property to find properties and methods of a object
    We can implement inheritance in javascript using prototype Property




Prototype chain
    Javascript engine check that
     if given property or method is attached to object or not, if it found returns the value
    In not, it goes to __proto__ property of object,
     and check there if found returns value,
     this __proto__ proprty points to the parent's prototype property.
    If not, goes again to prototype property of parent,
     it goes till Object function because everything is derieved from Object function.
    Lastly if the property does not find in prototype property of Object, it will return null
    This is called prototype chain
    eg, D is object which is created using C class, which extends to B class, which extends to A.
    so when we try to access some property it goes till Object functions prototype property;









Inheritance using Prototype
    Inheritance is important concept when we works with objects,
     we can reuse functionality in inheritance
    In inheritance methods from base class gets copied to child class
    In javascript inheritance is supported by prototype property;
    This is also called prototypal inheritance or Behavioural Delegation
    Eg
    // Base Class
    function Person(name, lname) { // 1
        this.name = name;
        this.lname = lname;
    }
    Person.prototype.getName() {    // 2
        return this.name + this.lname;
    }
    // Derieved Class
    function Student(name, lname, school) { // 3
        Person.call(this, fname, lname); // 4
    }
    Student.prototype = new Person(); // 5
    Student.prototype.constructor = Student; // 6
    let student = new Student('John', 'Deo', 'St. John'); // 7

    1- Declare Base class, 
    2- attach methods to prototype property of Person,
     so children of person can use them
    3- declare child class, 
    4- In child, Give call to Parent similar to super() in other languages
    5- point prototype of Student to Person class by creating Object of Person
    6- point prototype.constructor to child
    7- Create object of Student;
    Now we can ascess method from base class also



hasOwnProperty()
    The hasOwnProperty() method returns a boolean indicating whether
     the object has the specified property as its own property and not inherited from parent













2.
Hoisting
    Hoisting in javascript means, move the declaration of functions, variables or classes
     to the top of their scope, before execution of the code.
    let and const also get hoisted and returns ReferenceError if used before declaration
    Initializations are Not Hoisted, just declaration get hoisted
    eg var x = 13; // just var x gets hoisted, not x = 13;




null vs undefined
    Null: It is the intentional absence of the value
    Undefined: It means the value does not exist in the compiler.
    typeof null is Object, this is known bug in javascript
    typeof undefined is undefined
    so null == undefined // true, but null === undefined // false because types are different





Scope
    Scope is area where a variable is accessible to.
    Scope is current context of execution, 
    Scope is the context in which values and expressions are visible or can be referenced
    There are two types of scope
    Local and Global, also es6 added block scope with let and const




Local and Global Scope
    Global means outside function,
    Local scope of function scope means within function









Lexical Scope
    Means place where a variable or function declare;
    Initializations doesn't matter for lexical scope
    Eg
    var a;
    var z = 80;
    function outer() {
        var b;
        a = 30;
        function inner() {
            b = 20;
        }
    }
    Lexical scope for
    a => Global Scope // Listed or declared in global scope
    b => outer function's function scope // Listed in outer function
    x => Global scope // Listed or declared in global scope
    





Closures
    Closure is the combination of a function, bundled together
     with references to its surrounding state i.e. the lexical environment.
    In other words, a closure gives you access to an outer function's scope from an inner function.
    We can use private variables using closures,
    We can hide internal implemetation from users
    function add() {
        let counter = 0;
        function plus() { counter += 1; };
        return plus;
    } 
    var counter = add() // return plus function which is having access to counter variable;
    So in this function even add function gets executed counter has access to counter variable;
    We usually use closure in this fashion, but every function in javascript has closure

    





this keyword
    this keyword refers to an object, but which object is depends on where we use this keyword
    1. Alone, this refers to the global object.
    2. In Object Method binding, this refers to Object,
    2. In a function, this refers to the global object.
    3. In a function, in strict mode, this is undefined.
    4. In an event, this refers to the element that received the event.
    5. Methods like call(), apply(), and bind()
     can refer 'this' as passed object
      while calling function with call and apply and passed object while creating function using bind.





Call, Apply, Bind
    Used to reuse functions
    call and apply invokes function but bind creates new function and later we can call.
    call and apply take first argument as object for reference for this object, 
    bind takes object reference for this while createing function
    call takes comma seperated arguments
    apply takes arguments as an array


Function chaining
    grouping functions in one single line using dot notation
    Uses this keyword to make enable function chaining
    This type of chaining makes the code very concise and also improves the performance
    eg
    function Pizza() {
        makeBase() { this.madeBase = true; return this; }
        addPizzaSauce() { this.addedPizzaSauce = true; return this; }
        addTopings() {this.addedPizzaTopings = true; retur this}
    }
    le pizza = new Pizza(); pizza.makeBase().addPizzaSauce().addTopings();



Higher order functions
    In javascript functions are treated as first-class citizens, 
    We can treat functions as values and assign them to another variable,
     pass them as arguments to another function,
     or even return them from another function

    a function which takes another function as an argument or returns a function
     is known as a higher order function
    HOF allow us to abstract over actions, not just values.
    Passing a function as an argument to another function
    array.filter(a => a === true); // filter take function as arguments
    function count() {
        var counter = 1;
        return function() { // count() returns this function
            retur counter ++;
        }
    }










3.
IIFE
    Immediately Invoked Function Expression
    a JavaScript function that runs as soon as it is defined
    Use to Avoid polluting the global namespace
    (() => {
        // some initiation code
        let firstVariable;
        let secondVariable;
    })();

    // firstVariable and secondVariable will be discarded after the function is executed.




Curry and use cases
    in functional programming, transformation of the function of multiple arguments
     into several functions of a single argument in sequence.
    Currying is a transformation of functions that translates a function from
     callable as f(a, b, c) into callable as f(a)(b)(c).
    eg
    function sum(a, b, c) {
        return a + b + c;
    }
    we converts this function
    function curried(fun) {
        return function(a) {
            return function(b) {
                return function(c) {
                    return fun(a, b, c);
                }
            }
        }
    }
    var curriedSum = curried(sum);
    console.log(curriedSum(2)(3)(3));

    In this way we make sure we have all needed arguments before execution;
    Use Case
    It lets you compose the sequence of your functions and ensures that
     the particular sequence is enforced and followed.
    Let’s say you want to achieve the following process
        check if stock exists 
            --> check warehouse
                --> deduct stock amount
    checkStock('ItemId')('WareHouseId)(5);



Object Constructor Property
    The constructor property returns a reference to the object's constructor function
     that created the instance object.
    "string".constructor == String
    new Person().constructor == Person;
    // reference to 7th step of inheritance



Fundamental Object contructor type
    Object's constructor property always points to Fundamental Object Contructor type for Object
    let b = new Number() // Fundamental Object Contructor for b is Number
    let ob = {} // Fundamental Object Constructor for ob is Object









Debouncing and throttling used to improve performance
debouncing
    debounce function makes sure that your code is only triggered once per user input.
     Search box suggestions, text-field auto-saves,
    Let's say that we want to show suggestions for a search query,
     but only after a visitor has finished typing it.
    Eg
    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { 
                func.apply(this, args); 
            }, timeout);
        };
    }
    In this way we wait for user to finish his inputs, then invoke function once
    (child asking for icecream and mom says I'll give an icecreame only if you stop asking)

throttling
    Throttling is used to call a function after a particular interval of time,
     only the first click is executed immediately;
    Eg. execute function after every 200ms 
    function throttle(cb, delay = 200) {
        let shouldWait = false

        return (...args) => {
            if (shouldWait) return

            cb(...args)
            shouldWait = true
            setTimeout(() => {
                shouldWait = false
            }, delay)
        }
    }
    (child keeps asking for chocolate and mom give him chocolate in interval 4 hours)



Callbacks,
    When we pass a function as argument to a function,
     this type of argument is called as Callback function
    Eg
    function add(a, b) {}; function sub(a, b) {};
    function calculate(add, sub, a, b) {}; // add and sub as callbacks
    When function has to wait for another function to complete. 
    Usually used to handle asynchronous functions results


SetTimeouts
    setTimeout() method calls a function after a number of milliseconds.
    setTimeout() is executed only once.
    const timer = setTimeout(() => {
        // functions to execute
    }, 500);
    // cancel the timer
    clearTimeout(timer);

    
SetInterval
    setInterval() method calls a function after a specified interval
    setInterval() is executed till we clearInterval.
    const id = setInterval(displayHello, 1000);// keeps executing displayHello after every 1000
    cancel interval
    clearInterval(id);







4.
Execution Context
    The Execution Context contains the code that's currently running,
     and everything that used in its execution i.e. variables and functions.
    During the Execution Context run-time,
     the specific code gets parsed by a parser,
      the variables and functions are stored in memory,
      executable byte-code gets generated, and the code gets executed.


Execution Stack or Call Stack
    Call stack keeps track of all the Execution Contexts created during the life cycle of a script.
    JavaScript is a single-threaded language,
     which means that it is capable of only executing a single task at a time.
    when other actions, functions, and events occur,
     an Execution Context is created for each of these events
    Due to the single-threaded nature of JavaScript, a stack is created which has execution contexts.
    // Search and Show 





Event loop
    JavaScript runtime model based on an event loop
    Which is responsible for executing the code,
     collecting events and processing those events,
     and executing queued sub-tasks
    1. Heap - stores variables needed in execition
    2. Call Stack - when execution contexts get created, those will add to the stack,
    3. Web or Browser Api - callbacks wait for web api's,
     async operations to complete or timers to complete
    4. Callback or Event queue - Once the timeres and async operations complete,
     callbacks are get pushed to callback queue, or event queue
        - Macrotasks queue - setInterval, setTimeout callback functions
        - Microtasks queus - resolve, reject, finally handler of promises,
         or callback function of queueMicrotask() function
    5. Event Loop - keeps an eye on callck queue and call stack
       If callback queue has callbacks to execute, it will check if callstack is empty or not
       Once the call stack is empty, it will take first callback and adds to call stack to execute






Macro Tasks and Micro tasks
    Execution of .then/catch/finally handler becomes a microtask.
    queueMicrotask(func) this function will add func to microtask queue
    Immediately after every macrotask, the engine executes all tasks from microtask queue.
     before start execution of macrotask
    Eg
    setTimeout(func1); Promise.resolve().then(func2);Promise.resolve().then(func3);
    func2, and func3 will executes first and then func1 will executes;
     becuase func2, func3 gets added to microtask queue














Event Deligation
    We can listen events only on those element which are existed in page;
     but there is problem if elements get loaded dynalically after registering event listners
    We can register event listernes on parent elements,
     and listen events of dynamically loaded elements, in this way we can solve the above issue.
    This is called event delegation model.
    In this we just add event listener on ul element and
     listens the event generated on li element also. 
     we can find source element using event.target property
    In other words, we add events listner on parent instead of adding events listener on every child.
    eg
    const clickHandler = function(event) {console.log(event.target)};
    const ulElem = document.getElementById('ulElem');
    ulElem.addEventListener('click', clickHandler);










Bubbling And Capturing
    When we generate event on any element,
     that same event triggers on all parent elements till the html element.
    When events generates from child to parent this is called as event Bubbling,
    And when event first generates on html element and
     then for children till the source element (which element generated element) this is called as Capturing
    Bubbling is happenes by default,
     to make it capture we pass third argument false to addEventListener function














Promises
    // Create a Promise
    let promise = new Promise(function(resolve, reject) { });
    // Listen for resolve or reject
    primise.then(resolveFunction, rejectFunction);
    // finally executes when promise settled, no matter res, or reject
    primise.finally(() => stop loading indicator)
    // finally resolve reject
    .finally(() => alert("Promise ready")) // triggers first, uses for hide loader
    .then(result => alert(result)); // <-- .then shows "value"
    .catch(err => alert(err));  // <-- .catch shows the error
    // We can create rejected promise using Promise.reject() static method
    Promise.reject(new Error('fail')).then(resolved, rejected); // always rejected will call
    // We can create resolved promise using Promise.resolve() static method
    Promise.resolve(value).then(resolved, rejected); // always resolve will call
    - Promise.all()
    returns a new Promise(). returned new promise resolves if all input promises resolves else
     rejects immidiately if one or the promise rejects
    - Promise.allSettled()
    returns a new Promise(). returned new promise resolves when all input promises settles
     (reject or fullfile)
    - Promise.any()
    returns a new Promise(). returned new promise resolves if any one of input promises resolves,
     if not single promise resolves, returned promise rejects
    - Promise.race()
    returns a new Promise(). returned new promise resolves or rejects
     if one of the promise resolves or rejects



let vs const vs var
    1.  var declarations are globally scoped or function scoped
        let and const are block scoped
    2.  var variables can be re-declared and updated
        let can be updated but cannot redeclare in SAME scope.
        const cannot be updated and cannot be re-declared in SAME scope
    3.  var variables are hoisted at the top of the scope and initiatilizes to undefined
        let and const are hoisted at the top of the scope but it doesn't getinitialized,
         that is why if we try to access let or const variable before declaration,
          it gives ReferenceError

Reverse string
    1. array's reverse
        str.split('').reverse().join('');
    2. decrementing for loop
        for (let i = str.length -1; i >= 0; i--) {
            reversed += str[i];
        }
    3. recursion
        reverseString(str) {
            return (str === '') ? '' : reverseString(substr(1)) + str.charAt(0);
        }
        reverseString('hello');




Array functions
    a.concat(b)	                    Joins arrays and returns an array with the joined arrays
    fruits.copyWithin(2,0)          copyWithin() copies array elements to another position in an array, overwriting existing values
    fruits.entries()	            Returns a key/value pair Array Iteration Object // [0, 'Banana'] [1, 'Orange']
    every()                         return true if every element pass test function
    fruits.fill("Kiwi");	        Fill the elements in an array with a static value
    filter()	                    Creates a new array with every element in an array that pass a test
    find()	                        Returns the value of the first element in an array that pass a test, else return undefined
    findIndex()	                    Returns the index of the first element in an array that pass a test, else -1
    forEach()	                    Calls a function for each array element
    Array.from("ABCDEFG")           Create an array using string
    includes()	                    Check if an array contains the specified element
    indexOf()	                    Search the array for an element and returns its position, else return -1
    Array.isArray(abc)	            Checks whether an object is an array
    join()	                        Joins all elements of an array into a string
    fruits.keys(); let key of keys; Returns keys of array
    fruits.lastIndexOf("Apple");    Start searching from end, returns position else -1
    map()	                         Creates a new array with the result of calling a function for each array element
    pop()	                        Removes the last element of an array, and returns that element
    push()	                        Adds new elements to the end of an array, and returns the new length
    reduce()	                    Reduce the values of an array to a single value  (going left-to-right)
    reduceRight()	                Reduce the values of an array to a single value (going right-to-left)
    reverse()	                    Reverses the order of the elements in an array
    shift()	                        Removes the first element of an array, and returns that element
    slice()	                        Selects a part of an array, and returns the new array
    some()	                        Checks if any of the elements in an array pass a test
    sort()	                        Sorts the elements of an array, by using optional sort function
    splice()	                    Adds/Removes elements from an array
        fruits.splice(2, 0, "Lemon", "Kiwi"); At position 2, add 2 elements
        fruits.splice(2, 2); At position 2, remove 2 items:
    unshift()	                    Adds new elements to the beginning of an array, and returns the new length

Object Methods
    Object.assign(target, source)
        copies all enumerable own properties from one or more source objects to a target object
         It returns the modified target object.
    Object.create(person)
        creates a new object, using an existing object person
    Object.entries(object1)
        returns [key, value] pairs
        for (const [key, value] of Object.entries(object1)) {}
    Object.freeze(obj)
        new properties cannot be added, existing properties cannot be removed,
        their enumerability, configurability, writability, or value cannot be changed
        returns same object as frozen

    Object.fromEntries(entries)
        new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed
        output: Object { foo: "bar", baz: 42 }

    Object.getOwnPropertyNames(object1)
        returns an array of all properties
        output: Array ["a", "b", "c"]

    Object.getPrototypeOf(object1)
        returns the prototype property
        Object.getPrototypeOf(person) === Person // true
    Object.is()
        determines whether two values are the same value
    Object.hasOwn(object1, 'prop')
        returns true if the specified object has the indicated property as its own property.
    Object.isExtensible()
        determines if an object is extensible (whether it can have new properties added to it)
    Object.isFrozen()
        determines if an object is frozen
    Object.isSealed()
        determines if an object is sealed
    Object.keys()
        returns an array of a given object's own enumerable property names
    Object.seal()
         seals an object
         new properties cannot be added, existing properties cannot be removed
         only difference with freez is, value of existing properties can changes, if writable: true
    Object.setPrototypeOf(obj, prototype)
        sets the prototype of obj1 to prototype (prototype is usually object) or null.
    Object.values(object1)
        returns an array of a given object's own enumerable property values
        output: Array ["somestring", 42, false]
    Object.defineProperty(ob, 'prop', configObject)
    configObject = {enumerable: false,
      writable: false,
      configurable: false,
      value,}
        defines a new property directly on an object, or modifies an existing property on an object, and returns the object

    Object.prototype.hasOwnProperty()
        returns a boolean indicating whether the object has the specified property as its own property
    Foo.prototype.isPrototypeOf(bar)
        checks if an object exists in another object's prototype chain
        checks if bar object exists in Foo object's prototype chain




String functions
    charAt()	Returns the character at a specified index
    charCodeAt()	Returns the Unicode of the character at a specified index
    concat()	
        Returns two or more joined strings
        text1.concat(text2)
    endsWith()
    includes()
    indexOf()
    lastIndexOf()
    match()	
        Searches a string for a value, or a regular expression, and returns the matches
    repeat()	
        Returns a new string with a number of copies of a string
        text.repeat(4);
        Output: Hello world!Hello world!Hello world!Hello world!
    replace()	
        Searches a string for a value, or a regular expression, and returns a string where the values are replaced
    search()	
        Searches a string for a value, or regular expression, and returns the index (position) of the match
    slice()	
        Extracts a part of a string and returns a new string
    split()	
        Splits a string into an array of substrings
    startsWith()	
        Checks whether a string begins with specified characters
    substr()	
        Extracts a number of characters from a string, from a start index (position)
    substring()	
        Extracts characters from a string, between two specified indices (positions)
    toLowerCase()	
        Returns a string converted to lowercase letters
    toUpperCase()	
        Returns a string converted to uppercase letters
    trim()	
        Returns a string with removed whitespaces
    trimEnd()	
        Returns a string with removed whitespaces from the end
    trimStart()	
        Returns a string with removed whitespaces from the start
    valueOf()	
        Returns the primitive value of a string or a string object


Math functions
    Math.round(x)	Returns x rounded to its nearest integer 6.7 => 7, 6.4 => 6
    Math.ceil(x)	Returns x rounded up to its nearest integer 6.7 => 7
    Math.floor(x)	Returns x rounded down to its nearest integer 6.4 => 6
    Math.pow(x, y)  x to the power of y 2,3 => 8
    Math.sqrt(x)    square root of y 64 => 8
    Math.min(...nums); minimun of given nums
    Math.max(...nums); maximum of given nums


Iterator and Generator functions
Iterators:
    Iteration means traversing data
    An iterable is a data structure that we want to traverse in. Eg. array, string, map, sets
    An iterator is a pointer for traversing through iterables i.e. data structures
Generator functions: Syntax function* (combination of function and *)
    Generator function is a special type of iterator, used for traversing data
    in generators execution will pause till thw next call;
    When we call generator function, it will return special type of iterator, and when we call interator,
     iterator will return object having value and done key;
    Eg
    function* getOtp() {
        while(true)
        yield Math.random().toString().substr(2, 6);
    }
    let otp = getOtp();
    console.log(otp.next()); // {value: '234235', done: false};
    console.log(otp.next()); // {value: '567249', done: false};

Use cases of Generator
    1. We can generate OTPs
    2. We can generate fake Ids





how let and const compiles
    Variables declared using let and const are hoisted, but stays uninitialized, that's why the thow ReferenceError, if we access let and cons variable before declaration
    These variables declarations only become initialized when the are evaluted during runtime. 
temporal dead zone
    This time between Hoisting and Initialization is called as Temporal Dead Zone.
    If we access variables withing TDZ, thows ReferenceError.


Measure javascript performance
    To measure how much time takes to execute a loop or function or any operation, we can use one of the following method
    1- console.time(), console.timeEnd()
        console.time();
        test();
        console.timeEnd();
        // Output
        default: 1.2529296875ms (test function took time in ms)

    2- performance.now() // gives you timestamp in ms
    const start = performance.now();
    test();
    const end = performance.now();
    console.log(end - start) // gives us time take to execute test()



Improve perfomance in javascript
    1. Event Delegation implementation
        Sevaral event listener can affect perfomance
    2. Avoid unwanted loops
        Loops puts extra strain on the browser, also dont read array.length in every iteration,
         instead declare variable and assign length of array to it, and use that variable
    3. Gzip compression responses
        Gzip compresses the big JavaScript files and saves the bandwidth
    4. Minimize DOM access
        Interaction of host browser with objects (DOM),
         that takes place outside the JavaScript native environment,
         results in a significant amount of performance lag
    5. Boost performance by caching object
        Use HTTP protocol cache or JavaScript Cache API with service worker
    6. Get rid of unused JavaScript
        detecting functionality which is not being used by any of the users, and get rid of that piece of code
    7. Defer unnecessary load of JavaScript
        It’s not necessary that all the functions are available at the initial load of a page
        So for those function we can defer loading
    8. Eliminate memory leaks
        impact the overall performance, Use tools to analyse memory leak and fix them
    9. Use tools that detect problems
         Google PageSpeed is built to help JavaScript developer to understand areas of improvement
         Lighthouse is a tool to audit performance
    10. Try to achive reusability of code
        This will decrease script size, also decreses the compile time




Why memory leaks happen and how to avoid
    Means piece of memory that is no longer being used by an application but,
    for some reason is not returned back to the OS.
    In other words, its a forgotten data forever waiting to be used
    Eg
    1. Undeclared/ Global Variables: Don't add variable to window object
    2. Forgotten timers or callbacks: stays in memory
        setTimeout or a setInterval referencing some object in the callback is the most common way of memory leak
        Use clearInterval() and clearTimeout();
    3. Event listeners
        Active event listener will prevent all variables captured in its scope from being garbage collected
        Get rid of them using explicit use of removeEventListerner();
        Also if we are going to use eventListener only once then we pass {once: true} object as 3rd parameter, and event lister wil remove after used once.
    4. Closures
        Function-scoped variables will be cleaned up after the function has exited the call stack,
          and if there aren’t any references left outside of the function.


Web components
    Web components are custom, reusable, encapsulated HTML tags to use in web pages.
    They build on the Web Component standards, will work across modern browsers,
     and can be used with any JavaScript library or framework that works with HTML
    Eg
    // myElement.js
    class MyElement extends HTMLElement {
        constructor() { super(); /* ... */ }
        connectedCallback() { /* ... */ } // browser calls this method when the element is added to the document
        disconnectedCallback() { /* ... */  } // browser calls this method when the element is removed from the document
        static get observedAttributes() { return [/* ... */]; } // list observed attributes
        attributeChangedCallback(name, oldValue, newValue) { /* ... */ } // Triggers when any attribute value changes (listed above)
    }
    customElements.define('my-element', MyElement);

    Use in webpage by loading myElement.js
    /* <my-element> */




Profiling
    A JS profiler is an efficient tool to help you understand your code better – effectively finding, pinpointing and optimizing bottlenecks in your code.
    Chrome has built in profiler

Accessibility
    Accessibility is the practice of making your websites usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.
    You might also think of accessibility as treating everyone the same, and giving them equal opportunities, no matter what their ability or circumstances.

Progressive rendering
    Progressive Rendering means rendering the webpage in such a manner that high priority component will be rendered first and then low priority component will be rendered.

REST
    RESTful API is an interface that two computer systems use to exchange information securely over the internet.
    Representational State Transfer (REST) is an architecture that imposes conditions and constraint on how an API should work.
    How it works?
        1. The client sends a request to the server. The client follows the API documentation to format the request in a way that the server understands.
        2. The server authenticates the client and confirms that the client has the right to make that request.
        3. The server receives the request and processes it internally.
        4. The server returns a response to the client. The response contains information that tells the client whether the request was successful. The response also includes any information that the client requested.

PWA
    Progressive Web Apps (PWAs) are web apps that use service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps.
    PWAs provide a number of advantages to users — including being installable, progressively enhanced, responsively designed, re-engageable, linkable, discoverable, network independent, and secure.
    PWA are Installable, we can install like Native app
    Linkable, so you can share it by sending a URL.
    Network independent, so it works offline or with a poor network connection.
    Responsively designed, so it's usable on any device
    Discoverable, so the contents can be found through search engines

AMP - Accelerator mobile pages
    It is an open source initiative that allows you to create web pages that load quickly on mobile browsers

Design patterns in javascript
    design patterns are classified into three main categories
    creational: These patterns use different mechanisms used to create objects
    structural: These patterns assemble objects and classes into larger structures.
    behavioral: These patterns control the communication and the assignment of responsibilities between different objects

    Creational
    1. Singleton is a design pattern that ensures that a class has only one immutable instance.
        
        // Using Class
        class MyClass {
            constructor() {
                if (MyClass._instance) {
                    return MyClass._instance;
                }
                MyClass._instance = this; // If we dont want user to modify a copy, Object.freeze(this); 
            }
        }

        var instanceOne = new MyClass()
        var instanceTwo = new MyClass()

        console.log(instanceOne === instanceTwo)
        
        // Using closeure and IIFE
        let instance = (function() {
            let privateVariables = 'Some privateValue';
            function getPrivateValue() {
                return privateVariables;
            }
            return { // Public interface
                publicMethod1: getPrivateValue,
                publicMethod2: function anotherFun() {
                    return anotherVar;
                },
            }
        })();

    2. Factory Pattern
        this pattern produce families of related objects without specifying concrete classes
        Eg
        const vehicleFactory = {
            createVehicle: function(vehicleType) {
                switch(vehicleType) {
                    case 'Car':
                        return new Car();
                        break;
                    case 'Truck':
                        return new Truck();
                        break;
                }
            }
        }
        const carObject = vehicleFactory.createVehicle('Car');

    3. Builder Pattern
        Builder pattern is used to create objects in "steps".
        Means we create objects first and then we attach properties to it;
        
        const bug1 = { name: "Buggy McFly" };
        const bug2 = { name: "Martiniano Buggland" };

        const addFlyingAbility = (obj) => {
            obj.fly = () => `My name is ${obj.name} and I can Fly now`;
        }

        addFlyingAbility(bug1);
        addFlyingAbility(bug2);
        console.log(bug2.fly())

    4. Prototype Pattern
        // Using Object.setPrototypeOf
        // means we use obj2 prototype to attach methods to obj1, to use methods of obj2
        Object.setPrototypeOf(obj1, obj2); // this will set prototype of obj2 to obj1;
        console.log(obj1.methodOfObj2());

        // Using Prototypel inheritance

    Structural Patters
    1. Adapter Pattern
        Adapter allows two objects with incompatible interfaces to interact with each other
        Eg. Mapper Function
        let list = [{name: 'Delhi', value: '6.9'}];
        let item = {name: 'Chennai', value: 8};
        const toList = (item) => { // We are using this adapter function
            return {...item, value: item.value.toFixed(1)};
        }
        const newItem = toList(item);
        list.push(newItem);

    2. Facade Pattern
        https://dev.to/tomekbuszewski/facade-pattern-in-javascript-3on4
        
        
Implement object oriented concepts
