require('./modules/dotenv').config();

const Admin = require('./modules/admin');

const Model  = require('./')
const model = new Model({collection:'users'})
// Admin(model).listDatabases().then(console.log).catch(console.error)

const DB  = require('./modules/db');

const db = new DB({collection:'users'});

db.administrator().listDatabases().then(console.log).catch(console.error)