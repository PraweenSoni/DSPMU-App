// components/NoticePreview.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const NoticePre = ({ title, message, date, onClose }) => {
  return (
    <View style={styles.container}>
        <View style={{backgroundColor: '#888888', flexDirection: 'row'}}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{padding: '5%'}}>
            <Text style={styles.message}>{message}</Text>
            <Text >{date}</Text>
            <Button title="Close" onPress={onClose} />
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
    marginVertical: '2%'
  },
  message: {
    fontSize: 16,
    color: '#721c24',
    marginBottom: 10,
  },
});

export default NoticePre;
