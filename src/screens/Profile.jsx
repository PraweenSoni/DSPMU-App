import { Image, StyleSheet, Text, View } from "react-native";
import userImg from '../../assets/user.png';

function Profile() {
  return (
    <View style={{height: '100%', alignItems: 'center', top: 80}}>
        <Text style={{fontSize: 30, fontWeight: 600, marginBottom: 20}}>DSPMU, Ranchi</Text>
        <Image style={styles.userImg} source={userImg}/>
        <View style={{width: '100%', alignItems: 'center', marginTop: 10}}>
          <Text style={{fontSize: 22, fontWeight: 500}}>User Name</Text>
          <Text style={{fontSize: 18}}>Subject</Text>
          <Text style={{fontSize: 18}}>Departement</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuList}>Edit Profile</Text>
          <Text style={styles.menuList}>Result</Text>
          <Text style={styles.menuList}>Syllabus</Text>
          <Text style={styles.menuList}>Time Tables</Text>
          <Text style={styles.menuList}>Exam schedules</Text>
          <Text style={styles.menuList}>Academic Calendar</Text>
          <Text style={styles.menuList}>Feedback</Text>
          <Text style={styles.menuList}>Log Out</Text>
        </View>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  userImg: {
    height: 150, 
    width: 150,
    borderWidth: 2,
    borderRadius: 100,
  },
  menu:{
    position: 'absolute',
    top: '45%',
    left: '7%',
    width: '100%'
  },
  menuList:{
    fontSize: 18,
    width: '86%',
    padding: 7,
    borderBottomWidth: 2,
    borderColor: '#858585',
    fontWeight: 500
  }
})