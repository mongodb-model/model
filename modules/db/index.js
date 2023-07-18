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
const { MongoClient } = require('mongodb');
const dbMethod = require('../database');
const admin = require('../admin');
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


    // USER COMMANDS 

    

    async buildInfo(options = {}, fns = () => {}){
        const fn = admin(this)('buildInfo', fns);
        return fn(options);
    }
    async listDatabases(options = {listDatabases: 1}, fns = () => {}){
        const fn = admin(this)('listDatabases', fns);
        return fn(options);
    }

    // async replSetGetStatus(options = {replSetGetStatus: 1}, fns = () => {}){
    //     const fn = admin(this)('replSetGetStatus', fns);
    //     return fn(options);
    // }
   
    async serverInfo(options = {serverInfo: 1}, fns = () => {}){
        const fn = admin(this)('serverInfo', fns);
        return fn(options);
    }


    async ping(options = {ping: 1}, fns = () => {}){
        const fn = admin(this)('ping', fns);
        return fn(options);
    }

    async serverStatus(options = {serverStatus: 1}, fns = () => {}){
        const fn = admin(this)('serverStatus', fns);
        return fn(options);
    }

    async validateCollection(collection = 'users', options = {validateCollection: 1}, fns = () => {}){
        const fn = admin(this)('validateCollection', fns);
        return fn(collection,options);
    }

    async removeUser(username = 'users', options = {removeUser: 1}, fns = () => {}){
        const fn = admin(this)('removeUser', fns);
        return fn(username,options);
    }

    async adminCommand(command = 'users', options = {removeUser: 1}, fns = () => {}){
        const fn = admin(this)('command', fns, 'adminCommand');
        return fn(command,options);
    }




    // Aggregation Commands

    async aggregate(options = {collection: 1, pipeline: [],  explain: true, allowDiskUse: true, cursor: {}, maxTimeMS: 0, bypassDocumentValidation:true, readConcern: {},  collation: {},  hint: {} | '', comment: '',  writeConcern: {},  let: {}}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'aggregate');
        const aggregateOptions = this.options(options, 'aggregate', 'collection');
        return fn(aggregateOptions);
    
    }

    async count(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

        const fn = dbMethod(this)('command', fns, false,  'count');
        const countOptions = this.options(options, 'count', 'collection');
        return fn(countOptions);
    }// done 

    async distinct(options =  {collection: "users",key: "firstname",query: {},readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

        const fn = dbMethod(this)('command', fns, false, 'distinct');
        const distinctOptions = this.options(options, 'distinct', 'collection');
        return fn(distinctOptions);
    } // done 

    async mapReduce (options =  {
        collection: 'users',
        map: () => {},
        reduce: () => {},
        finalize: '',
        out: '' | {},
        query: {},
        sort: {},
        limit: 1,
        scope: {},
        jsMode: false,
        verbose: false,
        bypassDocumentValidation: true,
        collation: {},
        writeConcern: {},
        comment: ''
      }, fns = ()=> {}) {

        const fn = dbMethod(this)('command', fns, false, 'mapReduce');
        const mapReduceOptions = this.options(options, 'mapReduce', 'collection');
        return fn(mapReduceOptions);

    }

    // Geospatial Commands (removed for mongodb 5)

    //Query and Write Operation Commands

    async delete (options =  { 
        collection: 'users',
        deletes: [
           {
             q : {},
             limit : 1,
             collation: {},
             hint: {} | ''
           },
        ],
        comment: '',
        let: {}, // Added in MongoDB 5.0
        ordered: false,
        writeConcern: {}
     }, fns = ()=> {}){

        const fn = dbMethod(this)('command', fns, false, 'delete');
        const deleteOptions = this.options(options, 'delete', 'collection');
        return fn(deleteOptions);
    }

    async find(options = {
        collection: 'users',
        filter: {},
        sort: {},
        projection: {},
        hint: {} |'',
        skip: 0,
        limit: 1,
        batchSize: 101,
        singleBatch: false,
        comment: '',
        maxTimeMS: 1000,
        readConcern: {},
        max: {},
        min: {},
        returnKey: false,
        showRecordId: true,
        tailable: true,
        oplogReplay: true,
        noCursorTimeout: true,
        awaitData: true,
        allowPartialResults: true,
        collation: {},
        allowDiskUse : true,
        let: {} // Added in MongoDB 5.0
     }, fns = ()=> {}){

        const fn = dbMethod(this)('command', fns, false, 'find');
        const findOptions = this.options(options, 'find', 'collection');
        return fn(findOptions);
    }

    async findAndModify(options =  {
        collection: 'users',
        query: {},
        sort: {},
        remove: true,
        update: {} | [],
        new: true,
        fields: {},
        upsert: true,
        bypassDocumentValidation: true,
        writeConcern: {},
        collation: {},
        arrayFilters: [],
        hint: {} | '',
        comment: '',
        let: {} // Added in MongoDB 5.0
      }, fns = ()=> {}){

        const fn = dbMethod(this)('command', fns, false, 'findAndModify');
        const findAndModifyOptions = this.options(options, 'findAndModify', 'collection');
        return fn(findAndModifyOptions);

    }
    async getMore(options = {getMore: 678960441858272731,collection: 'users',batchSize: 101,maxTimeMS: 1000,comment: ''}, fns = ()=> {}){

        const fn = dbMethod(this)('command', fns, false, 'getMore');
        const getMoreOptions = this.options(options, 'getMore', 'collection');
        return fn(getMoreOptions);
    }// Todo

    async insert(options =    {
        collection: 'users',
        documents: [],
        ordered: true,
        writeConcern: { },
        bypassDocumentValidation: true,
        comment: '',
     }, fns = ()=> {}){

        const fn = dbMethod(this)('command', fns, false, 'insert');
        const insertOptions = this.options(options, 'insert', 'collection');
        return fn(insertOptions);
    }

    async update (options =  {
        collection: 'users',
        updates: [
           {
             q: {},
             u: {} | [],
             c: {}, // Added in MongoDB 5.0
             upsert: true,
             multi: true,
             collation: {},
             arrayFilters: [],
             hint: {} | ''
           },
        ],
        ordered: true,
        writeConcern: {},
        bypassDocumentValidation: true,
        comment: '',
        let: {} // Added in MongoDB 5.0
     }, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'update');
        const updateOptions = this.options(options, 'update', 'collection');
        return fn(updateOptions);
    }

    // Query Plan Cache Commands

    async planCacheClear(options = {collection: 'users', query: {}, sort: {}, projection: {}, comment: ''
     }, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'planCacheClear');
        const planCacheClearOptions = this.options(options, 'planCacheClear', 'collection');
        return fn(planCacheClearOptions);
    }

    async planCacheClearFilters(options = {collection: 'users', query: {}, sort: {},projection: {}, collation: {},comment: ''}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'planCacheClearFilters');
        const planCacheClearFiltersOptions = this.options(options, 'planCacheClearFilters', 'collection');
        return fn(planCacheClearFiltersOptions);
    }

    async planCacheListFilters (options = {collection: 'users', comment: ''}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'planCacheListFilters');
        const planCacheListFiltersOptions = this.options(options, 'planCacheListFilters', 'collection');
        return fn(planCacheListFiltersOptions);
    }
    async planCacheSetFilter(options =  {
        collection: 'users',
        query: {},
        sort: {},
        projection:  {},
        collation: {},
        indexes: [],
        comment: ''
     }, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'planCacheSetFilter');
        const planCacheSetFilterOptions = this.options(options, 'planCacheSetFilter', 'collection');
        return fn(planCacheSetFilterOptions);
    }

    // DATABASE OPERATIONS


    // Authentication Commands
    async authenticate(options = {authenticate: 1, user: "your_username", pwd: "your_password"}, fns = () => {}){
        const fn = dbMethod(this)('command', fns, false, 'authenticate');
        const authenticateOptions = this.options(options, 'authenticate', 'level');
        // console.log(authenticateOptions)
        return fn(authenticateOptions);
    }//todo 

    async logout(options = {level: 1}, fns = () => {}){
        const fn = dbMethod(this)('command', fns, false, 'logout');
        const logoutOptions = this.options(options, 'logout', 'level');
        return fn(logoutOptions);
    }

    // Replication Commands 
    async hello(options = {level: 1, saslSupportedMechs: "", comment: ''}, fns = () =>{}){
        const fn = dbMethod(this)('command', fns, false, 'hello');
        const helloOptions = this.options(options, 'hello', 'level');
        return fn(helloOptions);
    }// done

    async replSetAbortPrimaryCatchUp (options = {level: 1}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'replSetAbortPrimaryCatchUp');
        const replSetAbortPrimaryCatchUpOptions = this.options(options, 'replSetAbortPrimaryCatchUp', 'level');
        return fn(replSetAbortPrimaryCatchUpOptions);
    }//done 


    async replSetFreeze(options = {duration: 1}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'replSetFreeze');
        const replSetFreezeOptions = this.options(options, 'replSetFreeze', 'duration');
        return fn(replSetFreezeOptions);
    }// done

    async replSetGetConfig(options =  {level: 1,commitmentStatus: true,comment: ''}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'replSetGetConfig');
        const replSetGetConfigOptions = this.options(options, 'replSetGetConfig', 'level');
        return fn(replSetGetConfigOptions);
    }

    async replSetGetStatus(options = {status: 1}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'replSetGetStatus');
        const replSetGetStatusOptions = this.options(options, 'replSetGetStatus', 'status');
        return fn(replSetGetStatusOptions);
    }

    async replSetInitiate(options = {config_document: {}}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'replSetInitiate');
        const replSetInitiateOptions = this.options(options, 'replSetInitiate', 'config_document');
        // console.log(replSetInitiateOptions)
        return fn(replSetInitiateOptions);
    }
    async replSetMaintenance( options = {status:  0}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'replSetMaintenance');
        const replSetMaintenanceOptions = this.options(options, 'replSetMaintenance', 'status');
        return fn(replSetMaintenanceOptions);

    }

    async replSetReconfig( options = {new_config_document: {},force: false, maxTimeMS: 1000}, fns = () => {}){


        const fn = dbMethod(this)('command', fns, false, 'replSetReconfig');
        const replSetReconfigOptions = this.options(options, 'replSetReconfig', 'new_config_document');
        return fn(replSetReconfigOptions);
    }

    async replSetResizeOplog( options = {status: 1, size:  990, minRetentionHours: 1.5}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'replSetResizeOplog');
        const replSetResizeOplogOptions = this.options(options, 'replSetResizeOplog', 'status');
        return fn(replSetResizeOplogOptions);

    }

    async replSetStepDown(options =  {wait: 120,secondaryCatchUpPeriodSecs: 10, force: false}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false, 'replSetStepDown');
        const replSetStepDownOptions = this.options(options, 'replSetStepDown', 'wait');
        return fn(replSetStepDownOptions);
    }

    async replSetSyncFrom(options = {address: {}}, fns = () => {}) {


        const fn = dbMethod(this)('command', fns, false, 'replSetSyncFrom');
        const replSetSyncFromOptions = this.options(options, 'replSetSyncFrom', 'address');
        return fn(replSetSyncFromOptions);
    }


    // Sharding Commands

    async abortReshardCollection(options = {collection: 'model.users'}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'abortReshardCollection');
        const abortReshardCollectionOptions = this.options(options, 'abortReshardCollection', 'collection');

        console.log(abortReshardCollectionOptions)
        
        return fn(abortReshardCollectionOptions);

    }

    // Administration Commands

    async cloneCollectionAsCapped(options = {collection: 'users',toCollection: 'newusers',size: 1000,writeConcern: {},comment: ''}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'cloneCollectionAsCapped');
        const cloneCollectionAsCappedOptions = this.options(options, 'cloneCollectionAsCapped', 'collection');
        return fn(cloneCollectionAsCappedOptions);

    }

    async collMod(options = {collection: 'users', option1: 'value1', option2: 'value2'}, fns = () => {}){

        const fn = dbMethod(this)('command', fns, false, 'collMod');
        const collModOptions = this.options(options, 'collMod', 'collection');
        return fn(collModOptions);

    }

