#!/usr/bin/env node

"use strict";

/**
 * Author
 *  @name Ericson S. Weah  
 *  @email afrosintech@gmail.com
 *  @website https://www.afrosintech.com
 *  @github https://github.com/afrosintech
 *  @gitlab https://gitlab.com/afrosintech
 *  @npm https://www.npmjs.com/~afrosintech
 *  @phone +1.385.204.5167
 *
 * @module CLI
 * @kind class
 *
 * @extends Base
 * @requires Base
 *
 * @classdesc CLI class
 */


const Model  = require('../../../../')
const couleurs = require('../../../couleurs')()
class ModelCLI extends require("../../CLI") {

  constructor(...arrayOfObjects) {

    super({
        input: process.stdin,
        output: process.stdout,
        prompt: ``,
        historySize: 1000,
        crlfDelay: Infinity,
        removeHistoryDuplicates: false,
        escapeCodeTimeout: 500,
    });

    arrayOfObjects.forEach(option => {
      if (Object.keys(option).length > 0) {
        Object.keys(option).forEach((key) => { if (!this[key]) this[key] = option[key]; })
      }
    });

    // auto bind methods
    this.autobind(ModelCLI);
    // auto invoke methods
    this.autoinvoker(ModelCLI);
    // add other classes method if methods do not already exist. Argument order matters!
    // this.methodizer(..classList);
    //Set the maximum number of listeners to infinity
    this.setMaxListeners(Infinity);
  }

    topEventList(){
        return [
            'man',
            'help',
            '?',
            'make:model',
            'make:schema',
            'make:migration',
            'migrate',
            'collection'
        ]
    }
    texAligner(...args) {
        let options = {
            pad: 75,
            position: process.stdout.columns,
            hline: false,
            keyColor: "36",
            valueColor: "33",
        };
        if (args.length > 1) {
            if (typeof args[0] === "object") {
                for (let prop in args[0]) {
                    if (options.hasOwnProperty(prop)) {
                        options[prop] = args[0][prop];
                    }
                }
            }
        }

        let i = args.length > 1 ? 1 : 0;

        for (; i < args.length; i++) {
            if (typeof args[i] === "object") {
                for (let prop in args[i]) {
                    let key = `\x1b[${options.keyColor}m${prop}\x1b[0m`;
                    let value = `\x1b[${options.valueColor}m${args[i][prop]}\x1b[0m`;
                    let padding = options.pad - key.length;

                    for (let i = 0; i < padding; i++) {
                        key += " ";
                    }
                    key += value;
                    options.hline === true
                        ? hline(1, options.position, key)
                        : console.log(key);
                }
            } else {
                let key = `\x1b[36mKey\x1b[0m`;
                let value = `\x1b[33m${args[i]}\x1b[0m`;
                let padding = options.pad - key.length;

                for (let i = 0; i < padding; i++) {
                    key += " ";
                }
                key += value;
                options.hline === true
                    ? hline(1, options.position, key)
                    : console.log(key);
            }
        }
    };

