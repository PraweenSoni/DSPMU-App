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
        {/* <FormBox /> */}
      </View>
      <View style={styles.contactSec}>
        <Text style={[styles.contactSecD, {fontWeight: 500}]}>Dr. Shyama Prasad Mukherjee University</Text>
        <Text style={styles.contactSecD}><Text style={{fontWeight: 500}}>Add : </Text>P.O. - Ranchi University Morabadi, Ranchi-834008</Text>
        <Text style={styles.contactSecD}><Text style={{fontWeight: 500}}>Call : </Text>+91 860 304 ****</Text>
        <Text style={styles.contactSecD}><Text style={{fontWeight: 500}}>Email : </Text>regi****@dspmuranchi.ac.in</Text>
        <View style={styles.contactSecD}>
          <Image style={styles.userImg} source={facebook}/>
          <Image style={styles.userImg} source={instagram}/>
          <Image style={styles.userImg} source={youtube}/>
          <Image style={styles.userImg} source={linkedin}/>
          <Image style={styles.userImg} source={twitter}/>
        </View>
      </View>
    </View>
  )
}

export default Main;

const styles = StyleSheet.create({
  contactSec: {
    marginStart: 20
  },
  contactSecD: {
    marginVertical: 1,
    flexDirection: 'row'
  },
  userImg: {
    marginEnd: 1,
    height: 28,
    width: 28,
  },
})

// function FormBox(num, formName){
//   return(
//     <View>
//       <Text>${num}</Text>
//       <Text>${formName}</Text>
//     </View>
//   )
// }