// Declarando clase
class User {};

// Intanciando clase
// const newUser = new User();

class user{
    //metodos
    greeting() {
        return "Hello!";
    }
};

const newUser = new user();
console.log(newUser.greeting());

const developer = new user();
console.log(developer.greeting());

// Constructor
class user {
    constructor() {
        console.log("New user");
    }
    greeting() {
        return "Hello!";
    }
}

const david = new user();

// this
class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
};

const pedro = new user('Pedro');
console.log(pedro.greeting());


// setters getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const pedrito = new user('Pedro', 20);
console.log(pedrito.uAge);
console.log(pedrito.uAge = 15);
