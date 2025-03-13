import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ReAddmission = () => {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [semester, setSemester] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Handle payment logic here
    alert(`Readmission fees of ${amount} for ${studentName} has been submitted`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Readmission Fees</Text>
      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={studentName}
        onChangeText={setStudentName}
      />
      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentID}
        onChangeText={setStudentID}
      />
      <TextInput
        style={styles.input}
        placeholder="Semester"
        value={semester}
        onChangeText={setSemester}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Submit Fees</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ReAddmission;
