import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

function Login() {
  return (
    <View
      style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginBottom: '20', fontSize: 30, fontWeight: 600}}>Log In</Text>
      <TextInput style={styles.inp} placeholder="Registration No." />
      <TextInput style={styles.inp} placeholder="Date of Birth" />
      <TextInput style={styles.inp} placeholder="Password" />
      <View style={{width: '70%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
        <Text>Remember me</Text>
        <Text>Forgot password</Text>
      </View>
      <Pressable style={[styles.btn, {backgroundColor: '#1ab69d'}]}>
        <Text style={[styles.btnTxt, {color: '#fff'}]}>Log In</Text>
      </Pressable>
      <Pressable style={styles.btn}>
        <Text style={styles.btnTxt}>Register</Text>
      </Pressable>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  inp:{
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
