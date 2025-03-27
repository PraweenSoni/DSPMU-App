import { Pressable, StyleSheet, Text, TextInput, View, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

function Login(props) {
  const [registrationNo, setRegistrationNo] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!registrationNo.trim() || !password.trim()) {
      Alert.alert("Validation Error", "All fields are required!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://192.168.24.28:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ registrationNo, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('token', data.token);
        await AsyncStorage.setItem('user', JSON.stringify(data.user));
        props.navigation.navigate('Home');
      } else {
        Alert.alert("Login Failed", data.message || "Invalid credentials");
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.inp}
        placeholder="Registration No."
        value={registrationNo}
        onChangeText={setRegistrationNo}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inp}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.row}>
        <Text>Terms & Conditions</Text>
        <Text>Forgot password</Text>
      </View>
      <Pressable style={[styles.btn, { backgroundColor: '#1ab69d' }]} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={[styles.btnTxt, { color: '#fff' }]}>Log In</Text>}
      </Pressable>
      <Pressable style={styles.btn} onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.btnTxt}>Register</Text>
      </Pressable>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: '600',
  },
  inp: {
    borderWidth: 1,
    borderRadius: 20,
    width: '70%',
    marginTop: 10,
    paddingStart: 12,
    fontSize: 15,
  },
  row: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
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
    fontWeight: '500',
  },
});
