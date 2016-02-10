var BallsSvgMixin = {

  renderBallsSvgContainer: function () {
    return <div className="ballssvg-container svg-container" ref="ballssvgContainer"></div>;
  },

  insertBallsSgv: function () {
    // Until React fully supports svg we simply append the svg portion after
    // React has rendered the component.
    //noinspection JSUnresolvedVariable
    var e = this.refs.ballssvgContainer;//.getDOMNode();
    e.innerHTML = ''
    +'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">'
    +'<g>'
    +'  <path d="M49.563,37.833c-0.001,0.001-0.003,0.003-0.004,0.005l-8.68-4.364c0.389-1.729,0.073-3.584-0.955-5.105l1.594-1.277'
    +'    c1.826,1.13,4.248,0.914,5.833-0.671c1.85-1.849,1.85-4.847,0-6.696c-1.849-1.85-4.847-1.85-6.697,0'
    +'    c-1.624,1.624-1.819,4.131-0.592,5.972l-1.5,1.201c-1.03-0.82-2.249-1.287-3.495-1.398l-0.857-7.36'
    +'    c0.678-0.315,1.316-0.745,1.875-1.305c2.562-2.562,2.562-6.718,0-9.279c-2.562-2.562-6.716-2.562-9.279,0.001'
    +'    c-2.562,2.562-2.562,6.716,0,9.278c1.1,1.1,2.494,1.725,3.93,1.88l1.519,7.153c-0.878,0.317-1.705,0.821-2.41,1.525'
    +'    c-0.331,0.331-0.617,0.689-0.863,1.066l-4.809-2.414c0.039-0.694-0.197-1.401-0.728-1.933c-0.988-0.987-2.589-0.987-3.577,0'
    +'    c-0.988,0.988-0.988,2.589,0,3.577c0.934,0.934,2.411,0.975,3.405,0.142l4.891,2.456c-0.345,1.258-0.308,2.597,0.11,3.838'
    +'    l-6.56,4.588c-2.552-1.725-6.047-1.46-8.306,0.799c-2.562,2.562-2.562,6.717,0,9.278c2.562,2.562,6.716,2.562,9.279-0.001'
    +'    c1.781-1.781,2.32-4.332,1.625-6.583l5.536-5.535c1.001,1.001,2.246,1.605,3.542,1.824l0.261,3.176'
    +'    c-0.521,0.21-1.01,0.525-1.432,0.948c-1.68,1.679-1.68,4.401-0.001,6.08c1.68,1.679,4.402,1.679,6.081,0'
    +'    c1.679-1.68,1.679-4.401-0.001-6.08c-0.743-0.743-1.691-1.139-2.663-1.224l-0.235-2.874c1.363-0.19,2.678-0.802,3.727-1.851'
    +'    c0.113-0.112,0.213-0.231,0.316-0.35l8.245,5.435c-0.208,1.909,0.417,3.892,1.879,5.354c2.561,2.562,6.716,2.562,9.278,0'
    +'    c2.562-2.562,2.562-6.717,0-9.278C56.281,35.271,52.126,35.271,49.563,37.833z"/>'
    +'</g>'
    +'</svg>';
  }

};


BallsSvg = React.createClass({
  displayName: "BallsSvg",
  mixins: [BallsSvgMixin],
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
     this.insertBallsSgv();
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
    var { className, ...other } = this.props;
    var cn='svg-container '+this.constructor.displayName.toLowerCase();
    if (className!==undefined) {
      cn=cn+' '+className;
    }
    return (
      <div {...other} className={cn}>
       {this.renderBallsSvgContainer()}
      </div>
    );
  }
});
