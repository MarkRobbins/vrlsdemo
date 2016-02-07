module.exports = function () {
  // http://webdriver.io/api.html
  this.Given(/^I have visited localhost:(\d+)$/, function (arg1) {
    browser.url('http://localhost:'+arg1);
  });
  //noinspection JSUnresolvedFunction
  this.Then(/^I actually see "([^"]*)"$/, function (arg1) {
    // Write the automation code here
    //pending();
    browser.waitForExist('h1');
    var txt=browser.getText('h1');
    expect(txt).toBe(arg1);
    //expect(true).toBe(false);
  });
}