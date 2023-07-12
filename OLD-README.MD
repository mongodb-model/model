# Mongodb Model 

Model is an exceptional and dynamic tool that excels in facilitating seamless interaction with MongoDB databases, constructing robust internal or external APIs, establishing efficient TCP connections, and enabling real-time communication. Developed as a comprehensive wrapper around the Native Node.js MongoDB driver, it effectively streamlines the intricacies typically associated with this technology, as well as with Mongoose.js. Acting as a duplex stream, particularly a Transform stream, Model maximizes the potential of both the MongoDB driver and the Node.js Transform Stream API. Essentially, any task achievable with these cutting-edge technologies can be effortlessly accomplished using Model. Furthermore, Model operates with a strong emphasis on event-driven architecture and maintains impeccable compatibility with Mongoose.js, enhancing its overall versatility and usability.

### Installation

 <br />

#### 1. install model 

```bash
$ yarn add @mongodb-model/model

```
 or 

```bash

$ npm i @mongodb-model/model

```

#### 2. add .env file in your project root directory with at least these two environment variables
 *** No need for installing dotenv npm package ***
```bash

DATABASE_NAME='Your Mongodb Database Name'
DATABASE_URL='Your Mongodb Database URL'
JSON_FAKER_URL='Your json faker url'
BUCKET_NAME='Your GridFS bucket name'

## Something like this: 

DATABASE_NAME='my_app'
DATABASE_URL='mongodb://localhost:27017'
JSON_FAKER_URL='https://jsonplaceholder.typicode.com/'
BUCKET_NAME='myGridFSBucket'

```
#### 3. Make sure you have mongodb server running if you are using mongodb server locally.
 <br />

### Start using it
Mongodb-model leverages the power of the MongoDB Native Node.js Driver, simplifying its complexities. It utilizes the same set of methods with identical parameters, seamlessly integrating with the Mongodb Native Node.js Driver. When employing the callback style, an additional callback function is included for flexibility.

 ### Usage
 Simply initialize the Model class. This automates the database connection process. There's no need for manual database connection handling, as it is seamlessly taken care of during the instantiation of the Model class.

 ```javascript 
const Model = require('@mongodb-model/model');
const ModelName = new Model({collection: 'collectionName'});
 ```

 Depending on your requirements, you have the flexibility to opt for one or a combination of three approaches: the promise approach, the event approach, and the callback approach. By leveraging these approaches, you can effectively address various scenarios and accomplish your goals. The versatility provided by these options empowers you to tailor your solution to meet your specific needs. Embracing the simplicity and power of these approaches, you can confidently navigate your development journey.

 * Using Promise
 ```javascript
 ModelName.methodName(parameter1, parameter2, ...)
    .then(result => /** Your success codes here**/)
    .catch(error => /** Your error codes here**/);
 ```
* Using Event

```javascript
ModelName.methodName(parameter1, parameter2, ...);
ModelName.on('methodName', result => /** Your success codes here**/);
ModelName.on('methodName-error', error => /** Your error codes here**/);
 ```
* Using Callback: all parameters are required (not optional) when using the callback approach.
```javascript
ModelName.methodName(parameter1, parameter2, ...,(error, result) => {
    /** Your successs and error codes here**/
});
 ```

### Simple Usage Examples
 <br />

#### Basic CRUD (Create, Read, Update, Delete)

