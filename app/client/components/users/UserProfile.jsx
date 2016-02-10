UserProfile = React.createClass({
  displayName: "UserProfile",
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
    //let {currentUser} = this.data;
    //<h2>{currentUser}</h2>
    console.log('Meteor.user():',Meteor.user());
    let username=Meteor.user()!==undefined?Meteor.user().username:'Error';
    return (
      <div className="profile-container container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Profile</h1>
            <h2>Welcome {username} !</h2>
          </div>
        </div>
      </div>
    );
  }
});
