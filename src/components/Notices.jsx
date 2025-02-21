import { StyleSheet, Text, View } from "react-native";

function Notices() {
  return (
    <View style={styles.notice}>
      <Text style={styles.noticeDate}>12/01</Text>
      <View>
        <Text style={styles.noticeHead}>Notice Heading lorem.</Text>
        <Text style={styles.noticeDetail}>Notice Some Details</Text>
      </View>
    </View>
  )
}

export default Notices;

const styles = StyleSheet.create({
  notice: {
    flexDirection: 'row',
    marginBottom: 10
  },
  noticeDate: {
    marginEnd: '4%',
    height: 50,
    width: 50,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  noticeHead: {
    fontWeight: 500,
  },
  noticeDetail: {

  }
})