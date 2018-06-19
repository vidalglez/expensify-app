import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/*
database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        //console.log(snapshot.val());
        console.log(expenses);
    })
    .catch((e) => {
        console.log('This failed, ', e);
    });
*/
/*
database.ref('expenses').push({
    description: 'Gas bill',
    note: 'Gas expense very low',
    amount: 1235,
    createdAt: 0
});

database.ref('expenses').push({
    description: 'Power bill',
    note: 'It was a low expens',
    amount: 2345,
    createdAt: 0
});

database.ref('expenses').push({
    description: 'Netflix bill',
    note: 'Payed thru apple account',
    amount: 1465,
    createdAt: 0
});
*/

/*
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}, (e) => {
    console.log('This failed, ', e);
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}, (e) => {
    console.log('This failed, ', e);
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
}, (e) => {
    console.log('This failed, ', e);
});
*/

/*
//The below one is a subscriber
database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });        
    });
    console.log(expenses);
});
*/

/*
database.ref().set({
    name: 'Servidor de Nadie',
    age: 45,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'Zapopan',
        country: 'Mexico'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed, ' , e);
});

database.ref().on('value', (snapshot) => {
    const value = snapshot.val();
    console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
});

setTimeout(() => {
    database.ref('name').set('Master Cerati');
}, 5000);
*/
/*
const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
}, (e) => {
    console.log('Error fetching data', e);
});

setTimeout(() => {
    database.ref('age').set(29);
}, 3500);

setTimeout(() => {
    database.ref().off(onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(55);
}, 10500);
*/

/*
database.ref('location/city').once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
})
.catch((e) => {
    console.log('Error fetching data', e);
});
*/

/*
database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});
*/

/*
database.ref('isSingle').remove().then(() => {
    console.log('Attribute removed');
}).catch((e) => {
    console.log('Failure when removing attribute');
});
*/
//database.ref().child('isSingle').remove();
