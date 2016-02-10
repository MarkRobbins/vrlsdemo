module.exports = function () {
  /* global server */
  this.Given(/^the existing (.*) and (.*)$/, function (accountName, email, table) {
    // clear and fill users from provided
    server.call('fixtures/clearUsers');
    expect(server.call('fixtures/countUsers')).toBe(0);
    //noinspection JSUnresolvedFunction
    table.rows().forEach(function(v,i,a){
      var username=v[0];
      var email=v[1];
      var password=v[2];
      server.call('fixtures/createUser',username,email,password);
    });
    //noinspection JSUnresolvedFunction
    expect(server.call('fixtures/countUsers')).toBe(table.rows().length);
  });

};