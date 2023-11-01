function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Pedro', 'Julian', 'Juan', 'Lucia']);
console.log(it.next().value);
console.log(it.next().value);