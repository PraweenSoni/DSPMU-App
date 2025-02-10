import { Image, StyleSheet, Text, View } from 'react-native';
import facebook from '../../assets/socialMediaIcons/facebook.png';
import linkedin from '../../assets/socialMediaIcons/linkedin.png';
import twitter from '../../assets/socialMediaIcons/twitter.png';
import instagram from '../../assets/socialMediaIcons/instagram.png';
import youtube from '../../assets/socialMediaIcons/youtube.png';

function Main() {
  return (
    <View>
      <Text> Home page</Text>
      <View>
        <Text>Dr. Shyama Prasad Mukherjee University</Text>
        <Text><Text>Add :</Text>P.O. - Ranchi University Morabadi, Ranchi-834008</Text>
        <Text><Text>Call :</Text>+91 860 304 ****</Text>
        <Text><Text>Email :</Text>regi****@dspmuranchi.ac.in</Text>
        <View style={{flexDirection:'row'}}>
          <Image style={styles.userImg} source={facebook}/>
          <Image style={styles.userImg} source={instagram}/>
          <Image style={styles.userImg} source={youtube}/>
          <Image style={styles.userImg} source={linkedin}/>
          <Image style={styles.userImg} source={twitter}/>
        </View>
        <Text>Designed & Build by PKS</Text>
      </View>
    </View>
  )
}

export default Main;

const styles = StyleSheet.create({
  userImg: {
    marginStart: 1
  },
})