'use strict';
require('../dotenv').config();
const Client = require('../client');
const couleurs = require('../couleurs');
const { IRed } = couleurs();
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
    
    const Admin = (Observable, client = new Client(Observable.url)) =>
    (method = 'find', fn = () => { }, event = 'find') => async (...args) => {
      try {
        const admin = client.db(Observable.db).admin();
        const result  = await admin[method](...args);
        if (event) Observable.emit(event, result);
        else Observable.emit(method, result);
        fn(null, result);
        return result;
      } catch (err) {
        if (event) Observable.emit(`${event}-error`, IRed(err.message));
        else Observable.emit(`${method}-error`, IRed(err.message));
        fn(IRed(err.message), null)
        return IRed(err.message);
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
    | the Admin object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = Admin;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.Admin.
    |
    */

    else global.Admin = Admin;
})(this)