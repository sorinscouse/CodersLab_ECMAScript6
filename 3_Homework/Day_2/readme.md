# ES6 - homework

## Day 2
> Do the exercise 1 in the app.js file

#### Exercise 1

Create a super class named ```Insect```. Create two classes that will inherit from super: ```Centipede``` and  ```Spider```.

In the base class ```Insect``` create a constructor that will set the insect's name and number of legs (Think of something creative. You can also set an insect type or subtype if you have the courage to check it out in Wikipedia :) ).

Create a method/methods called ```getLegs()``` that will write the number of legs of a given animal in the following way:

```HTML
Hi my name is Lucy I am a centipede and I have 20 legs
Hi my name is Michael I am a spider and I have 8 legs
```

Put these texts in the right paragraphs on the HTML page.

#### Exercise 2

Create an arrow function named ```saySomething()``` and pass it the following object as a parameter:

```JavaScript
let wally = {
    name: "Wally",
    age: 2,
    proffesion: "Repairing other robots"    
}
```
 Using destructuring, assign all three object attributes to the same variable names. Return the string in the form:

 ```HTML
 Hi my name is Wally, I am 2 years old and my job is Repairing other robots".
 ```


### Exercise 3

Create a function named ```sayHello``` that will write ```Hello``` for each of its parameters. Parameters should be strings. Use the rest/spread operator.

Try to use one of the methods: ```forEach```, ```map``` or ```reduce```. Remember that besides ```var```, you also know ```const``` and ```let```.


Call example:

```JavaScript
sayHello("Ann", "Kate", "Steve", "Matthew");
```

Result in the console:

```HTML
Hello: Ann
Hello: Kate
Hello: Steve
Hello: Matthew
```
