# Does Javascript actually have classes?

<!-- => Yes, JavaScript does have classes. Classes were introduced in ECMAScript 2015 (ES6) as a syntactical sugar over JavaScript's existing prototype-based inheritance. While JavaScript's class syntax may resemble that of other object-oriented languages, it's essential to understand that JavaScript's classes are primarily a more convenient way to work with prototypes.

Here's a basic example of using classes in JavaScript:
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks`);
  }
}
const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak(); // Outputs: Buddy makes a sound
myDog.bark(); // Outputs: Buddy barks

In this example, Animal is a base class, and Dog is a subclass that extends Animal. The super keyword is used to call the constructor of the parent class.

It's important to note that even though the class syntax looks similar to that of other programming languages, JavaScript's underlying inheritance model remains prototype-based. Classes in JavaScript are essentially a more accessible way to work with prototypes and constructor functions. -->

# OOP

- is a programming paradigm (style to write the code).

## Object

- is a collection of properties and methods

## Why use OOP?

=> to make the code more readable and less messier

## parts of OOP:

1.Object Literal
2.Constructor Function
3.Prototypes
4.Classes
5.Instances(new,this)

## 4 pillars of OOP:

1.Abstraction  
2.Encapsulation
3.Inheritance
4.Polymorphism
