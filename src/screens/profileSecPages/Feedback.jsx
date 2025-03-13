import React, { useState } from 'react';
import arrowForward from '../../../assets/arrowForward.png'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Feedback = ({ goBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={goBack}>
        <Image style={styles.arrowForward} source={arrowForward} />
        <Text style={styles.backButton}>BACK</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Feedback Form</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
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

      <TouchableOpacity style={styles.button} onPress={() => alert('Not working now!')}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
  },
  backButton: {
    fontSize: 18,
    color: '#000',
    fontWeight: 500,
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
