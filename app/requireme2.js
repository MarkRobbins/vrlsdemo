/**
 * Created by Administrator on 1/14/2016.
 */

(function(){
  var root=this;
  var requireme2={
    me:function(){
      var x='me2';
      return x;
    }
  };
  var SELF=requireme2;
  var PACKAGE='requireme2';
  if (typeof Package !== 'undefined') {
    // Meteor
  } else if (typeof define !== 'undefined' && define.amd) { // AMD / RequireJS
    define([], function () {return SELF;});
  } else if (typeof module !== 'undefined' && module.exports) { // Node.js
    module.exports = SELF;
  } else { // included directly via <script> tag
    root[PACKAGE] = SELF;
  }
}());

// define([],function(){
//    return {
//      me:function(){
//        var x='me2';
//        return x;
//      }
//    }
// });
