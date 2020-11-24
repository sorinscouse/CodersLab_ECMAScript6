# ES6 - homework

## Day 1
> Do exercises 1-3 in the app.js file

### Exercise 1

Create an arrow function named ```getNumbers``` that will take an array of numbers as a parameter. It should multiply each array element by 2 and return the result.

Try to use one of the methods: ```forEach```, ```map``` or ```reduce```. Remember that besides ```var```, you also know ```const``` and ```let```.

### Exercise 2

Create a function named ```Weather``` that will be a constructor. Create an object based on this constructor and pass it an array with 3 temperature measurements during the day. Extend the ```Weather``` constructor with ```getAvgTemperature``` method (add it to the prototype) that will return an average temperature during the day. Insert this value to an element with ```avg``` class.

Try to use one of the methods: ```forEach```, ```map``` or ```reduce```. Remember that besides ```var```, you also know ```const``` and ```let```.

Call example:

```JavaScript
var day1 = new Weather([-2, 4.4, 3]);
console.log( day1.getAvgTemperature());
```

### Exercise 3

In ```index.html``` there is a jQuery library added. In ```app.js``` set a click event on button elements.
Clicking the button should expand the paragraph below.
Use arrow function inside the ```on``` method.

Remember that besides ```var```, you also know ```const``` and ```let```.
