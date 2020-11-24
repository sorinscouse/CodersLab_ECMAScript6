<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# String interpolation &ndash; exercises

### Setup

> Create a fully working environment that will allow you to write JavaScript code in version 6.
>
> Remember to:
> - Run ```npm init``` command
> - Install appropriate modules
> - Set Webpack - the output file should be `js/out.js`

## Exercises done with the lecturer

###  Function, template string & object

In ```app.js``` create a ```whoAreYou()``` function that will **return** a stringa (see example below) based on the ```person``` object passed to it as a parameter.


```JavaScript
const person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};

whoAreYou(person);
```

```HTML
My name is Vlad Drăculea.
I am 586 years old.
My proffesion is Lord of Wallachia.
```


## Exercises to do on your own

### Exercise 1 (~ 2min - 5min)

In ```app.js``` create two variables that will capture any numbers. Then, write their sum in the console using template strings.

Example:
```JavaScript
The sum of two numbers: 2 and 4 is: 6
```

### Exercise 2 (~ 2min - 5min)

In ```app.js``` assign your name to a variable. Then, write it in the console along with your surname.

Example:
```JavaScript
My name and surname are: Chuck Norris
```

### Exercise 3 (~ 2min - 5min)

In ```app.js``` create a function that will write in te console a text that takes several lines, e.g.:

```HTML
"I think there's a great beauty
to having problems.
That's one of the ways we learn."
Herbie Hancock
```

Insert the text to an element with ```cite``` class in the index.html file.


### Exercise 4 (~ 5min - 10min)

Having made a button object (see exmple below) in ```app.js```, write the following text in the console:

```HTML
This is a button.
It is 140px wide.
The text on it says "Send message".
```

```JavaScript
const button = {
  text: "Send message",
  id: "sendMsg",
  width: 100,
  padding: 20
};
```
Based on the data from the object, create a new ```button``` element and add it to the page.
Use the object to set appropriate styles and attributes.
