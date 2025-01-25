import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Start = ({ setPage }) => {
  return (
    <View style={{ height: '100%', justifyContent: 'center', backgroundColor: '#fff' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: '600'}}>Dspmu, Ranchi</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={{ color: "#fff", fontSize: 18, marginBottom: 10 }}>Welcome to DSPMU, Ranchi</Text>
        <Pressable
          style={styles.btn}
          onPress={() => setPage('Home')}
        >
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500'}}>Get Start</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: '70%',
    backgroundColor: '#ee4a62',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  bottom: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#1ab69d',
    height: 180,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
