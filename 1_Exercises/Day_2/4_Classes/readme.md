<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Classes  &ndash; exercises

### Setup

> Create a fully working environment that will allow you to write JavaScript code in version 6.
>
> Remember to:
> - Run ```npm init``` command
> - Install appropriate modules
> - Set Webpack - the output file should be `js/out.js`

## Exercise done with the lecturer

### Vehicles (~ 5min - 10min)

Create an abstract class Vehicle. Create three objects: boat, car, and plane based on appropriate classes that inherit from Vehicle. In appropriate classes, add methods that will write in the console the information that distinguish each vehicle. Do it in such a way that the boat object cannot ride or fly, etc.

## Exercises to do on your own

### Exercise 1 (~ 5min - 10min)

In ```app.js``` create abstract class named ```Duck``` that other ducks will inherit from. Within this class create a constructor and methods:

* constructor - sets the type of duck to "ordinary duck", e.g. this.type = "ordinary duck"
* quack() - writes "quack quack"
* swim() - writes "I am swimming...""
* display() - writes "Looks like an ordinary duck". Use the type setting here.

Create a ```duckling``` object. Call all methods on it.

### Exercise 2 (~ 5min - 10min)

Based on the ```Duck``` class, create another class named ```WildDuck```. Overwrite the constructor so that the ```display()``` method changed the type of duck to "wild duck". Create a ```wildDuckling``` object. Call all methods on it.

### Exercise 3 (~ 5min - 10min)

Based on the ```Duck``` class, create another class named ```MallardDuck```. Overwrite the constructor so that the ```display()``` method changed the type of duck to "mallard". Create a ```mallardDuckling``` object. Call all methods on it.

### Exercise 4 (~ 5min - 7min)

You created a ```Duck``` class that all ducks can inherit from. Your task is to add a ```fly()``` method to an appropriate class. The method should write "I am flying" in the console.

### Exercise 5 (~ 5min - 7min)
Based on the ```Duck``` class, create another class named ```RubberDuck```. Overwrite the constructor so that the ```display()``` method changed the type of duck to "rubber". Create a ```rubberDuckling``` object. Call all methods on it. Can you see something disturbing? ......Your rubber duck can fly!!
Overwrite the ```fly()``` method so that called on the rubber duck it will write "Rubber ducks do not fly :(" in the console.


### Exercise 6 (~ 15min - 25min)

On the page there is a form that allows you to add different types of products to a list.

In ```exercise06.js```, there is a Food class - an abstract array. In the constructor, the class sets the product ```name```, amounts of ```protein```, ```carbs```, and  ```fat``` in the product (in grams).


Write code that will cause the following actions will be performed after completing the form and clicking the "Add" button:
 * the new product will be added to the ```ul``` list with ```products``` id,
 * a new object will be created based on an appropriate class that inherits from Food. If the product contains more than 250 kcal, it will be created as a FastFood class object. If below 250 kcal, it will be created as a FatFreeFood class object.
 * add the newly created product to the ```foods``` array and write the array in the console.

You can calculate the calories using the following formula:
```JavaScript
1 g protein	is 4 kcal
1 g fat	is 9 kcal
1 g carbohydrates is 4 kcal
```

Example:
After entering a hot_dog product and its nutritional values in the form, an object will be created based on the Fast_Food class, e.g. in the following way: ```new FastFood('Hot Dog', 10, 4.2, 26)```, which - calculated:
10* 4 + 4.2 * 4 + 9 * 26 - gives us the result of 280.8 kcal.

Based on the form, create several objects as you see them below:

```JavaScript
new FastFood('Fries', 3.4, 41, 15)
new FastFood('Donut', 4.9, 51, 25)
new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4)
```
Write a method named print (in the appropriate class) that will write the information about the product.


### Exercise 7 (~ 15min - 25min) - for volunteers

Imagine that you are creating a website that has two types of menus: horizontal and vertical.
Create an abstract class, e.g. ```MenuGenerator```, based on which you will create new types of menus. When creating the menu, provide the menu type and table with menu items to the constructor (example of the call below).

Also create two methods in the base class:
* getType() - writes menu type
* showItems() - writes menu elements

In addition, you want the vertical menu to be animated. Add an appropriate method to it that will print the text "Menu animation: vertical" in the console.

```JavaScript
let hMenuGenetator = new HorizontalMenuGenerator("horizontal", ['start', 'about']);
let vMenuGenetator = new VerticalMenuGenerator("vertical", ['home', 'contact']);

```
