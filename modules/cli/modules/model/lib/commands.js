'use strict';
const cmd = require('../../cmd')();
const cmdText = require('./cmdText')()
const couleurs = require('../../../../couleurs')();
const Man = require('../../../../man');
const Schema = require("../../../../schema");
const Migration = require("../../../../db-migration");
const Migrate = require("../../../../db-migrate");
const Model = require('../../../../../lib/command/cli');
const {ModelCommand} = require('../../../../../lib')().Commands();

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

   
    const man = (string = 'model') => new Man({ command: cmd.command(string, 1) }).man("man");
    const manCommand = (string ='model') => (index = 1) => (method = 'man') => (argument = 'man') => new Man({ command: cmd.command(string, index) })[method](argument); 
    const make = (string = 'model') => (index  = 2) =>  new Model({ command: cmd.command(string, index) }).make(cmd.command(string, index));
    const error  = (command = '') => (message = 'error') =>  console.log(couleurs.FgRed(`'${command}' ${message}`));

    // const  {makeSchema, hasType} =  new Schema({command: this.command(2)})
    const makeSchema = (string = '') => (index = '2') => new Schema({command: cmd.command(string, index)}).makeSchema
    // const hasType = (string = '') => (index = '2') => new Schema({command: cmd.command(string, index)}).hasType



    const schema = string => {
        if (cmd.command(string, 2)) {
            if(cmd.command(string, 2).startsWith('--schema=')){
                makeSchema(string)(2)(cmd.command(string, 2), cmd.command(string, 3))
            }else{
                switch (cmd.command(string, 2)) {
                    case '--schema':
                        cmd.command(string, 3) ? 
                            makeSchema(string)(3)(cmd.command(string, 3), cmd.command(string, 4)) : 
                            error('make:schema')('command requires a valid argument');
                        break;
                    case '-s':
                        cmd.command(string, 3) ? 
                        makeSchema(string)(3)(cmd.command(string, 3), cmd.command(string, 4)) : 
                        error('make:schema')('command requires a valid argument');
                        break;
                    default:
                        error('make:schema')('command requires a valid argument')
                        break;
                }
            }
           
        } else {
            error('make:schema')('command requires an argument')
        }
    }
    const migration = string => {
        if (cmd.command(string, 2)) {
            const  {makeMigration, hasType} =  new Migration({command: cmd.command(string, 2)})
            if(cmd.command(string, 2).startsWith('--schema=')){
              makeMigration(cmd.command(string, 2), cmd.command(string, 3));
            }else{
                switch (cmd.command(string, 2)) {
                    case '--schema':
                        cmd.command(string, 3) ? 
                        makeMigration(cmd.command(string, 3), cmd.command(string, 4)): 
                        error('make:migration')('command requires a valid argument')
                        break;
                    case '-s':
                        cmd.command(string, 3) ? 
                        makeMigration(cmd.command(string, 3), cmd.command(string, 4)): 
                        error('make:migration')('command requires a valid argument')
                        break;
                    default:
                        error('make:migration')('command requires a valid argument')
                        break;
                }
            }
            
        } else {
            error('make:migration')('command requires a valid argument')
        }
    }

    const method = string => {
        if (cmd.command(string, 2)) {
            switch (cmd.command(string, 2)) {
                case '--list':
                    console.log('model method --list')
                    break;
                case '-l':
                    console.log('model method -l')
                    break;
                case '--name':
                    console.log('model method --name')
                    break;
                case '--name=':
                    console.log('model method --name=')
                    break;
                case '-n':
                    console.log('model method -n')
                    break;
                default:
                    console.log(couleurs.Red('invalid option for model method'))
                    break;
            }
        } else {
            console.log(couleurs.Red('model method requires an argument'))
        }
    }
   
    const switches = (string = 'model') => (Observable = {}) => {

        switch (cmd.command(string, 1)) {
            case 'man':
                man(string);
                break;
            case '--man':
                man(string);
                break;
            case '--help':
                man(string);
                break;
            case 'help':
                man(string);
                break;
            case '-h':
                man(string);
                break;
            case '?':
                man(string);
                break;
            case 'models':
                new ModelCommand().list();
                break;
            case 'make:model':
                cmd.command(string, 2) ? make(string)(2) : error('make:model')('command requires an argument: the name of the model to make!');
                break;
            case 'make:schema':
                schema(string)
                break;
            case 'make:migration':
                migration(string);
                break;
            case 'migrate':
                
                if(cmd.command(string, 2)){
                    const migrator = new Migrate({command: cmd.command(string, 2)})
                    if(cmd.command(string, 2).startsWith('--schema=')){
                        migrator.schemaMigration(cmd.command(string, 2))
                        migrator.migrationMigration(cmd.command(string, 2))
                    }else{
                        error('make:migration')('command requires a valid argument')
                        // switch (cmd.command(string, 2)) {
                        //     case '--schema':
                        //         if(cmd.command(string, 3)){
                        //             const migrator = new Migrate({command: cmd.command(string, 3)})
                        //             migrator.schemaMigration(cmd.command(string, 3))
                        //             migrator.migrationMigration(cmd.command(string, 3))
                        //         }else{
                        //             error('make:migration')('command requires a valid argument')
                        //         }
                              
                        //         break;
                        //     case '-s':
                        //         cmd.command(string, 3) ? 
                        //         makeMigration(cmd.command(string, 3), cmd.command(string, 4)): 
                        //         error('make:migration')('command requires a valid argument')
                        //         break;
                        //     default:
                        //         error('make:migration')('command requires a valid argument')
                        //         break;
                        // }
                    }
                }else{
                    const allMigrator = new Migrate({command: cmd.command(string, 2)})
                    allMigrator.migrateAll(cmd.command(string, 2))
                }
                break;
            
            case 'method':
                method(string);
                break;
            default:
                error('prompt error: ')(`invalid option for  ${Observable.getPrompt()}  prompt`);
                break
        }
    }

    const commands = (string = 'model') => (Observable = {}) => {

        Observable.setPrompt(`${couleurs.FgMagenta('[model: ')}`);

        if (!cmd.command(string, 1) || cmd.command(string, 1).trim().length === 0) return cmdText.manPage()

        if (Observable.getPrompt() == couleurs.FgMagenta('[model: ')) switches(string)(Observable);
        else console.log('No')
        
    }


    /*
    |----------------------------------------------------------------------------------
    | EXPORTS MODULE IN NODEJS ENVIRONMENTS
    |----------------------------------------------------------------------------------
    |
    | The module is exported using an if/else statement. If the module object is defined and
    | has an exports property, then the module is being used in Node.js and we export 
    | the commands object by assigning it to module.exports
    |
    |
    */

    if (typeof module !== 'undefined' && module.exports) module.exports = commands;

    /*
    |----------------------------------------------------------------------------------------
    | EXPORT MODULE IN BROWSER ENVIRONMENTS
    |----------------------------------------------------------------------------------------
    |
    | If module is not defined or does not have an exports property, then the module is being used
    | in the browser and we attach the myModule object to the global object (which is the window object
    | in the browser) by assigning it to global.commands.
    |
    */

    else global.commands = commands;
})(this)