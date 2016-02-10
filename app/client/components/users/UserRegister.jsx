UserRegister = React.createClass({
  displayName: "UserRegister",
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
        usernameExistsMessage:'The username is already taken',
        emailExistsMessage:'The email is already taken',
        passwordInvalidMessage:'The password must be at least 6 characters long and contain at least 1 Capital letter, 1 Symbol, and 1 number',
        passwordMismatchMessage:'The password and challenge password do not match',
        usernameSelector:'[name="username"]',
        emailSelector:'[name="email"]',
        passwordSelector:'[name="password"]',
        confirmPasswordSelector:'[name="password2"]',
        errorClass:'text-danger',
        messageSelector:'#msg',
        routeSuccess:'Account Created'
      }
    },
    markWithErrorClass(isOk,$items){
      var verb =isOk?'remove':'add';
      var strings=UserRegister.constStrings();
      $items.forEach(function(v,i,a){
        if (v!==undefined) {
          v[verb+'Class'](strings.errorClass);
        }
      });
    },
    markWithErrorClassAndMessage(isOk,msg,$items){
      var strings=UserRegister.constStrings();
      var message=isOk?strings.defaultMessage:msg;
      $(strings.messageSelector).text(message);
      UserRegister.markWithErrorClass(isOk,$items);
    },
    watchInput(selector,selector2,fieldOrFn,msg){
      $(selector).each(function() {
        var $elem = $(this);
        // mark and unmark additional if provided
        var $elem2;
        if (selector2!==undefined) {
          $elem2=$(selector2);
        }
        function markAndMsg(isOk,msg){
          UserRegister.markWithErrorClassAndMessage(isOk,msg,[$elem,$elem2]);
        }
        // Save current value of element
        $elem.data('oldVal', $elem.val());
        // Look for changes in the value
        $elem.bind("propertychange change click keyup input paste", function(event){
          // If value has changed...
          if ($elem.data('oldVal') != $elem.val()) {
            // Updated stored value
            $elem.data('oldVal', $elem.val());
            var isOk;
            if (typeof fieldOrFn==='string') {
              Meteor.call(fieldOrFn+'Available',$elem.val(),function(err,response){
                if (err) {
                  console.log('error',error);
                }else{
                  var isOk=response;
                  markAndMsg(isOk,msg);
                }
              });
            }else if (typeof fieldOrFn==='function') {
              isOk=fieldOrFn($elem.val());
              markAndMsg(isOk,msg);
            }
          }
        });
      });
    },
    validatePassword(password){
      // no using this here.
      //console.log('validatePassword password:',password);
      if (password.length<6) {return false;}
      // no symbols or numbers, fail
      //console.log('validatePassword password:1:',password.replace(/[ a-zA-Z]/g,''));
      if (password.replace(/[ a-zA-Z]/g,'')==='') {return false;}
      // no symbols, fail
      //console.log('validatePassword password:2:',password.replace(/[ a-zA-Z0-9]/g,''));
      if (password.replace(/[ a-zA-Z0-9]/g,'')==='') {return false;}
      return true;
    },
    passwordMatch(confirmationPassword){
      // no using this here.
      var strings=UserRegister.constStrings();
      var currentPass=$(strings.passwordSelector).val();
      return confirmationPassword===currentPass;
    },
    watchInputs(){
      var strings=UserRegister.constStrings();
      this.watchInput(strings.usernameSelector,undefined,'username',strings.usernameExistsMessage);
      this.watchInput(strings.emailSelector,undefined,'email',strings.emailExistsMessage);
      this.watchInput(strings.passwordSelector,undefined,UserRegister.validatePassword,strings.passwordInvalidMessage);
      this.watchInput(strings.confirmPasswordSelector,strings.passwordSelector,UserRegister.passwordMatch,strings.passwordMismatchMessage);
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
    UserRegister.watchInputs();
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
    var self=this;
    var username = $(event.target).find("[name=username]").val();
    var email = $(event.target).find("[name=email]").val();
    var pass = $(event.target).find("[name=password]").val();
    var pass2 = $(event.target).find("[name=password2]").val();
    Accounts.createUser({username:username,email:email,password:pass},function(err){
      if (err) {
        console.log(err.reason);
      }else{
        Meteor.logout();
        FlowRouter.go('Account Created');
      }
    });
  },
  clearForm(){
    $('#registration>input[type="text"],#registration>input[type="password"]').val('');
    $('[name=username]').focus();
  },
  render(){
    var msgStyle={marginTop:'0.5em'};
    var rowStyle={marginTop:'0.5em'};
    return (
      <div className="container page-form-container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Register</h1>
            <form id="registration" className="ui main-form" onSubmit={ this.onSubmit }>
              <input type="text" name="username" placeholder="Enter Username..." className="form-control"/>
              <input type="text" name="email" placeholder="Enter email..." className="form-control"/>
              <input type="password" name="password" placeholder="Enter password..." className="form-control"/>
              <input type="password" name="password2" placeholder="Confirm password..." className="form-control"/>
              <div className="row" style={rowStyle}>
                <div className="col-sm-12">
                  <input type="submit" value="Register" className="btn btn-sm btn-success col-sm-2"/>
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
