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


const Model = require('../../../../')
const couleurs = require('../../../couleurs')()

const cmd = require('../cmd')();
const tcpCmdText = require('./modules/tcp/lib/cmdText')()
const httpCmdText = require('./modules/http/lib/cmdText')()
const httpsCmdText = require('./modules/https/lib/cmdText')()
const playgroundCmdText = require('./modules/playground/lib/cmdText')()
const homeCmdText = require('./modules/home/lib/cmdText')()
const mainCommands = require('./lib/commands')
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
            completer: line => {
                const completions = ['help', 'list', 'create', 'delete', 'exit'];
                const hits = completions.filter((c) => c.startsWith(line));
                return [hits.length ? hits : completions, line];
            },
            terminal: true,
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

    topEventList() {
        return [
            'help',
            'model',
            "clear",
            "help",
            "exit",
            "quit",
            "leave",
            '?',
            'make:model',
            'make:schema',
            'make:migration',
            'migrate',
            'collection',
            'list',
            '--list',
            'tcp',
            'http',
            'https',
            'playground',
            'home',
            'model man'
        ]
    }

    cliOptions() {
        return {
            pad: 22,
            position: process.stdout.columns,
            hline: false,
            keyColor: "36",
            valueColor: "37",
        }
    }
    cmds() {
        return {
            "MODEL:": "\x1b[34mType \x1b[33mmodel\x1b[0m \x1b[34mfor\x1b[0m \x1b[34mthe main  \x1b[33mmodel man page (main commands)\x1b[0m\x1b[0m",
            "TCP:": "\x1b[34mType \x1b[33mtcp\x1b[0m \x1b[34mfor\x1b[0m \x1b[34mthe main  \x1b[33mtcp man page (main commands)\x1b[0m\x1b[0m",
            "HTTP:": "\x1b[34mType \x1b[33mhttp\x1b[0m \x1b[34mfor\x1b[0m \x1b[34mthe main  \x1b[33mhttp man page (main commands)\x1b[0m\x1b[0m",
            "HTTPS:": "\x1b[34mType \x1b[33mhttps\x1b[0m \x1b[34mfor\x1b[0m \x1b[34mthe main  \x1b[33mhttps man page (main commands)\x1b[0m\x1b[0m",
            "PLAYGROUND:": "\x1b[34mType \x1b[33mplayground\x1b[0m \x1b[34mfor\x1b[0m \x1b[34mthe main  \x1b[33mplayground man page (main commands)\x1b[0m\x1b[0m",
            "LOGOUT:": `\x1b[34mType \x1b[33mlogout\x1b[0m \x1b[34mfor logging out\x1b[0m`,
        }
    }

    main(string) {
        string =
            typeof string === "string" && string.trim().length > 0
                ? string.trim()
                : false;
        if (string) {
            let commandEvent = false;
            let event = this.topEventList().find(
                (event) =>
                    string.trim().toLowerCase().indexOf(event) > -1 &&
                    string.startsWith(event)
            );

            if (event) {
                commandEvent = true;

                this.emit(event, string);
                return true;
            }
            if (commandEvent === false) {
                this.removeDuplicateListeners("command-not-found");
                return this.emit("command-not-found", {
                    error: `'${string}' is not command`,
                });
            }
        } else {
            return;
        }
    }
    init() {
        this.setPrompt(`[\x1b[32mmongodb model: \x1b[0m`);
        console.clear();
        cmd.horizontalLine();

        cmd.centered("\x1b[34mMONGODB MODEL MAIN COMMAND LINE INTERFACE (CLI).\x1b[0m");
        cmd.horizontalLine();

        console.log("");

        cmd.textAligner(this.cliOptions(), this.cmds());
        cmd.verticalSpace();
        cmd.horizontalLine();
        cmd.verticalSpace();
        this.prompt();

        this.on("line", (string) => {

            this.main(string);
            this.prompt();


        })
            .on("pause", () => {
                console.log('waiting for you ....')
            })
            .on("resume", () => {
                console.log('resumed ....')
            })
            .on('SIGINT', () => {
                this.question('Are you sure you want to exit? y(es) or no ', (answer) => {
                    if (answer.match(/^y(es)?$/i)) this.close()
                })
            })
            .on("SIGCONT", () => {
                // `prompt` will automatically resume the stream
                this.prompt();
            })
            .on("SIGTSTP", () => {
                // This will override SIGTSTP and prevent the program from going to the
                // background.
                console.log('Caught SIGTSTP.')
            })
            .on("close", () => {
                console.log(
                    "\x1b[36m%s\x1b[0m",
                    "Goobye. Have a wonderful and lovely one!"
                );
                process.exit(0);
            });
    }

    mainCommand() {
        this.on('model', string => mainCommands(string)(this))
    }

    tcpCommand() {
        this.on('tcp', string => {
            this.setPrompt(`${couleurs.FgRed('[model:tcp: ')}`);

            if (!cmd.command(string, 1) || cmd.command(string, 1).trim().length === 0) return tcpCmdText.manPage()
            if (!this.topEventList().includes(cmd.command(string, 1))) {
                return console.log(couleurs.Red(`  '${cmd.command(string, 1)}' is not valid command or command option`))
            }

        })
    }

    httpCommand() {
        this.on('http', string => {
            this.setPrompt(`${couleurs.FgYellow('[model:http: ')}`);

            if (!cmd.command(string, 1) || cmd.command(string, 1).trim().length === 0) return httpCmdText.manPage()
            if (!this.topEventList().includes(cmd.command(string, 1))) {
                return console.log(couleurs.Red(`  '${cmd.command(string, 1)}' is not valid command or command option`))
            }
        })
    }

    httpsCommand() {
        this.on('https', string => {
            this.setPrompt(`${couleurs.FgWhite('[model:https: ')}`);

            if (!cmd.command(string, 1) || cmd.command(string, 1).trim().length === 0) return httpsCmdText.manPage()
            if (!this.topEventList().includes(cmd.command(string, 1))) {
                return console.log(couleurs.Red(`  '${cmd.command(string, 1)}' is not valid command or command option`))
            }
        })
    }

    playgroundCommand() {
        this.on('playground', string => {
            this.setPrompt(`${couleurs.FgGreen('[model:playground: ')}`);

            if (!cmd.command(string, 1) || cmd.command(string, 1).trim().length === 0) return playgroundCmdText.manPage()
            if (!this.topEventList().includes(cmd.command(string, 1))) {
                return console.log(couleurs.Red(`  '${cmd.command(string, 1)}' is not valid command or command option`))
            }
        })
    }

    home() {
        this.on('home', string => {
            this.setPrompt(`${couleurs.FgGreen('[model:home: ')}`);

            if (!cmd.command(string, 1) || cmd.command(string, 1).trim().length === 0) return homeCmdText.homePage(this)
            if (!this.topEventList().includes(cmd.command(string, 1))) {
                return console.log(couleurs.Red(`  '${cmd.command(string, 1)}' is not valid command or command option`))
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
        return ["init", "common", "invalidCommand", "mainCommand", "tcpCommand", "httpCommand", "httpsCommand", "playgroundCommand", "home"];
    }
}


module.exports = ModelCLI;

new ModelCLI();

