/* global Home:true */
Home=React.createClass({
  displayName: "Home",
  mixins: [ReactMeteorData],
  propTypes: {},
  scrolling:false,
  getDefaultProps(){
    return {};
  },
  statics: {
    returnFalse(){
      return false;
    }
  },
  getMeteorData(){
    return {
      currentUser: Meteor.user()
    };
  },
  handleLogout() {
    Meteor.logout();
  },
  getInitialState(){
    return {};
  },
  componentWillMount(){
  },
  componentDidMount(){
    var para=$('.parallax');
    para.on('scroll',function(){
      var me=$(this);
      var $logo=$('.navbar-brand');
      if (me.scrollTop()>50) {
        $logo.addClass('smallish');
      }else{
        $logo.removeClass('smallish');
      }
      //console.log('scroll',me.scrollTop());
    });
    var that=this;
    var factor=.7;
    var uh=5000;
    var ut=200*1000;
    var heightTime=ut/uh*factor;
    function startAnim(){
      var y=para.scrollTop();
      var dis=uh-y;
      var t=dis*heightTime;
      $('.parallax').animate({ scrollTop: uh }, { duration: t, easing: 'linear'});
      that.scrolling=true;
    }
    function stopAnim(){
      para.stop();
      that.scrolling=false;
    }
    para.on('click',function(){
      if (that.scrolling) {
        stopAnim();
      }else{
        startAnim();
      }
    });
    //console.log('height',$('.parallax').height());
    setTimeout(function(){
      startAnim();
    },3000);
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
  render() {
    var width50={width:'50%'};
    return (
      <div className="parallax">
        <div id="group1" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <div id="lorem-container" className="container">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                  <p>Virtual worlds are playing an increasingly important role in education, especially in language learning. By March 2007 it was estimated that over 200 universities or academic institutions were involved in Second Life (Cooke-Plagwitz, p. 548). Joe Miller, Linden Lab Vice President of Platform and Technology Development, claimed in 2009 that "Language learning is the most common education-based activity in Second Life". Many mainstream language institutes and private language schools are now using 3D virtual environments to support language learning.</p>
                  <h3>Approaches to language education in virtual worlds</h3>
                  <p>Almost all virtual world educational projects envisage a blended learning approach whereby the language learners are exposed to a 3D virtual environment for a specific activity or time period. Such approaches may combine the use of virtual worlds with other online and offline tools, such as 2D virtual learning environments (e.g. Moodle) or physical classrooms. SLOODLE. for example, is an open-source project which integrates the multi-user virtual environments of Second Life and/or OpenSim with the Moodle learning-management system. Some language schools offer a complete language learning environment through a virtual world, e.g. Languagelab.com and Avatar Languages</p>
                  <p>Virtual worlds such as Second Life are used for the immersive, collaborative and task-based, game-like opportunities they offer language learners. As such, virtual world language learning can be considered to offer distinct (although combinable) learning experiences.</p>
                  <p id="lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed dignissim
                    euismod pulvinar. Sed convallis neque non luctus semper.  Quisque leo
                    arcu, mattis vitae eros in, blandit gravida orci. Vivamus quam orci,
                    semper sit amet nisi vitae, sollicitudin porttitor neque. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Ut tempus purus vel leo luctus lacinia. Nullam ac ante nec tortor
                    interdum eleifend. Quisque rutrum mauris non turpis fermentum maximus.
                    Cras malesuada dui eget malesuada gravida. Suspendisse lacinia ipsum
                    commodo odio ullamcorper tempus. Pellentesque rutrum egestas ex at
                    congue. Ut dignissim leo sed urna iaculis, eget feugiat sapien lobortis.
                    Pellentesque lacinia ex quis fringilla aliquet. Integer faucibus urna
                    eget enim mollis luctus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax__layer parallax__layer--base">

          </div>
        </div>
        <div id="group2" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <div className="title">Equipment and Software</div>
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div id="group2-container" className="container">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                  <img src="vr-black.png" className="black-glow" style={width50}/>
                  <img src="vr-eye.png" className="black-glow" style={width50}/>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax__layer parallax__layer--back">
          </div>
        </div>
        <div id="group3" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <div className="title">Applications</div>
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div id="group3-container" className="container">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1">
                  <BallsSvg/>
                  <ChromosomeSvg/>
                  <TesttubeSvg/>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax__layer parallax__layer--back">
          </div>
        </div>
        <div id="group4" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
          </div>
          <div className="parallax__layer parallax__layer--base">
            <div id="group4-container" className="container">
              <div className="row">
                <div className="col-sm-12">
                </div>
              </div>
            </div>
          </div>
          <div className="parallax__layer parallax__layer--deep">
          </div>
        </div>
        <div id="group5" className="parallax__group">
          <div className="parallax__layer parallax__layer--fore">
            <div className="title">Infinite Possibilities</div>
          </div>
          <div className="parallax__layer parallax__layer--base">
          </div>
        </div>
      </div>
    );
  }
});