```javascript
const Model = require('@mongodb-model/model');

/*
|------------------------------------------------------------------------------------
| Event based
|------------------------------------------------------------------------------------
|
|  Tbe complete form of instantiating the Model is the following example:
|  const User = new Model({db: 'app', collection: 'users', faker_url: 'https://jsonplaceholder.typicode.com/'},{},|{},..{});
|
| If the constructor parameters are omitted, the default values of the first parameter object are the database
| environment variable set in the .env file and the default collection is 'users'.

| if the first parameter object is provided but misses a key, the missing key will be set
| to the corresponding key in the .env file
*/

const User = new Model({collection: 'users'});


// ======================== create or insertOne ===========================

// Create or InsertOne 
const userData = {firstname: 'John', lastname: 'Doe', email: 'john.doe@mail.com'};

/*
|------------------------------------------------------------------------------------
| Promise based 
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/
User.create(userData).then(response => console.log(response)).catch(error => console.log(error));

/*
|------------------------------------------------------------------------------------
| Event based
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/

User.create(userData);
// Listen for the 'create' event because model emitted 'create' event when the 'create' (User.create(userData)) method was called and successully created a new user with the userData.
User.on('create', result => console.log('new user created', result));

// Listen for the 'create-error' event because model emitted 'create-error' event when the 'create' (User.create(userData)) method was called and failed to create a new user with the userData.
User.on('create-error', error => console.log('new user creation error', error));

/*
|------------------------------------------------------------------------------------
| Callback style
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/

User.create(userData, (error, result) =>{
    if(error) return console.log(error) 
    console.log(result)
})

// ======================== find ===========================

// Create or InsertOne 

/*
|------------------------------------------------------------------------------------
| Promise based 
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/
User.find({},{}).then(response => console.log(response)).catch(error => console.log(error));
// or User.find().then(response => console.log(response)).catch(error => console.log(error));

/*
|------------------------------------------------------------------------------------
| Event based
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/

User.find({},{}); // or User.find();


// Listen for the 'create' event because model emitted 'create' event when the 'create' (User.create(userData)) method was called and successully created a new user with the userData.
User.on('find', result => console.log('new user created', result));

// Listen for the 'create-error' event because model emitted 'create-error' event when the 'create' (User.create(userData)) method was called and failed to create a new user with the userData.
User.on('find-error', error => console.log('new user creation error', error));

/*
|------------------------------------------------------------------------------------
| Callback style
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/

User.find({},{}, (error, result) =>{
    if(error) return console.log(error) 
    console.log(result)
})


// ======================== update ===========================

// Create or InsertOne 

/*
|------------------------------------------------------------------------------------
| Promise based 
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/
User.updateOne({email: 'erison.weah@gmail.com'},{$set: {lastname: 'I love Javascript'}}).then(response => console.log(response)).catch(error => console.log(error));

/*
|------------------------------------------------------------------------------------
| Event based
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/

User.updateOne({email: 'erison.weah@gmail.com'},{$set: {lastname: 'I love Javascript'}})
// Listen for the 'create' event because model emitted 'create' event when the 'create' (User.create(userData)) method was called and successully created a new user with the userData.
User.on('updateOne', result => console.log('new user created', result));

// Listen for the 'create-error' event because model emitted 'create-error' event when the 'create' (User.create(userData)) method was called and failed to create a new user with the userData.
User.on('updateOne-error', error => console.log('new user creation error', error));

/*
|------------------------------------------------------------------------------------
| Callback style
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/

User.updateOne({email: 'erison.weah@gmail.com'},{$set: {lastname: 'I love Javascript'}}, (error, result) =>{
    if(error) return console.log(error) 
    console.log(result)
})


// ======================== deleteOne ===========================

// Create or InsertOne 

/*
|------------------------------------------------------------------------------------
| Promise based 
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/
User.deleteOne({email: 'erison.weah@gmail.com'}).then(response => console.log(response)).catch(error => console.log(error));

// or User.deleteOne({email: 'erison.weah@gmail.com'},{}).then(response => console.log(response)).catch(error => console.log(error));

/*
|------------------------------------------------------------------------------------
| Event based
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/

User.deleteOne({email: 'erison.weah@gmail.com'}) // Or User.deleteOne({email: 'erison.weah@gmail.com'},{})
// Listen for the 'create' event because model emitted 'create' event when the 'create' (User.create(userData)) method was called and successully created a new user with the userData.
User.on('deleteOne', result => console.log('new user created', result));

// Listen for the 'create-error' event because model emitted 'create-error' event when the 'create' (User.create(userData)) method was called and failed to create a new user with the userData.
User.on('deleteOne-error', error => console.log('new user creation error', error));

/*
|------------------------------------------------------------------------------------
| Callback style
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/

User.deleteOne({email: 'erison.weah@gmail.com'},{}, (error, result) =>{
    if(error) return console.log(error) 
    console.log(result)
})
```

