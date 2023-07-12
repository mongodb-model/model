"use strict";

/**
 *    @author Ericson Weah Dev  
 *    email: ericson.weah@ericsonweah.dev
 *    github: https://github.com/ericson-weah-dev
 *    phone: +1.385.204.5167
 *    Website: https://www.ericsonweah.dev
 *
 * ## Thx7GA%9N6uET4x0Nr
 * @module Model
 * @kind class
 *
 * @extends Base
 * @requires Base
 *
 * @classdesc Model class
 */


require('dotenv').config();
const Client = require('./src/db/Client');
const collectionMethod = require('./src/db/query/collection');
const streamer = require('./src/db/file/streamer');

const {ObjectId} = require('mongodb');
const {isArray, isValid, isValidObjectId, isObject, isString, isNumber, fileExists} = require('./modules/helpers')();

/**
 * Represents a Model class that extends the base class.
 */
class Model extends require("./base") {
  /**
   * Constructs a new instance of the Model class.
   *
   * @param {...Object} arrayOfObjects - Additional objects containing options to be assigned to the model.
   */
  constructor(...arrayOfObjects) {
    super({ objectMode: true, encoding: "utf-8", autoDestroy: true });

    // Assign additional options to the model
    arrayOfObjects.forEach(option => {
      if (Object.keys(option).length > 0) {
        Object.keys(option).forEach((key) => {
          if (!this[key]) this[key] = option[key];
        });
      }
    });

    // Auto bind methods of the model
    this.autobind(Model);

    // Auto invoke methods of the model
    this.autoinvoker(Model);

    // Add methods from other classes if they do not already exist
    // Example: this.methodizer(...classList);
    // Example: this.methodizeProperty(require('./src/db/query')());

    // Set the maximum number of event listeners to infinity
    this.setMaxListeners(Infinity);
}

createFn(method = 'find', ...args) {return this[method](...args)}

// async count(query = {}, options = {}, fns = () => {}) {

makeFn(method = 'find', toArray = false,  ...args) {
  // Obtain the collectionMethod  function with the current context (this) and the 'countDocuments' operation flag 
  let fn;
  const fns = args.find(el => typeof(el) === 'function');
  if(toArray) {
    if(fns && fns !== undefined) fn = collectionMethod (this)(`${method}`, fns, toArray);
    else fn = collectionMethod (this)(`${method}`);
  }else{
    if(fns && fns !== undefined) fn = collectionMethod (this)(`${method}`, fns);
    else fn = collectionMethod (this)(`${method}`);
  }

  // Invoke the obtained function passing the query and options, and return the result
  return fn(...args);
}

/**
 * The Model class represents a specific model that extends the base class.
 * It provides a convenient way to create a model instance with custom options and functionality.
 * The class accepts additional objects containing options to be assigned to the model.
 * Customize the options and functionality based on your specific requirements.
 */



/**
 * Fetches data from a specified URL and performs operations based on the received data.
 *
 * @param {string} [collection=this.collection] - The name of the collection.
 * @param {string} [faker_url=this.faker_url] - The URL to fetch the data from.
 * @returns {void}
 */
fake(collection = this.collection, faker_url = this.faker_url) {
  // Make a fetch request to the specified URL
  fetch(faker_url + collection)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
      // Check if the received data is an array
      if (isArray(data)) {
        // Call the 'insertMany' method with the data array
        this.insertMany(data);
      }
      // Check if the received data is an object
      if (isObject(data)) {
        // Call the 'insertOne' method with the data object
        this.insertOne(data);
      }
    })
    .catch(err => {
      // Log any errors to the console
      console.error(err);
    });
}


/**
 * Asynchronously performs an aggregation operation on the collection using the specified pipeline and options.
 * 
 * @param {Array} [pipeline=[]] - An array of pipeline stages for the aggregation operation.
 * @param {Object} [options={}] - Additional options for the aggregation operation.
 * @returns {Promise<any>|string} - A promise that resolves to the result of the aggregation or an error message.
 */
async aggregate(pipeline = [], options = {}, fns = () => {}) {
  // Check if the pipeline is provided and is an array
  if (pipeline && !isArray(pipeline)) return 'Invalid pipeline';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'aggregate' operation flag set to true
  const fn = collectionMethod (this)('aggregate', fns, true);

  // Invoke the obtained function passing the pipeline and options, and return the result
  return fn(pipeline, options);
}

 

  /**
 * Asynchronously performs a bulk write operation on the collection using the specified operations and options.
 * 
 * @param {Array} [operations=[]] - An array of write operations for the bulk write operation.
 * @param {Object} [options={}] - Additional options for the bulk write operation.
 * @returns {Promise<any>|string} - A promise that resolves to the result of the bulk write operation or an error message.
 */
 async bulkwrite(operations = [], options = {}, fns = () => {}) {
  // Check if the operations are provided and are an array
  if (operations && !isArray(operations)) return 'Invalid operations';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'bulkwrite' operation flag
  const fn = collectionMethod (this)('bulkwrite', fns);

  // Invoke the obtained function passing the operations and options, and return the result
  return fn(operations, options);
}


/**
 * Asynchronously retrieves the count of documents in the collection that match the specified query and options.
 * 
 * @param {Object} [query={}] - The query object to filter the documents.
 * @param {Object} [options={}] - Additional options for the count operation.
 * @returns {Promise<number>|string} - A promise that resolves to the count of matching documents or an error message.
 */
async count(query = {}, options = {}, fns = () => {}) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'count' operation flag
  const fn = collectionMethod (this)('count', fns, false, 'count');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
}

 

 /**
 * Asynchronously retrieves the count of documents in the collection that match the specified query and options.
 * 
 * @param {Object} [query={}] - The query object to filter the documents.
 * @param {Object} [options={}] - Additional options for the countDocuments operation.
 * @returns {Promise<number>|string} - A promise that resolves to the count of matching documents or an error message.
 */
async countDocuments(query = {}, options = {},fns = () => {}) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'countDocuments' operation flag
  const fn = collectionMethod (this)('countDocuments', fns, false, 'countDocuments');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
}

 
/**
 * Asynchronously creates an index in the collection with the specified keys and options.
 * 
 * @param {Object} [keys={}] - The keys object specifying the fields and their index types.
 * @param {Object} [options={}] - Additional options for creating the index.
 * @param {number|string} [commitQuorum=1] - The commit quorum for the index creation operation.
 * @returns {Promise<string>|string} - A promise that resolves to a success message or an error message.
 */
async createIndex(keys = {}, options = {}, fns = () => {}, commitQuorum = 1 || 'string') {
  // Check if the keys are provided and are an object
  if (keys && !isObject(keys)) return 'Invalid keys';
  

  // Check if the commitQuorum is provided and is a number or a string
  if (commitQuorum && !isNumber(commitQuorum) && !isString(commitQuorum)) return 'Invalid commit quorum';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'createIndex' operation flag
  const fn = collectionMethod (this)('createIndex',fns);

  // Invoke the obtained function passing the keys, options, and commitQuorum, and return the result
  return fn(keys, options, commitQuorum);
}

 

 /**
 * Asynchronously creates multiple indexes in the collection with the specified key patterns and options.
 * 
 * @param {Array} [keyPatterns=[]] - An array of key pattern objects specifying the fields and their index types.
 * @param {Object} [options={}] - Additional options for creating the indexes.
 * @param {number|string} [commitQuorum=1] - The commit quorum for the index creation operation.
 * @returns {Promise<string>|string} - A promise that resolves to a success message or an error message.
 */
