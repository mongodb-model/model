"use strict";

/**
 *    @author Ericson Weah Dev  
 *    email: ericson.weah@ericsonweah.dev
 *    github: https://github.com/ericson-weah-dev
 *    phone: +1.385.204.5167
 *    Website: https://www.ericsonweah.dev *
 * @module Model
 * @kind class
 *
 * @extends Base
 * @requires Base
 *
 * @classdesc Model class
 */

require('./modules/dotenv').config();
const collectionMethod = require('./modules/collection');
const dbMethod = require('./modules/database');
const streamer = require('./modules/streamer');
const DB = require('./modules/db');

const { ObjectId } = require('mongodb');
const { isArray, isValid, isValidObjectId, isObject, isString, isNumber, fileExists, getDatabaseNameFromUrl, isUrlLocalhost } = require('./modules/helpers')();

/**
 * Represents a Model class that extends the base class. */
class Model extends require("./modules/base") {
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
    //this.methodizer();
    // Example: this.methodizeProperty(require('./src/db/query')());

    // Set the maximum number of event listeners to infinity
    this.setMaxListeners(Infinity);
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

async estimatedDocumentCount(options = {}, fns = () => { }) {

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';

  // Obtain the collectionMethod  function with the current context (this) and the 'estimatedDocumentCount' operation flag
  const fn = collectionMethod(this)('estimatedDocumentCount', fns, false, 'estimatedDocumentCount');

  // Invoke the obtained function passing the query and options, and return the result
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
async find(query = {}, options = {}, fns = () => {}) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';
  

  // Check if the options is provided and is an object
  if (options && !isObject(options)) return 'Invalid options';
  

  // Obtain the collectionMethod  function with the current context (this) and the 'find' operation flag
  const fn = collectionMethod(this)('find', fns, true);

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

async compactStructuredEncryptionData(fns = () => { }) {

  // Obtain the collectionMethod  function with the current context (this) and the 'compactStructuredEncryptionData' operation flag
  const fn = collectionMethod(this)('compactStructuredEncryptionData', fns, false, 'compactStructuredEncryptionData');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
}
async convertToCapped(size = 10000, fns = () => { }) {
  
  // Obtain the collectionMethod  function with the current context (this) and the 'convertToCapped' operation flag
  const fn = collectionMethod(this)('convertToCapped', fns, false, 'convertToCapped');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
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
async getIndexSpecs( fns = () => { }) {

  // Obtain the collectionMethod  function with the current context (this) and the 'getIndexSpecs' operation flag
  const fn = collectionMethod(this)('getIndexSpecs', fns, false, 'getIndexSpecs');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
}
async getIndices(fns = () => { }) {

  // Obtain the collectionMethod  function with the current context (this) and the 'getIndices' operation flag
  const fn = collectionMethod(this)('getIndices', fns, false, 'getIndices');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
}
async getIndexKeys(fns = () => { }) {
  // Obtain the collectionMethod  function with the current context (this) and the 'getIndexKeys' operation flag
  const fn = collectionMethod(this)('getIndexKeys', fns, false, 'getIndexKeys');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
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
async getDB( fns = () => { }) {

  // Obtain the collectionMethod  function with the current context (this) and the 'getDB' operation flag
  const fn = collectionMethod(this)('getDB', fns, false, 'getDB');

  // Invoke the obtained function passing the query and options, and return the result
  return fn();
}

async getMongo(fns = () => { }) {

  // Obtain the collectionMethod  function with the current context (this) and the 'getMongo' operation flag
  const fn = collectionMethod(this)('getMongo', fns, false, 'getMongo');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
}

async dataSize(options = {collection: this.collection, scale: 1024}, fns = () => { }) {
 
  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';

  const fn = dbMethod(this)('command', fns, false, 'dataSize');
  const dataSizeOptions = this.options(options, 'collStats', 'collection');
  return fn(dataSizeOptions);
}

async storageSize(options = {collection: this.collection, scale: 1024}, fns = () => { }) {
 

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';

  const fn = dbMethod(this)('command', fns, false, 'storageSize');
  const storageSizeOptions = this.options(options, 'collStats', 'collection');
  return fn(storageSizeOptions);
}

async collStats(options = {collection: this.collection, scale: 1024}, fns = () => { }) {
 
  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';

  const fn = dbMethod(this)('command', fns, false, 'collStats');
  const collStatsOptions = this.options(options, 'collStats', 'collection');
  return fn(collStatsOptions);
}


async totalSize(options = {collection: this.collection, scale: 1024}, fns = () => { }) {
 

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';

  const fn = dbMethod(this)('command', fns, false, 'totalSize');
  const totalSizeOptions = this.options(options, 'collStats', 'collection');
  return fn(totalSizeOptions);
}


options(options = {}, command = 'createUser', value = 'name', option = {}){
  for(let key in options){
     if(key === value){
         option[command] = options[key];
     }else{
         option[key] = options[key];
     }
  }
 return option
}

async drop(options = {writeConcern: {} } , fns = () => { }) {

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';

  // Obtain the collectionMethod  function with the current context (this) and the 'drop' operation flag
  const fn = collectionMethod(this)('drop', fns, false, 'drop');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(options);
}

async exists(fns = () => { }) {

  // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';

  // Obtain the collectionMethod  function with the current context (this) and the 'exists' operation flag
  const fn = collectionMethod(this)('exists', fns, false, 'exists');

  // Invoke the obtained function passing the query and options, and return the result
  return fn();
}//Todo: refactor

async getFullName(fns = () => { }) {
  // Check if the query is provided and is an object
  // if (query && !isObject(query)) return 'Invalid query';

  // // Check if the options are provided and are an object
  // if (options && !isObject(options)) return 'Invalid options';

  // Obtain the collectionMethod  function with the current context (this) and the 'getFullName' operation flag
  const fn = collectionMethod(this)('getFullName', fns, false, 'getFullName');

  // Invoke the obtained function passing the query and options, and return the result
  return fn();
}//todo

async getName(query = {}, options = {}, fns = () => { }) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';

  // Obtain the collectionMethod  function with the current context (this) and the 'getName' operation flag
  const fn = collectionMethod(this)('getName', fns, false, 'getName');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
}// todo



async runCommand(command = 'find', options = {}, fns = () => { }) {
  // Check if the query is provided and is an object
  if (command && !isString(command)) return 'Invalid command';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';

  // Obtain the collectionMethod  function with the current context (this) and the 'runCommand' operation flag
  const fn = collectionMethod(this)('command', fns, false, 'command');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(command, options);
}//todo 

async explain(query = {}, options = {}, fns = () => { }) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';

  // Obtain the collectionMethod  function with the current context (this) and the 'explain' operation flag
  const fn = collectionMethod(this)('explain', fns, false, 'explain');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
}// todo


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
 * Asynchronously retrieves latency statistics for the collection.
 * 
 * @param {Object} [options={ histograms: true }] - Additional options for the latencyStats operation.
 * @returns {Promise<Object>|string} - A promise that resolves to an object containing the latency statistics or an error message.
 */
async latencyStats(options = { histograms: true }, fns = () => {}) {
  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';
  
  // Obtain the collectionMethod  function with the current context (this) and the 'latencyStats' operation flag
  const fn = dbMethod (this)('latencyStats', fns);

  // Invoke the obtained function passing the options, and return the result
  return fn(options);
}// todo: collection[method] is not a function

async initializeOrderedBulkOp(fns = () => { }) {

  // Obtain the collectionMethod  function with the current context (this) and the 'initializeOrderedBulkOp' operation flag
  const fn = collectionMethod(this)('initializeOrderedBulkOp', fns, false, 'initializeOrderedBulkOp');

  // Invoke the obtained function passing the query and options, and return the result
  return fn();
}// todo: MongoClient must be connected to perform this operation


async getPlanCache( fns = () => { }) {

  // Obtain the collectionMethod  function with the current context (this) and the 'getPlanCache' operation flag
  const fn = collectionMethod(this)('getPlanCache', fns, false, 'getPlanCache');

  // Invoke the obtained function passing the query and options, and return the result
  return fn();
}//todo: collection[method] is not a function

async mapReduce(query = {}, options = {}, fns = () => { }) {
  // Check if the query is provided and is an object
  if (query && !isObject(query)) return 'Invalid query';

  // Check if the options are provided and are an object
  if (options && !isObject(options)) return 'Invalid options';

  // Obtain the collectionMethod  function with the current context (this) and the 'mapReduce' operation flag
  const fn = collectionMethod(this)('mapReduce', fns, false, 'mapReduce');

  // Invoke the obtained function passing the query and options, and return the result
  return fn(query, options);
}

// async validate(options = {collection: this.collection, full: false, repair: false,  metadata: false}, fns = () => { }) {
 
//   // Check if the options are provided and are an object
//   if (options && !isObject(options)) return 'Invalid options';

//   const fn = dbMethod(this)('command', fns, false, 'validate');
//   const collStatsOptions = this.options(options, 'validate', 'collection');
//   return fn(collStatsOptions);
// }


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




 
 
  
 

 



 





 
 

  
  
 
 
 
 
 
 


 

 
 
 
 

 



 








  // async validate(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'validate' operation flag
  //   const fn = collectionMethod(this)('validate', fns, false, 'validate');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async getShardVersion(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'getShardVersion' operation flag
  //   const fn = collectionMethod(this)('getShardVersion', fns, false, 'getShardVersion');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async getShardDistribution(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'getShardDistribution' operation flag
  //   const fn = collectionMethod(this)('getShardDistribution', fns, false, 'getShardDistribution');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async watch(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'watch' operation flag
  //   const fn = collectionMethod(this)('watch', fns, false, 'watch');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async hideIndex(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'hideIndex' operation flag
  //   const fn = collectionMethod(this)('hideIndex', fns, false, 'hideIndex');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async unhideIndex(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'unhideIndex' operation flag
  //   const fn = collectionMethod(this)('unhideIndex', fns, false, 'unhideIndex');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async analyzeShardKey(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'analyzeShardKey' operation flag
  //   const fn = collectionMethod(this)('analyzeShardKey', fns, false, 'analyzeShardKey');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async configureQueryAnalyzer(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'configureQueryAnalyzer' operation flag
  //   const fn = collectionMethod(this)('configureQueryAnalyzer', fns, false, 'configureQueryAnalyzer');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async checkMetadataConsistency(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'checkMetadataConsistency' operation flag
  //   const fn = collectionMethod(this)('checkMetadataConsistency', fns, false, 'checkMetadataConsistency');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async getSearchIndexes(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'getSearchIndexes' operation flag
  //   const fn = collectionMethod(this)('getSearchIndexes', fns, false, 'getSearchIndexes');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async createSearchIndex(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'createSearchIndex' operation flag
  //   const fn = collectionMethod(this)('createSearchIndex', fns, false, 'createSearchIndex');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async createSearchIndexes(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'createSearchIndexes' operation flag
  //   const fn = collectionMethod(this)('createSearchIndexes', fns, false, 'createSearchIndexes');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }
  // async dropSearchIndex(query = {}, options = {}, fns = () => { }) {
  //   // Check if the query is provided and is an object
  //   if (query && !isObject(query)) return 'Invalid query';

  //   // Check if the options are provided and are an object
  //   if (options && !isObject(options)) return 'Invalid options';

  //   // Obtain the collectionMethod  function with the current context (this) and the 'dropSearchIndex' operation flag
  //   const fn = collectionMethod(this)('dropSearchIndex', fns, false, 'dropSearchIndex');

  //   // Invoke the obtained function passing the query and options, and return the result
  //   return fn(query, options);
  // }



  /**
   * Configures the class with the specified options for database connection, URL, collection, and database name.
   */
  config() {

    if (!this.url) this.url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/test';
    if (!this.collection) this.collection = 'users';
    if (!this.faker_url) this.faker_url = process.env.JSON_FAKER_URL || 'https://jsonplaceholder.typicode.com/';
    if (!this.db) {
      if (isUrlLocalhost(this.url)) {
        this.db = getDatabaseNameFromUrl(this.url);
      } else {
        this.db = process.env.DATABASE_NAME || 'test';
      }
    }
    this.DB = new DB({ url: this.url, db: this.db, collection: this.collection });
  }

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

module.exports = Model;

