async  compact(options = {collection: 'users', comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'compact');
    const compactOptions = this.options(options, 'compact', 'collection');
    return fn(compactOptions);
}

async compactStructuredEncryptionData(options = {collection: 'users', compactionTokens: {}}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'compactStructuredEncryptionData');
    const compactStructuredEncryptionDataOptions = this.options(options, 'compactStructuredEncryptionData', 'collection');
    return fn(compactStructuredEncryptionDataOptions);

}

//Do Not Run This Command In Sharded Clusters
async convertToCapped(options = {collection: 'users', size: 190,writeConcern: {},comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'convertToCapped');
    const convertToCappedOptions = this.options(options, 'convertToCapped', 'collection');
    return fn(convertToCappedOptions);
}

async create(options =  {
    create: 'users',
    capped: false|true,
    timeseries: {
       timeField: 'timeField',
       metaField: 'metaField',
       granularity: 'seconds'
    },
    expireAfterSeconds: 1000,
    clusteredIndex: {},  // Added in MongoDB 5.3
    changeStreamPreAndPostImages: {},  // Added in MongoDB 6.0
    autoIndexId: true|false,
    size: 100,
    max: 999999999,
    storageEngine: {},
    validator: {},
    validationLevel: 'off',
    validationAction: 'warn',
    indexOptionDefaults: {},
    viewOn: 'source collection',
    pipeline: [],
    collation: {},
    writeConcern: {},
    encryptedFields: {},
    comment: ""
  }, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'create');
    const createOptions = this.options(options, 'create', 'collection');
    return fn(createOptions);
}

