'use strict';
require('dotenv').config();
const fs = require('fs');
const Client = require('./Client');
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
    
      
    class File extends require("mongodb").GridFSBucket {

        constructor(database, options = {
            bucketName: process.env.BUCKET_NAME || 'myGridFSBucket',
            chunkSizeBytes: 512 * 1024, // 512 KB
            writeConcern: { w: 'majority', wtimeout: 10000 },
            readPreference: 'secondary',
            disableMD5: true,
          }, client = new Client(), ...arrayOfObjects) {
            if(!database || database == 'undefined'){
                database = client.db(process.env.DATABASE_NAME);
            } 
            super(database, options);
            this.client = client;
            this.database = database;
            arrayOfObjects.forEach(option => {
              if (Object.keys(option).length > 0) {
                Object.keys(option).forEach((key) => {
                  if (!this[key]) this[key] = option[key];
                });
              }
            });
            this.setMaxListeners(Infinity);
          }
    }



    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the File object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = File;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.File.
    |
    */

    else global.File = File;
})(this)