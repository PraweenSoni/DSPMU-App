import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchUserData } from '../../services/apiService';

const ReadmissionFeesPage = () => {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [semester, setSemester] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const loadStudentDetails = async () => {
      const data = await fetchUserData("stuDetails/stuDetails");
      if (data) {
        setStudentName(data.user.name);
        setStudentID(data.user.registrationNo);
        setSemester(data.user.semester);
        setAmount(data.user.amount);
      }
    };

    loadStudentDetails();
  }, []);

  const handlePayment = () => {
    alert(`Readmission fees of ${amount} for ${studentName} has been submitted`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Readmission Fees</Text>
      <Text style={{marginBottom: 4, fontSize: 15}}>Student Name</Text>
      <TextInput style={styles.input} value={studentName} editable={false} placeholder="Student Name" />
      <Text style={{marginBottom: 4, fontSize: 15}}>Student Registration Number</Text>
      <TextInput style={styles.input} value={studentID} editable={false} placeholder="Student ID" />
      <Text style={{marginBottom: 4, fontSize: 15}}>Semester</Text>
      <TextInput style={styles.input} value={semester} editable={false} placeholder="Semester" />
      <Text style={{marginBottom: 4, fontSize: 15}}>Semester Fee</Text>
      <TextInput style={styles.input} value={amount} editable={false} placeholder="Amount" keyboardType="numeric" />
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Pay Semester {semester} Fee</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: {
    height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5,
    marginBottom: 20, paddingHorizontal: 10, backgroundColor: '#f2f2f2'
  },
  button: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default ReadmissionFeesPage;