async createIndexes(keyPatterns = [], options = {},fns = () => {}, commitQuorum = 1 || 'string') {
  // Check if the key patterns are provided and are an array
  if (keyPatterns && !isArray(keyPatterns)) return 'Invalid key pattern';
  

  // Check if the commitQuorum is provided and is a number or a string
  if (commitQuorum && !isNumber(commitQuorum) && !isString(commitQuorum)) return 'Invalid commit quorum';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'createIndexes' operation flag
  const fn = collectionMethod (this)('createIndexes', fns);

  // Invoke the obtained function passing the key patterns, options, and commitQuorum, and return the result
  return fn(keyPatterns, options, commitQuorum);
}


/**
 * Asynchronously retrieves the data size of the collection.
 * 
 * @returns {Promise<number>} - A promise that resolves to the data size of the collection.
 */
async dataSize(fns = () => {}) {
  // Obtain the collectionMethod  function with the current context (this) and the 'dataSize' operation flag
  const fn = collectionMethod (this)('dataSize', fns);

  // Invoke the obtained function and return the result
  return fn();
}



/**
 * Asynchronously deletes a single document from the collection that matches the specified filter and options.
 * 
 * @param {Object} [filter={}] - The filter object to determine the document to delete.
 * @param {Object} [options={}] - Additional options for the deleteOne operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the delete result or an error message.
 */
async deleteOne(filter = {}, options = {},fns = () => {}) {
  // Check if the filter is provided and is an object
  if (filter && !isObject(filter)) return 'Invalid filter';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('deleteOne', fns, false, 'deleteOne');

  // Invoke the obtained function passing the filter and options, and return the result
  return fn(filter, options);
}

/**
 * Asynchronously deletes a single document from the collection that matches the specified filter and options.
 * 
 * @param {Object} [filter={}] - The filter object to determine the document to delete.
 * @param {Object} [options={}] - Additional options for the deleteOne operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the delete result or an error message.
 */
async destroy(filter = {}, options = {}, fns = () => {}) {
  // Check if the filter is provided and is an object
  if (filter && !isObject(filter)) return 'Invalid filter';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('deleteOne', fns, false, 'delete');

  // Invoke the obtained function passing the filter and options, and return the result
  return fn(filter, options);
}



/**
 * Asynchronously deletes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to delete.
 * @param {Object} [options={}] - Additional options for the delete operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the delete result or an error message.
 */
async deleteById(id = '645b9cf776b7fb46975316d9', options = {}, fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('deleteOne', fns, false, 'deleteById' );

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({ _id: new ObjectId(id) }, options);
}

/**
 * Asynchronously removes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to remove.
 * @param {Object} [options={}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async removeById(id = '645b9cf776b7fb46975316d9', options = {},fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('deleteOne', fns, false, 'removeById');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({ _id: new ObjectId(id) }, options);
}


/**
 * Asynchronously removes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to remove.
 * @param {Object} [options={}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async updateById(id = '645b9cf776b7fb46975316d9', update = {}, options = {}, fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  if (id && !isValidObjectId(id)) return 'Invalid id provided';
  
  // Check if the options are provided and are an object
  if (update && !isObject(update)) return 'Invalid update';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'updateById');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({ _id: new ObjectId(id) }, {$set: update}, options);
}


/**
 * Asynchronously removes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to remove.
 * @param {Object} [options={}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async updateByUsername(username = 'username', update = {}, options = {}, fns = () => {}) {
  
  // Check if the options are provided and are an object
  if (update && !isObject(update)) return 'Invalid update';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'updateByUsername');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({username }, {$set: update}, options);
}



/**
 * Asynchronously removes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to remove.
 * @param {Object} [options={}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async updateByEmail(email = '645b9cf776b7fb46975316d9', update = {}, options = {}, fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  // if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // Check if the options are provided and are an object
  if (update && !isObject(update)) return 'Invalid update';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'updateByEmail');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({email}, {$set: update}, options);
}

/**
 * Asynchronously removes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to remove.
 * @param {Object} [options={}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async updateByCode(code = '645b9cf776b7fb46975316d9', update = {}, options = {}, fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  // if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // Check if the options are provided and are an object
  if (update && !isObject(update)) return 'Invalid update';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'updateByCode');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({code}, {$set: update}, options);
}


/**
 * Asynchronously removes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to remove.
 * @param {Object} [options={}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async updateByToken(token = '645b9cf776b7fb46975316d9', update = {}, options = {}, fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  // if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // Check if the options are provided and are an object
  if (update && !isObject(update)) return 'Invalid update';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'updateByToken');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({token}, {$set: update}, options);
}



/**
 * Asynchronously removes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to remove.
 * @param {Object} [options={}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async updateLastByUsername(username = '645b9cf776b7fb46975316d9', update = {}, options = {sort: {_id: - 1}}, fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  // if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // Check if the options are provided and are an object
  if (update && !isObject(update)) return 'Invalid update';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'updateLastByUsername');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({username}, {$set: update}, options);
}



/**
 * Asynchronously removes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to remove.
 * @param {Object} [options={}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async updateLastByEmail(email = '645b9cf776b7fb46975316d9', update = {}, options = {sort: {_id: - 1}}, fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  // if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // Check if the options are provided and are an object
  if (update && !isObject(update)) return 'Invalid update';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'updateLastByEmail');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({email}, {$set: update}, options);
}

/**
 * Asynchronously removes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to remove.
 * @param {Object} [options={}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async updateLastByToken(token = '645b9cf776b7fb46975316d9', update = {}, options = {sort: {_id: - 1}}, fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  // if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // Check if the options are provided and are an object
  if (update && !isObject(update)) return 'Invalid update';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'updateLastByToken');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({token }, {$set: update}, options);
}


/**
 * Asynchronously removes a document from the collection by its ID, using the specified options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to remove.
 * @param {Object} [options={}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async updateLastByCode(code = '645b9cf776b7fb46975316d9', update = {}, options = {sort: {_id: - 1}}, fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  // if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // Check if the options are provided and are an object
  if (update && !isObject(update)) return 'Invalid update';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'updateLastByCode');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId) and options, and return the result
  return fn({code}, {$set: update}, options);
}

  
/**
 * Asynchronously deletes a single document from the collection that matches the specified email and options.
 * 
 * @param {string} [email='ericson.weah@gmail'] - The email of the document to delete.
 * @param {Object} [options={}] - Additional options for the deleteOne operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the delete result or an error message.
 */
async deleteOneByEmail(email = 'ericson.weah@gmail', options = {}, fns = () => {}) {
  // Check if the email is provided and is a valid email format
  if (email && !isValid('email', email)) return 'Invalid email';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('deleteOne', fns, false, 'deleteOneByEmail');

  // Invoke the obtained function passing the filter (using the email field) and options, and return the result
  return fn({ email }, options);
}


/**
 * Asynchronously deletes a single document from the collection that matches the specified username and options.
 * 
 * @param {string} [username='ericsonweah'] - The username of the document to delete.
 * @param {Object} [options={}] - Additional options for the deleteOne operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the delete result or an error message.
 */
async deleteOneByUsername(username = 'ericsonweah', options = {},fns = () => {}) {
  // Check if the username is provided and is a valid username format
  if (username && !isValid('username', username)) return 'Invalid username';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('deleteOne', fns,false, 'deleteOneByUsername');

  // Invoke the obtained function passing the filter (using the username field) and options, and return the result
  return fn({ username }, options);
}


/**
 * Asynchronously deletes a single document from the collection that matches the specified code and options.
 * 
 * @param {string} [code='FT'] - The code of the document to delete.
 * @param {Object} [options={}] - Additional options for the deleteOne operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the delete result or an error message.
 */
async deleteOneByCode(code = 'FT', options = {},fns = () => {}) {
  // Check if the code is provided and is a string
  if (code && !isString(code)) return 'Invalid code';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('deleteOne', fns, false, 'deleteOneByCode');

  // Invoke the obtained function passing the filter (using the code field) and options, and return the result
  return fn({ code }, options);
}


