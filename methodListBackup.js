class MethodList {
    // The following functions are available on db, the DB instance, as methods.
// The majority of them, especially the ones with name very similar to the Mongodb native driver methods, are actually the corresponding 
// mongodb native driver methods. In other words, they take the exact same arguments as the corresponding  native mongodb driver methods with the addtional fns function: the optional callback function.


// Note that the callback function (fns) comes last (the last parameter or comes right after the second parameter )

async aggregate(pipeline = {}, options = {}, fns = () => {}){}
async bulkwrite(operations = [], options = {}, fns = () => {}) {}
async count(query = {}, options = {}, fns = () => {}) {}
async countDocuments(query = {}, options = {}, fns = () => {}) {}
async deleteOne(filter = {}, options = {}, fns = () => {}) {}
async deleteMany(filter = {}, options = {}, fns = () => {}) {}
async findOne(query = {}, options = {}, fns = () => {}){}
async findOneAndDelete( filter = {}, options = {},fns = () => {}) {}
async insertOne(document = {}, options = {}, fns = () => {}) {}
async insertMany(documents = [], options = {}, fns = () => {}) {}
async remove(query = {}, options = {}, fns = () => {}){}
async watch( pipeline = [], options = {},fns = () => {} ) {}
async validate(document = {full: true, repair: true},fns = () => {}){}

async findById(id="645b9cf776b7fb46975316d9", options = {},fns = () => {}){}
async findByEmail(email = 'ericson.weah@gmail.com', options = {},fns = () => {}){}
async findByToken(token="645b9cf776b7fb46975316d9", options = {},fns = () => {}){}
async findByPhone(phone = '2852045167', options = {},fns = () => {}){}
async findByUsername(username = 'username', options = {},fns = () => {}){}
async findByCode(code = 'FT', options = {},fns = () => {}){}
async findByFirstname(firstname='firstname', options = {},fns = () => {}){}
async findByLastname(lastname="lastname", options = {},fns = () => {}){}

async firstById(id="645b9cf776b7fb46975316d9", options = {},fns = () => {}){}
async firstByEmail(email = 'ericson.weah@gmail.com', options = {},fns = () => {}){}
async firstByToken(token="645b9cf776b7fb46975316d9", options = {},fns = () => {}){}
async firstByPhone(phone = '2852045167', options = {}, fns = () => {}){}
async firstByUsername(username = 'username', options = {}, fns = () => {}){}
async firstByCode(code = 'FT', options = {},fns = () => {}){}
async firstByFirstname(firstname='firstname', options = {}, fns = () => {}){}
async firstByLastname(lastname="lastname", options = {}, fns = () => {}){}


async find(query = {},projection = {}, fns = () => {}){}
async distinct(field = {}, query = {}, options = {}, fns = () => {}) {}
async update(query = {}, update = {}, options = {}, fns = () => {}){}
async updateById(id="645b9cf776b7fb46975316d9", update = {}, options = {}, fns = () => {}){}
async updateOne(query = {}, update = {},options = {}, fns = () => {}){}
async updateMany(query = {}, update = {},options = {}, fns = () => {}){}
async replaceOne(filter = {}, replacement = {},fns = () => {} options = {}){}
async findOneAndReplace( filter = {}, replacement = {}, options = {}, fns = () => {} ){}
async findOneAndUpdate( filter = {}, update = {}, options = {}, fns = () => {} ) {}

async createIndex(keys = {}, options = {}, commitQuorum = {},fns = () => {}){}
async createIndexes( keyPatterns = [], options = {}, commitQuorum = {},fns = () => {} ){}



async drop(options = {}, fns = () => {}) {}
async dropIndex(index = 'string' || {}, fns = () => {}) {}
async dropIndex(index = 'string' || {} || [], fns = () => {}) {}
async findAndModify(document = {},fns = () => {}){}
async hideIndex(index = 'string' || {}, fns = () => {}) {}
// async insert(document = {} || [], fns = () => {}){}
async insert(document = {}, options = {}, fns = () => {}) {}
async latencyStats(options = { histograms: true }, fns = () => {}){}
async unhideIndex(index = 'string' || {}, fns = () => {}){}
async stats(options = {scale: 1, indexDetails: true, indexDetailsKey: {}, indexDetailsName: 'name'}, fns = () => {}){}



async dataSize(fns = () => {}){}
async isCapped(fns = () => {}){}
async getIndexes(fns = () => {}){}
async getShardDistribution(fns = () => {}){}
async storageSize(fns = () => {}){}
async totalIndexSize(fns = () => {}){}
async totalSize(fns = () => {}){}
    /**
     * reIndex() may only be run on standalone instances.
      For most users, the reIndex() command is unnecessary.
     */
async reIndex(fns = () => {}){}



// Note that the optional callback function fns comes right after the first parameter
async lastById(id="645b9cf776b7fb46975316d9",fns = () => {}, options = { sort: {_id: -1}}){}
async lastByEmail(email = 'ericson.weah@gmail.com',fns = () => {}, options = { sort: {_id: -1}}){}
async lastByToken(token="645b9cf776b7fb46975316d9",fns = () => {}, options = { sort: {_id: -1}}){}
async lastByPhone(phone = '2852045167',fns = () => {}, options = { sort: {_id: -1}}){}
async lastByUsername(username = 'username',fns = () => {}, options = { sort: {_id: -1}}){}
async lastByCode(code = 'FT',fns = () => {}, options = { sort: {_id: -1}}){}
async lastByFirstname(firstname='firstname',fns = () => {}, options = { sort: {_id: -1}}){}
async lastByLastname(lastname="lastname",fns = () => {}, options = { sort: {_id: -1}}){}
async renameCollection(target = 'string',fns = () => {}, dropTarget = false){}

// Mores

async findAndSort(){}
async findAndSortDescending(){}
async findAndSortAscending(){}
async findFirstQuantity(){}
async findLastQuantity(){}
async findLastQuantityDescending(){}
async findLastQuantityAscending(){}
async findFirstQuantityDescending(){}
async findFirstQuantityAscending(){}

// Files 

}