import { Image, StyleSheet, Text, View } from 'react-native';
import arrowForward from '../../assets/arrowForward.png';

function Nav({name}) {
    return (
        <View style={styles.menuList}><Text style={styles.menuListText}>{name}</Text><Image style={styles.arrowForward} source={arrowForward} /></View>
    )
}

export default Nav;

const styles = StyleSheet.create({
    menuList: {
        width: '86%',
        padding: 7,
        borderBottomWidth: 2,
        borderColor: '#858585',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuListText: {
        fontSize: 18,
        fontWeight: 500,
    },
    arrowForward: {
        height: 16,
        width: 16,
    }
})