/**
 * Asynchronously removes document(s) from the collection that match the specified query and options.
 * 
 * @param {Object} [query={}] - The query object to determine the documents to remove.
 * @param {Object} [options={justOne: true}] - Additional options for the remove operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the remove result or an error message.
 */
async remove(query = {}, options = {}, fns = () => {}) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
  const fn = collectionMethod (this)('deleteOne', fns, false, 'remove');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
}



   // tries ? yes. Passes ? yes
 /**
 * Asynchronously deletes multiple documents from the collection that match the specified filter and options.
 * 
 * @param {Object} [filter={}] - The filter object to determine the documents to delete.
 * @param {Object} [options={}] - Additional options for the deleteMany operation.
 * @returns {Promise<DeleteResult>|string} - A promise that resolves to the delete result or an error message.
 */
async deleteMany(filter = {}, options = {},fns = () => {}) {
  // Check if the filter is provided and is an object
  if (filter && !isObject(filter)) return 'Invalid filter';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'deleteMany' operation flag
  const fn = collectionMethod (this)('deleteMany', fns, false, 'deleteMany');

  // Invoke the obtained function passing the filter and options, and return the result
  return fn(filter, options);
}



/**
 * Asynchronously retrieves the distinct values for a field in the collection that match the specified query and options.
 * 
 * @param {string} [field='string'] - The field to retrieve distinct values from.
 * @param {Object} [query={}] - The query object to filter the documents.
 * @param {Object} [options={}] - Additional options for the distinct operation.
 * @returns {Promise<Array>|string} - A promise that resolves to an array of distinct values or an error message.
 */
async distinct(field = 'string', query = {}, fns = () => {}, projection = {}) {
  // Check if the field is provided and is a string
  if (field && !isString(field)) return 'Invalid field';
  

  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the options are provided and are an object
  if (projection && !isObject(projection)) return 'Invalid projection';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'distinct' operation flag
  const fn = collectionMethod (this)('distinct', fns);

  // Invoke the obtained function passing the field, query, and options, and return the result
  return fn(field, query, projection);
}

/**
 * Asynchronously drops the collection from the database.
 * 
 * @param {Object} [options={}] - Additional options for the drop operation.
 * @returns {Promise<boolean>|string} - A promise that resolves to true if the collection is dropped successfully, or an error message.
 */
async drop(options = {}, fns = () => {}) {
  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'drop' operation flag
  const fn = collectionMethod (this)('drop', fns);

  // Invoke the obtained function passing the options, and return the result
  return fn(options);
}


/**
 * Asynchronously drops the specified index from the collection.
 * 
 * @param {string|Object} [index='string' or {}] - The index name or index specification object to drop.
 * @returns {Promise<boolean>|string} - A promise that resolves to true if the index is dropped successfully, or an error message.
 */
async dropIndex(index = 'string' || {}, fns = () => {}) {
  // Check if the index is provided and is an object or a string
  if (index && !isObject(index) && !isString(index)) return 'Invalid index';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'dropIndex' operation flag
  const fn = collectionMethod (this)('dropIndex', fns);

  // Invoke the obtained function passing the index, and return the result
  return fn(index);
}

/**
 * Asynchronously drops the specified index or indexes from the collection.
 * 
 * @param {string|Object} [index='string' or {}] - The index name or index specification object to drop.
 * @returns {Promise<boolean>|string} - A promise that resolves to true if the index or indexes are dropped successfully, or an error message.
 */
async dropIndexes(index = 'string' || {},fns = () => {}) {
  // Check if the index is provided and is an object or a string
  if (index && !isObject(index) && !isString(index)) return 'Invalid index';

  // Obtain the collectionMethod  function with the current context (this) and the 'dropIndexes' operation flag
  const fn = collectionMethod (this)('dropIndexes', fns);

  // Invoke the obtained function passing the index, and return the result
  return fn(index);
}


/**
 * Asynchronously finds and retrieves documents from the collection based on the specified query, projection, and options.
 * 
 * @param {Object} [query={}] - The query object to filter the documents.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @param {Object} [options={}] - Additional options for the find operation.
 * @returns {Promise<Cursor>|string} - A promise that resolves to a cursor or an error message.
 */
async find(query = {}, options = {}, fns = () => {}) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'find' operation flag
  const fn = collectionMethod(this, new Client(this.url))('find', fns, true);

  // Invoke the obtained function passing the query, options, and options, and return the result
  return fn(query, options);
}


/**
 * Asynchronously finds and retrieves documents from the collection based on the specified query, projection, and options.
 * 
 * @param {Object} [query={}] - The query object to filter the documents.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @param {Object} [options={}] - Additional options for the find operation.
 * @returns {Promise<Cursor>|string} - A promise that resolves to a cursor or an error message.
 */
async all(query = {}, options = {}, fns = () => {}) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'find' operation flag
  const fn = collectionMethod(this)('find', fns, true, 'all');

  // Invoke the obtained function passing the query, options, and options, and return the result
  return fn(query, options);
}


/**
 * Asynchronously finds a document and modifies it in the collection based on the specified document.
 * 
 * @param {Object} [document={}] - The document object containing the update operations.
 * @returns {Promise<Document>|string} - A promise that resolves to the modified document or an error message.
 */
async findAndModify(document = {},fns = () => {}) {
  // Check if the document is provided and is an object
  if (document && !isObject(document)) return 'Invalid document';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findAndModify' operation flag
  const fn = collectionMethod (this)('findAndModify',fns);

  // Invoke the obtained function passing the document, and return the result
  return fn(document);
}


/**
 * Asynchronously finds and retrieves a single document from the collection based on the specified query, projection, and options.
 * 
 * @param {Object} [query={}] - The query object to filter the documents.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @returns {Promise<Document>|string} - A promise that resolves to the found document or an error message.
 */
async findOne(query = {}, options = {}, fns = () => {}) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne', fns, false, 'findOne');

  // Invoke the obtained function passing the query, options, and options, and return the result
  return fn(query, options);
}


/**
 * Asynchronously finds and retrieves a document from the collection based on the specified ID, projection, and options.
 * 
 * @param {string} [id='645b9cf776b7fb46975316d9'] - The ID of the document to find.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @returns {Promise<Document>|string} - A promise that resolves to the found document or an error message.
 */
async findById(id = '645b9cf776b7fb46975316d9', options = {}, fns = () => {}) {
  // Check if the ID is provided and is a valid ObjectId
  if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  
 
  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne', fns, false, 'findById');

  // Invoke the obtained function passing the filter (using the ID converted to ObjectId), options, and options, and return the result
  return fn({ _id: new ObjectId(id) }, options);
}



/**
 * Asynchronously finds and retrieves a document from the collection based on the specified email, projection, and options.
 * 
 * @param {string} [email='ericson.weah@gmail.com'] - The email of the document to find.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.

 * @returns {Promise<Document>|string} - A promise that resolves to the found document or an error message.
 */
async findByEmail(email = 'ericson.weah@gmail.com', options = {}, fns = () => {}) {
  // Check if the email is provided and is a valid email format
  if (email && !isValid('email', email)) return 'Invalid email';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne', fns, false, 'findByEmail');

  // Invoke the obtained function passing the filter (using the email field), options, and options, and return the result
  return fn({ email }, options);
}




/**
 * Asynchronously finds and retrieves a document from the collection based on the specified username, projection, and options.
 * 
 * @param {string} [username='username'] - The username of the document to find.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @returns {Promise<Document>|string} - A promise that resolves to the found document or an error message.
 */
