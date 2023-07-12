const Model  = require('./');

const User = new Model({collection: 'users'});
const client = User.createTCPClient('http://localhost:8000');

client.on('connect',() => {
    console.log('connection to server')
})


// request all users 
client.emit('send-me-all-users');

client.on('all-users-sent', users =>{
    if(Object.prototype.toString.call(users) =='[object Array]') client.emit('all-users-received', users);
    else client.emit('all-users-not-received');
})

// request a user by id
client.emit('send-me-this-user', '645e4d81c050a750429b4421');

client.on('this-user-sent', user =>{
    if(Object.prototype.toString.call(user) =='[object Object]') client.emit('this-user-received', user);
    else client.emit('this-user-not-received');
})


// request user creation 
client.emit('create-this-user',{name: 'John Doe', username: 'jon.doe', email: 'john.doe@gmail.com'});

client.on('created-this-user', result =>{
    console.log('created user', result);
    if(Object.prototype.toString.call(result) =='[object Object]') client.emit('this-user-created', result);
    else client.emit('this-user-not-created');
})







