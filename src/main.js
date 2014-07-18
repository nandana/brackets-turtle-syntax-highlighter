/*jslint devel:true */

define(function (require, exports, module) {
    'use strict';
    var LanguageManager = brackets.getModule("language/LanguageManager");
    
    LanguageManager.defineLanguage("turtle", {
    	name: "Turtle",
    	mode: "turtle",
    	fileExtensions: [".ttl"],
    	lineComment: ["#"] 
    });
    console.log("Loaded the module");
});
