Meteor.startup(()=>{
  //console.log('Meteor.users.find().count():',Meteor.users.find().count());
  //Accounts.config({
  //  forbidClientAccountCreation : true
  //});
  // Accounts.ui.config({
  //   passwordSignupFields: 'USERNAME_AND_EMAIL'
  // });

  if (Meteor.users.find().count() === 0||Meteor.users.find({username:'markrobbins'}).fetch().length===0) {
    Accounts.createUser({
      username:'markrobbins',
      email:"mark.robbins@mrobbinsassoc.com",
      password:"itsmegod"
    });
  }
  Meteor.methods({
    'fixtures/resetApp':function(){
      Meteor.users.remove({});
    },
    'fixtures/clearUsers':function(){
      Meteor.users.remove({});
    },
    'fixtures/countUsers':function(){
      return Meteor.users.find({}).fetch().length;
    },
    'fixtures/getUsers':function(){
      return Meteor.users.find({}).fetch();
    },
    'fixtures/createUser':function(username,email,password){
      Accounts.createUser({
        username:username,
        email:email,
        password:password
      });
    },
    'usernameAvailable':function(username){
      return Meteor.users.find({username:username}).fetch().length===0;
    },
    'emailAvailable':function(email){
      return Meteor.users.find({'emails.address':email}).fetch().length===0;
    }
  });
  //console.log('Meteor.users.find().fetch():',Meteor.users.find().fetch());
});