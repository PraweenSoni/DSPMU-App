import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

function Register(props) {
  const [registrationNo, setRegistrationNo] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!registrationNo.trim() || !email || !name || !password.trim()) {
      Alert.alert("Validation Error", "All fields are required!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://192.168.24.28:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ registrationNo, email, name, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // await AsyncStorage.setItem('token', data.token);
        // await AsyncStorage.setItem('user', JSON.stringify(data.user));
        props.navigation.navigate('Login');
      } else {
        Alert.alert("Registration Failed", data.message || "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <View
      style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: '20', fontSize: 30, fontWeight: 600 }}>Register</Text>
      <TextInput style={styles.inp} onChangeText={setRegistrationNo} placeholder="Registration No." />
      <TextInput style={styles.inp} onChangeText={setEmail} placeholder="Email" />
      <TextInput style={styles.inp} onChangeText={setName} placeholder="Name" />
      <TextInput style={styles.inp} onChangeText={setPassword} placeholder="Create Password" />
      <Pressable style={[styles.btn, { backgroundColor: '#1ab69d' }]} onPress={handleRegister} disabled={loading}>
        <Text style={[styles.btnTxt, { color: '#fff' }]}>Register</Text>
      </Pressable>
      <Pressable style={styles.btn}>
        <Text style={styles.btnTxt} onPress={() => props.navigation.navigate('Login')}>Log In</Text>
      </Pressable>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  inp: {
    borderWidth: 1,
    borderRadius: 20,
    width: '70%',
    marginTop: 10,
    paddingStart: 12,
    fontSize: 15,
  },
  btn: {
    width: '70%',
    height: 45,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#757575',
    borderRadius: 20,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: 500
  },
});
