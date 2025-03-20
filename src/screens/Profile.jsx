import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, BackHandler } from "react-native";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUserData } from "../services/apiService";
import arrowForward from '../../assets/arrowForward.png';
import userImg from '../../assets/user.png';

import Feedback from '../screens/profileSecPages/Feedback';
import ReAddmission from "./profileSecPages/ReAddmission";
import Start from "./Start";

function Profile() {
  const [currentPage, setCurrentPage] = useState("profile");
  
  const [studentName, setStudentName] = useState('');
  const [studentSubject, setStudentSubject] = useState('');
  const [studentDepart, setStudentDepart] = useState('');
  
  useEffect(() => {
    const loadUserProfile = async () => {
      const data = await fetchUserData("stuDetails/stuDetails");
      if (data && data.user) {  
        setStudentName(data.user.name || "N/A");
        setStudentSubject(data.user.subject || "N/A");
        setStudentDepart(data.user.department || "N/A");
      }
    };
  
    loadUserProfile();
  }, []);
  
  // Handle Android Back Button Press
  useEffect(() => {
    const backAction = () => {
      if (currentPage !== "profile") {
        setCurrentPage("profile"); // Go back to Profile instead of exiting app
        return true; // Prevent app from closing
      }
      return false; // Allow default behavior when on Profile
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, [currentPage]);

  // Render different pages based on `currentPage`
  if (currentPage === "reAddmission") return <ReAddmission goBack={() => setCurrentPage("profile")} />;
  if (currentPage === "feedback") return <Feedback goBack={() => setCurrentPage("profile")} />;
  if (currentPage === "start") return <Start />; // Redirect to Start page on Logout

  return (
    <View style={{ height: '100%', alignItems: 'center', top: 80 }}>
      <Text style={{ fontSize: 30, fontWeight: '600', marginBottom: 20 }}>DSPMU, Ranchi</Text>
      <Image style={styles.userImg} source={userImg} />
      <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: '500' }}>{studentName}</Text>
        <Text style={{ fontSize: 18 }}>{studentSubject}</Text>
        <Text style={{ fontSize: 18 }}>{studentDepart}</Text>
      </View>
      <View style={styles.menu}>
        {/* Edit Profile Request */}
        <TouchableOpacity>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Edit Profile Request</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>

        <View style={styles.menuList}><Text style={styles.menuListText}>Result</Text><Image style={styles.arrowForward} source={arrowForward} /></View>
        <View style={styles.menuList}><Text style={styles.menuListText}>Syllabus</Text><Image style={styles.arrowForward} source={arrowForward} /></View>
        <View style={styles.menuList}><Text style={styles.menuListText}>Exam schedules</Text><Image style={styles.arrowForward} source={arrowForward} /></View>

        {/* ReeAddmission Fees */}
        <TouchableOpacity onPress={() => setCurrentPage("reAddmission")}>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Readmission Fees</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>

        {/* Feedback */}
        <TouchableOpacity onPress={() => setCurrentPage("feedback")}>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Feedback</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity onPress={() => setCurrentPage("start")}>
          <View style={styles.menuList}>
            <Text style={styles.menuListText}>Log Out</Text>
            <Image style={styles.arrowForward} source={arrowForward} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
