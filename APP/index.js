import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Video from 'react-native-video';

class APP extends Component{
    constructor(props) {

    super(props);

    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onBuffer = this.onBuffer.bind(this);

    this.state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true,
    skin: 'custom',
    isBuffering: false,
    };
    }


    onLoad(data) {
    console.log('On load fired!');
    this.setState({duration: data.duration});
  }

  onProgress(data) {
    this.setState({currentTime: data.currentTime});
  }

  onBuffer({ isBuffering }: { isBuffering: boolean }) {
    this.setState({ isBuffering });
  }


    render(){
        return(
            <View style={{
                flex : 1,
                alignItems : 'center',
                justifyContent : 'center'
            }}>
                <Video
                source={require('./broadchurch.mp4')}
                style={styles.fullScreen}
                rate={this.state.rate}
                paused={this.state.paused}
                volume={this.state.volume}
                muted={this.state.muted}
                resizeMode={this.state.resizeMode}
                onLoad={this.onLoad}
                onBuffer={this.onBuffer}
                onProgress={this.onProgress}
                onEnd={() => { AlertIOS.alert('Done!') }}
                repeat={true}
          />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
  nativeVideoControls: {
    top: 184,
    height: 300
  }
});


export default APP