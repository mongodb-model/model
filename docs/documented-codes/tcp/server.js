// Import the Model module
const Model = require('./');

// Create a new instance of Model for the 'users' collection
const User = new Model({ collection: 'users' });

// Create a TCP server with Redis using the User model
const io = User.createTCPServerWithRedis();

// Function to handle client connections
const onConnection = (socket) => {
    console.log('Client is ready');

    // Send all users
    socket.on('send-me-all-users', () => {
        // Find all users in the collection
        User.find();

        // Handle 'find' event
        User.on('find', (users) => socket.emit('all-users-sent', users));
        
        // Handle 'find-error' event
        User.on('find-error', (error) => socket.emit('error-sending-all-users', error));

        // Handle 'all-users-received' event
        socket.on('all-users-received', () => console.log('Sending all users done!'));

        // Handle 'all-users-not-received' event
        socket.on('all-users-not-received', () => console.log('Resend all users'));
    });

    // Send a specific user
    socket.on('send-me-this-user', (id) => {
        // Find a user by ID
        User.findById(id);

        // Handle 'findById' event
        User.on('findById', (user) => socket.emit('this-user-sent', user));

        // Handle 'findById-error' event
        User.on('findById-error', (error) => socket.emit('error-sending-this-user', error));

        // Handle 'this-user-received' event
        socket.on('this-user-received', () => console.log('Sending this user done!'));

        // Handle 'this-user-not-received' event
        socket.on('this-user-not-received', () => console.log('Resend this user.'));
    });

    // Create a new user
    socket.on('create-this-user', (userData) => {
        // Create a user with the provided data
        User.create(userData);

        // Handle 'create' event
        User.on('create', (result) => socket.emit('created-this-user', result));

        // Handle 'create-error' event
        User.on('create-error', (error) => socket.emit('error-creating-this-user', error));

        // Handle 'this-user-created' event
        socket.on('this-user-created', () => console.log('This user creation done!'));

        // Handle 'this-user-not-created' event
        socket.on('this-user-not-created', () => console.log('Recreate this user'));
    });
};

// Listen for 'connection' event on the TCP server
io.on('connection', onConnection);

// Start listening on port 8000
io.listen(8000);
