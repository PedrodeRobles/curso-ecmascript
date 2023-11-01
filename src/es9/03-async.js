async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();

other.next().then(res => console.log(res.value));
other.next().then(res => console.log(res.value));
other.next().then(res => console.log(res.value));
console.log("Hello");


async function arrayOfNames (array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Jose', 'Carlos', 'Ana']);
console.log('After');