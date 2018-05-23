const person = {
    name: 'Servidor De Nadie',
    age: 32,
    location: {
        city: 'GDL',
        temp: 32
    }
};

const {name: firstName = 'Anonymous', age} = person;
//const name = person.name;
//const age = person.age;
console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}

const Book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published'} = Book.publisher;
console.log(publisherName);