#### Making api requests
```javascript
/*
|------------------------------------------------------------------------------------
| Making https and http requests
|------------------------------------------------------------------------------------
|
| You can make both https and http requests using the three different ways depending on 
| your preferences or need: promise or event or callback
|
*/
```
##### https requests 
```javascript
 const Model = require('@mongodb-model/model');
 const model = new Model();

/*
|------------------------------------------------------------------------------------
| The get method or HTTPS GET method
|------------------------------------------------------------------------------------
|
| the get method has the following form:
|  async get(url = 'https://jsonplaceholder.typicode.com/comments', callback = () => {}, options = {})

*/
 
 /**
  *  Promise 
  */
 model.get('https://jsonplaceholder.typicode.com/comments')
 .then(response => console.log(response))
 .catch(error => console.log(error));

 /**
  * Event 
  */

 model.get('https://jsonplaceholder.typicode.com/comments');
 
 model.on('get', data => console.log(data));
 model.on('get-error', error => console.error(error));

 /**
  * Callback
  */

model.get('https://jsonplaceholder.typicode.com/comments', (error, data) => {
    if(error) return console.error(error);
    console.log(data);
})
 
 /*
|------------------------------------------------------------------------------------
| The post method or HTTPS POST method
|------------------------------------------------------------------------------------
|
| the post method has the following form:
|    async post(url = parse(url), data = JSON.stringify(data), callback = () => { }, headers = { 'Content-Type': 'application/json' })

*/

const postData =  {
    postId: 20,
    name: 'et sint quia dolor et est ea nulla cum',
    email: 'cool.javascript@gmail.com',
    body: 'architecto dolorem ab explicabo et provident et\n' +
      'et eos illo omnis mollitia ex aliquam\n' +
      'atque ut ipsum nulla nihil\n' +
      'quis voluptas aut debitis facilis'
  }
 
 /**
  *  Promise 
  */
 model.post('https://jsonplaceholder.typicode.com/comments/', postData)
 .then(response => console.log(response))
 .catch(error => console.log(error));

 /**
  * Event 
  */

 model.post('https://jsonplaceholder.typicode.com/comments/', postData);
 
 model.on('post', data => console.log(data));
 model.on('post-error', error => console.error(error));

 /**
  * Callback
  */

model.post('https://jsonplaceholder.typicode.com/comments/', postData, (error, data) => {
    if(error) return console.error(error);
    console.log(data);
})
 
  /*
|------------------------------------------------------------------------------------
| The put method or HTTPS PUT method
|------------------------------------------------------------------------------------
|
| the put method has the following form:
|   async put(url = parse(url), data = JSON.stringify(data), fn = () => { }, headers = { 'Content-Type': 'application/json' })

*/

const putData =  {
    postId: 20,
    name: 'et sint quia dolor et est ea nulla cum',
    email: 'cool.javascript@gmail.com',
    body: 'architecto dolorem ab explicabo et provident et\n' +
      'et eos illo omnis mollitia ex aliquam\n' +
      'atque ut ipsum nulla nihil\n' +
      'quis voluptas aut debitis facilis'
  }
 
 /**
  *  Promise 
  */
 model.put('https://jsonplaceholder.typicode.com/comments/1', putData)
 .then(response => console.log(response))
 .catch(error => console.log(error));

 /**
  * Event 
  */

 model.put('https://jsonplaceholder.typicode.com/comments/1', putData);
 
 model.on('put', data => console.log(data));
 model.on('put-error', error => console.error(error));

 /**
  * Callback
  */

model.put('https://jsonplaceholder.typicode.com/comments/1', putData, (error, data) => {
    if(error) return console.error(error);
    console.log(data);
})


  /*
|------------------------------------------------------------------------------------
| The delete method or HTTPS DELETE method
|------------------------------------------------------------------------------------
|
| the delete method has the following form:
|   async delete(url = parse(url), fn = () => { }, headers = { 'Content-Type': 'application/json' })

*/

 /**
  *  Promise 
  */
 model.delete('https://jsonplaceholder.typicode.com/comments/1')
 .then(result => console.log(result))
 .catch(error => console.log(error));

 /**
  * Event 
  */

 model.delete('https://jsonplaceholder.typicode.com/comments/1');
 
 model.on('delete', result => console.log(result));
 model.on('delete-error', error => console.error(error));

 /**
  * Callback
  */

model.delete('https://jsonplaceholder.typicode.com/comments/1', (error, result) => {
    if(error) return console.error(error);
    console.log(result);
})

```