async findByUsername(username = 'username', options = {}, fns = () => {}) {
  // Check if the username is provided and is a valid username format
  if (username && !isValid('username', username)) return 'Invalid username';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne', fns,false, 'findByUsername');

  // Invoke the obtained function passing the filter (using the username field), options, and options, and return the result
  return fn({ username },options);
}



/**
 * Asynchronously finds and retrieves a document from the collection based on the specified phone number, projection, and options.
 * 
 * @param {string} [phone='2852045167'] - The phone number of the document to find.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @param {Object} [options={}] - Additional options for the findByPhone operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the found document or an error message.
 */
async findByPhone(phone = '2852045167', options = {}, fns = () => {}) {
  // Check if the phone number is provided and is a string
  if (phone && !isString(phone)) return 'Invalid phone';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne', fns, false, 'findByPhone');

  // Invoke the obtained function passing the filter (using the phone field), options, and options, and return the result
  return fn({ phone }, options);
}


/**
 * Asynchronously finds and retrieves a document from the collection based on the specified code, projection, and options.
 * 
 * @param {string} [code='FT'] - The code of the document to find.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @param {Object} [options={}] - Additional options for the findByCode operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the found document or an error message.
 */
async findByCode(code = 'FT', options = {}, fns = () => {}) {
  // Check if the code is provided and is a string
  if (code && !isString(code)) return 'Invalid code';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne', fns, false, 'findByCode');

  // Invoke the obtained function passing the filter (using the code field), options, and options, and return the result
  return fn({ code }, options);
}



/**
 * Asynchronously finds and retrieves the first document from the collection based on the specified email, projection, and options.
 * 
 * @param {string} [email='ericson.weah@gmail.com'] - The email of the document to find.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @param {Object} [options={}] - Additional options for the firstByEmail operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the found document or an error message.
 */
async firstByEmail(email = 'ericson.weah@gmail.com', options = {},fns = () => {}) {
  // Check if the email is provided and is a valid email format
  if (email && !isValid('email', email)) return 'Invalid email';


  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';


  // // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne', fns, false, 'firstByEmail');

  // Invoke the obtained function passing the filter (using the email field), options, and options, and return the result
  return fn({ email }, options);
}



/**
 * Asynchronously finds and retrieves the first document from the collection based on the specified username, projection, and options.
 * 
 * @param {string} [username='username'] - The username of the document to find.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @param {Object} [options={}] - Additional options for the firstByUsername operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the found document or an error message.
 */
async firstByUsername(username = 'username', options = {},fns = () => {}) {
  // Check if the username is provided and is a valid username format
  if (username && !isValid('username', username)) return 'Invalid username';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne', fns, false, 'firstByUsername');

  // Invoke the obtained function passing the filter (using the username field), options, and options, and return the result
  return fn({ username }, options);
}


/**
 * Asynchronously finds and retrieves the first document from the collection based on the specified phone number, projection, and options.
 * 
 * @param {string} [phone='2852045167'] - The phone number of the document to find.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @param {Object} [options={}] - Additional options for the firstByPhone operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the found document or an error message.
 */
async firstByPhone(phone = '2852045167', options = {},fns = () => {}) {
  // Check if the phone number is provided and is a string
  if (phone && !isString(phone)) return 'Invalid phone';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne', fns, false, 'firstByPhone');

  // Invoke the obtained function passing the filter (using the phone field), options, and options, and return the result
  return fn({ phone }, options, options);
}




/**
 * Asynchronously finds and retrieves the first document from the collection based on the specified code, projection, and options.
 * 
 * @param {string} [code='FT'] - The code of the document to find.
 * @param {Object} [projection={}] - The projection object to specify the fields to include or exclude.
 * @param {Object} [options={}] - Additional options for the firstByCode operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the found document or an error message.
 */
async firstByCode(code = 'FT', options = {}, fns = () => {}) {
  // Check if the code is provided and is a string
  if (code && !isString(code)) return 'Invalid code';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne',fns, false, 'firstByCode');

  // Invoke the obtained function passing the filter (using the code field), options, and options, and return the result
  return fn({ code }, options);
}


/**
 * Asynchronously finds and deletes a document from the collection based on the specified filter and options.
 * 
 * @param {Object} [filter={}] - The filter object to match the document to delete.
 * @param {Object} [options={}] - Additional options for the findOneAndDelete operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the deleted document or an error message.
 */
async findOneAndDelete(filter = {}, options = {}, fns = () => {}) {
  // Check if the filter is provided and is an object
  if (filter && !isObject(filter)) return 'Invalid filter';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOneAndDelete' operation flag
  const fn = collectionMethod (this)('findOneAndDelete', fns);

  // Invoke the obtained function passing the filter and options, and return the result
  return fn(filter, options);
}


/**
 * Asynchronously finds a document based on the specified filter, replaces it with the specified replacement, and returns the original document or the modified document.
 * 
 * @param {Object} [filter={}] - The filter object to match the document to replace.
 * @param {Object} [replacement={}] - The replacement object with the updated values for the document.
 * @param {Object} [options={}] - Additional options for the findOneAndReplace operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the original or modified document or an error message.
 */
async findOneAndReplace(filter = {}, replacement = {},fns = () => {}, options = {}) {
  // Check if the filter is provided and is an object
  if (filter && !isObject(filter)) return 'Invalid filter';
  

  // Check if the replacement is provided and is an object
  if (replacement && !isObject(replacement)) return 'Invalid replacement input';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOneAndReplace' operation flag
  const fn = collectionMethod (this)('findOneAndReplace', fns);

  // Invoke the obtained function passing the filter, replacement, and options, and return the result
  return fn(filter, replacement, options);
}


/**
 * Asynchronously finds a document based on the specified filter, updates it with the specified update, and returns the original document or the modified document.
 * 
 * @param {Object} [filter={}] - The filter object to match the document to update.
 * @param {Object} [update={}] - The update object with the fields and values to modify in the document.
 * @param {Object} [options={}] - Additional options for the findOneAndUpdate operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the original or modified document or an error message.
 */
async findOneAndUpdate(filter = {}, update = {}, fns = () => {}, options = {}) {
  // Check if the filter is provided and is an object
  if (filter && !isObject(filter)) return 'Invalid filter';
  

  // Check if the update is provided and is an object
  if (update && !isObject(update)) return 'Invalid update input';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'findOneAndUpdate' operation flag
  const fn = collectionMethod (this)('findOneAndUpdate', fns);

  // Invoke the obtained function passing the filter, update, and options, and return the result
  return fn(filter, update, options);
}


/**
 * Asynchronously retrieves the indexes of the collection.
 * 
 * @returns {Promise<Array>} - A promise that resolves to an array of index objects or an error message.
 */
async getIndexes(fns = () => {}) {
  // Obtain the collectionMethod  function with the current context (this) and the 'getIndexes' operation flag
  const fn = collectionMethod (this)('getIndexes', fns);

  // Invoke the obtained function and return the result
  return fn();
}

/**
 * Asynchronously retrieves the shard distribution information of the collection.
 * 
 * @returns {Promise<Object>|string} - A promise that resolves to an object containing the shard distribution information or an error message.
 */
async getShardDistribution(fns = () => {}) {
  // Obtain the collectionMethod  function with the current context (this) and the 'getShardDistribution' operation flag
  const fn = collectionMethod (this)('getShardDistribution', fns);

  // Invoke the obtained function and return the result
  return fn();
}

/**
 * Asynchronously hides the specified index in the collection.
 * 
 * @param {string|Object} [index='string' || {}] - The index to hide. It can be either a string or an object.
 * @returns {Promise<string>|string} - A promise that resolves to a success message or an error message.
 */
