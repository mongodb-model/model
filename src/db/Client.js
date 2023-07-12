'use strict';
require('dotenv').config();
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
   * Represents a MongoDB client.
   */
  class Client extends require("mongodb").MongoClient {
    /**
     * Constructs a new instance of the Client class.
     *
     * @param {string|Object} options - The connection URL or options object (default: process.env.DATABASE_URL).
     * @param {...Object} arrayOfObjects - Additional objects containing options to be assigned to the client.
     */
    // { connectTimeoutMS: 30000 }, { keepAlive: 1}
    constructor(connectionString = process.env.DATABASE_URL, options = { useNewUrlParser: true, useUnifiedTopology: true }, ...arrayOfObjects) {
      super(connectionString, options);

      // Assign additional options to the client
      arrayOfObjects.forEach(option => {
        if (Object.keys(option).length > 0) {
          Object.keys(option).forEach((key) => {
            if (!this[key]) this[key] = option[key];
          });
        }
      });

      // Set the maximum number of event listeners to infinity
      this.setMaxListeners(Infinity);
    }
  }

  /**
   * The Client class represents a MongoDB client and extends the base MongoClient class.
   * It provides a convenient way to create a MongoDB client instance with custom options.
   * The class accepts a connection URL or options object as the first parameter and additional objects containing options as subsequent parameters.
   * Use this class to create a MongoDB client for connecting to a MongoDB server and performing database operations.
   * Customize the options and additional objects based on your specific requirements.
   */


  /*
  |----------------------------------------------------------------------------------
  | EXPORTS MODULE IN NODEJS ENVIRONMENTS
  |----------------------------------------------------------------------------------
  |
  | The module is exported using an if/else statement. If the module object is defined and
  | has an exports property, then the module is being used in Node.js and we export 
  | the Client object by assigning it to module.exports
  |
  |
  */

  if (typeof module !== 'undefined' && module.exports) module.exports = Client;

  /*
  |----------------------------------------------------------------------------------------
  | EXPORT MODULE IN BROWSER ENVIRONMENTS
  |----------------------------------------------------------------------------------------
  |
  | If module is not defined or does not have an exports property, then the module is being used
  | in the browser and we attach the myModule object to the global object (which is the window object
  | in the browser) by assigning it to global.Client.
  |
  */

  else global.Client = Client;
})(this)