##### http requests 
```javascript
 const Model = require('@mongodb-model/model');
 const model = new Model();

/*
|------------------------------------------------------------------------------------
| The GET method or HTTP GET method
|------------------------------------------------------------------------------------
|
| the GET method has the following form:
|  async GET(url, callback = () => { })

*/
 
 /**
  *  Promise 
  */
 model.GET('http://localhost:3000/')
 .then(response => console.log(response))
 .catch(error => console.log(error));

 /**
  * Event 
  */

 model.GET('http://localhost:3000/');
 
 model.on('GET', data => console.log(data));
 model.on('GET-error', error => console.error(error));

 /**
  * Callback
  */

model.GET('http://localhost:3000/', (error, data) => {
    if(error) return console.error(error);
    console.log(data);
})
 
 /*
|------------------------------------------------------------------------------------
| The POST method or HTTP POST method
|------------------------------------------------------------------------------------
|
| the POST method has the following form:
|     async POST(url = parse(url), data = {}, callback = () => { },  headers =  {'Content-Type': 'application/json'})

*/

const postData =  {
    postId: 20,
    name: 'et sint quia dolor et est ea nulla cum',
    email: 'cool.javascript@gmail.com',
    body: 'architecto dolorem ab explicabo et provident et\n' +
      'et eos illo omnis mollitia ex aliquam\n' +
      'atque ut ipsum nulla nihil\n' +
      'quis voluptas aut debitis facilis'
  }
 
 /**
  *  Promise 
  */
model.POST('http://localhost:3000/posts', postData)
.then(result => console.log(result))
.catch(error => console.log(error));

 /**
  * Event 
  */

model.POST('http://localhost:3000/posts', postData)
 
 model.on('POST', data => console.log(data));
 model.on('POST-error', error => console.error(error));

 /**
  * Callback
  */

model.POST('http://localhost:3000/posts', postData, (err, data) =>{
  if(err) return console.error(err);
  console.log(data);
})
 
  /*
|------------------------------------------------------------------------------------
| The PUT method or HTTPS PUT method
|------------------------------------------------------------------------------------
|
| the PUT method has the following form:
|   async PUT(url = parse(url), data = {}, fn = () => { }, headers = { 'Content-Type': 'application/json' })

*/

const putData =  {
    postId: 20,
    name: 'et sint quia dolor et est ea nulla cum',
    email: 'cool.javascript@gmail.com',
    body: 'architecto dolorem ab explicabo et provident et\n' +
      'et eos illo omnis mollitia ex aliquam\n' +
      'atque ut ipsum nulla nihil\n' +
      'quis voluptas aut debitis facilis'
  }
 
 /**
  *  Promise 
  */
model.PUT('http://localhost:3000/posts/1', postData)
.then(result => console.log(result))
.catch(error => console.log(error));

 /**
  * Event 
  */

model.PUT('http://localhost:3000/posts/1', postData)
 
model.on('PUT', data => console.log(data));
model.on('PUT-error', error => console.error(error));

 /**
  * Callback
  */

model.PUT('http://localhost:3000/posts/1', postData, (err, data) =>{
  if(err) return console.error(err);
  console.log(data);
})
 


  /*
|------------------------------------------------------------------------------------
| The DELETE method or HTTPS DELETE method
|------------------------------------------------------------------------------------
|
| the DELETE method has the following form:
|    async DELETE(url = '', fn = () => { }, headers = { 'Content-Type': 'application/json' })

*/

 /**
  *  Promise 
  */
model.DELETE('http://localhost:3000/posts/1')
.then(result => console.log(result))
.catch(error => console.log(error));

 /**
  * Event 
  */

model.DELETE('http://localhost:3000/posts/1')
 
model.on('DELETE', result => console.log(result));
model.on('DELETE-error', error => console.error(error));

 /**
  * Callback
  */

model.DELETE('http://localhost:3000/posts/1', (err, result) =>{
  if(err) return console.error(err);
  console.log(result);
})

```

#### By extension

