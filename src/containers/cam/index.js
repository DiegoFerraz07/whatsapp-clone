'use strict';
import React, {PureComponent} from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Icon} from '@rneui/base';

class Cam extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBackType: true,
      flashStatus: 'off',
    };
  }

  flashMode() {
    let status = RNCamera.Constants.flash.off;
    switch (this.state.flashStatus) {
      case 'off': 
        status = RNCamera.Constants.flash.off;
        break;
      case 'on': 
        status = RNCamera.Constants.flash.on;
        break;
      case 'auto':
        status = RNCamera.Constants.flash.auto;
        break;
      default:
        status = RNCamera.Constants.flash.off;
        break;
    }
    return status;
  }

  changeFlash() {
    switch (this.state.flashStatus) {
      case 'off':
        this.setState({flashStatus: 'on'});
        break;
      case 'on':
        this.setState({flashStatus: 'auto'});
        break;
      case 'auto':
        this.setState({flashStatus: 'off'});
        break;
      default:
        this.setState({flashStatus: 'off'});
        break;
    }
  }
  render() {
    const {imageUri} = this.state;
    console.log('render', imageUri);
    if (imageUri){
      return <ImageBackground source={{uri:imageUri}} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
    }
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={
            this.state.isBackType
              ? RNCamera.Constants.Type.back
              : RNCamera.Constants.Type.front
          }
          flashMode={this.state.flashStatus}
          androidCameraPermissionOptions={{
            title: 'Permissao para usar a camera',
            message: 'Voce precisa dar permissao para usar a camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permissao para usar o audio da camera',
            message: 'Voce precisa dar permissao para usar o audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={() => this.changeFlash()}>
            <Icon
              type="ionicons"
              name={`flash-${this.state.flashStatus}`}
              size={28}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}>
            <Icon type="material" name="camera" size={60}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({isBackType: !this.state.isBackType})}>
            <Icon type="ionicons" name="flip-camera-ios" size={28} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({imageUri: data.uri});
      console.log(this.state.imageUri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  containerButton: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  capture: {
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 55,
    margin: 10,
  },
});

export default Cam;