async createIndexes(options = {collection: 'users',indexes: [{key: {},name: 'index_name',/** option, option,... */}],writeConcern: {},commitQuorum: 'majority',comment: ""}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'reateIndexes');
    const reateIndexesOptions = this.options(options, 'reateIndexes', 'collection');
    return fn(reateIndexesOptions);
}
async currentOp(){}
async drop(options =  {collection: 'collection',writeConcern: {},comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'drop');
    const dropOptions = this.options(options, 'drop', 'collection');
    return fn(dropOptions);

}

async dropDatabase(options = {level: 1,writeConcern: {},comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'dropDatabase');
    const dropDatabaseOptions = this.options(options, 'dropDatabase', 'level');
    return fn(dropDatabaseOptions);
}

async dropConnections(options = {level: 1,hostAndPort : [ /*"host1:port1", "host2:port2", ... */],comment: ''}, fns = () => {}){


    const fn = dbMethod(this)('command', fns, false, 'dropConnections');
    const dropConnectionsOptions = this.options(options, 'dropConnections', 'level');
    return fn(dropConnectionsOptions);

}

async dropIndexes( options = {collection: 'collection',index: {},writeConcern: {}, comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'dropIndexes');
    const dropIndexesOptions = this.options(options, 'dropIndexes', 'collection');
    return fn(dropIndexesOptions);

}


