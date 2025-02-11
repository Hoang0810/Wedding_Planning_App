import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignIn_Page from './src/Screens/SignIn';
import Wellcome from './src/Screens/Wellcome';
import Intro1 from './src/Screens/Intro1';
import Intro2 from './src/Screens/Intro2';
import Intro3 from './src/Screens/Intro3';



function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SignIn_Page/> */}
     {/* <Wellcome/> */}
     <Intro3/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App; 