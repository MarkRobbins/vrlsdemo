// var World = function (callback) {
// 	// set up code goes here
//   console.log('World');
//
// 	// last line to tell cucumber.js the World is ready.
// 	callback(this);
// };
//
// exports.World = World;

// 'use strict';
// var zombie = require('zombie');
// function WorldFactory(callback) {
//     this.browser = new zombie();
//   //console.log('zombie',this.browser);
//     var self = this;
//     this.world = {
//         browser: self.browser,
//         visit: function (url, callback) {
//             this.browser.visit(url, function () {
//                 callback();
//             });
//         }
//     };
// }
// exports.World = WorldFactory;


// module.exports = function() {
//   console.log('Begin user world setup',this.World);
//   this.World = function World(callback) {
//     console.log('Setup user world');
//     this.prop = "Hello from the World!";
//     this.greetings = function (name, callback) {
//       console.log("\n----Hello " + name);
//       callback();
//     };
//     callback();
//   }
// };