async filemd5(options =  {files_id: ObjectId("4f1f10e37671b50e4ecd2776"), root: "fs"}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'filemd5');
    const filemd5Options = this.options(options, 'filemd5', 'files_id');
    return fn(filemd5Options);

}

async fsync(options = {level: 1,lock: false,comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'fsync');
    const fsyncOptions = this.options(options, 'fsync', 'level');
    return fn(fsyncOptions);
}

async fsyncUnlock(options = {level: 1, comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'fsyncUnlock');
    const fsyncUnlockOptions = this.options(options, 'fsyncUnlock', 'level');
    return fn(fsyncUnlockOptions);
}//todo

async getAuditConfig(){}
async getClusterParameter(){}
async getDefaultRWConcern(){}

async getParameter(){}

async killCursors(options =  {collection: 'users',cursors: [/* <cursor id1>, ...*/ ], comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'killCursors');
    const killCursorsOptions = this.options(options, 'killCursors', 'collection');
    return fn(killCursorsOptions);
}
async killOp(){}

async listCollections(options =    {level: 1, filter: {},nameOnly: false,authorizedCollections: false,comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'listCollections');
    const listCollectionsOptions = this.options(options, 'listCollections', 'level');
    return fn(listCollectionsOptions);
}


async listIndexes(options = {collection: 'users',cursor: { batchSize: 1024 },comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'listIndexes');
    const listIndexesOptions = this.options(options, 'listIndexes', 'collection');
    return fn(listIndexesOptions);

}
async logRotate(){}

