// Librairies
import React, { useState } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
      <View style={{...styles.container, backgroundColor: darkMode ? '#ecf0f1' : '#2c3e50'}}>
        {darkMode ?
          <Image source={require('./assets/sun.png')} style={styles.logo}/>
        :
          <Image source={require('./assets/moon.png')} style={styles.logo}/>
        }
        <Button onPress={() => setDarkMode(darkMode => !darkMode)} title={darkMode ? 'mode jour' : 'mode nuit'}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  }
});
