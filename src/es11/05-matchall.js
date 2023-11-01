const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Apple, Orange';

for (const coincidencia of fruit.matchAll(regex)) {
    console.log(coincidencia);
}