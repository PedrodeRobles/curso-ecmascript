function newUser(name, age, country) {
    var name = name || 'Pedro';
    var age = age || 30;
    var country = country || 'Arg';
    console.log(name, age, country);
}

newUser();
newUser('Jose', 99, 'UY');

function newAdmin(name = 'Pedro', age = 22, country = 'ARG') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Roberto', 80, 'CHL');