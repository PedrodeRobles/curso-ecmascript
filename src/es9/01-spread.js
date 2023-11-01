const user = { username: 'pdr', age: 22, country: 'ARG' };
const { username, ...values } = user
console.log(username);
console.log(values);