async reIndex(options = {collection: 'users'}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'reIndex');
    const reIndexOptions = this.options(options, 'reIndex', 'collection');
    return fn(reIndexOptions);
}
async renameCollection(options = {collection: 'users',to: 'new collection name',dropTarget: true|false,writeConcern: {},comment: {}}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'renameCollection');
    const renameCollectionOptions = this.options(options, 'renameCollection', 'collection');
    return fn(renameCollectionOptions);
}

async rotateCertificates(options = {level: 1,message: 'optional log message'}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'rotateCertificates');
    const rotateCertificatesOptions = this.options(options, 'rotateCertificates', 'level');
    return fn(rotateCertificatesOptions);
}
async setAuditConfig(){}
async setClusterParameter (){}
async setFeatureCompatibilityVersion(){}

async setIndexCommitQuorum(options =    {collection: 'users',indexNames: [ {} ],commitQuorum: 1 | '',comment: ''}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'setIndexCommitQuorum');
    const setIndexCommitQuorumOptions = this.options(options, 'setIndexCommitQuorum', 'collection');
    return fn(setIndexCommitQuorumOptions);
}
async setParameter(){}
async setDefaultRWConcern(){}
async setUserWriteBlockMode(){}
async shutdown(){}

// Diagnostic Commands

async collStats(options =   {collection: 'users',scale: 1024}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'collStats');
    const collStatsOptions = this.options(options, 'collStats', 'collection');
    return fn(collStatsOptions);

}

async connPoolStats(options = {level: 1}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'connPoolStats');
    const connPoolStatsOptions = this.options(options, 'connPoolStats', 'level');
    return fn(connPoolStatsOptions);
}

async connectionStatus(options = {level: 1,showPrivileges: false}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'connectionStatus');
    const connectionStatusOptions = this.options(options, 'connectionStatus', 'level');
    return fn(connectionStatusOptions);
}

async datasize(options =  {collection: 'users',keyPattern: {},min: {},max: {},estimate: false}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'datasize');
    const datasizeOptions = this.options(options, 'datasize', 'collection');
    return fn(datasizeOptions);
}
async dbHash(options = {value: 1, collections: [ /*<collection1>, ... */]} , fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'dbHash');
    const dbHashOptions = this.options(options, 'dbHash', 'value');
    return fn(dbHashOptions);
}
async dbStats(options = {value: 1,scale: 1024,freeStorage: 1}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'dbStats');
    const dbStatsOptions = this.options(options, 'dbStats', 'value');
    return fn(dbStatsOptions);
}

async explain( options = {document: {},verbosity: 'allPlansExecution', comment: ''}, fns = () => {} ){

    const fn = dbMethod(this)('command', fns, false, 'explain');
    const explainOptions = this.options(options, 'explain', 'document');
    return fn(explainOptions);
}


async getCmdLineOpts(){}
async getLog(){}
async hostInfo(){}

async listCommands(options = {command: 1}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'listCommands');
    const listCommandsOptions = this.options(options, 'listCommands', 'command');
    return fn(listCommandsOptions);
}

async lockInfo(){}
async ping(){}

async profile(options =  {level: 0,slowms: 100,sampleRate: 1.0,filter: {/* <field1>: <expression1>, ... */}}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'profile');
    const profileOptions = this.options(options, 'profile', 'level');
    return fn(profileOptions);
}

// async getCmdLineOpts(options = {option: 1}, fns =  () => {}){

//     const fn = dbMethod(this)('command', fns, false, 'getCmdLineOpts');
//     const getCmdLineOptsOptions = this.options(options, 'getCmdLineOpts', 'option');
//     return fn(getCmdLineOptsOptions);

// }

async top(options = {status: 1}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'top');
    const topOptions = this.options(options, 'top', 'status');
    return fn(topOptions);
}

async validate(options = { collection: 'users', full: false, repair: false, metadata: false}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'validate');
    const validateOptions = this.options(options, 'validate', 'collection');
    return fn(validateOptions);
}

// Free Monitoring Commands

async setFreeMonitoring (){}

// Auditing Commands 

async logApplicationMessage(options = { message: 'get logs'}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'logApplicationMessage');
    const logApplicationMessageOptions = this.options(options, 'logApplicationMessage', 'message');
    return fn(logApplicationMessageOptions);

}//todo logApplication


// Session Commands

async abortTransaction (){}
async commitTransaction(){}

