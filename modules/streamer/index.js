'use strict';

require('../dotenv').config();
const fs = require('fs');
const { GridFSBucket } = require('mongodb');
const Client = require('../client');
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
    
    const bucketOptions = ()=> ({
        bucketName: process.env.BUCKET_NAME || 'myGridFSBucket',
        chunkSizeBytes: 512 * 1024, // 512 KB
        writeConcern: { w: 'majority', wtimeout: 10000 },
        readPreference: 'secondary',
        disableMD5: true,
    })

    const file = (Observable, options = bucketOptions(), client = new Client(Observable.url) ) => async (filePath, fileName) => {

        try {
            // Access the database
            const database = client.db(Observable.db);
            // Create a new GridFSBucket instance
            const bucket = new GridFSBucket(database, options);

            // Read the file from disk
            const fileStream = fs.createReadStream(filePath);

            // Create a file upload stream
            const uploadStream = bucket.openUploadStream(fileName);

            // Pipe the file stream to the upload stream
            fileStream.pipe(uploadStream);

            // Wait for the upload to finish
            await new Promise((resolve, reject) => {
                uploadStream.on('error', reject);
                uploadStream.on('finish', resolve);
            });
            console.log('File saved successfully!');
        } catch (error) {
            console.error('Error saving file:', error);
        } finally {
            // Close the MongoClient connection
            await client.close();
        }
    }
    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the file object by assigning it to module.exports
    |
    |
    */

    if (typeof module !== 'undefined' && module.exports) module.exports = file;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.file.
    |
    */

    else global.file = file;
})(this)