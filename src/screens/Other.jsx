import { Text, View } from "react-native";
import Nav from "../components/Nav";

function Other() {
  return (
    <View style={{marginHorizontal: 'auto', marginTop: 50}}>
        <Nav name="Other"/>
        <Nav name="Teacher Blogs"/>
        <Nav name="Facilities"/>
        <Nav name="Facilityes"/>
    </View>
  )
}

export default Other;