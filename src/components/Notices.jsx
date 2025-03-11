import { View, Text, TouchableOpacity, StyleSheet, Touchable } from 'react-native';

function Notices({ title, message, date, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.notice}>
        <Text style={styles.noticeDate}>{date}</Text>
        <View>
          <Text style={styles.noticeTitle}>{title}</Text>
          <Text>{message}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  noticeTitle: {
    fontWeight: 500,
  },
})