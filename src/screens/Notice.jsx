import { Text, View } from "react-native";
import Notices from "../components/Notices";

function Notice() {
  return (
    <View style={{paddingStart: '4%', padding: '2%'}}>
          <Text style={{fontWeight: 500, marginBottom: 20}}>Notice page</Text>
          <Notices />
          <Notices />
          <Notices />
          <Notices />
    </View>
  )
}

export default Notice;