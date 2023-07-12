// Import the Model module
const Model  = require('./');

const User = new Model({collection: 'users'});
const io = User.createTCPServerWithRedis();

const onConnnection = socket => {
    console.log('client is ready')

    // Send all users
    socket.on('send-me-all-users',() => {

       User.find();
       User.on('find', users => socket.emit('all-users-sent', users) )
       User.on('find-error', error => socket.emit('error-sending-all-users', error) )

       socket.on('all-users-received', () => console.log('sending all users done!'))
       socket.on('all-users-not-received', () => console.log('resend all users'))

    })

    //Send me this user
    socket.on('send-me-this-user', id => {
        User.findById(id);
        User.on('findById', user => socket.emit('this-user-sent', user));
        User.on('findById-error', error => socket.emit('errror-sending-this-user', error));

        socket.on('this-user-received', () => console.log('sending this user done!'));
        socket.on('this-user-not-received', () => console.log('resend this user.'));
    })

    // User creation requested 

    socket.on('create-this-user', userData => {
        User.create(userData);
        User.on('create', result => socket.emit('created-this-user', result));
        User.on('create-error', error => socket.emit('error-creating-this-user', error));

        socket.on('this-user-created', () => console.log('this user creation done!'))
        socket.on('this-user-not-created', () => console.log('recreate this user'));
    })
}

io.on('connection', onConnnection);
io.listen(8000);








