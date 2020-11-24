<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Destructuring &ndash; exercises

### Setup

> Create a fully working environment that will allow you to write JavaScript code in version 6.
>
> Remember to:
> - Run ```npm init``` command
> - Install appropriate modules
> - Set Webpack - the output file should be `js/out.js`

## Exercises done with the lecturer

### Destrukturyzacja tabeli

In ```app.js``` assign the first and last value of the following array: ```[ "snow", "rain", "sun" ]``` to variables. Write the variables in the console.

### Destructuring an object

In ```app.js``` create a ```slider``` object, like the one below:

```JavaScript
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}
```
Assign the appropriate values from the ```slider``` object to the variables: ```type``` and ```autoStart```.


## Exercises to do on your own

### Exercise 1 (~ 2min - 5min)

In ```app.js``` create an array with 3 names. Assign each name to a variable, e.g. name1, name2, name3. Use destructuring.


### Exercise 2 (~ 5min - 7min)

In ```app.js``` create a function named ```generateRandomNumbers()``` that will draw 6 numbers (in the range 0-5), save them in an array, and return this array.
Save the first and third number from the array to variables. Write these variables in the console.


### Exercise 3 (~ 5min - 7min)

In ```app.js``` create a ```getAnimal()``` function that returns the following object:
```JavaScript
 {
     name: "Garfield",
     age: 10,
     getVoice: () => "meow meow"
 }
 ```

Assign values extracted from the ```getAnimal()``` function to ```catName``` and ```catVoice``` variables.
