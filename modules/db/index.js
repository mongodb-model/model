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


require('../dotenv').config();
const dbMethod = require('../database');
const { ObjectId } = require('mongodb');
const { isArray, isValid, isValidObjectId, isObject, isString, isNumber, fileExists } = require('../helpers')();

/**
 * Represents a Model class that extends the base class.
 */
class DB extends require("../base") {
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
        // this.autoinvoker();

        // Add methods from other classes if they do not already exist
        this.methodizer(/**ClassList*/);
    
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


    /**
     * Sets up a change stream to watch for changes in the database.
     *
     * @returns {Promise} - A Promise that resolves to the change stream.
     * 
     * NoTE: For replica sets and sharded clusters only
     */
    async watch(pipeline = [], options = {}, fns = () => {}) {
      const fn = dbMethod(this)('watch', fns);
      return fn(pipeline, options);
    }

       /**
     * Executes a database command with the specified options.
     *
     * @param {Object} [options={ collStats: this.collection }] - The options for the command.
     * @returns {Promise} - A Promise that resolves to the result of the command.
     */
    async runCommand(command =  {} | 'string', fns = () =>{}) {
        const fn = dbMethod(this)('runCommand', fns);
        return fn(command);
    }// todo : fix runCommand is not a method issue


       /**
     * Executes a database admin command with the specified options.
     *
     * @param {Object} [options={ collStats: this.collection }] - The options for the command.
     * @returns {Promise} - A Promise that resolves to the result of the command.
     */
       async adminCommand(command =  {} | 'string', fns = () =>{}) {
        const fn = dbMethod(this)('adminCommand', fns);
        return fn(command);
    }// todo : fix runCommand is not a method issue


