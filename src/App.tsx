import React from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

// list of sounds to play
const soundList = [
  require('./../assets/one.wav'),
  require('./../assets/two.wav'),
  require('./../assets/three.wav'),
  require('./../assets/four.wav'),
  require('./../assets/five.wav'),
  require('./../assets/six.wav'),
  require('./../assets/seven.wav'),
  require('./../assets/eight.wav'),
  require('./../assets/nine.wav'),
  require('./../assets/ten.wav'),
];

function App() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.gridContainer}>
        {soundList.map(sound => {
          return (
            <TouchableOpacity key={sound} onPress={() => {}} style={styles.box}>
              <Text style={styles.text}>{sound}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  box: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f4c75',
    width: '46%',
    marginVertical: 6,
    borderRadius: 6,
    shadowColor: '#393e46',
    elevation: 6,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  },
});

export default App;
