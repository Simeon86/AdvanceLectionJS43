// Public instance field - инстанцията на класа
// Privаte instance field - инстанцията на класа
// Public static field - за самия клас
// Private static field - за самия клас

console.log('///////////////////Public instance field////////////////////////////////////');

class User {

    constructor(name) {
        this.name = name;
    }
}

let user = new User('Simeon');
console.log(user.name);

console.log('///////////////////////////////////////////////////////');

class User1 {

    name;
    age = 35;
    location = 'Varna';

    constructor(name) {
        this.name = name;
    }
}

let user1 = new User1('Valeria');
console.log(user1.name);
console.log(user1.age)

console.log('///////////////////////////////////////////////////////');

class User2 {

    name;
    age = 35;
    location = 'Varna';

    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

let user2 = new User2('Caloyan', 20);
console.log(user2.name);
console.log(user2.age);

console.log('/////////////////////////Privаte instance field//////////////////////////////');

class User3 {
    #name;

    constructor (name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const user3 = new User3('Aleks');
// console.log(user.#name); // Error
console.log(user3.getName());


console.log('/////////////////////////Public static field//////////////////////////////');

class User4 {
    static TYPE_ADMIN = 'admin';
    static TYPE_REGULAR = 'regular';

    name;
    type;

    construktor(name, type) {
        this.name = name;
        this.type = type;
    }
}
const user4 = new User4('Simeon', User4.TYPE_ADMIN);
console.log(user4);
console.log(user4.type === User4.TYPE_ADMIN)


console.log('/////////////////////////Private static field//////////////////////////////');

class User5 {
    static #MAX_INSTANCES = 3;
    static #instances = 0;

    name;

    constructor(name) {
        User5.#instances++;
        if(User5.#instances > User5.#MAX_INSTANCES) {
            throw new Error('User instance limit reached');
        }
        this.name = name;
    }
}

new User5('Valeria');
new User5('Simeon');
new User5('Caloyan')

console.log(User5)