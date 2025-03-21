import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { fetchUserData } from '../../services/apiService';
import arrowForward from '../../../assets/arrowForward.png';

const Feedback = ({goBack}) => { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const loadStudentDetails = async () => {
      try {
        const data = await fetchUserData("stuDetails/stuDetails");
        if (data) {
          setName(data.user.name);
          setEmail(data.user.email);
        }else{
          setName("N/A");
          setEmail("N/A");
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    loadStudentDetails();
  }, []);

  const submitFeedback = async () => { // Handle the POST request here
    const url = ''; // Replace with your actual backend URL
    const feedbackData = {
      name: name,
      email: email,
      feedback: feedback,
      rating: rating,
    };

    try {
      const userToken = "";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        const result = await response.json();
        Alert.alert('Success', 'Feedback submitted successfully!');
        console.log('Response:', result);
      } else {
        const error = await response.json();
        Alert.alert('Error', 'Failed to submit feedback!');
        console.error('Error:', error);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong!');
      console.error('Network Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={goBack}>
        <Image style={styles.arrowForward} source={arrowForward} />
        <Text style={styles.backButton}>BACK</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Feedback Form</Text>

      <TextInput
        style={[styles.input, { backgroundColor: '#f2f2f2' }]}
        placeholder="Your Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
        editable={false}
      />

      <TextInput
        style={[styles.input, { backgroundColor: '#f2f2f2' }]}
        placeholder="Your Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        editable={false}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Your Feedback"
        placeholderTextColor="#999"
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />

      <Text style={styles.label}>Rate Us:</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Text style={[styles.star, rating >= star && styles.selectedStar]}>★</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={submitFeedback}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
  },
  backButton: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
  },
  arrowForward: {
    height: 17,
    width: 17,
    transform: [{ rotateY: '180deg' }],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  star: {
    fontSize: 30,
    color: '#bbb',
    marginRight: 10,
  },
  selectedStar: {
    color: '#f39c12',
  },
  button: {
    backgroundColor: '#ee4a63',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Feedback;
