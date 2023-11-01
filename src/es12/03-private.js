class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Metodo privado #
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const pedrito = new user('Pedro', 20);
console.log(pedrito.uAge);
console.log(pedrito.uAge = 15);
