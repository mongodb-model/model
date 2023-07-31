class Methods {
    async count(options = { collection: this.collection, query: {}, limit: 1, skip: 1, hint: '' | {}, readConcern: {}, collation: {}, comment: '' }, fns = () => { })
    async buildInfo(options = {}, fns = () => { })
    async listDatabases(options = { listDatabases: 1 }, fns = () => {})
    async serverInfo(options = { serverInfo: 1 }, fns = () => {})
    async ping(options = { ping: 1 }, fns = () => { })
    async serverStatus(options = { serverStatus: 1 }, fns = () => {})
    async aggregate(options = { collection: 1, pipeline: [], explain: true, allowDiskUse: true, cursor: {}, maxTimeMS: 0, bypassDocumentValidation: true, readConcern: {}, collation: {}, hint: {} | '', comment: '', writeConcern: {}, let: {} }, fns = () => {})
}