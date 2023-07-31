class DatabaseMethods {
         
    async getMongo(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getMongo');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getMongoOptions = this.options(options, 'getMongo', 'collection');
   return fn(getMongoOptions);
}
async getName(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getName');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getNameOptions = this.options(options, 'getName', 'collection');
   return fn(getNameOptions);
}
async getCollectionNames(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getCollectionNames');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getCollectionNamesOptions = this.options(options, 'getCollectionNames', 'collection');
   return fn(getCollectionNamesOptions);
}
async getCollectionInfos(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getCollectionInfos');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getCollectionInfosOptions = this.options(options, 'getCollectionInfos', 'collection');
   return fn(getCollectionInfosOptions);
}

async runCommand(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'runCommand');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const runCommandOptions = this.options(options, 'runCommand', 'collection');
   
   return fn(runCommandOptions);
}



async adminCommand(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'adminCommand');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const adminCommandOptions = this.options(options, 'adminCommand', 'collection');
   return fn(adminCommandOptions);
}
async aggregate(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'aggregate');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const aggregateOptions = this.options(options, 'aggregate', 'collection');
   return fn(aggregateOptions);
}
async getSiblingDB(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getSiblingDB');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getSiblingDBOptions = this.options(options, 'getSiblingDB', 'collection');
   return fn(getSiblingDBOptions);
}
async getCollection(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getCollection');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getCollectionOptions = this.options(options, 'getCollection', 'collection');
   return fn(getCollectionOptions);
}
async dropDatabase(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'dropDatabase');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const dropDatabaseOptions = this.options(options, 'dropDatabase', 'collection');
   return fn(dropDatabaseOptions);
}
async createUser(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'createUser');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const createUserOptions = this.options(options, 'createUser', 'collection');
   return fn(createUserOptions);
}
async updateUser(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'updateUser');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const updateUserOptions = this.options(options, 'updateUser', 'collection');
   return fn(updateUserOptions);
}
async changeUserPassword(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'changeUserPassword');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const changeUserPasswordOptions = this.options(options, 'changeUserPassword', 'collection');
   return fn(changeUserPasswordOptions);
}
async logout(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'logout');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const logoutOptions = this.options(options, 'logout', 'collection');
   return fn(logoutOptions);
}
async dropUser(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'dropUser');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const dropUserOptions = this.options(options, 'dropUser', 'collection');
   return fn(dropUserOptions);
}
async dropAllUsers(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'dropAllUsers');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const dropAllUsersOptions = this.options(options, 'dropAllUsers', 'collection');
   return fn(dropAllUsersOptions);
}
async auth(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'auth');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const authOptions = this.options(options, 'auth', 'collection');
   return fn(authOptions);
}
async grantRolesToUser(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'grantRolesToUser');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const grantRolesToUserOptions = this.options(options, 'grantRolesToUser', 'collection');
   return fn(grantRolesToUserOptions);
}
async revokeRolesFromUser(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'revokeRolesFromUser');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const revokeRolesFromUserOptions = this.options(options, 'revokeRolesFromUser', 'collection');
   return fn(revokeRolesFromUserOptions);
}
async getUser(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getUser');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getUserOptions = this.options(options, 'getUser', 'collection');
   return fn(getUserOptions);
}
async getUsers(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getUsers');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getUsersOptions = this.options(options, 'getUsers', 'collection');
   return fn(getUsersOptions);
}
async createCollection(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'createCollection');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const createCollectionOptions = this.options(options, 'createCollection', 'collection');
   return fn(createCollectionOptions);
}
async createEncryptedCollection(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'createEncryptedCollection');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const createEncryptedCollectionOptions = this.options(options, 'createEncryptedCollection', 'collection');
   return fn(createEncryptedCollectionOptions);
}
async createView(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'createView');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const createViewOptions = this.options(options, 'createView', 'collection');
   return fn(createViewOptions);
}
async createRole(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'createRole');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const createRoleOptions = this.options(options, 'createRole', 'collection');
   return fn(createRoleOptions);
}
async updateRole(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'updateRole');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const updateRoleOptions = this.options(options, 'updateRole', 'collection');
   return fn(updateRoleOptions);
}
async dropRole(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'dropRole');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const dropRoleOptions = this.options(options, 'dropRole', 'collection');
   return fn(dropRoleOptions);
}
async dropAllRoles(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'dropAllRoles');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const dropAllRolesOptions = this.options(options, 'dropAllRoles', 'collection');
   return fn(dropAllRolesOptions);
}
async grantRolesToRole(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'grantRolesToRole');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const grantRolesToRoleOptions = this.options(options, 'grantRolesToRole', 'collection');
   return fn(grantRolesToRoleOptions);
}
async revokeRolesFromRole(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'revokeRolesFromRole');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const revokeRolesFromRoleOptions = this.options(options, 'revokeRolesFromRole', 'collection');
   return fn(revokeRolesFromRoleOptions);
}
async grantPrivilegesToRole(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'grantPrivilegesToRole');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const grantPrivilegesToRoleOptions = this.options(options, 'grantPrivilegesToRole', 'collection');
   return fn(grantPrivilegesToRoleOptions);
}
async revokePrivilegesFromRole(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'revokePrivilegesFromRole');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const revokePrivilegesFromRoleOptions = this.options(options, 'revokePrivilegesFromRole', 'collection');
   return fn(revokePrivilegesFromRoleOptions);
}
async getRole(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getRole');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getRoleOptions = this.options(options, 'getRole', 'collection');
   return fn(getRoleOptions);
}
async getRoles(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getRoles');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getRolesOptions = this.options(options, 'getRoles', 'collection');
   return fn(getRolesOptions);
}
async currentOp(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'currentOp');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const currentOpOptions = this.options(options, 'currentOp', 'collection');
   return fn(currentOpOptions);
}
async killOp(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'killOp');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const killOpOptions = this.options(options, 'killOp', 'collection');
   return fn(killOpOptions);
}
async shutdownServer(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'shutdownServer');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const shutdownServerOptions = this.options(options, 'shutdownServer', 'collection');
   return fn(shutdownServerOptions);
}
async fsyncLock(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'fsyncLock');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const fsyncLockOptions = this.options(options, 'fsyncLock', 'collection');
   return fn(fsyncLockOptions);
}
async fsyncUnlock(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'fsyncUnlock');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const fsyncUnlockOptions = this.options(options, 'fsyncUnlock', 'collection');
   return fn(fsyncUnlockOptions);
}
async version(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'version');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const versionOptions = this.options(options, 'version', 'collection');
   return fn(versionOptions);
}
async serverBits(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'serverBits');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const serverBitsOptions = this.options(options, 'serverBits', 'collection');
   return fn(serverBitsOptions);
}
async isMaster(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'isMaster');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const isMasterOptions = this.options(options, 'isMaster', 'collection');
   return fn(isMasterOptions);
}
async hello(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'hello');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const helloOptions = this.options(options, 'hello', 'collection');
   return fn(helloOptions);
}
async serverBuildInfo(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'serverBuildInfo');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const serverBuildInfoOptions = this.options(options, 'serverBuildInfo', 'collection');
   return fn(serverBuildInfoOptions);
}
async serverStatus(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'serverStatus');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const serverStatusOptions = this.options(options, 'serverStatus', 'collection');
   return fn(serverStatusOptions);
}
async stats(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'stats');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const statsOptions = this.options(options, 'stats', 'collection');
   return fn(statsOptions);
}
async hostInfo(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'hostInfo');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const hostInfoOptions = this.options(options, 'hostInfo', 'collection');
   return fn(hostInfoOptions);
}
async serverCmdLineOpts(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'serverCmdLineOpts');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const serverCmdLineOptsOptions = this.options(options, 'serverCmdLineOpts', 'collection');
   return fn(serverCmdLineOptsOptions);
}
async rotateCertificates(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'rotateCertificates');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const rotateCertificatesOptions = this.options(options, 'rotateCertificates', 'collection');
   return fn(rotateCertificatesOptions);
}
async printCollectionStats(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'printCollectionStats');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const printCollectionStatsOptions = this.options(options, 'printCollectionStats', 'collection');
   return fn(printCollectionStatsOptions);
}
async getFreeMonitoringStatus(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getFreeMonitoringStatus');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getFreeMonitoringStatusOptions = this.options(options, 'getFreeMonitoringStatus', 'collection');
   return fn(getFreeMonitoringStatusOptions);
}
async disableFreeMonitoring(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'disableFreeMonitoring');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const disableFreeMonitoringOptions = this.options(options, 'disableFreeMonitoring', 'collection');
   return fn(disableFreeMonitoringOptions);
}
async enableFreeMonitoring(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'enableFreeMonitoring');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const enableFreeMonitoringOptions = this.options(options, 'enableFreeMonitoring', 'collection');
   return fn(enableFreeMonitoringOptions);
}
async getProfilingStatus(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getProfilingStatus');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getProfilingStatusOptions = this.options(options, 'getProfilingStatus', 'collection');
   return fn(getProfilingStatusOptions);
}
async setProfilingLevel(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'setProfilingLevel');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const setProfilingLevelOptions = this.options(options, 'setProfilingLevel', 'collection');
   return fn(setProfilingLevelOptions);
}
async setLogLevel(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'setLogLevel');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const setLogLevelOptions = this.options(options, 'setLogLevel', 'collection');
   return fn(setLogLevelOptions);
}
async getLogComponents(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getLogComponents');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getLogComponentsOptions = this.options(options, 'getLogComponents', 'collection');
   return fn(getLogComponentsOptions);
}
async cloneDatabase(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'cloneDatabase');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const cloneDatabaseOptions = this.options(options, 'cloneDatabase', 'collection');
   return fn(cloneDatabaseOptions);
}
async cloneCollection(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'cloneCollection');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const cloneCollectionOptions = this.options(options, 'cloneCollection', 'collection');
   return fn(cloneCollectionOptions);
}
async copyDatabase(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'copyDatabase');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const copyDatabaseOptions = this.options(options, 'copyDatabase', 'collection');
   return fn(copyDatabaseOptions);
}
async commandHelp(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'commandHelp');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const commandHelpOptions = this.options(options, 'commandHelp', 'collection');
   return fn(commandHelpOptions);
}
async listCommands(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'listCommands');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const listCommandsOptions = this.options(options, 'listCommands', 'collection');
   return fn(listCommandsOptions);
}
async getLastErrorObj(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getLastErrorObj');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getLastErrorObjOptions = this.options(options, 'getLastErrorObj', 'collection');
   return fn(getLastErrorObjOptions);
}
async getLastError(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getLastError');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getLastErrorOptions = this.options(options, 'getLastError', 'collection');
   return fn(getLastErrorOptions);
}
async printShardingStatus(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'printShardingStatus');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const printShardingStatusOptions = this.options(options, 'printShardingStatus', 'collection');
   return fn(printShardingStatusOptions);
}
async printSecondaryReplicationInfo(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'printSecondaryReplicationInfo');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const printSecondaryReplicationInfoOptions = this.options(options, 'printSecondaryReplicationInfo', 'collection');
   return fn(printSecondaryReplicationInfoOptions);
}
async getReplicationInfo(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'getReplicationInfo');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const getReplicationInfoOptions = this.options(options, 'getReplicationInfo', 'collection');
   return fn(getReplicationInfoOptions);
}
async printReplicationInfo(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'printReplicationInfo');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const printReplicationInfoOptions = this.options(options, 'printReplicationInfo', 'collection');
   return fn(printReplicationInfoOptions);
}
async printSlaveReplicationInfo(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'printSlaveReplicationInfo');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const printSlaveReplicationInfoOptions = this.options(options, 'printSlaveReplicationInfo', 'collection');
   return fn(printSlaveReplicationInfoOptions);
}
async setSecondaryOk(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'setSecondaryOk');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const setSecondaryOkOptions = this.options(options, 'setSecondaryOk', 'collection');
   return fn(setSecondaryOkOptions);
}
async watch(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'watch');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const watchOptions = this.options(options, 'watch', 'collection');
   return fn(watchOptions);
}
async sql(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'sql');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const sqlOptions = this.options(options, 'sql', 'collection');
   return fn(sqlOptions);
}
async checkMetadataConsistency(options = {collection: 'users', query: {},limit: 1, skip: 1, hint: '' | {}, readConcern: {},collation: {},comment: ''}, fns = ()=> {}) {

   const fn = dbMethod(this)('command', fns, false,  'checkMetadataConsistency');

   // Check if the options are provided and are an object
   if (options && !isObject(options)) return 'Invalid options';

   const checkMetadataConsistencyOptions = this.options(options, 'checkMetadataConsistency', 'collection');
   return fn(checkMetadataConsistencyOptions);
}
}