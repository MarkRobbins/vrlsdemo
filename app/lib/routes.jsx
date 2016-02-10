/* global Home, MainLayout */
function doNothing(ctx, redirect) {
}
function goLogin(ctx, redirect) {
  if (!Meteor.userId()) {
    redirect('/login')
  }
}
function checkLoggedIn(ctx, redirect) {
  if (!Meteor.userId()) {
    redirect('/')
  }
}
function redirectIfLoggedIn (ctx, redirect) {
  if (Meteor.userId()) {
    redirect('/user-profile')
  }
}
FlowRouter.route("/", {
  name: "Home",
  action(/*params*/) {
    //params=params;
    renderMainLayoutWith(<Home />);
  }

});

FlowRouter.route("/login",{
  name: "Login",
  triggersEnter:[redirectIfLoggedIn],
  action(/*params*/){
    renderMainLayoutWith(<UserLogin />);
  }
});
FlowRouter.route("/register",{
  name: "Register",
  triggersEnter:[redirectIfLoggedIn],
  action(/*params*/){
    renderMainLayoutWith(<UserRegister />);
  }
});
FlowRouter.route("/account-created",{
  name: "Account Created",
  triggersEnter:[redirectIfLoggedIn],
  action(/*params*/){
    renderMainLayoutWith(<UserAccountCreated />);
  }
});
FlowRouter.route("/user-profile",{
  name: "User Profile",
  triggersEnter:[goLogin],
  action(/*params*/){
    renderMainLayoutWith(<UserProfile />);
  }
});
function renderMainLayoutWith(component){
  ReactLayout.render(MainLayout,{
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}
