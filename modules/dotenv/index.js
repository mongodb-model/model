"use strict";

/**
 *    @author Ericson Weah Dev  
 *    email: ericson.weah@ericsonweah.dev
 *    github: https://github.com/ericson-weah-dev
 *    phone: +1.385.204.5167
 *    Website: https://www.ericsonweah.dev
 *
 * @module DotEnv
 * @kind class
 *
 * @extends Base
 * @requires Base
 *
 * @classdesc Model class
 */

const {existsSync, readFileSync} = require('fs');
const {join} = require('path');
 /**
 * Represents a DotEnv class that extends the base class.
 */
class DotEnv extends require("../base") {
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
        this.autobind(DotEnv);

        // Auto invoke methods of the model
        this.autoinvoker(DotEnv);

        // Add methods from other classes if they do not already exist
        // Example: this.methodizer(...classList);

        // Set the maximum number of event listeners to infinity
        this.setMaxListeners(Infinity);
    }
    static config(){
        if(!existsSync(join(process.cwd(), '.env'))) return;
        try {
            for (let line of readFileSync(join(process.cwd(), '.env'), 'utf8').split('\n')){
                if(!process.env[line.split('=')[0]]){
                    process.env[`${line.split('=')[0]}`] = Array.from(line.split('=')[1]).filter(el => el !=="'" && el !==`"`).join('');
                } 
            }
        }catch(error){
            console.error('Error reading file:', error);
        }
    }
}

module.exports = DotEnv