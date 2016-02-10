module.exports = function () {

  this.Then(/^I should see the password and challenge password emphasized$/, function (callback) {
    var selector='[name=password]';
    var classForError='text-danger';
    expect(browser.getAttribute(selector,'class')).toContain(classForError);
    selector='[name=password2]';
    expect(browser.getAttribute(selector,'class')).toContain(classForError);
    if (typeof callback==='function') { //paranoia
      callback();
    }
  });

};