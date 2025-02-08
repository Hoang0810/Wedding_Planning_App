import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignIn_Page from './lib/src/Screens/SignIn';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignIn_Page/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  }
});

export default App; 