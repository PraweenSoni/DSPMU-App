import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Start from './src/screens/Start';
import Home from './src/screens/Home';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Start'); // State to track the current screen

  return (
    <View style={styles.container}>
      {currentPage === 'Start' && <Start setPage={setCurrentPage} />}
      {currentPage === 'Home' && <Home />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
