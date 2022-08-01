'use strict';
import React, { PureComponent } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Icon } from '@rneui/base';
import { ACTIVE_CHATS } from '../../themes/constants';
import { Input } from '@rneui/themed';
import { colors } from '../../themes/whitelabel';

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
        this.setState({ flashStatus: 'on' });
        break;
      case 'on':
        this.setState({ flashStatus: 'auto' });
        break;
      case 'auto':
        this.setState({ flashStatus: 'off' });
        break;
      default:
        this.setState({ flashStatus: 'off' });
        break;
    }
  }

  changeExit() {
    if (this.state.imageUri) {
      this.setState({ imageUri: null });
    } else {
      this.props.navigation.navigate(ACTIVE_CHATS);
    }
  }

  render() {
    const { imageUri } = this.state;
    return (
      <View style={styles.container}>
        {imageUri ?
          (<ImageBackground
            source={{ uri: imageUri }}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />) :
          (<RNCamera
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
          />)

        }

        <View style={styles.containerButtonTop}>
          <TouchableOpacity onPress={() => this.changeExit()}>
            <Text style={styles.textTop}>X</Text>
          </TouchableOpacity>
          {!imageUri ? (
            <TouchableOpacity onPress={() => this.changeFlash()}>
              <Icon
                type="ionicons"
                name={`flash-${this.state.flashStatus}`}
                size={22}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.containerBottom}>
          {!imageUri ? (
            <>
              <View style={styles.containerButton}>
                <TouchableOpacity>
                  <Icon type="material" name="image" size={28} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.takePicture.bind(this)}
                  style={styles.capture}>
                  <Icon type="material" name="camera" size={60} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.setState({ isBackType: !this.state.isBackType })}>
                  <Icon type="ionicons" name="flip-camera-ios" size={28} />
                </TouchableOpacity>
              </View>
              <Text style={styles.textBotton}>Segure para video, toque para foto</Text>
            </>
          ) :
            <View style={styles.containerLengend}>
              <TextInput
                placeholder="Digite uma legenda"
                style={styles.inputLegend}
              />
              <TouchableOpacity
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 45,
                  width: 45,
                  backgroundColor: colors.primary,
                  borderRadius: 22.5,
                }}>
                <Icon
                  type="material"
                  name="done"
                  size={30}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: colors.primary,
                  }}
                />
              </TouchableOpacity>
            </View>
          }
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ imageUri: data.uri });
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
  containerButtonTop: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 7,
  },
  textTop: {
    color: 'white',
    fontSize: 20,
  },
  containerBottom: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#00000020',
  },
  containerButton: {
    display: 'flex',
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
  textBotton: {
    bottom: 0,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 10,
    fontSize: 15,
  },
  containerLengend: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
  inputLegend: {
    alignSelf: 'center',
    flex: 1,
    height: 45,
    marginRight: 5,
    borderRadius: 25,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: colors.input
  },
});

export default Cam;