UserLogin = React.createClass({
  displayName: "UserLogin",
  mixins: [ReactMeteorData],
  propTypes: {},
  getDefaultProps(){
    return {};
  },
  statics: {
    returnFalse(){
      return false;
    },
    constStrings(){
      return {
        defaultMessage:'Enter Information',
        invalidLogin:'Not a valid username or password',
        usernameSelector:'[name="username"]',
        passwordSelector:'[name="password"]',
        messageSelector:'#msg',
        focusOnClearSelector:'[name=username]',
        errorClass:'text-danger',
        routeSuccess:'User Profile'
      }
    }
  },
  getInitialState(){
    return {};
  },
  getMeteorData(){
    return {
      currentUser: Meteor.user()
    };
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
  onSubmit(event){
    event.preventDefault();
    var strings=UserLogin.constStrings();
    var self=this;
    var $username = $(event.target).find(strings.usernameSelector);
    var username = $username.val();
    var $pass = $(event.target).find(strings.passwordSelector);
    var pass = $pass.val();
    Meteor.loginWithPassword(username,pass, function(err){
      if (err) {
        //console.log('err',err);
        //console.log('err');
        //var $msg=$(strings.messageSelector);
        $(strings.messageSelector).text(strings.invalidLogin);
        //$pass.val('');
        $pass.addClass(strings.errorClass);
        $username.addClass(strings.errorClass);
        setTimeout(function(){
          $pass.removeClass(strings.errorClass);
          $username.removeClass(strings.errorClass);
        },3000);
        $(strings.focusOnClearSelector).focus();
      }else{
        FlowRouter.go(strings.routeSuccess);
      }
    });
  },
  clearForm(){
    var strings=UserLogin.constStrings();
    $('.ui.main-form input[type="text"],.ui.main-form input[type="password"]').val('');
    $(strings.focusOnClearSelector).focus();
  },
  render(){
    var msgStyle={marginTop:'0.5em'};
    var rowStyle={marginTop:'0.5em'};
    return (
      <div className="container page-form-container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Login</h1>
            <form id="login" className="ui main-form" onSubmit={ this.onSubmit }>
              <input type="text" name="username" placeholder="Enter Username..." className="form-control"/>
              <input type="password" name="password" placeholder="Enter password..." className="form-control"/>
              <div className="row" style={rowStyle}>
                <div className="col-sm-12">
                  <input type="submit" value="Login" className="btn btn-sm btn-success col-sm-2"/>
                  <span id="msg" className="col-sm-8" style={msgStyle}>Enter Information</span>
                  <button onClick={ this.clearForm } className="btn btn-sm btn-warning pull-right col-sm-2">Clear</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});
