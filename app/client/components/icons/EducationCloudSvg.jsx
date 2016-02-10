var EducationCloudSvgMixin = {
  renderEducationCloudSvgContainer: function () {
    return <div className="educationcloudsvg-container svg-container" ref="educationcloudsvgContainer"></div>;
  },
  insertEducationCloudSvg: function () {
    //noinspection JSUnresolvedVariable
    var e = this.refs.educationcloudsvgContainer;
    e.innerHTML = ''
      +'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
      +'	 width="100%" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">'
      +'<g>'
      +'	<path d="M20.002,17.27V15.18l-3.396,1.984c-0.243,0.143-0.542,0.15-0.793,0.025l-3.681-1.848v1.928c0,0,1.638,1.807,3.936,1.807'
      +'		C18.958,19.077,20.002,17.27,20.002,17.27z"/>'
      +'	<path d="M9.069,19.268l1.852-0.515c-0.023-0.335-0.096-0.636-0.156-0.838c0.138-0.136,0.22-0.323,0.22-0.531'
      +'		c0-0.323-0.206-0.602-0.494-0.707l0.012-2.851l4.431-1.535c0.039-0.188,0.228-0.361,0.228-0.361'
      +'		c-0.015,0.051,0.014,0.67,0.951,0.67c0.538,0,0.974-0.172,0.974-0.523c0-0.064-0.014-0.134-0.041-0.206'
      +'		c0.151,0.187,0.243,0.398,0.243,0.57c0,0.408-0.508,0.607-1.134,0.607c-0.424,0-0.848-0.088-1.075-0.273l-4.081,1.414l4.842,2.425'
      +'		c0.251,0.125,0.549,0.116,0.79-0.025l5.645-3.29c0.266-0.153,0.424-0.439,0.412-0.743c-0.01-0.305-0.185-0.58-0.457-0.716'
      +'		l-5.846-2.925c-0.251-0.126-0.547-0.116-0.789,0.025L9.95,12.23c-0.263,0.153-0.422,0.424-0.411,0.73'
      +'		c0.01,0.305,0.185,0.629,0.458,0.702l0,0l-0.012,3.001c-0.292,0.104-0.503,0.389-0.503,0.715c0,0.243,0.115,0.461,0.293,0.599'
      +'		c-0.057,0.414-0.249,0.711-0.476,0.924C9.189,19,9.111,19.128,9.069,19.268z"/>'
      +'	<path d="M31.83,18.163c-0.059-4.934-2.848-8.27-6.957-8.359c-0.489-4.014-3.816-7.026-7.975-7.026'
      +'		c-3.417,0-6.497,2.154-8.036,5.552C8.688,8.314,8.501,8.305,8.297,8.303c-5.013,0-8.127,3.789-8.127,9.882'
      +'		c0,0.573,0.047,0.896,0.122,1.422c0.056,0.375,0.129,0.894,0.221,1.742c0.056,0.51,0.485,0.909,0.999,0.909h1.277'
      +'		c-0.01-0.153,0.003-0.312,0.041-0.466c0.132-0.525,0.536-0.939,1.059-1.086l1.76-0.489H2.406c-0.048-0.362-0.091-0.671-0.125-0.907'
      +'		C2.21,18.814,2.18,18.611,2.18,18.184c0-2.368,0.596-7.874,6.188-7.873c0.312,0.003,0.641,0.055,0.948,0.111'
      +'		c0.484,0.086,0.956-0.183,1.124-0.643c1.112-3.033,3.648-4.993,6.458-4.993c2.963,0,6.024,2.261,6.024,6.044'
      +'		c0,0.271,0.108,0.53,0.304,0.719c0.192,0.189,0.446,0.301,0.727,0.286l0.749-0.025c3.063,0,5.071,2.502,5.116,6.375'
      +'		c0.006,0.41-0.029,0.604-0.114,1.082c-0.045,0.246-0.099,0.515-0.161,0.95h-3.594c-0.289,0-0.565,0.128-0.756,0.347'
      +'		c-0.19,0.218-0.278,0.509-0.239,0.795l0.288,2.17l-4.303-3.117c-0.172-0.125-0.379-0.193-0.59-0.193h-6.853'
      +'		c-0.006,0.045-0.013,0.09-0.023,0.133l-0.437,1.908h6.984l5.935,4.059c0.501,0.308,1.668,0.683,1.614-0.82'
      +'		c-0.004-0.115-0.477-3.234-0.477-3.234h3.32c0.505,0,0.934-0.391,0.998-0.893C31.523,20.52,31.836,18.762,31.83,18.163z"/>'
      +'	<path d="M5.658,23.466l-3.233,3.388c-0.334,0.352-0.321,0.905,0.029,1.24l1.718,1.641c0.351,0.334,0.906,0.322,1.241-0.027'
      +'		l3.234-3.389l0.329,0.315c0.255,0.243,0.619,0.331,0.956,0.229c0.337-0.103,0.594-0.375,0.672-0.719l1.048-4.58'
      +'		c0.074-0.324-0.027-0.664-0.269-0.896c-0.241-0.229-0.586-0.314-0.907-0.229L5.949,21.7c-0.339,0.094-0.602,0.362-0.687,0.702'
      +'		c-0.086,0.343,0.019,0.703,0.273,0.945L5.658,23.466z"/>'
      +'</g>'
      +'</svg>'
      + '';
  }
};
EducationCloudSvg = React.createClass({
  displayName: "EducationCloudSvg",
  mixins: [EducationCloudSvgMixin, ReactMeteorData],
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
    this.insertEducationCloudSvg();
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
        {this.renderEducationCloudSvgContainer()}
      </div>
    );
  }
});