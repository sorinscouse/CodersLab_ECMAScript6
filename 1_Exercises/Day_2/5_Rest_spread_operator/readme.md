<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Spread/rest operator &ndash; exercises

### Setup

> Create a fully working environment that will allow you to write JavaScript code in version 6.
>
> Remember to:
> - Run ```npm init``` command
> - Install appropriate modules
> - Set Webpack - the output file should be `js/out.js`

## Exercises done with the lecturer

### Spread operator (~ 5min)

In ```app.js``` create two arrays: ```namesA``` and ```namesB```. The first one should contain strings only.
The second one should contain any two strings followed by all the elements of the ```namesA``` array. The last two elements of the ```namesB``` array should be "Jan" and "Karol".

Example:

```JavaScript
let namesA = ["Zosia", "Marcin", "Kamil"];
let namesB = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil","Jan", "Karol" ];
```

### Rest operator (~ 5min)

In ```app.js``` create a function named ```getAverage``` that will take any number of parameters (numbers) and returns the arithmetic mean of those numbers.

Call example:

```JavaScript
getAverage(2,4,5,6,7,79);
```

## Exercises to do on your own

### Exercise 1 (~ 2min - 5min)

In```app.js``` create a variable that will store your name. Using the **spread operator** save individual letters in an array.
Display the array in the console.

### Exercise 2 (~ 2min - 5min)

In ```app.js``` create two arrays: ```fruit``` and ```vegetables```. Next, create another array named ```mix``` that will be a combination of the first two arrays. Use the **spread operator**.

### Exercise 3 (~ 5min - 10min)

In ```exercise03.js``` there is an array declared. Create a function named ```setFunnyName``` that will take any number of parameters. The function should add all its parameters to the ```people``` array. Use **rest operator**.
