#!/usr/bin/env node

"use strict";

/**
 * @author Ericson S. Weah  <ericson.weah@gmail.com> <https://github.com/eweah>  <+1.385.204.5167>
 *
 * @module CLI
 * @kind class
 *
 * @extends Base
 * @requires Base
 *
 * @classdesc CLI class
 */

const Method = require("../");
const Model = require('../../..')

const { Green, BgBlue, Blue, Cyan, Purple, Red} = require('../../couleurs')();
class CLI extends require("../../base") {
  constructor(...arrayOfObjects) {
    super({ objectMode: true, encoding: "utf-8", autoDestroy: true });

    arrayOfObjects.forEach((option) => {
      if (Object.keys(option).length > 0) {
        Object.keys(option).forEach((key) => {
          if (!this[key]) this[key] = option[key];
        });
      }
    });

    // auto bind methods
    this.autobind(CLI);
    // auto invoke methods
    this.autoinvoker(CLI);
    // add other classes method if methods do not already exist. Argument order matters!
    // this.methodizer(..classList);
    //Set the maximum number of listeners to infinity
    this.setMaxListeners(Infinity);
  }

  command(index = 2) {
    return process.argv[index];
  }

  findMethod (method = 'method', ClassName) {
    return Reflect.has(ClassName.prototype, method) ? Reflect.get(ClassName.prototype, method).toString(): undefined
  } 
  colorMethodMethodBodyString (methodString, inputMethod) {
    let methodBodyIndex = methodString.indexOf(inputMethod) 
     let methodBodyString = '';
     let dotCount = 0;
     for(let i = methodBodyIndex; i < methodString.length; i++){
         methodBodyString += methodString[i];
         if(methodString[i] === '.') {
            dotCount++
         }
         if(dotCount >= 3) break;
     }
     return methodBodyString;
}
findCommentLines(functionString) {
  const commentPattern = /\/\/.*|\/\*[\s\S]*?\*\//g;
  return functionString.match(commentPattern) || [];
}

findInputMethod (method) {return this.findMethod(method, Model);}



getCommentColoringFunction(method){

  try {
    const string = this.findInputMethod(method)
    const comments = this.findCommentLines(string)
  
    let functionString = ''
  
    for(let i = 0; i < comments.length; i++){
        if(functionString.length == 0){
            functionString = string.replace(comments[i],Green(comments[i]))
        }else{
            functionString = functionString.replace(comments[i],Green(comments[i]))
        }
    }
  
   functionString = functionString.trim().length > 0 ? functionString:  string ;
  
   const countCode = this.colorMethodMethodBodyString(string, '(')
  
   const countName = string.split(countCode).filter(el => el.trim().length > 0).join(' ')
  
   if(countName.split(' ').length  == 2){
    if(countName.split(' ')[1] && countName.split(' ')[1].trim().length !== 0){
        functionString = functionString.replace(countName.split(' ')[1], Blue(countName.split(' ')[1]))
    }
    if(countName.split(' ')[0] && countName.split(' ')[0].trim().length !== 0){
        functionString = functionString.replace(countName.split(' ')[0], Purple(countName.split(' ')[0]))
    }
   }else{
    if(countName.split(' ')[0] && countName.split(' ')[0].trim().length !== 0){
        functionString = functionString.replace(countName.split(' ')[0], Blue(countName.split(' ')[0]))
    }
   }
  
  
    return ` 
  ===================== model ${Blue(countName.split(' ')[1])} method ===================
  
${functionString}
  
  `
  }catch (e) {
    return Red(`method named '${this.command(3)}' does not exist.`)
  }


}

methodList(className, string = false)  {

  for (let method of Object.getOwnPropertyNames(className.prototype)) {
      if (className.prototype[method]) {
        if (typeof className.prototype[method] === "function") {
           if(string){
              console.log(this.getCommentColoringFunction(method))
           }else{
              console.log(className.prototype[method])
           }
        }
      }
    }
}

  // default(){
    
  //   this.findMethod('count', Model)
  // }
  default(){

    if(!this.command(2)){
      return new Method({command: this.command(2)}).method();
    }else{
      if(this.command(2).startsWith('--name=')){
        if(this.command(2).split('=')[0] === '--name'){
         if(this.command(3) === '--info'){
           return new Method({ command: this.command(2).split('=')[1] }).info(this.command(3));
         }else if(this.command(3) === '-i'){
           return new Method({ command: this.command(2).split('=')[1] }).i(this.command(3));
         }else{
           return console.log('invalid option!')
         }
        }else{
         return console.log('invalid command')
        }
     }else{
       return console.log('invalid command')
     }
    }
    
    
  }
  n(){
    if (this.command(3)) {
      if (this.command(4)) {
        switch (this.command(4)) {
          case "-i":
            new Method({ command: this.command(3) }).i(this.command(4));
            break;
          case "--info":
            new Method({ command: this.command(3) }).info(this.command(4));
            break;
          default:
            console.log(this.command(4), "is not a valid option");
            break;
        }
      } else {
        new Method({ command: this.command(2) }).n(this.command(4));
      }
    } else {
      new Method({ command: this.command(2) }).n();
    }
  }
  name(){
    if (this.command(3)) {
      if (this.command(4)) {
        switch (this.command(4)) {
          case "-i":
            new Method({ command: this.command(3) }).i(this.command(4));
            break;
          case "--info":
            new Method({ command: this.command(3) }).info(this.command(4));
            break;
          default:
            console.log(this.command(4), "is not a valid option");
            break;
        }
      } else {
        new Method({ command: this.command(2) }).n(this.command(4));
      }
    } else {
      new Method({ command: this.command(2) }).n();
    }
  }
  commands() {
    switch (this.command(2)) {
      case "--list":
        new Method({ command: this.command(2) }).list();
        break;
      case "man":
        console.log("make man page");
        break;
      case "-n":
        // this.n()
        console.log(this.getCommentColoringFunction(this.command(3)))
        break;
      case "--name":
       //this.name()
       console.log(this.getCommentColoringFunction(this.command(3)))
        break;
      case "help":
        console.log("help man page");
        break;
      default:
        this.default()
        break;
    }
  }

  init() {
    this.commands();
  }
  /**
   * @name autoinvoked
   * @function
   *
   * @param {Object|Function|Class} className the class whose methods to be bound to it
   *
   * @description auto sets the list of methods to be auto invoked
   *
   * @return does not return anything
   *
   */

  autoinvoked() {
    return ["init"];
  }
}

module.exports = new CLI();