async hideIndex(index = 'string' || {},fns = () => {}) {
  // Check if the index is provided and is either a string or an object
  if (index && !isObject(index) && !isString(index)) return 'Invalid index';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'hideIndex' operation flag
  const fn = collectionMethod (this)('hideIndex', fns);

  // Invoke the obtained function passing the index, and return the result
  return fn(index);
}


/**
 * Asynchronously inserts a single document into the collection.
 * 
 * @param {Object} [document={}] - The document to insert.
 * @param {Object} [options={}] - Additional options for the insertOne operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the inserted document or an error message.
 */
async insertOne(document = {}, options = {},fns = () => {}) {
  // Check if the document is provided and is an object
  if (document && !isObject(document)) return 'Invalid document';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'insertOne' operation flag
  const fn = collectionMethod (this)('insertOne', fns, false, 'insertOne');

  // Invoke the obtained function passing the document and options, and return the result
  return fn(document, options);
}

/**
 * Asynchronously inserts a single document into the collection.
 * 
 * @param {Object} [document={}] - The document to insert.
 * @param {Object} [options={}] - Additional options for the insertOne operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the inserted document or an error message.
 */
async insert(document = {}, options = {},fns = () => {}) {
  // Check if the document is provided and is an object
  if (document && !isObject(document)) return 'Invalid document';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'insertOne' operation flag
  const fn = collectionMethod (this)('insertOne', fns, false, 'insert');

  // Invoke the obtained function passing the document and options, and return the result
  return fn(document, options);
}


/**
 * Asynchronously creates a single document in the collection.
 * 
 * @param {Object} [document={}] - The document to create.
 * @param {Object} [options={}] - Additional options for the create operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the created document or an error message.
 */
async create(document = {}, options = {}, fns = () => {}) {
  // Check if the document is provided and is an object
  if (document && !isObject(document)) return 'Invalid document';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'insertOne' operation flag
  const fn = collectionMethod (this)('insertOne', fns, false, 'create');

  // Invoke the obtained function passing the document and options, and return the result
  return fn(document, options);
}



/**
 * Asynchronously inserts multiple documents into the collection.
 * 
 * @param {Array} [documents=[]] - The array of documents to insert.
 * @param {Object} [options={}] - Additional options for the insertMany operation.
 * @returns {Promise<Array<Document>>|string} - A promise that resolves to an array of inserted documents or an error message.
 */
async insertMany(documents = [], options = {}, fns = () => {}) {
  // Check if the documents array is provided and is an array
  if (documents && !isArray(documents)) return 'Invalid input documents';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'insertMany' operation flag
  const fn = collectionMethod (this)('insertMany', fns, false, 'insertMany');

  // Invoke the obtained function passing the documents array and options, and return the result
  return fn(documents, options);
}


/**
 * Asynchronously creates multiple documents in the collection.
 * 
 * @param {Array} [documents=[]] - The array of documents to create.
 * @param {Object} [options={}] - Additional options for the createMany operation.
 * @returns {Promise<Array<Document>>|string} - A promise that resolves to an array of created documents or an error message.
 */
async createMany(documents = [], options = {}, fns = () => {}) {
  // Check if the documents array is provided and is an array
  if (documents && !isArray(documents)) return 'Invalid input documents';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'insertMany' operation flag
  const fn = collectionMethod (this)('insertMany', fns, false, 'createMany');

  // Invoke the obtained function passing the documents array and options, and return the result
  return fn(documents, options);
}


/**
 * Asynchronously checks if the collection is a capped collection.
 * 
 * @returns {Promise<boolean>|string} - A promise that resolves to a boolean value indicating if the collection is capped or an error message.
 */
async isCapped(fns = () => {}) {
  // Obtain the collectionMethod  function with the current context (this) and the 'isCapped' operation flag
  const fn = collectionMethod (this)('isCapped', fns);

  // Invoke the obtained function and return the result
  return fn();
}


/**
 * Asynchronously retrieves latency statistics for the collection.
 * 
 * @param {Object} [options={ histograms: true }] - Additional options for the latencyStats operation.
 * @returns {Promise<Object>|string} - A promise that resolves to an object containing the latency statistics or an error message.
 */
async latencyStats(options = { histograms: true }, fns = () => {}) {
  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  
  // Obtain the collectionMethod  function with the current context (this) and the 'latencyStats' operation flag
  const fn = collectionMethod (this)('latencyStats', fns);

  // Invoke the obtained function passing the options, and return the result
  return fn(options);
}


/**
 * Asynchronously performs a reindex operation on the collection.
 * 
 * @returns {Promise<string>|string} - A promise that resolves to a success message or an error message.
 */
async reIndex(fns = () => {}) {
  // Obtain the collectionMethod  function with the current context (this) and the 'reIndex' operation flag
  const fn = collectionMethod (this)('reIndex',fns);

  // Invoke the obtained function and return the result
  return fn();
}


/**
 * Asynchronously renames the collection to the specified target name.
 * 
 * @param {string} [target='string'] - The new name for the collection.
 * @param {boolean} [dropTarget=false] - Whether to drop the target collection if it already exists.
 * @returns {Promise<string>|string} - A promise that resolves to a success message or an error message.
 */
async renameCollection(target = 'string', fns = () => {}, dropTarget = false) {
  // Check if the target name is provided and is a string
  if (target && typeof target !== 'string') return target;
  

  // Check if the dropTarget flag is provided and is a boolean
  if (dropTarget && typeof dropTarget !== 'boolean') return dropTarget;
  

  // Obtain the collectionMethod  function with the current context (this) and the 'renameCollection' operation flag
  const fn = collectionMethod (this)('renameCollection', fns);

  // Invoke the obtained function passing the target name and dropTarget flag, and return the result
  return fn(target, dropTarget);
}


/**
 * Asynchronously replaces a single document in the collection that matches the filter.
 * 
 * @param {Object} [filter={}] - The filter to match documents for replacement.
 * @param {Object} [replacement={}] - The document to replace matching documents with.
 * @param {Object} [options={}] - Additional options for the replaceOne operation.
 * @returns {Promise<Document>|string} - A promise that resolves to the replaced document or an error message.
 */
async replaceOne(filter = {}, replacement = {}, fns = () => {}, options = {}) {
  // Check if the filter is provided and is an object
  if (filter && !isObject(filter)) return 'Invalid filter';
  

  // Check if the replacement is provided and is an object
  if (replacement && !isObject(replacement)) return 'Invalid replacement input';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'replaceOne' operation flag
  const fn = collectionMethod (this)('replaceOne', fns);

  // Invoke the obtained function passing the filter, replacement, and options, and return the result
  return fn(filter, replacement, options);
}


/**
 * Asynchronously retrieves statistics for the collection.
 * 
 * @param {Object} [options={ scale: 1, indexDetails: true, indexDetailsKey: {}, indexDetailsName: 'name' }] - Additional options for the stats operation.
 * @returns {Promise<Object>|string} - A promise that resolves to an object containing the collection statistics or an error message.
 */
async stats(options = { scale: 1, indexDetails: true, indexDetailsKey: {}, indexDetailsName: 'name' }, fns = () => {}) {
  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'stats' operation flag
  const fn = collectionMethod (this)('stats', fns);

  // Invoke the obtained function passing the options, and return the result
  return fn(options);
}

/**
 * Asynchronously retrieves the storage size of the collection.
 * 
 * @returns {Promise<number>|string} - A promise that resolves to the storage size of the collection or an error message.
 */
async storageSize(fns = () => {}) {
  // Obtain the collectionMethod  function with the current context (this) and the 'storageSize' operation flag
  const fn = collectionMethod (this)('storageSize', fns);

  // Invoke the obtained function and return the result
  return fn();
}


/**
 * Asynchronously retrieves the total index size of the collection.
 * 
 * @returns {Promise<number>|string} - A promise that resolves to the total index size of the collection or an error message.
 */
