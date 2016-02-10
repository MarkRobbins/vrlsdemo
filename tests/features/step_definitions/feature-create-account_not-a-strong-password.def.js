module.exports = function () {

  this.Then(/^I should see the error message "([^"]*)"$/, function (msg) {
    var selector='#msg';
    browser.waitUntil(function(){
      return browser.getText(selector)===msg;
    });
    expect(browser.getText(selector)).toBe(msg);
  });

  this.Then(/^I should see the password emphasized$/, function () {
    var selector='[name=password]';
    var classForError='text-danger';
    expect(browser.getAttribute(selector,'class')).toContain(classForError);
  });

};