import React from 'react'

var VIDEOS = {
    deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    spider: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
  };
  
  
  
  //--------------------------------------------
  var VideoApp = React.createClass({
    getInitialState: function () {
      return { src: VIDEOS.deer};
    },
    
    chooseVideo: function (newVideo) {
      this.setState({
        src: VIDEOS[newVideo]
      });
    },
  
    render: function () {
      return (
        <div>
          <h1>React Video Player</h1>
          <Menu chooseVideo={this.chooseVideo} />
          <Video src={this.state.src} />
        </div>
      );
    }
  });
  
  
  
  //--------------------------------------------
  var Video = React.createClass({
    render: function () {
      return (
        <div>
          <video 
            controls 
            autoPlay
            src={this.props.src} />
        </div>
      );
    }
  });
  
  
  
  //--------------------------------------------
  var Menu = React.createClass({
    handleClick: function (e) {
      var text = e.target.value;
      this.props.chooseVideo(text);
    },
    
    render: function () {
      return (
        <form onClick={this.handleClick}>
          <input type="radio" name="src" value="deer"/> Deer
          <input type="radio" name="src" value="snail" /> Snail
          <input type="radio" name="src" value="cat" /> Cat
          <input type="radio" name="src" value="spider" /> Spider
        </form>
      );
    }
  });
  
  
export default VideoApp