/* global Home, MainLayout */
FlowRouter.route("/", {
  name: "Home",
  action(/*params*/) {
    //params=params;
    renderMainLayoutWith(<Home />);
  }

});

FlowRouter.route("/login",{
  name: "Login",
  action(/*params*/){
    renderMainLayoutWith(<UserLogin />);
  }
});
FlowRouter.route("/register",{
  name: "Register",
  action(/*params*/){
    renderMainLayoutWith(<UserRegister />);
  }
});
FlowRouter.route("/account-created",{
  name: "Account Created",
  action(/*params*/){
    renderMainLayoutWith(<UserAccountCreated />);
  }
});
FlowRouter.route("/user-profile",{
  name: "User Profile",
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
