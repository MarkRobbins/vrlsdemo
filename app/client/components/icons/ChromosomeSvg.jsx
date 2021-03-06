var ChromosomeSvgMixin = {
  renderChromosomeSvgContainer: function () {
    return <div className="chromosomesvg-container svg-container" ref="chromosomesvgContainer"></div>;
  },
  insertChromosomeSvg: function () {
    //noinspection JSUnresolvedVariable
    var e = this.refs.chromosomesvgContainer;//.getDOMNode();
    e.innerHTML = ''
      +'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
      +'   width="100%" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">'
      +'<g>'
      +'  <path d="M35.559,18.156c5.199-5.873,3.222-12.407,1.307-15.192c-0.56-0.816-1.68-1.022-2.494-0.46'
      +'    c-0.815,0.56-1.023,1.678-0.461,2.493c0.159,0.232,3.6,5.381-0.909,10.634c-4.447-5.205-1.07-10.393-0.905-10.64'
      +'    c0.556-0.816,0.348-1.929-0.466-2.487c-0.815-0.562-1.933-0.355-2.495,0.46c-1.913,2.784-3.893,9.32,1.307,15.192'
      +'    c-3.929,3.831-7.637,8.394-7.632,14.318c0.003,4.889,2.512,9.918,7.638,15.302c-6.481,6.113-4.889,12.189-4.817,12.446'
      +'    c0.22,0.791,0.935,1.302,1.718,1.302c0.154,0,0.31-0.02,0.467-0.062c0.948-0.251,1.516-1.231,1.276-2.183'
      +'    c-0.044-0.177-1.035-4.396,3.909-8.988c4.945,4.593,3.953,8.81,3.914,8.967c-0.265,0.954,0.292,1.942,1.245,2.209'
      +'    c0.163,0.046,0.324,0.066,0.484,0.066c0.784,0,1.505-0.519,1.727-1.312c0.071-0.258,1.665-6.334-4.816-12.446'
      +'    c5.125-5.385,7.634-10.413,7.637-15.304C43.195,26.552,39.487,21.987,35.559,18.156z M33,20.668c1.623,1.575,3.15,3.226,4.33,4.999'
      +'    h-8.66C29.849,23.894,31.377,22.243,33,20.668z M27.108,28.667h11.782c0.34,0.908,0.572,1.851,0.664,2.833H26.445'
      +'    C26.537,30.518,26.769,29.575,27.108,28.667z M33,45.249c-1.595-1.684-2.896-3.324-3.915-4.916h7.83'
      +'    C35.896,41.925,34.595,43.563,33,45.249z M38.511,37.333H27.489c-0.409-0.966-0.695-1.909-0.871-2.833h12.764'
      +'    C39.206,35.424,38.92,36.367,38.511,37.333z"/>'
      +'</g>'
      +'</svg>'
      + '';
  }
};
ChromosomeSvg = React.createClass({
  displayName: "ChromosomeSvg",
  mixins: [ChromosomeSvgMixin, ReactMeteorData],
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
    this.insertChromosomeSvg();
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
        {this.renderChromosomeSvgContainer()}
      </div>
    );
  }
});
