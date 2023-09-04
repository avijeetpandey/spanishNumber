import React from 'react';
import {View, ScrollView, SafeAreaView, Text} from 'react-native';

import Sound from 'react-native-sound';

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
];

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Spaninsh App</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