```javascript
 class MyWonderfulClass extends require('@mongodb-model/model') {

    constructor(...arrayOfObjects) {

    super({ objectMode: true, encoding: "utf-8", autoDestroy: true });

    arrayOfObjects.forEach(option => {
        if(Object.keys(option).length > 0){
            Object.keys(option).forEach((key) => { if(!this[key]) this[key] = option[key];})
        }
    });

    this.autobind(MyWonderfulClass);
    this.autoinvoker(MyWonderfulClass);
    this.setMaxListeners(Infinity);
  }
 };
 
```
#### Detailed explanation with first contructor parameter object
```javascript
 const Model = require('@mongodb-model/model');
                
// Usage 
const YourCustomModel = new Model({db: 'your_database_name', collection: 'your_collection_name', url: 'your_database_url', faker_url: 'your_faker_url'})
                
// No constructor Parameter provided: 
 const User = new Model;
// Default collection is 'users'
// Default database name is your .env DATABASE_NAME 
// Default database url is your .env DATABASE_URL or 'mongodb://localhost:27017'
// Default faker_url url is your .env JSON_FAKER_URL or 'https://jsonplaceholder.typicode.com/'
                
// Constructor first parameter object with only collection key
const User = new Model({collection: 'users'});
// Default database name is your .env DATABASE_NAME 
// Default database url is your .env DATABASE_URL or 'mongodb://localhost:27017'
// Default faker_url url is your .env JSON_FAKER_URL or 'https://jsonplaceholder.typicode.com/'
                
// Connecting to multiple databases
const BlogUser = new Model({db: 'blog', collection: 'users'})
const WorkChat = new Model({db: 'work', collection: 'chats'})
const ForumUser = new Model({db: 'forum', collection: 'users'})

// query (create query using ForumUser)
const userData = {firstname: 'John', lastname: 'Doe', email: 'john.doe@mail.com'};
ForumUser.create(userData);

ForumUser.on('create', user => console.log('new user created', user));
ForumUser.on('create-error', error => console.log('new user creation error', error));
 
```

#### Detailed explanation with all other contructor parameter objects
```javascript
const Model = require('@mongodb-model/model');
  
const User = new Model({},{title: 'Cool Users', age: 25, fullName: () => 'User Full Name', Post: class Post {}});

// The User model now has the following added to its prototype and they are bounded to it: title,age, fullName, post
// So now we can do things like the following: 
            
const title = User.title 
const age = User.age 
const fullname = User.fullName();
const FirstPost = new User.Post 
            
// Or using object destructuring 
const {title, age, fullName, Post} = User
 
```

#### CLI example
```bash
 ## make User Model 
model make:model User

## Schema 
model make:schema UserSchema 
model make:schema --schema=Chat

## Migration

model make:migration users 
model make:migration --schema=chats 


# migrating 
# migrate all migrations and schemas 
model migrate # will migrate all migrations found in /app/schemas/ and /app/database/migrations
model migrate --schema=schema-name # will only migrate provided schema name or migration name 
model migrate --migration=migration-name # will only migrate provided schema name or migration name 
```

