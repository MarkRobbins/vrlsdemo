/**
 * Created by Administrator on 1/14/2016.
 */
(function(){
  var root=this;
  function dontrequire(){
    return 'dontrequire';
  }
  var SELF=dontrequire;
  var PACKAGE='dontrequire';
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


//if(typeof exports !== 'undefined') {  exports.dontrequire = dontrequire;}
// (function(){console.log('dontrequire LOADED');}());