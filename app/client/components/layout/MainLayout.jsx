MainLayout = React.createClass({
  displayName: "MainLayout",
  mixins:[],
  propTypes:{},
  getDefaultProps(){
    return {};
  },
  statics:{
    returnFalse(){
      return false;
    }
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
    return (
      <div id="mainlayout" className="wrapper">
        {this.props.header}

        {this.props.content}

        {this.props.footer}
      </div>
    );
  }
});
