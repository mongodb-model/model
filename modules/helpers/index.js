'use strict';
const fs = require('fs');
 const regex = require('./src/regex')();
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
     * @name isRegexValid
     * @function
     * 
     * @param {RegExp} regex the regest to be tested against a string
     * @param {String} input the string to be tested against the regex
     * 
     * @description tests a string against a regex
     * 
     * @return {Boolean} the test result: true of the the matches the regex; false otherwise
     * 
     */
      const isRegexValid = (regex, input) => regex.test(input)
    

    /**
     * @name validate
     * @function
     * 
     * @param {String} fieldName  the string to be tested against the regex
     * 
     * @description validates a form field input value against a regex
     * 
     * @return {Boolean} the test result: true of the the matches the regex; false otherwise
     * 
     */
    const isValid = (fieldName = 'email', input) => isRegexValid(regex[fieldName], input)
    const isObject =  (object = {}) =>  Object.prototype.toString.call(object) === '[object Object]';
    const isArray  = (array = []) =>  Object.prototype.toString.call(array) === '[object Array]';
    const isString =  (string = 'string') =>  Object.prototype.toString.call(string) === '[object String]';
    const isNumber  = (number = 12) =>  Object.prototype.toString.call(number) === '[object Number]';
    const isValidObjectId = (id = '635919e22bc9cdd44701ee82')  =>  /^[0-9a-fA-F]{24}$/.test(id);
    const defaultStorageDirectory = (path = '', base = process.cwd() + '/storage') => {
      // Check if the directory exists
      if (!fs.existsSync(base)) fs.mkdirSync(base);
      if (!fs.existsSync(require('path').join(base, path))) fs.mkdirSync(require('path').join(base, path));
  }
  const fileExists = filePath => fs.existsSync(filePath);
  
  const checkPortNumbers = string => string.endsWith('27017') || string.endsWith('27018') || string.endsWith('27019');
  const checkHostString = string => string.startsWith('localhost:') || string.startsWith('127.0. 0.1:')
  const urlArray = url => url.split('/').filter(el => el.trim().length !== 0);
  const isUrlArrayLengthOK = url => urlArray(url).length  === 3
  const checkNetworkString = string => checkHostString(string) && checkPortNumbers(string);
  const isUrlLocalhost = url => isUrlArrayLengthOK(url) ? urlArray(url).find(el => checkNetworkString(el) ) !== undefined : false

const getDatabaseNameFromUrl = url => url.split('/').filter(el => el.trim().length !== 0).pop()
    
    const helpers = () => ({
      isValid,isObject, isArray, isString, isNumber, isValidObjectId, defaultStorageDirectory, fileExists
    })

    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the helpers object by assigning it to module.exports
    |
    |
    */
    
    if (typeof module !== 'undefined' && module.exports)  module.exports = helpers;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.helpers.
    |
    */

    else global.helpers = helpers;
})(this)