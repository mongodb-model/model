'use strict';

require('../dotenv').config();
const Client = require('../client');
const couleurs = require('../couleurs');
const { IRed } =  couleurs();
/*
|------------------------------------------------------------------------------------
| Universal Module Definition (UMD)
|------------------------------------------------------------------------------------
|
| This is an implementation of the Universal Module Definition (UMD) pattern
| for creating a module that can be used in both browser and Node.js environments.


| The function is wrapped in an immediately invoked function expression (IIFE),
| which allows the module to have its own private scope and prevent any variable conflicts with other code.
| 
| The global variable is passed as a parameter to the function. In the browser,
| the global variable refers to the window object, while in Node.js it refers to the global scope.
|
*/

(global => {
  /*
  |----------------------------------------------------------------------------------
  | MODULE DEFINITION
  |----------------------------------------------------------------------------------
  |
  | The module is defined as an object or a function.

  |
  */


  /**
 * Generates a method for interacting with a MongoDB collection.
 *
 * @param {Object} Observable - The Observable object.
 * @param {Object} client - The MongoDB client (default: new Client()).
 * @returns {Function} - The generated method.
 */

const collectionMethod = (Observable, client = new Client(Observable.url)) =>
(method = 'find', fn = () => {}, toArray = false, event = 'find') => async (...args) => {
  try {
    let result;
    const database = client.db(Observable.db);
    const collection = database.collection(Observable.collection);
    if (toArray === true) result = await collection[method](...args).toArray();
    else result = await collection[method](...args);
    if (event) Observable.emit(event, result);
    else Observable.emit(method, result);
    fn(null, result);
    return result;   
  } catch (err) {
    if (event) Observable.emit(`${event}-error`, IRed(err.message));
    else Observable.emit(`${method}-error`, IRed(err.message));
    fn(IRed(err.message),null)
    return IRed(err.message);
  } finally {
    await client.close();
  }
};

/**
* This function generates a method for interacting with a MongoDB collection based on the provided parameters.
* It allows you to perform various operations on the collection, such as find, insert, update, and delete.
* The method takes the following parameters:
*
* @param {Object} Observable - The Observable object that emits events.
* @param {Object} client - The MongoDB client used to connect to the database (default: new Client()).
* @param {string} method - The method name for the collection operation (default: 'find').
* @param {boolean} toArray - Specifies whether to convert the result to an array (default: false).
* @param {string} event - The event name to emit (default: 'find').
* @param {...*} args - Additional arguments to pass to the collection method.
*
* The generated method connects to the MongoDB database, performs the specified collection operation with the given arguments,
* emits the corresponding event on the Observable object, and returns the result.
* If an error occurs, it emits the error event and returns the error.
* Finally, it closes the MongoDB client connection.
*
* Use this generated method to interact with MongoDB collections in a convenient and standardized way.
* Customize the method name, event name, and other parameters based on your specific use case.
*/


  /*
  |----------------------------------------------------------------------------------
  | EXPORTS MODULE IN NODEJS ENVIRONMENTS
  |----------------------------------------------------------------------------------
  |
  | The module is exported using an if/else statement. If the module object is defined and
  | has an exports property, then the module is being used in Node.js and we export 
  | the query object by assigning it to module.exports
  |
  |
  */

  if (typeof module !== 'undefined' && module.exports) module.exports = collectionMethod;

  /*
  |----------------------------------------------------------------------------------------
  | EXPORT MODULE IN BROWSER ENVIRONMENTS
  |----------------------------------------------------------------------------------------
  |
  | If module is not defined or does not have an exports property, then the module is being used
  | in the browser and we attach the myModule object to the global object (which is the window object
  | in the browser) by assigning it to global.query.
  |
  */

  else global.collectionMethod = collectionMethod;
})(this)