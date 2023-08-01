class CollectionMethods {

    async aggregate(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'aggregate' operation flag
        const fn = collectionMethod(this)('aggregate', fns, false, 'aggregate');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async bulkWrite(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'bulkWrite' operation flag
        const fn = collectionMethod(this)('bulkWrite', fns, false, 'bulkWrite');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async count(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'count' operation flag
        const fn = collectionMethod(this)('count', fns, false, 'count');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async countDocuments(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'countDocuments' operation flag
        const fn = collectionMethod(this)('countDocuments', fns, false, 'countDocuments');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async deleteMany(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'deleteMany' operation flag
        const fn = collectionMethod(this)('deleteMany', fns, false, 'deleteMany');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async deleteOne(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'deleteOne' operation flag
        const fn = collectionMethod(this)('deleteOne', fns, false, 'deleteOne');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async distinct(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'distinct' operation flag
        const fn = collectionMethod(this)('distinct', fns, false, 'distinct');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async estimatedDocumentCount(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'estimatedDocumentCount' operation flag
        const fn = collectionMethod(this)('estimatedDocumentCount', fns, false, 'estimatedDocumentCount');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async find(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'find' operation flag
        const fn = collectionMethod(this)('find', fns, false, 'find');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async findAndModify(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'findAndModify' operation flag
        const fn = collectionMethod(this)('findAndModify', fns, false, 'findAndModify');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async findOne(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'findOne' operation flag
        const fn = collectionMethod(this)('findOne', fns, false, 'findOne');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async renameCollection(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'renameCollection' operation flag
        const fn = collectionMethod(this)('renameCollection', fns, false, 'renameCollection');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async findOneAndDelete(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'findOneAndDelete' operation flag
        const fn = collectionMethod(this)('findOneAndDelete', fns, false, 'findOneAndDelete');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async findOneAndReplace(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'findOneAndReplace' operation flag
        const fn = collectionMethod(this)('findOneAndReplace', fns, false, 'findOneAndReplace');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async findOneAndUpdate(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'findOneAndUpdate' operation flag
        const fn = collectionMethod(this)('findOneAndUpdate', fns, false, 'findOneAndUpdate');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async insert(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'insert' operation flag
        const fn = collectionMethod(this)('insert', fns, false, 'insert');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async insertMany(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'insertMany' operation flag
        const fn = collectionMethod(this)('insertMany', fns, false, 'insertMany');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async insertOne(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'insertOne' operation flag
        const fn = collectionMethod(this)('insertOne', fns, false, 'insertOne');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async isCapped(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'isCapped' operation flag
        const fn = collectionMethod(this)('isCapped', fns, false, 'isCapped');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async remove(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'remove' operation flag
        const fn = collectionMethod(this)('remove', fns, false, 'remove');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async replaceOne(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'replaceOne' operation flag
        const fn = collectionMethod(this)('replaceOne', fns, false, 'replaceOne');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async update(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'update' operation flag
        const fn = collectionMethod(this)('update', fns, false, 'update');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async updateMany(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'updateMany' operation flag
        const fn = collectionMethod(this)('updateMany', fns, false, 'updateMany');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async updateOne(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'updateOne' operation flag
        const fn = collectionMethod(this)('updateOne', fns, false, 'updateOne');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async compactStructuredEncryptionData(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'compactStructuredEncryptionData' operation flag
        const fn = collectionMethod(this)('compactStructuredEncryptionData', fns, false, 'compactStructuredEncryptionData');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async convertToCapped(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'convertToCapped' operation flag
        const fn = collectionMethod(this)('convertToCapped', fns, false, 'convertToCapped');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async createIndexes(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'createIndexes' operation flag
        const fn = collectionMethod(this)('createIndexes', fns, false, 'createIndexes');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async createIndex(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'createIndex' operation flag
        const fn = collectionMethod(this)('createIndex', fns, false, 'createIndex');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async ensureIndex(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'ensureIndex' operation flag
        const fn = collectionMethod(this)('ensureIndex', fns, false, 'ensureIndex');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getIndexes(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getIndexes' operation flag
        const fn = collectionMethod(this)('getIndexes', fns, false, 'getIndexes');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getIndexSpecs(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getIndexSpecs' operation flag
        const fn = collectionMethod(this)('getIndexSpecs', fns, false, 'getIndexSpecs');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getIndices(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getIndices' operation flag
        const fn = collectionMethod(this)('getIndices', fns, false, 'getIndices');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getIndexKeys(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getIndexKeys' operation flag
        const fn = collectionMethod(this)('getIndexKeys', fns, false, 'getIndexKeys');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async dropIndexes(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'dropIndexes' operation flag
        const fn = collectionMethod(this)('dropIndexes', fns, false, 'dropIndexes');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async dropIndex(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'dropIndex' operation flag
        const fn = collectionMethod(this)('dropIndex', fns, false, 'dropIndex');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async totalIndexSize(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'totalIndexSize' operation flag
        const fn = collectionMethod(this)('totalIndexSize', fns, false, 'totalIndexSize');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async reIndex(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'reIndex' operation flag
        const fn = collectionMethod(this)('reIndex', fns, false, 'reIndex');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getDB(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getDB' operation flag
        const fn = collectionMethod(this)('getDB', fns, false, 'getDB');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getMongo(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getMongo' operation flag
        const fn = collectionMethod(this)('getMongo', fns, false, 'getMongo');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async dataSize(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'dataSize' operation flag
        const fn = collectionMethod(this)('dataSize', fns, false, 'dataSize');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async storageSize(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'storageSize' operation flag
        const fn = collectionMethod(this)('storageSize', fns, false, 'storageSize');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async totalSize(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'totalSize' operation flag
        const fn = collectionMethod(this)('totalSize', fns, false, 'totalSize');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async drop(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'drop' operation flag
        const fn = collectionMethod(this)('drop', fns, false, 'drop');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async exists(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'exists' operation flag
        const fn = collectionMethod(this)('exists', fns, false, 'exists');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getFullName(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getFullName' operation flag
        const fn = collectionMethod(this)('getFullName', fns, false, 'getFullName');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getName(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getName' operation flag
        const fn = collectionMethod(this)('getName', fns, false, 'getName');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async runCommand(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'runCommand' operation flag
        const fn = collectionMethod(this)('runCommand', fns, false, 'runCommand');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async explain(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'explain' operation flag
        const fn = collectionMethod(this)('explain', fns, false, 'explain');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async stats(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'stats' operation flag
        const fn = collectionMethod(this)('stats', fns, false, 'stats');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async latencyStats(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'latencyStats' operation flag
        const fn = collectionMethod(this)('latencyStats', fns, false, 'latencyStats');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async initializeOrderedBulkOp(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'initializeOrderedBulkOp' operation flag
        const fn = collectionMethod(this)('initializeOrderedBulkOp', fns, false, 'initializeOrderedBulkOp');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async initializeUnorderedBulkOp(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'initializeUnorderedBulkOp' operation flag
        const fn = collectionMethod(this)('initializeUnorderedBulkOp', fns, false, 'initializeUnorderedBulkOp');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getPlanCache(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getPlanCache' operation flag
        const fn = collectionMethod(this)('getPlanCache', fns, false, 'getPlanCache');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
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
    async validate(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'validate' operation flag
        const fn = collectionMethod(this)('validate', fns, false, 'validate');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getShardVersion(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getShardVersion' operation flag
        const fn = collectionMethod(this)('getShardVersion', fns, false, 'getShardVersion');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getShardDistribution(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getShardDistribution' operation flag
        const fn = collectionMethod(this)('getShardDistribution', fns, false, 'getShardDistribution');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async watch(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'watch' operation flag
        const fn = collectionMethod(this)('watch', fns, false, 'watch');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async hideIndex(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'hideIndex' operation flag
        const fn = collectionMethod(this)('hideIndex', fns, false, 'hideIndex');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async unhideIndex(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'unhideIndex' operation flag
        const fn = collectionMethod(this)('unhideIndex', fns, false, 'unhideIndex');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async analyzeShardKey(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'analyzeShardKey' operation flag
        const fn = collectionMethod(this)('analyzeShardKey', fns, false, 'analyzeShardKey');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async configureQueryAnalyzer(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'configureQueryAnalyzer' operation flag
        const fn = collectionMethod(this)('configureQueryAnalyzer', fns, false, 'configureQueryAnalyzer');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async checkMetadataConsistency(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'checkMetadataConsistency' operation flag
        const fn = collectionMethod(this)('checkMetadataConsistency', fns, false, 'checkMetadataConsistency');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async getSearchIndexes(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'getSearchIndexes' operation flag
        const fn = collectionMethod(this)('getSearchIndexes', fns, false, 'getSearchIndexes');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async createSearchIndex(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'createSearchIndex' operation flag
        const fn = collectionMethod(this)('createSearchIndex', fns, false, 'createSearchIndex');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async createSearchIndexes(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'createSearchIndexes' operation flag
        const fn = collectionMethod(this)('createSearchIndexes', fns, false, 'createSearchIndexes');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async dropSearchIndex(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'dropSearchIndex' operation flag
        const fn = collectionMethod(this)('dropSearchIndex', fns, false, 'dropSearchIndex');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
    async updateSearchIndex(query = {}, options = {}, fns = () => { }) {
        // Check if the query is provided and is an object
        if (query && !isObject(query)) return 'Invalid query';

        // Check if the options are provided and are an object
        if (options && !isObject(options)) return 'Invalid options';

        // Obtain the collectionMethod  function with the current context (this) and the 'updateSearchIndex' operation flag
        const fn = collectionMethod(this)('updateSearchIndex', fns, false, 'updateSearchIndex');

        // Invoke the obtained function passing the query and options, and return the result
        return fn(query, options);
    }
}