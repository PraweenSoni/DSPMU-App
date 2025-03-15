import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ReadmissionFeesPage = () => {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [semester, setSemester] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    // Fetch student details from the server
    const fetchStudentDetails = async () => {
      try {
        const response = await fetch('https://server-api.com/student-details');
        const data = await response.json();
        setStudentName(data.name);
        setStudentID(data.id);
        setSemester(data.semester);
        setAmount(data.amount);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    // fetchStudentDetails();
  }, []);

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
        editable={false} // Make the input field read-only
      />
      <TextInput
        style={styles.input}
        placeholder="Student ID"
        value={studentID}
        editable={false} // Make the input field read-only
      />
      <TextInput
        style={styles.input}
        placeholder="Semester"
        value={semester}
        editable={false} // Make the input field read-only
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        editable={false} // Make the input field read-only
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Semester Fee</Text>
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
    backgroundColor: '#f2f2f2', // Change the background color to indicate read-only fields
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

export default ReadmissionFeesPage;
