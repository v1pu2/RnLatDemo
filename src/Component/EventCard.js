import {StyleSheet, View, Text, Dimensions} from 'react-native';

import React, {useRef, useState} from 'react';
import Video from 'react-native-video';

const EventCard = ({item, onPress}) => {
  console.log('videoPath--', item?.videoPath);
  const videoPlayer = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const uri = `.${item?.videoPath}`;
  console.log('uri--', uri);
  const f_uri = `file:///data/data${item?.videoPath}`;
  console.log('f_uri', f_uri);

  const onLoadStart = data => setIsLoading(true);
  const onLoad = () => {
    setIsLoading(false);
  };
  return (
    <View style={styles.container}>
      <Video
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        ref={videoPlayer}
        resizeMode={'content'}
        // source={{
        //   uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
        // }}
        source={{uri: f_uri}}
        style={styles.mediaPlayer}
        volume={10}
      />
      <Text style={styles.text}>Event Name :{item?.eName}</Text>
      <Text style={styles.text} onPress={onPress}>
        Location : {item?.eAddress}
      </Text>

      <Text style={styles.text}>Start Date: {item?.sDateTime}</Text>
      <Text style={styles.text}>End Date: {item?.eDateTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#7555CF',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 20,
    width: '100%',
  },
  mediaPlayer: {
    width: Dimensions.get('window').width - 80,
    height: 200,
    // backgroundColor: 'red',
    marginBottom: 10,
  },

  text: {
    fontSize: 14,
    color: 'black',
    flexWrap: 'wrap',
    // padding: 10,
  },
});

export default EventCard;
