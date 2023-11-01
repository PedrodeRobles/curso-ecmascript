function newUser(user, age, country, user_id) {
    return {
        user,
        age,
        country,
        id: user_id
    }
};

console.log(newUser('Pedro', 22, 'ARG', 89));