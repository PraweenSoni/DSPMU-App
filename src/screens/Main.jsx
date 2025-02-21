import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Calendar from '../components/Calendar';
import Timetable from '../components/TimeTable';

import userImg from '../../assets/user.png';
import facebook from '../../assets/socialMediaIcons/facebook.png';
import linkedin from '../../assets/socialMediaIcons/linkedin.png';
import twitter from '../../assets/socialMediaIcons/twitter.png';
import instagram from '../../assets/socialMediaIcons/instagram.png';
import youtube from '../../assets/socialMediaIcons/youtube.png';
import Notices from '../components/Notices';

const FormBox = ({num, formName, color}) => {
  return(
    <View style={styles.formDetail}>
      <Text style={[styles.formNumText, { color: color }]}>{num}</Text>
      <Text>{formName}</Text>
    </View>
  );
};

function Main() {
  return (
    <ScrollView>
      <View style={styles.userDetail}>
        <View>
          <Text>DSPMU, Ranchi</Text>
          <Text style={{fontWeight: 500}}>Hi, User</Text>
        </View>
        <Image style={styles.userImg} source={userImg}/>
      </View>
      <ScrollView nestedScrollEnabled={true} style={styles.noticeSec}>
        {/* <notice Box for all departement /> */}
        <Notices />
        <Notices />
        <Notices />
        <Notices />
        <Notices />
        <Notices />
        <Notices />
      </ScrollView>
      <View>
        <Timetable />
        {/* <TimeTable /> search morden design */}
        <Calendar />
        {/* <academic calander also display/>using morden calander style like google calander */}
      </View>
      <View style={{alignItems: 'center'}}>
        <FormBox num={811} formName="FORM DEMAND" color="#1ab69d"/>
        <FormBox num={537} formName="TOTAL FORM SALE" color="#ee4a62"/>
        <FormBox num={468} formName="FORM FILLUP" color="#8e56ff"/>
        <FormBox num={779} formName="TOTAL ADMISSION" color="#f8941f"/>
      </View>
      <View style={styles.contactSec}>
        <Text style={[styles.contactSecD, {fontWeight: 500}]}>Dr. Shyama Prasad Mukherjee University, Ranchi</Text>
        <Text style={styles.contactSecD}><Text style={{fontWeight: 500}}>Add : </Text>P.O. - Ranchi University Morabadi, Ranchi-834008</Text>
        <Text style={styles.contactSecD}><Text style={{fontWeight: 500}}>Call : </Text>+91 860 304 ****</Text>
        <Text style={styles.contactSecD}><Text style={{fontWeight: 500}}>Email : </Text>regi****@dspmuranchi.ac.in</Text>
        <View style={styles.contactSecD}>
          <Image style={styles.socialMediaImg} source={facebook}/>
          <Image style={styles.socialMediaImg} source={instagram}/>
          <Image style={styles.socialMediaImg} source={youtube}/>
          <Image style={styles.socialMediaImg} source={linkedin}/>
          <Image style={styles.socialMediaImg} source={twitter}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default Main;

const styles = StyleSheet.create({
  userDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    margin: 10
  },
  userImg: {
    borderWidth: 1,
    borderRadius: 100,
    height: 42,
    width: 42,
  },
  noticeSec: {
    marginLeft: 10,
    maxHeight: 250,
  },
  contactSec: {
    marginStart: 20
  },
  contactSecD: {
    marginVertical: 1,
    flexDirection: 'row'
  },
  socialMediaImg: {
    marginEnd: 1,
    height: 28,
    width: 28,
  },
  formDetail:{
    height:80,
    width: 280,
    borderRadius: 7,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8'
  },
  formNumText:{
    fontSize: 22,
    fontWeight: 700
  }
})