async totalIndexSize(fns = () => {}) {
  // Obtain the collectionMethod  function with the current context (this) and the 'totalIndexSize' operation flag
  const fn = collectionMethod (this)('totalIndexSize', fns);

  // Invoke the obtained function and return the result
  return fn();
}


/**
 * Asynchronously retrieves the total size of the collection.
 * 
 * @returns {Promise<number>|string} - A promise that resolves to the total size of the collection or an error message.
 */
async totalSize(fns = () => {}) {
  // Obtain the collectionMethod  function with the current context (this) and the 'totalSize' operation flag
  const fn = collectionMethod (this)('totalSize',fns);

  // Invoke the obtained function and return the result
  return fn();
}


/**
 * Asynchronously unhides an index in the collection.
 * 
 * @param {string|Object} [index='string' || {}] - The index to unhide. It can be either a string or an object.
 * @returns {Promise<string>|string} - A promise that resolves to a success message or an error message.
 */
async unhideIndex(index = 'string' || {}, fns = () => {}) {
  // Check if the index is provided and is either a string or an object
  if (index && !isObject(index) && !isString(index)) return 'Invalid index';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'unhideIndex' operation flag
  const fn = collectionMethod (this)('unhideIndex',fns);

  // Invoke the obtained function passing the index, and return the result
  return fn(index);
}


/**
 * Asynchronously updates a single document in the collection that matches the query.
 * 
 * @param {Object} [query={}] - The query to match documents for updating.
 * @param {Object} [update={}] - The update to apply to matching documents.
 * @param {Object} [options={}] - Additional options for the updateOne operation.
 * @returns {Promise<number>|string} - A promise that resolves to the number of modified documents or an error message.
 */
async updateOne(query = {}, update = {}, options = {}, fns = () => {}) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the update is provided and is an object
  if (update && !isObject(update)) return 'Invalid update input';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'updateOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'updateOne');

  // Invoke the obtained function passing the query, update, and options, and return the result
  return fn(query, {$set: update}, options);
}


/**
 * Asynchronously updates multiple documents in the collection that match the query.
 * 
 * @param {Object} [query={}] - The query to match documents for updating.
 * @param {Object} [update={}] - The update to apply to matching documents.
 * @param {Object} [options={}] - Additional options for the update operation.
 * @returns {Promise<number>|string} - A promise that resolves to the number of modified documents or an error message.
 */
async update(query = {}, update = {}, options = {}, fns = () => {}) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the update is provided and is an object
  if (update && !isObject(update)) return 'Invalid update input';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'updateOne' operation flag
  const fn = collectionMethod (this)('updateOne', fns, false, 'update');

  // Invoke the obtained function passing the query, update, and options, and return the result
  return fn(query,{$set: update} , options);
}


/**
 * Asynchronously updates multiple documents in the collection that match the query.
 * 
 * @param {Object} [query={}] - The query to match documents for updating.
 * @param {Object} [update={}] - The update to apply to matching documents.
 * @param {Object} [options={}] - Additional options for the updateMany operation.
 * @returns {Promise<number>|string} - A promise that resolves to the number of modified documents or an error message.
 */
async updateMany(query = {}, update = {},options = {}, fns = () => {}) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the update is provided and is an object
  if (update && !isObject(update)) return 'Invalid update input';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'updateMany' operation flag
  const fn = collectionMethod (this)('updateMany', fns, false, 'updateMany');

  // Invoke the obtained function passing the query, update, and options, and return the result
  return fn(query, {$set: update}, options);
}


/**
 * Asynchronously sets up a change stream on the collection.
 * 
 * @param {Array} [pipeline=[]] - The pipeline of aggregation stages to apply to the change stream.
 * @param {Object} [options={}] - Additional options for the watch operation.
 * @returns {Promise<ChangeStream>|string} - A promise that resolves to a change stream or an error message.
 */
async watch(pipeline = [], options = {}, fns = () => {}) {
  // Check if the pipeline is provided and is an array
  if (pipeline && !isArray(pipeline)) return 'Invalid pipeline';
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'watch' operation flag
  const fn = collectionMethod (this)('watch', fns);

  // Invoke the obtained function passing the pipeline and options, and return the result
  return fn(pipeline, options);
}

/**
 * Asynchronously validates the collection.
 * 
 * @param {Object} [document={full: true, repair: true}] - The validation options.
 * @returns {Promise<Object>|string} - A promise that resolves to the validation result or an error message.
 */
async validate(document = { full: true, repair: true },fns = () => {}) {
  // Check if the document is provided and is an object
  if (document && !isObject(document)) return 'Invalid document';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'validate' operation flag
  const fn = collectionMethod (this)('validate', fns);

  // Invoke the obtained function passing the document, and return the result
  return fn(document);
}



  /*
    Removed in 5.0
    ensureIndex() has been replaced by createIndex().
  */
/**
 * Asynchronously ensures the creation of an index in the collection.
 * 
 * @param {Object} [keys={}] - The keys for the index.
 * @param {Object} [options={}] - Additional options for the index creation.
 * @param {number|string} [commitQuorum=1 || 'string'] - The commit quorum value.
 * @returns {Promise<string>|string} - A promise that resolves to a success message or an error message.
 */
async ensureIndex(keys = {}, options = {}, commitQuorum = 1 || 'string', fns = () => {}) {
  // Check if the keys are provided and are an object
  if (keys && !isObject(keys)) return 'Invalid keys';
  

  // Check if the commitQuorum is provided and is either a number or a string
  if (commitQuorum && !isNumber(commitQuorum) && !isString(commitQuorum)) return commitQuorum;
  

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'createIndex' operation flag
  const fn = collectionMethod (this)('createIndex', fns);

  // Invoke the obtained function passing the keys, options, and commitQuorum, and return the result
  return fn(keys, options, commitQuorum);
}

/**
 * Asynchronously estimates the count of documents in the collection.
 * 
 * @param {Object} [options={}] - Additional options for the estimated document count operation.
 * @returns {Promise<number>|string} - A promise that resolves to the estimated document count or an error message.
 */
async estimatedDocumentCount(options = {}, fns = () => {}) {
  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'estimatedDocumentCount' operation flag
  const fn = collectionMethod (this)('estimatedDocumentCount', fns);

  // Invoke the obtained function passing the options, and return the result
  return fn(options);
}


/**
 * Finds a document in the collection by the specified firstname.
 *
 * @param {string} [firstname='firstname'] - The firstname to search for.
 * @param {Object} [projection={}] - The projection options for the query.
 * @param {Object} [options={}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the firstname is not a string or if the projection/options are not objects.
 */
async findByFirstname(firstname = 'firstname', options = {}, fns = () => {}) {
  // Check if the firstname parameter is provided and is a string
  if (firstname && !isString(firstname)) return 'Invalid firstname';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Check if the options parameter is provided and is an object
  // if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'findByFirstname');

  // Execute the query with the provided parameters
  return fn({ firstname }, options);
}

/**
 * Finds a document in the collection by the specified lastname.
 *
 * @param {string} [lastname='lastname'] - The lastname to search for.
 * @param {Object} [projection={}] - The projection options for the query.
 * @param {Object} [options={}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the lastname is not a string or if the projection/options are not objects.
 */
async findByLastname(lastname = 'lastname', options = {}, fns = () => {}) {
  // Check if the lastname parameter is provided and is a string
  if (lastname && !isString(lastname)) return 'Invalid lastname';
  

  // // Check if the projection parameter is provided and is an object
  // if (projection && !isObject(projection)) return 'Invalid projection';

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'findByLastname');

  // Execute the query with the provided parameters
  return fn({ lastname }, options);
}


