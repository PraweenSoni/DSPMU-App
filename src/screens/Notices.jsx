import { StyleSheet, Text, View } from "react-native";

function Profile() {
  return (
    <View style={{paddingStart: '4%', padding: '2%'}}>
      <Text style={{fontWeight: 500, marginBottom: 20}}>Notice page</Text>
        <View style={styles.notice}>
          <Text style={styles.noticeDate}>12/01</Text>
          <View>
            <Text style={styles.noticeHead}>Notice Heading lorem.</Text>
            <Text style={styles.noticeDetail}>Notice Some Details</Text>
          </View>
        </View>
        <View style={styles.notice}>
          <Text style={styles.noticeDate}>12/01</Text>
          <View>
            <Text style={styles.noticeHead}>Notice Heading</Text>
            <Text style={styles.noticeDetail}>Notice Some Details</Text>
          </View>
        </View>
        <View style={styles.notice}>
          <Text style={styles.noticeDate}>12/01</Text>
          <View>
            <Text style={styles.noticeHead}>Notice Heading</Text>
            <Text style={styles.noticeDetail}>Notice Some Details</Text>
          </View>
        </View>
        <View style={styles.notice}>
          <Text style={styles.noticeDate}>12/01</Text>
          <View>
            <Text style={styles.noticeHead}>Notice Heading</Text>
            <Text style={styles.noticeDetail}>Notice Some Details</Text>
          </View>
        </View>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  notice:{
    flexDirection: 'row',
    marginBottom: 10
  },
  noticeDate:{
    marginEnd: '4%',
    height: 50,
    width: 50,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 100,
    textAlignVertical: 'center',
    paddingStart: 6
  },
  noticeHead:{
    fontWeight: 500,
  },
  noticeDetail:{

  }
})