#### Some available instance methods 
```javascript

const DB = require('@mongodb-model/model');
const db = new DB();

// The following functions are available on db, the DB instance, as methods.
// The majority of them, especially the ones with name very similar to the Mongodb native driver methods, are actually the corresponding 
// mongodb native driver methods. In other words, they take the exact same arguments as the corresponding  native mongodb driver methods with the addtional fns function: the optional callback function.


// Note that the callback function (fns) comes last (the last parameter or comes right after the second parameter )

async aggregate(pipeline = {}, options = {}, fns = () => {}){}
async bulkwrite(operations = [], options = {}, fns = () => {}) {}
async count(query = {}, options = {}, fns = () => {}) {}
async countDocuments(query = {}, options = {}, fns = () => {}) {}
async deleteOne(filter = {}, options = {}, fns = () => {}) {}
async deleteMany(filter = {}, options = {}, fns = () => {}) {}
async findOne(query = {}, options = {}, fns = () => {}){}
async findOneAndDelete( filter = {}, options = {},fns = () => {}) {}
async insertOne(document = {}, options = {}, fns = () => {}) {}
async insertMany(documents = [], options = {}, fns = () => {}) {}
async remove(query = {}, options = {}, fns = () => {}){}
async watch( pipeline = [], options = {},fns = () => {} ) {}
async validate(document = {full: true, repair: true},fns = () => {}){}

async findById(id="645b9cf776b7fb46975316d9", options = {},fns = () => {}){}
async findByEmail(email = 'ericson.weah@gmail.com', options = {},fns = () => {}){}
async findByToken(token="645b9cf776b7fb46975316d9", options = {},fns = () => {}){}
async findByPhone(phone = '2852045167', options = {},fns = () => {}){}
async findByUsername(username = 'username', options = {},fns = () => {}){}
async findByCode(code = 'FT', options = {},fns = () => {}){}
async findByFirstname(firstname='firstname', options = {},fns = () => {}){}
async findByLastname(lastname="lastname", options = {},fns = () => {}){}

async firstById(id="645b9cf776b7fb46975316d9", options = {},fns = () => {}){}
async firstByEmail(email = 'ericson.weah@gmail.com', options = {},fns = () => {}){}
async firstByToken(token="645b9cf776b7fb46975316d9", options = {},fns = () => {}){}
async firstByPhone(phone = '2852045167', options = {}, fns = () => {}){}
async firstByUsername(username = 'username', options = {}, fns = () => {}){}
async firstByCode(code = 'FT', options = {},fns = () => {}){}
async firstByFirstname(firstname='firstname', options = {}, fns = () => {}){}
async firstByLastname(lastname="lastname", options = {}, fns = () => {}){}


async find(query = {},projection = {}, fns = () => {}){}
async distinct(field = {}, query = {}, options = {}, fns = () => {}) {}
async update(query = {}, update = {}, options = {}, fns = () => {}){}
async updateById(id="645b9cf776b7fb46975316d9", update = {}, options = {}, fns = () => {}){}
async updateOne(query = {}, update = {},options = {}, fns = () => {}){}
async updateMany(query = {}, update = {},options = {}, fns = () => {}){}
async replaceOne(filter = {}, replacement = {},fns = () => {} options = {}){}
async findOneAndReplace( filter = {}, replacement = {}, options = {}, fns = () => {} ){}
async findOneAndUpdate( filter = {}, update = {}, options = {}, fns = () => {} ) {}

async createIndex(keys = {}, options = {}, commitQuorum = {},fns = () => {}){}
async createIndexes( keyPatterns = [], options = {}, commitQuorum = {},fns = () => {} ){}



async drop(options = {}, fns = () => {}) {}
async dropIndex(index = 'string' || {}, fns = () => {}) {}
async dropIndex(index = 'string' || {} || [], fns = () => {}) {}
async findAndModify(document = {},fns = () => {}){}
async hideIndex(index = 'string' || {}, fns = () => {}) {}
// async insert(document = {} || [], fns = () => {}){}
async insert(document = {}, options = {}, fns = () => {}) {}
async latencyStats(options = { histograms: true }, fns = () => {}){}
async unhideIndex(index = 'string' || {}, fns = () => {}){}
async stats(options = {scale: 1, indexDetails: true, indexDetailsKey: {}, indexDetailsName: 'name'}, fns = () => {}){}



async dataSize(fns = () => {}){}
async isCapped(fns = () => {}){}
async getIndexes(fns = () => {}){}
async getShardDistribution(fns = () => {}){}
async storageSize(fns = () => {}){}
async totalIndexSize(fns = () => {}){}
async totalSize(fns = () => {}){}
    /**
     * reIndex() may only be run on standalone instances.
      For most users, the reIndex() command is unnecessary.
     */
async reIndex(fns = () => {}){}



// Note that the optional callback function fns comes right after the first parameter
async lastById(id="645b9cf776b7fb46975316d9",fns = () => {}, options = { sort: {_id: -1}}){}
async lastByEmail(email = 'ericson.weah@gmail.com',fns = () => {}, options = { sort: {_id: -1}}){}
async lastByToken(token="645b9cf776b7fb46975316d9",fns = () => {}, options = { sort: {_id: -1}}){}
async lastByPhone(phone = '2852045167',fns = () => {}, options = { sort: {_id: -1}}){}
async lastByUsername(username = 'username',fns = () => {}, options = { sort: {_id: -1}}){}
async lastByCode(code = 'FT',fns = () => {}, options = { sort: {_id: -1}}){}
async lastByFirstname(firstname='firstname',fns = () => {}, options = { sort: {_id: -1}}){}
async lastByLastname(lastname="lastname",fns = () => {}, options = { sort: {_id: -1}}){}
async renameCollection(target = 'string',fns = () => {}, dropTarget = false){}

// Mores

async findAndSort(){}
async findAndSortDescending(){}
async findAndSortAscending(){}
async findFirstQuantity(){}
async findLastQuantity(){}
async findLastQuantityDescending(){}
async findLastQuantityAscending(){}
async findFirstQuantityDescending(){}
async findFirstQuantityAscending(){}

// Files 






```