async firstById(id="645b9cf776b7fb46975316d9", options = {sort: {_id: 1}}, fns = () => {}){
   // Check if the ID is provided and is a valid ObjectId
   if (id && !isValidObjectId(id)) return 'Invalid id provided';
  

  // // Check if the projection parameter is provided and is an object
  // if (projection && !isObject(projection)) return 'Invalid projection';
   
 
   //Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';
   
 
   // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
   const fn = collectionMethod (this)('findOne', fns, false, 'firstById');
 
  // Invoke the obtained function passing the filter (using the ID converted to ObjectId), projection, and options, and return the result
  return fn({ _id: new ObjectId(id) }, options);
}
/**
 * Finds the first document in the collection by the specified email.
 *
 * @param {string} [email='ericson.weah@gmail.com'] - The email to search for.
 * @param {Object} [projection={}] - The projection options for the query.
 * @param {Object} [options={}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the email is not a string, if the email is not valid, or if the projection/options are not objects.
 */
async firstByEmail(email = 'ericson.weah@gmail.com', options = {}, fns = () => {}) {
  // Check if the email parameter is provided and is a string
  if (email && !isString(email)) return 'Invalid email';
  

  // Check if the email parameter is provided and is a valid email
  if (email && !isValid('email', email)) return 'Invalid email';
  

  // Check if the projection parameter is provided and is an object
  // if (projection && !isObject(projection)) return 'Invalid projection';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'firstByEmail');

  // Execute the query with the provided parameters
  return fn({ email }, options);
}

/**
 * Finds the first document in the collection by the specified token.
 *
 * @param {string} [token='645b9cf776b7fb46975316d9'] - The token to search for.
 * @param {Object} [projection={}] - The projection options for the query.
 * @param {Object} [options={}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the token is not a string or if the projection/options are not objects.
 */
async firstByToken(token = '645b9cf776b7fb46975316d9', options = {}, fns = () => {}) {
  // Check if the token parameter is provided and is a string
  if (token && !isString(token)) return 'Invalid token';
  

  // Check if the projection parameter is provided and is an object
  // if (projection && !isObject(projection)) return 'Invalid projection';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'firstByToken');

  // Execute the query with the provided parameters
  return fn({ token }, options);
}

/**
 * Finds the first document in the collection based on the phone field.
 *
 * @param {string} phone - The phone number to search for.
 * @param {object} projection - The projection object to specify which fields to include or exclude.
 * @param {object} options - The options object for additional query options.
 * @returns {Promise} - A promise that resolves to the first matching document or an error message.
 */
async firstByPhone(phone = '2852045167', options = {}, fns = () => {}) {
  // Validate the phone parameter
  if (phone && typeof phone !== 'string') return 'Invalid phone';

  // // Check if the projection parameter is provided and is an object
  // if (projection && !isObject(projection)) return 'Invalid projection';

  // Validate the options object
  if (options && !isObject(options)) return 'Invalid options';

  // Call the findOne method on the collection using the provided parameters
  const fn = collectionMethod(this)('findOne', fns, false, 'firstByPhone');
  return fn({ phone }, options);
}

/**
 * Finds the first document in the collection by the specified username.
 *
 * @param {string} [username='username'] - The username to search for.
 * @param {Object} [projection={}] - The projection options for the query.
 * @param {Object} [options={}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the username is not a string or if the projection/options are not objects.
 */
async firstByUsername(username = 'username', options = {}, fns = () => {}) {
  // Check if the username parameter is provided and is a string
  if (username && !isString(username)) return 'Invalid username';
  

  // // Check if the projection parameter is provided and is an object
  // if (projection && !isObject(projection)) return 'Invalid projection';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'firstByUsername');

  // Execute the query with the provided parameters
  return fn({ username }, options);
}

/**
 * Finds the first document in the collection by the specified code.
 *
 * @param {string} [code='FT'] - The code to search for.
 * @param {Object} [projection={}] - The projection options for the query.
 * @param {Object} [options={}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the code is not a string or if the projection/options are not objects.
 */
async firstByCode(code = 'FT', options = {}, fns = () => {}) {
  // Check if the code parameter is provided and is a string
  if (code && !isString(code)) return 'Invalid code';
  

  // // Check if the projection parameter is provided and is an object
  // if (projection && !isObject(projection)) return 'Invalid projection';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'firstByCode');

  // Execute the query with the provided parameters
  return fn({ code }, options);
}

/**
 * Finds the first document in the collection by the specified firstname.
 *
 * @param {string} [firstname='firstname'] - The firstname to search for.
 * @param {Object} [projection={}] - The projection options for the query.
 * @param {Object} [options={}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the firstname is not a string or if the projection/options are not objects.
 */
async firstByFirstname(firstname = 'firstname', options = {}, fns = () => {}) {
  // Check if the firstname parameter is provided and is a string
  if (firstname && !isString(firstname)) return 'Invalid firstname';
  

  // // // Check if the projection parameter is provided and is an object
  // if (projection && !isObject(projection)) return 'Invalid projection';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'firstByFirstname');

  // Execute the query with the provided parameters
  return fn({ firstname }, options);
}

/**
 * Finds the first document in the collection by the specified lastname.
 *
 * @param {string} [lastname='lastname'] - The lastname to search for.
 * @param {Object} [projection={}] - The projection options for the query.
 * @param {Object} [options={}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the lastname is not a string or if the projection/options are not objects.
 */
async firstByLastname(lastname = 'lastname', options = {}, fns = () => {}) {
  // Check if the lastname parameter is provided and is a string
  if (lastname && !isString(lastname)) return 'Invalid lastname';
  

  // // // Check if the projection parameter is provided and is an object
  // if (projection && !isObject(projection)) return 'Invalid projection';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'firstByLastname');

  // Execute the query with the provided parameters
  return fn({ lastname }, options);
}


async lastById(id="645b9cf776b7fb46975316d9", fns = () => {}, options = { sort: {_id: -1}, projection: {}}){
  // Check if the ID is provided and is a valid ObjectId
  if (id && !isValidObjectId(id)) return 'Invalid id provided';
 
  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  
  // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
  const fn = collectionMethod (this)('findOne', fns, false, 'lastById');

 // Invoke the obtained function passing the filter (using the ID converted to ObjectId), projection, and options, and return the result
 return fn({ _id: new ObjectId(id) }, options);
}
async last(query = {},  fns = () => {}, options = { sort: {_id: -1}, projection: {}}){

  if (query && !isObject(query)) return 'Invalid query';

  if (options && !isObject(options)) return 'Invalid options';

  const fn = collectionMethod (this)('findOne', fns, false, 'last');
  return fn(query,  options);
 }
/**
 * Finds the last document in the collection by the specified email.
 *
 * @param {string} [email='ericson.weah@gmail.com'] - The email to search for.
 * @param {Object} [options={ sort: {_id: -1}, projection: {}}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the email is not a string or if the projection/options are not objects.
 */
async lastByEmail(email = 'ericson.weah@gmail.com',  fns = () => {}, options = { sort: {_id: -1}, projection: {}}) {
  // Check if the email parameter is provided and is a string
  if (email && !isString(email)) return 'Invalid email';
  

  // Check if the email parameter passes the email validation
  if (email && !isValid('email', email)) return 'Invalid email';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'lastByEmail');

  // Execute the query with the provided parameters
  return fn({ email }, options);
}

/**
 * Finds the last document in the collection by the specified token.
 *
 * @param {string} [token='645b9cf776b7fb46975316d9'] - The token to search for.
 * @param {Object} [options={ sort: {_id: -1}, projection: {}}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the token is not a string or if the options are not an object.
 */
async lastByToken(token = '645b9cf776b7fb46975316d9', fns = () => {}, options = { sort: {_id: -1}, projection: {}}) {
  // Check if the token parameter is provided and is a string
  if (token && !isString(token)) return 'Invalid token';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne',fns, false, 'lastByToken');

  // Execute the query with the provided parameters
  return fn({ token }, options);
}