async  startSession(options = {status: 1}, fns = () => {}) {

    const fn = dbMethod(this)('command', fns, false, 'startSession');
    const startSessionOptions = this.options(options, 'startSession', 'status');
    return fn(startSessionOptions);
}
async endSessions(options = {command: [ /*{ id : <UUID> }, ...*/ ]}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'endSessions');
    const endSessionsOptions = this.options(options, 'endSessions', 'command');
    return fn(endSessionsOptions);

}

async killAllSessions(options = {command: [ /*{ user: <user>, db: <dbname> }, ... */]}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'killAllSessions');
    const killAllSessionsOptions = this.options(options, 'killAllSessions', 'command');
    return fn(killAllSessionsOptions);
}

async killAllSessionsByPattern(options = {pattern: [/* <pattern>, ... */]}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'killAllSessionsByPattern');
    const killAllSessionsByPatternOptions = this.options(options, 'killAllSessionsByPattern', 'pattern');
    return fn(killAllSessionsByPatternOptions);
}

async  killSessions(options = {command: [ /*{ id : <UUID> }, ...*/ ]}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, ' killSessions');
    const  killSessionsOptions = this.options(options, ' killSessions', 'command');
    return fn( killSessionsOptions);

}

async refreshSessions(options = {command: [/*{ id : <UUID> , ...*/]}, fns = () => {}){

    const fn = dbMethod(this)('command', fns, false, 'refreshSessions');
    const refreshSessionsOptions = this.options(options, 'refreshSessions', 'command');
    return fn(refreshSessionsOptions);
}

    /**
 * Creates a collection with the given name and optikons.
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


    // Role Management Commands

    async createRole(options = {name: 'new role', privileges: [], roles: [], authenticationRestrictions: [], writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'createRole');
        const createRoleOptions = this.options(options, 'createRole');
        return fn(createRoleOptions);
    
    }// done

    async dropRole(options = {name: 'role', writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'dropRole');
        const dropRoleOptions = this.options(options, 'dropRole');
        return fn(dropRoleOptions);
    
    }// done


    async dropAllRolesFromDatabase(options = {level: 1, writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'dropAllRolesFromDatabase');
        const dropAllRolesFromDatabaseOptions = this.options(options, 'dropAllRolesFromDatabase', 'level');
        return fn(dropAllRolesFromDatabaseOptions);
    
    }// done 

    async grantPrivilegesToRole(options = {name: 'role', privileges: [], writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'grantPrivilegesToRole');
        const grantPrivilegesToRoleOptions = this.options(options, 'grantPrivilegesToRole');
        return fn(grantPrivilegesToRoleOptions);
    
    }

    async grantRolesToRole(options = {name: 'role', roles: [], writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'grantRolesToRole');
        const grantRolesToRoleOptions = this.options(options, 'grantRolesToRole');
        return fn(grantRolesToRoleOptions);
    }

    async revokeRolesFromRole(options = {name: 'role', roles: [], writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'revokeRolesFromRole');
        const revokeRolesFromRoleOptions = this.options(options, 'revokeRolesFromRole');
        return fn(revokeRolesFromRoleOptions);
    }

    async invalidateUserCache(options = {level: 1}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'invalidateUserCache');
        const invalidateUserCacheOptions = this.options(options, 'invalidateUserCache', 'level');
        return fn(invalidateUserCacheOptions);
    }

    async revokePrivilegesFromRole(options = {name: 'role', privileges: [], writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'revokePrivilegesFromRole');
        const revokePrivilegesFromRoleOptions = this.options(options, 'revokePrivilegesFromRole');
        return fn(revokePrivilegesFromRoleOptions);
    
    }


    async rolesInfo(options = {name: {role: 'role', db: 'app'}, showAuthenticationRestrictions: true, showBuiltinRoles: true, showPrivileges: true, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'rolesInfo');
        const rolesInfoOptions = this.options(options, 'rolesInfo');
        return fn(rolesInfoOptions);
    
    }

    async updateRole(options = {name: 'new role', privileges: [], roles: [], authenticationRestrictions: [], writeConcern: {}, comment: ''}, fns = () => {}) {

        const fn = dbMethod(this)('command', fns, false,  'updateRole');
        const updateRoleOptions = this.options(options, 'updateRole');
        return fn(updateRoleOptions);
    
    }






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