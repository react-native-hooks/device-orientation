import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useDeviceOrientation from '@rnhooks/device-orientation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function App() {
  const deviceOrientation = useDeviceOrientation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>@rnhooks/device-orientation</Text>
      <Text style={styles.instructions}>Device orientation is</Text>
      <Text style={styles.instructions}>{deviceOrientation}</Text>
    </View>
  );
}

export default App;
