// components/NoticePreview.js
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const NoticePre = ({ title, message, date, department, onClose }) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#1cb69d', flexDirection: 'row' }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ padding: '5%', flexDirection: 'column' }}>
        <Text style={styles.message}>{message}</Text>
        <View style={{ flexDirection: 'row' , justifyContent: 'space-between'}}>
          <Text >{date}</Text><Text>{department}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
        {/* <Button style={{backgroundColor: '#ee4a63'}} title="Close" onPress={onClose} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: 10,
    backgroundColor: '#fff',
    // borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f5c6cb',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    marginHorizontal: '5%',
    marginVertical: '2%',
    color: '#fff'
  },
  message: {
    fontSize: 16,
    color: '#721c24',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ee4a63',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
  },
});

export default NoticePre;
