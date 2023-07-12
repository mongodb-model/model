// Import the Model module
const Model = require('./');

// Create a new instance of Model for the 'users' collection
const User = new Model({ collection: 'users' });

// Create a TCP client for the server at 'http://localhost:8000'
const client = User.createTCPClient('http://localhost:8000');

// Handle the 'connect' event when the client connects to the server
client.on('connect', () => {
    console.log('Connection to server');
});

// Request all users
client.emit('send-me-all-users');

// Handle the 'all-users-sent' event when all users are received from the server
client.on('all-users-sent', (users) => {
    // Check if the received data is an array
    if (Object.prototype.toString.call(users) === '[object Array]') {
        client.emit('all-users-received', users);
    } else {
        client.emit('all-users-not-received');
    }
});

// Request a user by ID
client.emit('send-me-this-user', '645e4d81c050a750429b4421');

// Handle the 'this-user-sent' event when a specific user is received from the server
client.on('this-user-sent', (user) => {
    // Check if the received data is an object
    if (Object.prototype.toString.call(user) === '[object Object]') {
        client.emit('this-user-received', user);
    } else {
        client.emit('this-user-not-received');
    }
});

// Request user creation
client.emit('create-this-user', { name: 'John Doe', username: 'jon.doe', email: 'john.doe@gmail.com' });

// Handle the 'created-this-user' event when a user is created on the server
client.on('created-this-user', (result) => {
    console.log('Created user', result);
    // Check if the received data is an object
    if (Object.prototype.toString.call(result) === '[object Object]') {
        client.emit('this-user-created', result);
    } else {
        client.emit('this-user-not-created');
    }
});
