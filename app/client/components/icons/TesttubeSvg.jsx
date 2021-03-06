var TesttubeSvgMixin = {
  renderTesttubeSvgContainer: function () {
    return <div className="testtubesvg-container svg-container" ref="testtubesvgContainer"></div>;
  },
  insertTesttubeSvg: function () {
    //noinspection JSUnresolvedVariable
    var e = this.refs.testtubesvgContainer;
    e.innerHTML = ''
      +'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
      +'	 width="100%" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">'
      +'<g>'
      +'	<path d="M43.602,7.166H27.806c-1.381,0-2.5,1.119-2.5,2.5c0,1.381,1.119,2.5,2.5,2.5h1.092v41.799c0,3.753,3.054,6.807,6.807,6.807'
      +'		c3.753,0,6.807-3.054,6.807-6.807V12.166h1.092c1.381,0,2.5-1.119,2.5-2.5C46.102,8.285,44.983,7.166,43.602,7.166z M39.704,54.368'
      +'		c0,2.209-1.791,4-4,4s-4-1.791-4-4V31h0.046V15.5c0-0.553,0.447-1,1-1c0.553,0,1,0.447,1,1V31h5.954V54.368z"/>'
      +'</g>'
      +'</svg>'
      + '';
  }
};
TesttubeSvg = React.createClass({
  displayName: "TesttubeSvg",
  mixins: [TesttubeSvgMixin, ReactMeteorData],
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
    this.insertTesttubeSvg();
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
        {this.renderTesttubeSvgContainer()}
      </div>
    );
  }
});
