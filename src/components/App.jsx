class App extends React.Component {
	
  constructor(props) {
    super(props)
    this.state = {
      done: true
    }
  }

  render() {
    return (
  	  <div>
  	    <Nav />
  	    <div className="col-md-7">
  	      <VideoPlayer  video={exampleVideoData}/>
  	    </div>
  	    <div className="col-md-5">
  	      <VideoList videos={exampleVideoData} />
  	    </div>
  	  </div>
  	)
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
