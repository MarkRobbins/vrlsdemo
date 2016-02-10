module.exports = function () {
  //constants
  var hostRoot='http://localhost:3000/'; // tests only have been run on dev server

  //utils
  function expectSetValue(selector,value){
    browser.setValue(selector,value);
    expect(browser.getValue(selector)).toBe(value);
  }
  function expectExist(selector){
    expect(browser.waitForExist(selector)).toBe(true);
  }
  function expectUrl(path){
    if (path===undefined) {
      path='';
    }
    //noinspection JSUnresolvedVariable
    expect(browser.url().value).toBe(hostRoot+path);
  }
  function expectText(selector,text){
    expect(browser.getText(selector)).toBe(text);
  }
  /////////////////
  this.When(/^I visit the account creation page$/, function () {
    var selector='a[href="/register"]';
    var destination='register';
    browser.url(hostRoot);
    expectUrl();
    browser.waitForExist(selector);
    browser.click(selector);
    expectUrl(destination);
  });

  this.Given(/^I use "([^"]*)" as the username$/, function (username) {
    var selector='[name=username]';
    expectSetValue(selector,username)
  });

  this.Given(/^I use "([^"]*)" as the email$/, function (email) {
    var selector='[name=email]';
    expectSetValue(selector,email)
  });

  this.Given(/^I use "([^"]*)" as the password$/, function (password) {
    var selector='[name=password]';
    expectSetValue(selector,password)
  });

  this.Given(/^I use "([^"]*)" as the challenge password$/, function (password2) {
    var selector='[name=password2]';
    expectSetValue(selector,password2)
  });

  this.Given(/^I submit the form$/, function () {
    var selector='.ui.main-form';
    browser.submitForm(selector);
  });

  this.Then(/^I should see see a confirmation page with the message "([^"]*)"$/, function (msg) {
    var selector='.msg.account-created';
    browser.waitForExist(selector);
    var destination='account-created';
    expectUrl(destination);
    expectText(selector,msg);
  });

  this.Then(/^I should see a link to the login screen$/, function () {
    var selector='.ui.login-link[href="/login"]';
    expectExist(selector);
  });

};