import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Colors from '../Theme/Colors';
import Button from './Button';
import RNFetchBlob from 'rn-fetch-blob';
const screen = Dimensions.get('window');

const VideoPicker = ({setVideoPath}) => {
  const chooseVideo = () => {
    let options = {
      mediaType: 'video',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      const videoUri = response?.assets[0]?.uri;
      RNFetchBlob.fs
        .stat(videoUri)
        .then(stats => {
          setVideoPath(stats?.path);
        })
        .catch(err => {
          console.log(err);
        });
    });
  };

  return <Button text="Choose Video" onPress={() => chooseVideo()} />;
};
export default VideoPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.color1,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
    backgroundColor: 'yellow',
  },
  MediaLayout: {
    paddingHorizontal: 20,
    width: screen.width - 40,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Media: {
    width: (screen.width - 60) / 2,
    height: (screen.width - 60) / 2,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
