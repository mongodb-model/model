"use strict";

/**
 *    @author Ericson Weah Dev  
 *    email: ericson.weah@ericsonweah.dev
 *    github: https://github.com/ericson-weah-dev
 *    phone: +1.385.204.5167
 *    Website: https://www.ericsonweah.dev
 *
 * ## Thx7GA%9N6uET4x0Nr
 * @module DB
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
const dbMethod = require('./src/db/query/database');
const streamer = require('./src/db/file/streamer');

const { ObjectId } = require('mongodb');
const { isArray, isValid, isValidObjectId, isObject, isString, isNumber, fileExists } = require('./modules/helpers')();

/**
 * Represents a Model class that extends the base class.
 */
class DB extends require("./base") {
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
        this.autobind(DB);

        // Auto invoke methods of the model
        this.autoinvoker(DB);

        // Add methods from other classes if they do not already exist
        // Example: this.methodizer(...classList);
        // Example: this.methodizeProperty(require('./src/db/query')());

        // Set the maximum number of event listeners to infinity
        this.setMaxListeners(Infinity);
    }


    /**
 * Creates a collection with the given name and options.
 *
 * @param {string} [name='users'] - The name of the collection to create.
 * @param {Object} [options={}] - The options for creating the collection.
 * @returns {Promise} - A Promise that resolves to the created collection.
 */
    async createCollection(name = 'users', options = {}, fns = () => { }) {
        // Check if the name is provided and is a string
        if (name && !isString(name)) return 'Invalid name';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        const fn = dbMethod(this)('createCollection', fns);

        return fn(name, options);
    }


    /**
     * Retrieves the names of all collections in the database.
     *
     * @returns {Promise} - A Promise that resolves to an array of collection names.
     */
    async getCollectionNames(fns = () => { }) {
        const fn = dbMethod(this)('listCollections', fns, true, 'getCollectionNames');
        return fn();
    }


    // /**
    //  * Sets up a change stream to watch for changes in the database.
    //  *
    //  * @returns {Promise} - A Promise that resolves to the change stream.
    //  */
    // async watch() {
    //   const fn = dbMethod(this)('watch');
    //   return fn();
    // }


    /**
     * Executes a database command with the specified options.
     *
     * @param {Object} [options={ collStats: this.collection }] - The options for the command.
     * @returns {Promise} - A Promise that resolves to the result of the command.
     */
    async runCommand(options = { collStats: this.collection }) {
        const fn = dbMethod(this)('runCommand');
        return fn(options);
    }


    /**
     * Renames a collection in the database.
     *
     * @param {string} [oldName=''] - The current name of the collection.
     * @param {string} [newName=''] - The new name for the collection.
     * @returns {Promise} - A Promise that resolves once the collection has been renamed.
     */
    async renameCollection(oldName = '', newName = '', fns = () => { }) {
        const fn = dbMethod(this)('renameCollection', fns);
        return fn(oldName, newName);
    }


    /**
     * Retrieves the statistics for the database.
     *
     * @param {Object} [options={}] - The options for retrieving the statistics.
     * @returns {Promise} - A Promise that resolves to the statistics of the database.
     */
    async stats(options = {}, fns = () => { }) {
        return dbMethod(this)('stats', fns, false, 'stats')(options);
    }

    /**
     * Retrieves a collection object for the specified collection name.
     *
     * @param {string} [name='users'] - The name of the collection.
     * @returns {Promise} - A Promise that resolves to the collection object.
     */
    async getCollection(name = 'users') {
        const fn = dbMethod(this)('collection');
        return fn(name);
    }


    /**
     * Drops a collection from the database.
     *
     * @param {string} [name=''] - The name of the collection to drop.
     * @returns {Promise} - A Promise that resolves once the collection has been dropped.
     */
    async dropCollection(name = '') {
        const fn = dbMethod(this)('dropCollection');
        return fn(name);
    }

    async drop(name = this.collection) {
        const fn = dbMethod(this)('dropCollection');
        return fn(name);
    }


    /**
     * Drops the entire database.
     *
     * @returns {Promise} - A Promise that resolves once the database has been dropped.
     */
    async dropDatabase() {
        const fn = dbMethod(this)('dropDatabase');
        return fn();
    }

    /**
     * Executes a database command with the specified options.
     *
     * @param {Object} [options={ ping: 1 }] - The options for the command.
     * @returns {Promise} - A Promise that resolves with the result of the command.
     */
    async command(options = { ping: 1 }) {
        const fn = dbMethod(this)('command');
        return fn(options);
    }

    /**
     * Creates a view in the database based on the specified view name, source collection, and pipeline.
     *
     * @param {string} view - The name of the view to create.
     * @param {string} source - The name of the source collection for the view.
     * @param {Array} pipeline - The pipeline operations to apply when creating the view.
     * @returns {Promise} - A Promise that resolves once the view has been created.
     */
    async createView(view, source, pipeline) {
        return this.command({ create: view, viewOn: source, pipeline });
    }

    // Database methods
    async currentOp() { }
    async fsyncLock() { }
    async fsyncUnlock() { }
    async getCollectionInfos(filter, nameOnly, authorizedCollections) { }
    async getLogComponents() { }
    async getName() { }
    async getProfilingStatus() { }
    async getReplicationInfo() { }
    async getSiblingDB(database = 'apps') { }
    async hello() { }
    async help() { }
    async hostInfo() { }
    async killOp(opid = '1233') { }
    async listCommands() { }
    async logout() { }
    async printCollectionStats() { }
    async printReplicationInfo() { }
    async printSecondaryReplicationInfo() { }
    async printShardingStatus() { }
    async printSlaveReplicationInfo() { }
    // Removed in mongoDB 5.0
    async resetError() { }
    async rotateCertificates(message) { }
    async serverBuildInfo() { }
    async serverCmdLineOpts() { }
    async serverStatus() { }
    async setLogLevel(level = 'int', component = 'string') { }
    async setProfilingLevel(level = 'int', options = {} || 'int') { }
    async shutdownServer(options = { force: true, timeoutSecs: 1000 }) { }
    async stats(scale) { }
    async version() { }
    async watch(pipeline = [], options = {}) { }
    //User Management methods 
    async auth(username = 'string', password = 'string')
    async changeUserPassword(username, password) { }
    async createUser(user, writeConcern) { }
    async dropUser(username, writeConcern) { }
    async dropAllUsers(writeConcern) { }
    async getUser(username, args) { }
    async getUsers(options) { }
    async grantRolesToUser(username, roles, writeConcern) { }
    async removeUser(username) { }
    async revokeRolesFromUser() { }
    async updateUser(username, update, writeConcern) { }
    async createRole(role, writeConcern) { }
    async dropRole(rolename, writeConcern) { }
    async dropAllRoles(writeConcern) { }
    async getRole(rolename, args) { }
    async getRoles() { }
    async grantPrivilegesToRole(rolename, privileges, writeConcern) { }
    async revokePrivilegesFromRole(rolename, privileges, writeConcern) { }
    async grantRolesToRole(rolename, roles, writeConcern) { }
    async revokeRolesFromRole(rolename, roles, writeConcern) { }
    async updateRole(rolename, update, writeConcern) { }
}

module.exports = DB