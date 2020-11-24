<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Arrow functions &ndash; exercises

### Setup

> Create a fully working environment that will allow you to write JavaScript code in version 6.
>
> Remember to:
> - Run ```npm init``` command
> - Install appropriate modules
> - Set Webpack - the output file should be `js/out.js`

## Exercise done with the lecturer

### Arrow functions & this

In ```exercise00.js``` write a ```countLetters``` function that will calculate the length of student names and saving the results in an array called numberOfLetters. An array of students is passed to the constructor during the creation of the object with the use of ```new```.
Write the array in the console.

```JavaScript
var students = new Students(["Sophie", "John", "Bartholomew"]);
students.countLetters();
console.log(students.numberOfLetters); // [6, 4, 11]
```


## Exercises to do on your own

### Exercise 1 (~ 2min - 5min)

In ```app.js``` create a function that will write "Hello World" in the console.

### Exercise 2 (~ 2min - 5min)

In ```app.js``` create a function that will take one parameter (a number), multiply it by 2 and return the result. Set a default value for the parameter. Write the result in the console.

### Exercise 3 (~ 2min - 5min)

In ```app.js``` create a function that will take two parameters (numbers) and return the greater one. Write the result in the console.

### Exercise 4 (~ 5min - 10min)

In ```app.js``` write a function named ```getSecondMaxNumber(array)``` that will take an array as a parameter. The function should **return** the second greatest number in the array.

Example:
```JavaScript
var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
Result in the console: 49 // 100 is the greatest number in the array but we were looking for the second greatest which is 49 in this case
```

### Exercise 5 (~ 2min - 5min)

In ```app.js``` write a function that will call itself (IIFE) and return the parameter passed to it.


### Exercise 6 (~ 10min - 12min)

In ```app.js``` write a function that will take an integer in the range 1-10 as a parameter. Set a default value for the parameter. Run ```setInterval``` in the function that will write in the console _"Hello"_ and a counter showing how many times the ```setInterval``` has already been launched. If the counter reaches the value passed as a parameter to our function, remove setInterval.

### Exercise 7 (~ 10min - 12min)

In ```exercise07.js``` write a ```generateLinks``` function that will take an array with website names and create a new array with links to those websites.

Example:

```JavaScript
let app = new App();
app.generateLinks();
console.log(app.links) // ["https://onet.com", "https://wp.com", "https://facebook.com"]
```

Insert the generated addresses to ```a``` elements in a list with a ```menu``` class in ```index.html``` file. Use jQuery.

### Exercise 8 (~ 2min - 3min)

In ```exercise08.js``` there is a ```dog``` object. Its ```setName``` method works incorrectly. Try to fix it.


### Exercise 9 (~ 10min - 15min)

In ```index.html``` there are several ```div``` elements containing a ```span``` and ```ul``` list.
In ```exercise09.js``` write code that will cause that after hovering the mouse cursor over the ```span``` element, ```ul``` list will drop down.
Use arrow function.
