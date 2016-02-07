module.exports = function() {
  //this.World = require('../support/world').World;
  //console.log('world',this.World);
  //var browser=this.World.browser;
  this.Given(/^I have visited Google$/, function () {
    // Write the automation code here
    browser.url('http://google.com');
  });

  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    // Write the automation code here
    browser.setValue('input[name="q"]', searchTerm);
    browser.keys(['Enter']);
  });

  this.Then(/^I see "([^"]*)"$/, function (link) {
    // Write the automation code here
    // pending();
    browser.waitForExist('a=' + link);
  });

}
