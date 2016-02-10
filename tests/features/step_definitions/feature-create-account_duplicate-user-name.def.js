module.exports = function () {

  this.Then(/^I should see an error message with the message "([^"]*)"$/, function (msg) {
    var selector='#msg';
    expect(browser.getText(selector)).toBe(msg);
  });

  this.Then(/^I should see the username emphasized$/, function () {
    var selector='[name=username]';
    var classForError='text-danger';
    expect(browser.getAttribute(selector,'class')).toContain(classForError);
  });

};