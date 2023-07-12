'use strict';
require('dotenv').config();
const Client = require('../Client');
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

  const collectionMethod = (Observable, client = new Client()) =>
  (method = 'find', toArray = false) => async (...args) => {
    try {
      let result;
      const database = client.db(Observable.db);
      const connection = database.collection(Observable.collection);
      if (toArray === true) result = await connection[method](...args).toArray();
      else result = await connection[method](...args);
      Observable.emit(method, result);
      return result;
    } catch (err) {
      Observable.emit(`${method}-error`, err);
      return err;
    } finally {
      await client.close();
    }
  };

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