#### Basic Schema Structure
```javascript
'use strict';
/*
|--------------------------------------------------------------------------
| articles Migration
|--------------------------------------------------------------------------
|
| Here we you may add more options (keys) to your schema.
| There is nothing new here: this is the exact same schema validation as the native mongodb schema validation.
| For more information on mongodb schema validation please visit https://www.mongodb.com/docs/manual/core/schema-validation/specify-json-schema/
|
|
*/

module.exports = {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Articles Object Validation",
          required: ['name'],
          properties: {
             name: {
                bsonType: "string",
                description: "'name' must be a string and is required"
             },
             created_at: {
                bsonType: "date",
                description: "'created_at' must be a date"
             },
             updated_at: {
                bsonType: "date",
                description: "'updated_at' must be a date"
             },
          }
       }
    }
 };

```
#### Basic Model Structure
```javascript
'use strict';

const Model = require('@mongodb-model/base-model');

/*
|--------------------------------------------------------------------------------
| User Model
|--------------------------------------------------------------------------------
|
| User extends the base model (Model) class and thus has everything
| the base model has including all the basic CRUD methods or operations.
|
|
*/

                                                        
class User extends Model{
                                                        
    /*
    |----------------------------------------------------------------------------------
    |                                   constructor
    |----------------------------------------------------------------------------------
    |
    | dbOptions: default database options: collection, database url, and database name.
    | options: default model options: any other option  for the model.
    |
    |
    */

    constructor(dbOptions = {collection: 'users', url: 'mongodb://localhost:27017', db: 'my_app'},...options){
                                                           
    /*
    |-------------------------------------------------------------------------------------
    |                                       super
    |-------------------------------------------------------------------------------------
    |
    | dbOptions: default database options: collection, database url, and database name.
    |
    |
    */
                                                        
    super(dbOptions);
                                                        
    /*
    |--------------------------------------------------------------------------------------
    | default database options: in case dbOptions is set but collection and url 
    | keys on the dbOptions are not provided.
    |--------------------------------------------------------------------------------------
    |
    */
                                                        
    if(!this['hasOwnProperty']['collection']) this.collection = 'users';
    if(!this['hasOwnProperty']['url']) this.url = 'mongodb://localhost:27017';
    if(!this['hasOwnProperty']['faker_url']) this.faker_url = 'https://jsonplaceholder.typicode.com/';
                                                        
    /*
    |---------------------------------------------------------------------------------------
    |                                      model options
    |---------------------------------------------------------------------------------------
    | Any other optional options passed to the model.
    |
    */
    
    options.forEach(option => {
        if(Object.keys(option).length > 0){
            Object.keys(option).forEach(key => {
                if(!this[key]) this[key] = option[key];
            })
        }
    })}
                                                        
    /*
    |---------------------------------------------------------------------------------------
    |                   Bellow, you may add properties and methods to your model. 
    |---------------------------------------------------------------------------------------
    |
    */
                                                        
                                                        
    /**
    * @name sayHello
    * @function
    *
    * @param {Object|String} toMyProject Project name or project object.
    *
    * @description says hello to my project
    *
    * @return does not return anything
    *
    */
                                                        
    async sayHello(toMyProject) {
        console.log('Hello there', toMyProject, '! I understand you are the new wonderful kid in the neighborhood!');
    }
                                                        
}
                                                        
                                                        
/*
|-----------------------------------------------------------------------------------------------
|                                       exports model 
|-----------------------------------------------------------------------------------------------
|
*/

module.exports = User;
```
#### CLI screenshot (terminal)

![cli](https://www.mongodb-model.com/frontend/img/cli/cli-terminal-screenshot.png "Model CLI")

#### Official Website
[https://www.mongodb-model.com](https://www.mongodb-model.com)

#### Author's Info
Website|NPM|Github|Gitlab|Blog|LinkedIn|Facebook|Twitter|Instagram|
--- | --- | --- | --- | --- | --- | --- |--- |--- |
[Website](https://www.ericsonsweah.com/dashboard)|[NPM](https://www.npmjs.com/org/mongodb-model)|[Github](https://github.com/ericsonweah)|[Gitlab](https://gitlab.com/ericsonweah)|[Blog](https://www.ericonsweah.dev)|[LinkedIn](https://www.linkedin.com/in/ericson-weah-b03600210)|[Facebook](https://www.facebook.com/Eric.S.Weah)|[Twitter](https://twitter.com/EricsonWeah1)|[Instagram](https://www.instagram.com/ericsonweah/)|

