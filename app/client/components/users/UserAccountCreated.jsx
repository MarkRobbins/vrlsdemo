UserAccountCreated = React.createClass({
  displayName: "UserAccountCreated",
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
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1 className="msg account-created">Account Created</h1>
            <a className="ui login-link" href="/login">Login</a>
          </div>
        </div>
      </div>
    );
  }
});
