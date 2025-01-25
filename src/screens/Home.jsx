import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Main from './Main';
import Login from './Login';
import Notice from './Notices';
import Course from './Course';
import Profile from './Profile';

const Home = () => {
    const [page, setPage] = useState(0);
  return (
    <View style={{height: "100%"}}>
        <View>
            {page === 0 && <Login />}
            {page === 1 && <Notice />}
            {page === 2 && <Course />}
            {page === 3 && <Profile />}
        </View>
        <View style={styles.nav}>
            <Pressable onPress={()=> setPage(0)} style={styles.navBtn}>
                <Text style={[styles.navBtnTxt, page === 0 ? {color: '#1ab69d'} : null]}>Home</Text>
            </Pressable>
            <Pressable onPress={()=> setPage(1)} style={styles.navBtn}>
                <Text style={[styles.navBtnTxt, page === 1 ? {color: '#1ab69d'} : null]}>Notice</Text>
            </Pressable>
            <Pressable onPress={()=> setPage(2)} style={styles.navBtn}>
                <Text style={[styles.navBtnTxt, page === 2 ? {color: '#1ab69d'} : null]}>Course</Text>
            </Pressable>
            <Pressable onPress={()=> setPage(3)} style={styles.navBtn}>
                <Text style={[styles.navBtnTxt, page === 3 ? {color: '#1ab69d'} : null]}>Profile</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    nav:{
        position: "absolute",
        bottom: 0,
        width: "100%",
        border: 1,
        backgroundColor: '#ee4a62',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    navBtn:{
        height: 40,
        justifyContent: 'center',
    },
    navBtnTxt:{
        fontSize: 16,
        color: '#fff',
        fontWeight: 600,
    }
})