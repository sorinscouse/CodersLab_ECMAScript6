<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Functional programming &ndash; exercises
> To complete the exercises, use the appropriate methods for array operations, available in ES6: ```forEach()```, ```map()```, ```reduce()```.

## Exercise done with the lecturer

### Calculating the number of characters in a string  (~ 5min)

With an array of city names at your disposal, return and write a new array with the number of characters of each city name.

Example:
```JavaScript
var cities = ["Krakow", "Olsztyn", "Szczecin", "Ostrow Wielkopolski"];
```
The result will be:

```JavaScript
[6, 7, 8, 19];
```

## Exercises to do on your own

### Exercise 1 (~ 5min - 10min)

Create a function named ```randomize(param1, param2, callback)``` that will take as parameters:
* Any two numbers that will limit the range from which a number will be drawn
* Anonymous function that will write the drawn number.

The ```randomize()``` function should check if callback is in fact a function before calling it.

### Exercise 2 (~ 2min - 5min)

Here you have an array with animal names. Write their names in the console, one after another.

```JavaScript
var animals = ["cat", "shrimp", "giraffe"];
```

### Exercise 3 (~ 2min - 5min)

With an array with years at your disposal, create a new array that will contain the age of the person born in a given year. Display the new array.

```JavaScript
var years = [1995, 1856, 2014, 1987];
```

### Exercise 4 (~ 5min - 7min)

Having an array with numbers at your disposal, return and display:

*  result of adding all numbers from the array (sum of numbers in the array)
*  the result of multiplying all numbers from the array (the product of numbers in the array)