    // /**
    //  * Executes a database command with the specified options.
    //  *
    //  * @param {Object} [options={ collStats: this.collection }] - The options for the command.
    //  * @returns {Promise} - A Promise that resolves to the result of the command.
    //  */
    // async runCommand(options = { collStats: this.collection }, fns = () =>{}) {
    //     const fn = dbMethod(this)('runCommand', fns);
    //     return fn(options);
    // }


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
    }// done 


    /**
     * Retrieves the statistics for the database.
     *
     * @param {Object} [options={}] - The options for retrieving the statistics.
     * @returns {Promise} - A Promise that resolves to the statistics of the database.
     */
    async stats(options = {}, fns = () => { }) {
        return dbMethod(this)('stats', fns, false, 'stats')(options);
    }// done

    /**
     * Retrieves a collection object for the specified collection name.
     *
     * @param {string} [name='users'] - The name of the collection.
     * @returns {Promise} - A Promise that resolves to the collection object.
     */
    async getCollection(name = this.collection, fns = () => {}) {
        const fn = dbMethod(this)('getCollection', fns);
        return fn(name);
    }//todo: fixd getCollection is not a method issue


    /**
     * Drops a collection from the database.
     *
     * @param {string} [name=''] - The name of the collection to drop.
     * @returns {Promise} - A Promise that resolves once the collection has been dropped.
     */
    async dropCollection(name = this.collection, fns = () => {}) {
        const fn = dbMethod(this)('dropCollection', fns);
        return fn(name);
    }//done

    async drop(name = this.collection, fns  = () => {}) {
        const fn = dbMethod(this)('dropCollection', fns, false, 'drop');
        return fn(name);
    }// done 


    /**
     * Drops the entire database.
     *
     * @returns {Promise} - A Promise that resolves once the database has been dropped.
     */
    async dropDatabase(fns = () => {}) {
        const fn = dbMethod(this)('dropDatabase', fns);
        return fn();
    }// done

    /**
     * Executes a database command with the specified options.
     *
     * @param {Object} [options={ ping: 1 }] - The options for the command.
     * @returns {Promise} - A Promise that resolves with the result of the command.
     */
    async command(options = { ping: 1 }, fns = () => {}) {
        const fn = dbMethod(this)('command', fns);
        return fn(options);
    }//done

    /**
     * Creates a view in the database based on the specified view name, source collection, and pipeline.
     *
     * @param {string} view - The name of the view to create.
     * @param {string} source - The name of the source collection for the view.
     * @param {Array} pipeline - The pipeline operations to apply when creating the view.
     * @returns {Promise} - A Promise that resolves once the view has been created.
     */
    async createView(view, source, pipeline, fns = () => {}) {
        return this.command({ create: view, viewOn: source, pipeline }, fns);
    }// done

    // Database methods
    async currentOp(operations = false || {}, fns = () => {}) {
        const fn = dbMethod(this)('currentOp', fns);
        return fn(operations);
     }// todo : fix currentOp is not a method issue
    async fsyncLock(fns = () => {}) { 
        const fn = dbMethod(this)('fsyncLock', fns);
        return fn();
    }// todo : fix fsyncLock is not a method issue
    async fsyncUnlock(fns = () => {}) { 
        const fn = dbMethod(this)('fsyncUnlock', fns);
        return fn();
    }// todo : fix fsyncUnlock is not a method issue
    async getCollectionInfos(filter = {}, nameOnly = true, authorizedCollections = true, fns = () => {}) {
        const fn = dbMethod(this)('getCollectionInfos', fns, true, 'getCollectionInfos');
        return fn(filter, nameOnly, authorizedCollections);
    }// todo : fix getCollectionInfos is not a method issue
    async getLogComponents(fns = () => {}) {
        const fn = dbMethod(this)('getLogComponents', fns);
        return fn();
     }
     async getName(fns = () => {}) {
        const fn = dbMethod(this)('getName', fns);
        return fn();
     }
    
    // async getProfilingStatus() { }
    // async getReplicationInfo() { }
    // async getSiblingDB(database = 'apps') { }
    // async hello() { }
    // async help() { }
    // async hostInfo() { }
    // async killOp(opid = '1233') { }

    async listCommands(fns = () => {}) {
        const fn = dbMethod(this)('listCommands', fns);
        return fn();
    }
    // async logout() { }
    // async printCollectionStats() { }
    // async printReplicationInfo() { }
    // async printSecondaryReplicationInfo() { }
    // async printShardingStatus() { }
    // async printSlaveReplicationInfo() { }
    // // Removed in mongoDB 5.0
    // async resetError() { }
    // async rotateCertificates(message) { }
    // async serverBuildInfo() { }
    // async serverCmdLineOpts() { }
    // async serverStatus() { }
    // async setLogLevel(level = 'int', component = 'string') { }
    // async setProfilingLevel(level = 'int', options = {} || 'int') { }
    // async shutdownServer(options = { force: true, timeoutSecs: 1000 }) { }
    // async stats(scale) { }

    // async version() { }

    // async watch(pipeline = [], options = {}) { }
    // //User Management methods 
   
    createCommandOptions (command, value){
        return options => object => {
            options[command] = value
            return {
                ...options,
                ...object
            }
        }
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

    // User Management Commands
  
    async createUser(options = {name: 'newuser', pwd: 'password', customData: {}, roles: [], writeConcern: {}, authenticationRestrictions: [], mechanisms: [], digestPassword: false, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'createUser');
        const createUserOptions = this.options(options, 'createUser');
        return fn(createUserOptions);
    
    }// done

    async updateUser(options = {name: 'newuser', pwd: 'password', customData: {}, roles: [], writeConcern: {}, authenticationRestrictions: [], mechanisms: [], digestPassword: false, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'updateUser');
        const updateUserOptions = this.options(options, 'updateUser');
        return fn(updateUserOptions);
    
    }
    async dropAllUsersFromDatabase (options = {level:1, writeConcern: {},comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'dropAllUsersFromDatabase');
        const dropAllUsersFromDatabaseOptions = this.options(options, 'dropAllUsersFromDatabase', 'level');
        return fn(dropAllUsersFromDatabaseOptions);
    }

     
    async dropUser(options = {name: 'newuser',  writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'dropUser');
        const dropUserOptions = this.options(options, 'dropUser');
        return fn(dropUserOptions);
    
    }// done

    async grantRolesToUser(options = {name: 'newuser', roles: [],  writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'grantRolesToUser');
        const grantRolesToUserOptions = this.options(options, 'grantRolesToUser');
        return fn(grantRolesToUserOptions);
    
    }//done 

    async revokeRolesFromUser(options = {name: 'newuser', roles: [],  writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'revokeRolesFromUser');
        const revokeRolesFromUserOptions = this.options(options, 'revokeRolesFromUser');
        return fn(revokeRolesFromUserOptions);
    
    }//done 

    async usersInfo(options = {name: 'newuser', showCredentials: true, showCustomData: true, showPrivileges: true, showAuthenticationRestrictions: true, filter: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'usersInfo');
        const usersInfoOptions = this.options(options, 'usersInfo');
        return fn(usersInfoOptions);
    
    }// done

    // async auth(username = 'string', password = 'string')
    // // async changeUserPassword(username, password) { }
    // async createUser(user, writeConcern) { }
    // async dropUser(username, writeConcern) { }
    // async dropAllUsers(writeConcern) { }
    // async getUser(username, args) { }
    // async getUsers(options) { }
    // async grantRolesToUser(username, roles, writeConcern) { }
    // async removeUser(username) { }
    // async revokeRolesFromUser() { }
    // async updateUser(username, update, writeConcern) { }
    // async createRole(role, writeConcern) { }
    // async dropRole(rolename, writeConcern) { }
    // async dropAllRoles(writeConcern) { }
    // async getRole(rolename, args) { }
    // async getRoles() { }
    // async grantPrivilegesToRole(rolename, privileges, writeConcern) { }
    // async revokePrivilegesFromRole(rolename, privileges, writeConcern) { }
    // async grantRolesToRole(rolename, roles, writeConcern) { }
    // async revokeRolesFromRole(rolename, roles, writeConcern) { }
    // async updateRole(rolename, update, writeConcern) { }
}

module.exports = DB