/**
 * Created by Administrator on 1/14/2016.
 */
define(['app/requireme','app/requireme2','app/dontrequire'],function(rme,rme2,dr) {
  //var dr=require('app/dontrequire');
  console.log('dr',dr);

  describe("Simple Test:",function(){
    it("I got requireme I think",function(){
      expect(rme.me()).toBe('me');
    });
    it("And I got requireme I think",function(){
      expect(rme.me()).toBe('me');
    });
  });
  describe("Simple Test2:",function(){
    it("I got requireme  I think",function(){
      expect(rme2.me()).toBe('me2');
    });
    it("And I got requireme I think",function(){
      expect(rme2.me()).toBe('me2');
    });
  });
  describe("dont require:",function(){
    var that=this;
    it("I got dontrequire  I think",function(){
      //console.log('yy');
      expect(dr()).toBe('dontrequire');
    });
  });
  describe("dont require es6:",()=>{
    var that=this;
    it("I got dontrequire xxx I think",function(){
      //console.log('yy');
      expect(dr()).toBe('dontrequire');
    });
  });
})
