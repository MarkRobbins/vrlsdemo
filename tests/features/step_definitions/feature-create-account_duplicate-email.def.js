module.exports = function () {

  this.Then(/^I should see the email address emphasized$/, function (callback) {
    var selector='[name=email]';
    var classForError='text-danger';
    expect(browser.getAttribute(selector,'class')).toContain(classForError);
    if (typeof callback==='function') { //paranoia
      callback();
    }
  });

};