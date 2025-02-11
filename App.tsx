import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignIn_Page from './src/Screens/SignIn';
import Intro from './src/Screens/Intro';
import Wellcome from './src/Screens/Wellcome';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SignIn_Page/> */}
     {/* <Wellcome/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App; 