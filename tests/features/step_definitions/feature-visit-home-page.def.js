module.exports=function(){
  // constants
  var hostRoot='http://localhost:3000/';
  // utils
  function expectSelectorLabel(selector,label){
    browser.waitForExist(selector);
    var txt=browser.getText(selector);
    expect(txt).toBe(label);
  }
  function expectUrl(path){
    if (path===undefined) {
      path='';
    }
    //noinspection JSUnresolvedVariable
    expect(browser.url().value).toBe(hostRoot+path);
  }

  this.Given(/^I visit the home page$/, function () {
    browser.url(hostRoot);
    expectUrl();
  });

  this.Then(/^I should see a link to the account creation page on the global navigation$/, function () {
    var selector='a[href="/register"]';
    var label='Register';
    expectSelectorLabel(selector,label);
  });

  this.Then(/^I should see a link to the login page on the global navigation$/, function () {
    var selector='a[href="/login"]';
    var label='Login';
    expectSelectorLabel(selector,label);
  });

  this.Then(/^I should see a link to the home page on the global navigation$/, function () {
    var selector='a[href="/"]';
    var label='Home';
    expectSelectorLabel(selector,label);
  });

  this.Then(/^I should see this message in the main content area$/, function (string) {
    var specific=false; // use selector, leave false for all elements
    var selector='#lorum'; //if specific is true then supply selector here
    function stripper(s){
      return s.replace(/\s\s+/g, ' ').replace(/^\s/,'').replace(/\s$/,'');
    }
    string = stripper(string);
    function isFound(v,i,a){
      return v===string;
    }
    var txt;
    if (specific) {
      browser.waitForExist(selector);
      txt=browser.getText(selector);
      if (typeof txt==='string') {
        txt = stripper(txt);
        expect(txt).toBe(string);
      }else{
        // array
        //noinspection JSUnresolvedFunction
        expect(txt.some(isFound)).toBe(true);
      }
    }else{
      txt=browser.getText('*');
      //noinspection JSUnresolvedFunction
      expect(txt.some(isFound)).toBe(true);
    }
  });

};