/**
 * Finds the last document in the collection by the specified phone number.
 *
 * @param {string} [phone='2852045167'] - The phone number to search for.
 * @param {Object} [options={ sort: {_id: -1}, projection: {}}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the phone number is not a string or if the options are not an object.
 */
async lastByPhone(phone = '2852045167',  fns = () => {}, options = { sort: {_id: -1}, projection: {}}) {
  // Check if the phone parameter is provided and is a string
  if (phone && !isString(phone)) return 'Invalid phone';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'lastByPhone');

  // Execute the query with the provided parameters
  return fn({ phone }, options);
}

/**
 * Finds the last document in the collection by the specified username.
 *
 * @param {string} [username='username'] - The username to search for.
 * @param {Object} [options={ sort: {_id: -1}, projection: {}}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the username is not a string or if the options are not an object.
 */
async lastByUsername(username = 'username', fns = () => {}, options = { sort: {_id: -1}, projection: {}}) {
  // Check if the username parameter is provided and is a string
  if (username && !isString(username)) return 'Invalid username';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne',fns, false, 'lastByUsername');

  // Execute the query with the provided parameters
  return fn({ username }, options);
}

/**
 * Finds the last document in the collection by the specified code.
 *
 * @param {string} [code='FT'] - The code to search for.
 * @param {Object} [options={ sort: {_id: -1}, projection: {}}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the code is not a string or if the options are not an object.
 */
async lastByCode(code = 'FT', fns = () => {}, options = { sort: {_id: -1}, projection: {}}) {
  // Check if the code parameter is provided and is a string
  if (code && !isString(code)) return 'Invalid code';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'lastByCode');

  // Execute the query with the provided parameters
  return fn({ code }, options);
}

/**
 * Finds the last document in the collection by the specified firstname.
 *
 * @param {string} [firstname='firstname'] - The firstname to search for.
 * @param {Object} [options={ sort: {_id: -1}, projection: {}}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the firstname is not a string or if the options are not an object.
 */
async lastByFirstname(firstname = 'firstname', fns = () => {}, options = { sort: {_id: -1}, projection: {}}) {
  // Check if the firstname parameter is provided and is a string
  if (firstname && !isString(firstname)) return 'Invalid firstname';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'lastByFirstname');

  // Execute the query with the provided parameters
  return fn({ firstname }, options);
}

/**
 * Finds the last document in the collection by the specified lastname.
 *
 * @param {string} [lastname='lastname'] - The lastname to search for.
 * @param {Object} [options={ sort: {_id: -1}, projection: {}}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the lastname is not a string or if the options are not an object.
 */
async lastByLastname(lastname = 'lastname',  fns = () => {}, options = { sort: {_id: -1}, projection: {}}) {
  // Check if the lastname parameter is provided and is a string
  if (lastname && !isString(lastname)) return 'Invalid lastname';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'lastByLastname');

  // Execute the query with the provided parameters
  return fn({ lastname }, options);
}


/**
 * Finds the last document in the collection by the specified lastname.
 *
 * @param {string} [lastname='lastname'] - The lastname to search for.
 * @param {Object} [options={ sort: {_id: -1}, projection: {}}] - The additional options for the query.
 * @returns {Promise} - A Promise that resolves with the matching document.
 * @throws {Error} - If the lastname is not a string or if the options are not an object.
 */
async lastByName(name = 'name', fns = () => {}, options = { sort: {_id: -1}, projection: {}}) {
  // Check if the name parameter is provided and is a string
  if (name && !isString(name)) return 'Invalid name';
  

  // Check if the options parameter is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the appropriate function for executing the query
  const fn = collectionMethod(this)('findOne', fns, false, 'lastByName');

  // Execute the query with the provided parameters
  return fn({ name }, options);
}
objectId(string = '6476fe3e6e636c2f079eca69'){
  return new ObjectId(string);
}
async saveFile(filePath, fileName){
  if(fileExists(filePath)) return streamer(this)(filePath, fileName);
  throw new TypeError(`Either ${filePath} or ${fileName} does not exist`);
}

createManyFromJsonFile(path, options, fn = () => {}){
  const data = JSON.parse(require('fs').readFileSync(path, 'utf8'));
  return this.createMany(data, options, fn);
}
createOneFromJsonFile(path, options, fn = () => {}){
  const data = JSON.parse(require('fs').readFileSync(path, 'utf8'));
  return this.createOne(data, options, fn);
}

insertManyFromJsonFile(path, options, fn = () => {}){
  const data = JSON.parse(require('fs').readFileSync(path, 'utf8'));
  return this.insertMany(data, options, fn);
}
insertOneFromJsonFile(path, options, fn = () => {}){
  const data = JSON.parse(require('fs').readFileSync(path, 'utf8'));
  return this.insertOne(data, options, fn);
}

belongsToReferencial(Model, foreignKey = 'userId', ownerkey){
  const filter = {};
  filter[foreignKey] = '645e4d81c050a750429b4418'
  return Model.findOne(filter)
}



  /**
   * 
   * Returns information on the query plan for the following methods:
    aggregate(),count(),find(),remove(),distinct(), findAndModify()
   */
  // async explain(method  = () => {}) {}

  config() {
    const checkPortNumbers = string => string.endsWith('27017') || string.endsWith('27018') || string.endsWith('27019');
    const checkHostString = string => string.startsWith('localhost:') || string.startsWith('127.0.0.1:')
    const urlArray = url => url.split('/').filter(el => el.trim().length !== 0);
    const isUrlArrayLengthOK = url => (urlArray(url).length === 3)
    const checkNetworkString = string => checkHostString(string) && checkPortNumbers(string);
    const isUrlLocalhost = url => isUrlArrayLengthOK(url) ? urlArray(url).find(el => checkNetworkString(el) ) !== undefined ? true: false : false
    const getDatabaseNameFromUrl = url => url.split('/').filter(el => el.trim().length !== 0).pop()
  
    
    // if (!this.connection) this.connection = process.env.DATABASE_CONNECTION || 'mongodb://127.0.0.1:27017/'
    // if (this.connection && this.url && this.db) this.url = `${this.connection}/${this.db}`
    if (!this.url) this.url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/test'
    if (!this.collection) this.collection = 'users';
    if (!this.faker_url) this.faker_url = process.env.JSON_FAKER_URL || 'https://jsonplaceholder.typicode.com/'
    if (!this.db) {
      if(isUrlLocalhost(this.url))this.db = getDatabaseNameFromUrl(this.url)
     else this.db = process.env.DATABASE_NAME || 'test'
    }
    // if(!this.url) this.url = `${process.env.DATABASE_CONNECTION}/${process.env.DATABASE_NAME}`
}
//    config() {
//     if (!this.db) this.db = process.env.DATABASE_NAME
//     if (!this.connection) this.connection = process.env.DATABASE_CONNECTION
//     if (this.connection && this.url && this.db) this.url = `${this.connection}/${this.db}`
//     if (!this.url) this.url = process.env.DATABASE_URL
//     if (!this.collection) this.collection = 'users';
//     if (!this.faker_url) this.faker_url = process.env.JSON_FAKER_URL
//     // if(!this.url) this.url = `${process.env.DATABASE_CONNECTION}/${process.env.DATABASE_NAME}`
// }
  /**
   * @name autoinvoked
   * @function
   *
   * @param {Object|Function|Class} className the class whose methods to be bound to it
   *
   * @description auto sets the list of methods to be auto invoked
   *
   * @return does not return anything
   *
   */
    autoinvoked() {
      return ['config'];
    }

}

module.exports =  Model;





 























