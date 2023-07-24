/* eslint-disable prettier/prettier */
import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello, World!
      </Text>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#235678'
  },
  whiteText: {
      color: '#fff',
      fontWeight:'800',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;
