import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchUserData } from "../services/apiService";
import arrowForward from '../../assets/arrowForward.png';
import userImg from '../../assets/user.png';

const Profile = (props) => {
  const [studentName, setStudentName] = useState('N/A');
  const [studentSubject, setStudentSubject] = useState('N/A');
  const [studentDepart, setStudentDepart] = useState('N/A');

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const userDetails = await AsyncStorage.getItem("userDetails");
        if (!userDetails) {
          props.navigation.replace("Start");
          return;
        }
        
        const userData = JSON.parse(userDetails);
        setStudentName(userData.user.name);
        setStudentSubject(userData.user.subject);
        setStudentDepart(userData.user.department);

      } catch (error) {
        console.error("Error loading user profile:", error);
      }
    };

    loadUserProfile();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("userDetails");
      props.navigation.replace("Start"); 
    } catch (error) {
      Alert.alert("Logout Failed", "Something went wrong. Please try again.");
    }
  };

  return (
    <View style={{ height: '100%', alignItems: 'center', top: 40 }}>
      <Text style={{ fontSize: 30, fontWeight: '600', marginBottom: 20 }}>DSPMU, Ranchi</Text>
      <Image style={styles.userImg} source={userImg} />
      <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: '500' }}>{studentName}</Text>
        <Text style={{ fontSize: 18 }}>{studentSubject}</Text>
        <Text style={{ fontSize: 18 }}>{studentDepart}</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Edit Profile Request</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Result</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Syllabus</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Exam schedules</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('ReAddmission')}>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Readmission Fees</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Other')}>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Other</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate('Feedback')}>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Feedback</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.menuList}>
            <Text style={[styles.menuListText, { color: "red" }]}>Log Out</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  userImg: {
    height: 150,
    width: 150,
    borderWidth: 2,
    borderRadius: 100,
  },
  menu: {
    position: 'absolute',
    top: '45%',
    left: '7%',
    width: '100%'
  },
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
    fontWeight: '500',
  },
  arrowForward: {
    height: 16,
    width: 16,
  }
});
