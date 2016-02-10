var MedalSvgMixin = {
  renderMedalSvgContainer: function () {
    return <div className="medalsvg-container svg-container" ref="medalsvgContainer"></div>;
  },
  insertMedalSvg: function () {
    //noinspection JSUnresolvedVariable
    var e = this.refs.medalsvgContainer;
    e.innerHTML = ''
      +'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
      +'	 width="100%" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">'
      +'<g>'
      +'	<path d="M6.567,22.122l-2.211,6.265c-0.131,0.372-0.039,0.785,0.237,1.066c0.275,0.281,0.688,0.38,1.062,0.255l3.278-1.094'
      +'		l1.867,2.911c0.213,0.33,0.596,0.513,0.987,0.468s0.722-0.31,0.853-0.681l2.247-6.369l-2.803-2.439L6.567,22.122z"/>'
      +'	<path d="M26.587,22.122l-5.517,0.381l-2.803,2.442l2.246,6.365c0.131,0.373,0.463,0.637,0.854,0.683'
      +'		c0.392,0.045,0.773-0.136,0.986-0.468l1.865-2.911l3.278,1.094c0.373,0.125,0.785,0.026,1.062-0.255'
      +'		c0.275-0.281,0.367-0.695,0.236-1.066L26.587,22.122z"/>'
      +'	<path d="M23.479,20.45c1.018-0.071,1.823-0.88,1.896-1.896l0.219-3.167l2.083-2.393c0.67-0.768,0.67-1.912,0.001-2.68l-2.084-2.393'
      +'		l-0.219-3.165c-0.069-1.016-0.878-1.825-1.896-1.895l-3.166-0.219L17.919,0.56c-0.767-0.669-1.911-0.669-2.68,0.001l-2.393,2.083'
      +'		L9.679,2.862C8.663,2.932,7.855,3.74,7.785,4.757l-0.22,3.166l-2.083,2.394c-0.668,0.768-0.668,1.911,0,2.679l2.083,2.393'
      +'		l0.219,3.167c0.07,1.016,0.879,1.822,1.895,1.894l3.169,0.22l2.393,2.083c0.767,0.669,1.911,0.669,2.68,0l2.392-2.083L23.479,20.45'
      +'		z M19.512,13.888l0.23,2.104c0.044,0.395-0.217,0.584-0.576,0.421l-1.93-0.873c-0.362-0.163-0.954-0.163-1.316,0l-1.928,0.873'
      +'		c-0.362,0.163-0.623-0.026-0.577-0.421l0.231-2.104c0.046-0.394-0.138-0.959-0.405-1.252l-1.427-1.565'
      +'		c-0.267-0.292-0.167-0.599,0.221-0.68l2.074-0.428c0.389-0.08,0.869-0.428,1.065-0.773l1.047-1.839'
      +'		c0.196-0.346,0.517-0.346,0.712,0l1.049,1.839c0.194,0.346,0.676,0.694,1.063,0.773l2.075,0.428'
      +'		c0.388,0.081,0.486,0.387,0.221,0.68l-1.427,1.565C19.648,12.929,19.465,13.493,19.512,13.888z"/>'
      +'</g>'
      +'</svg>'
      + '';
  }
};
MedalSvg = React.createClass({
  displayName: "MedalSvg",
  mixins: [MedalSvgMixin, ReactMeteorData],
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
    this.insertMedalSvg();
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
    var cn = 'svg-container ' + this.constructor.displayName.toLowerCase();
    if (className !== undefined) {
      cn = cn + ' ' + className;
    }
    return (
      <div {...other} className={cn}>
        {this.renderMedalSvgContainer()}
      </div>
    );
  }
});