    defaultDisplay() {

        const commands = {
            '\x1b[36mman\x1b[0m': '                  model man page: [\x1b[36mman\x1b[0m] ',
            '\x1b[36m--help\x1b[0m or \x1b[36m-h\x1b[0m': '         Help: [\x1b[36m--help\x1b[0m|\x1b[36m-h\x1b[0m\x1b[0m\x1b[0m]',
            '\x1b[36mmake:model\x1b[0m': '           Make model: [\x1b[36mmake:model\x1b[0m\x1b[0m\x1b[0m] model_name',
            '\x1b[36mmake:migration\x1b[0m': '       Make migration: [\x1b[36mmake:migration\x1b[0m\x1b[0m] migration_name',
            '\x1b[36mmake:schema\x1b[0m': '          Make schema: [\x1b[36mmake:schema\x1b[0m\x1b[0m\x1b[0m] schema_name',
            '\x1b[36mmigrate\x1b[0m ': '             Migrate: [\x1b[36m--schema=\x1b[0m|\x1b[36m-s\x1b[0m]schema_name'

        }

        // let clean = string.split(' ').filter(str => str !== '').join(' ')


       // if (string === 'man' || string === ' -h' || string === '--help' || string === 'help') {
            console.clear()
            const centered = `\x1b[36mNAME\x1b[0m
\x1b[36mmodel\x1b[0m - Model and an model's methods details 

\x1b[36mSYPNOSIS\x1b[0m
\x1b[36mmodel\x1b[0m [\x1b[36mman\x1b[0m|\x1b[36m--help\x1b[0m|\x1b[36m-h\x1b[0m|\x1b[36mhelp\x1b[0m]
\x1b[36mmodel\x1b[0m [\x1b[36mmake:model\x1b[0m\x1b[0m\x1b[0m\x1b[0m\x1b[0m] model_name
\x1b[36mmodel\x1b[0m [\x1b[36mmake:schema\x1b[0m\x1b[0m] schema_name
\x1b[36mmodel\x1b[0m [\x1b[36mmake:migration\x1b[0m|\x1b[36m--migration=\x1b[0m\x1b[0m\x1b[0m\x1b[0m] migration_name \x1b[0m
\x1b[36mmodel\x1b[0m [\x1b[36mmigrate\x1b[0m|\x1b[36m--schema=\x1b[0m\x1b[0m] schema_name


\x1b[36mDESCRIPTION\x1b[0m
Model (short for MongoDB Model) is a versatile and efficient tool for interacting with a 
MongoDB database and facilitating internal or external API calls. It is important to note
that Model is not an ORM (Object-Relational Mapping) but rather a wrapper for the native 
MongoDB Node.js driver. By doing so, it simplifies the usage of the MongoDB native Node.js 
driver and alleviates common complexities associated with it, as well as with Mongoose.js.

Model operates as a duplex stream, specifically utilizing the Node.js native transform stream.
This allows it to harness the full power of the MongoDB native Node.js driver and the native
Node.js transform stream API. Put simply, any operation achievable with the native MongoDB 
Node.js driver and the native Node.js transform API can also be accomplished using Model.

An inherent strength of Model lies in its highly event-driven nature. It seamlessly integrates
with Mongoose.js, ensuring compatibility and enhancing its capabilities.

In summary, Model provides a straightforward yet powerful means of interacting with MongoDB databases,
making API calls, and working with data streams. It simplifies the usage of the native MongoDB Node.js
driver and the Node.js transform stream API, while being fully compatible with Mongoose.js.
`
            //this.horizontalLine()
            this.centered(`\x1b[32mMODEL COMMANDS AND USAGE MANUAL\x1b[0m`)
            //this.horizontalLine()
            this.description(centered)
            //this.horizontalLine()
            this.verticalSpace(2)

            const options = { pad: 13, position: process.stdout.columns, hline: false, keyColor: '36', valueColor: '37' }
            this.textAligner(options, commands)
            console.log()
        //}
    }
     mainCommand(){
        this.on('model', string => {
            this.setPrompt( `${couleurs.FgMagenta('[model: ')}`);
            // return console.log(string)
            if(!this.command(string, 1) || this.command(string, 1).trim().length === 0) return this.defaultDisplay()
            if(!this.topEventList().includes(this.command(string, 1))){
                return console.log(couleurs.Red(`  '${this.command(string, 1)}' is not valid command or command option`))
            }
            if(this.command(string, 1)){
                // const User = new Model({collection: 'users'})
                // console.log(User)     
                switch (this.command(string, 1)) {
                    case "collection":
                        if(this.command(string, 2)){
                            // console.log(`${this.command(string, 1)} ${this.command(string, 2)}`)
                            const UserModel = new Model({collection: `${this.command(string, 2)}`})
                            
                            if(this.command(string, 3)){
                                switch (this.command(string, 3)) {
                                    case 'create': 
                                        console.log('create')
                                        if(this.command(string, 4)){

                                            console.log(this.command(string, 4))
                                            // if(typeof this.command(string, 4) == 'string'){
                                            //     console.log(JSON.parse(this.command(string, 4)))
                                            // }
                                        }else{
                                            console.log('nothing')
                                        }
                                        break;
                                    default:
                                        console.log(`Creating ${this.command(string,3)}`)
                                        break
                                }
                            }else{

                            }
                        }else{

                        }
                      break;
                    default:
                        console.log(Red(`  '${this.command(string, 1)}' is not valid command or command option`))
                      break;
                  }       
            }else{

            }

        })
     }

     
       /**
         * Returns an array of method names that should be automatically invoked by the `autoinvoker` method.
         * Modify this method to specify the method names to be autoinvoked.
         *
         * @returns {Array} - An array of method names.
         */
    
       autoinvoked() {
        return ["init", "common", "invalidCommand", "login", 'mainCommand'];
    }
}


module.exports = ModelCLI;

const cli = new ModelCLI();