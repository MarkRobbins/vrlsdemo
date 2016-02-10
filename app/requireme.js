/**
 * Created by Administrator on 1/14/2016.
 */

(function(){
  var root=this;
  var requireme={
    me:function(){
      var x='me';
      return 'me';
    }
  };
  var SELF=requireme;
  var PACKAGE='requireme';
  if (typeof Package !== 'undefined') {
    // Meteor
  } else if (typeof define !== 'undefined' && define.amd) { // AMD / RequireJS && define.amd
    console.log('DEFINE');
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
//        var x='me';
//        return 'me';
//      }
//    }
// });
