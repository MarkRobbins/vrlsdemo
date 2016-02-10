module.exports = function () {
  // constants
  var hostRoot='http://localhost:3000/';

  //utilities
  function pageContainsText(s){
    function stripper(s){
      return s.replace(/\s\s+/g, ' ').replace(/^\s/,'').replace(/\s$/,'');
    }
    var string = stripper(s);
    function isFound(v,i,a){
      return v===string;
    }
    var txt=browser.getText('*');
    return txt.some(isFound);
  }
  function waitUrl(path) {
    if (path===undefined) {
      path='';
    }
    browser.waitUntil(function(){
      //noinspection JSUnresolvedVariable
      return browser.url().value ===hostRoot+path;
    });
  }
  function expectUrl(path){
    if (path===undefined) {
      path='';
    }
    //noinspection JSUnresolvedVariable
    expect(browser.url().value).toBe(hostRoot+path);
  }
  function expectSelectorLabel(selector,label){
    browser.waitForExist(selector);
    var txt=browser.getText(selector);
    expect(txt).toBe(label);
  }
  function expectNotExist(selector) {
    browser.waitForExist(selector,500,true);
  }
  ////////////////////
  this.When(/^I visit the login page$/, function () {
    var selector='a[href="/login"]';
    var destination='login';
    browser.url(hostRoot);
    expectUrl();
    browser.waitForExist(selector);
    browser.click(selector);
    expectUrl(destination);
  });

  this.Then(/^I should go to the profile page for my account$/, function () {
    waitUrl('user-profile');
  });

  this.Then(/^I should see the message "([^"]*)"$/, function (msg) {
    expect(pageContainsText(msg)).toBe(true);
  });

  this.Then(/^I should see the logout link on the global navigation$/, function () {
    var selector='.ui.logout-link';
    var label='Logout';
    expectSelectorLabel(selector,label);
  });

  this.Then(/^I should not see the login link on the global navigation$/, function () {
    var selector='.ui.login-link';
    expectNotExist(selector);
  });

  this.Then(/^I should not see the create account link on the global navigation$/, function () {
    var selector='.ui.register-link';
    expectNotExist(selector);
  });

};