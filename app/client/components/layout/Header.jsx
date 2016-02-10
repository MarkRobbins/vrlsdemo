Header = React.createClass({
  displayName: "Header",
  mixins: [ReactMeteorData],
  propTypes: {},
  getDefaultProps(){
    return {};
  },
  statics: {
    returnFalse(){
      return false;
    }
  },
  getMeteorData(){
    return {
      currentUser: Meteor.user()
    };
  },
  handleLogout() {
    Meteor.logout();
  },
  getInitialState(){
    return {};
  },
  componentWillMount(){
  },
  componentDidMount(){
  },
  componentWillReceiveProps(nextProps){
  },
  shouldComponentUpdate(nextProps, nextState){
    return true;
  },
  componentWillUpdate(nextProps, nextState){
  },
  componentDidUpdate(prevProps, prevState){
  },
  componentWillUnmount(){
  },
  render(){
    let loginButton;
    let registerButton;
    let profileButton;
    let {currentUser} = this.data;
    if (currentUser) {
      loginButton = (<li><a href="#" className="ui logout-link" onClick={this.handleLogout}>Logout</a></li>);
      registerButton = (<li></li>);
      profileButton = (<li><a href="/user-profile" className="ui user-profile-link">Profile</a></li>);
    }else{
      loginButton = (<li><a href="/login" className="ui login-link">Login</a></li>);
      registerButton = (<li><a href="/register" className="ui register-link">Register</a></li>);
      profileButton = (<li></li>);
    }
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img className="nav-logo" src="favicon-96x96.png"/><span id="nav-logo-text">VR Learning Systems</span></a>
          </div>
          <div className="collapse navbar-collapse" id="bs=example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Home</a></li>
              { registerButton }
              { loginButton }
              { profileButton }
            </ul>
          </div>
        </div>
        <div className="shooter"></div>
      </nav>
    );
  }
});
