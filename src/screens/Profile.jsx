import { Image, StyleSheet, Text, View } from "react-native";
import userImg from '../../assets/user.png';
import arrowForward from '../../assets/arrowForward.png';

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
          <View style={styles.menuList}><Text style={styles.menuListText}>Edit Profile</Text><Image style={styles.arrowForward} source={arrowForward}/></View>
          <View style={styles.menuList}><Text style={styles.menuListText}>Result</Text><Image style={styles.arrowForward} source={arrowForward}/></View>
          <View style={styles.menuList}><Text style={styles.menuListText}>Syllabus</Text><Image style={styles.arrowForward} source={arrowForward}/></View>
          {/* <View style={styles.menuList}><Text style={styles.menuListText}>Time Tables</Text><Image style={styles.arrowForward} source={arrowForward}/></View> */}
          <View style={styles.menuList}><Text style={styles.menuListText}>Exam schedules</Text><Image style={styles.arrowForward} source={arrowForward}/></View>
          <View style={styles.menuList}><Text style={styles.menuListText}>Readmission Fees</Text><Image style={styles.arrowForward} source={arrowForward}/></View>
          {/* <View style={styles.menuList}><Text style={styles.menuListText}>Academic Calendar</Text><Image style={styles.arrowForward} source={arrowForward}/></View> */}
          <View style={styles.menuList}><Text style={styles.menuListText}>Feedback</Text><Image style={styles.arrowForward} source={arrowForward}/></View>
          <View style={styles.menuList}><Text style={styles.menuListText}>Log Out</Text><Image style={styles.arrowForward} source={arrowForward}/></View>
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
    width: '86%',
    padding: 7,
    borderBottomWidth: 2,
    borderColor: '#858585',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menuListText:{
    fontSize: 18,
    fontWeight: 500,
  },
  arrowForward:{
    height: 16,
    width: 16,
  }
})