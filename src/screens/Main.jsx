import { useEffect, useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import Calendar from '../components/Calendar';
import Timetable from '../components/TimeTable';
import NoticePre from '../components/NoticePre';
import Notices from '../components/Notices';
import { fetchUserData } from '../services/apiService';

import userImg from '../../assets/user.png';
import facebook from '../../assets/socialMediaIcons/facebook.png';
import linkedin from '../../assets/socialMediaIcons/linkedin.png';
import twitter from '../../assets/socialMediaIcons/twitter.png';
import instagram from '../../assets/socialMediaIcons/instagram.png';
import youtube from '../../assets/socialMediaIcons/youtube.png';

const FormBox = ({ num, formName, color }) => (
  <View style={styles.formDetail}>
    <Text style={[styles.formNumText, { color }]}>{num}</Text>
    <Text>{formName}</Text>
  </View>
);

const Main = () => {
  const navigation = useNavigation();
  const [studentName, setStudentName] = useState('');
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [attendance, setAttendance] = useState({ tclsrun: 'N/A', clspre: 'N/A', tlabrun: 'N/A', labpre: 'N/A' });

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;
      
      const userData = await fetchUserData("stuDetails/stuDetails", token);
      setStudentName(userData?.user?.name || "Name Not Found!");
    })();
  }, []);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('http://192.168.24.28:3000/api/notice/');
        const data = await response.json();
  
        if (!data.Notice) {
          console.error("No notices found!");
          return;
        }
  
        // Filter notices for "User" department
        const formattedNotices = data.Notice
          .filter((notice) => notice.department === "BSC CA")
          .map((notice) => ({
            title: notice.noticeTitle,
            message: notice.noticeMsg,
            date: new Date(notice.date).toLocaleDateString(),
          }));
  
        setNotices(formattedNotices);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
  
    fetchNotices();
  }, []);  

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      const data = await fetchUserData("stuPresent/stuPresent", token);
      if (data?.user) {
        setAttendance({
          tclsrun: data.user.tclsrun || "N/A",
          clspre: data.user.clspre || "N/A",
          tlabrun: data.user.tlabrun || "N/A",
          labpre: data.user.labpre || "N/A",
        });
      }
    })();
  }, []);

  return (
    <ScrollView>
      <View style={styles.userDetail}>
        <View>
          <Text>DSPMU, Ranchi</Text>
          <Text style={styles.greeting}>Hi, {studentName}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}> 
          <Image style={styles.userImg} source={userImg} />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate("Notice")}> 
        <Text style={styles.noticeHeader}>View All Notices</Text>
      </TouchableOpacity>
      
      <ScrollView nestedScrollEnabled style={styles.noticeSec}>
        {notices.map((notice, index) => (
          <Notices key={index} {...notice} onPress={() => {
            setSelectedNotice(notice);
            setModalVisible(true);
          }} />
        ))}
      </ScrollView>
      
      {selectedNotice && (
        <Modal animationType="slide" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <NoticePre {...selectedNotice} onClose={() => setModalVisible(false)} />
          </View>
        </Modal>
      )}
      
      <Timetable />
      <Calendar />
      
      <View style={styles.parentFormBox}>
        <FormBox num={attendance.clspre} formName="CLASS PRESENT" color="#1ab69d" />
        <FormBox num={attendance.tclsrun} formName="TOTAL CLASS RUN" color="#ee4a62" />
        <FormBox num={attendance.labpre} formName="LAB PRESENT" color="#8e56ff" />
        <FormBox num={attendance.tlabrun} formName="TOTAL LAB RUN" color="#f8941f" />
      </View>
      
      <View style={styles.contactSec}>
        <Text style={styles.contactTitle}>Dr. Shyama Prasad Mukherjee University, Ranchi</Text>
        <Text>Add: P.O. - Ranchi University, Morabadi, Ranchi-834008</Text>
        <Text>Call: +91 860 304 ****</Text>
        <Text>Email: regi****@dspmuranchi.ac.in</Text>
        <View style={styles.socialIcons}>
          {[facebook, instagram, youtube, linkedin, twitter].map((icon, index) => (
            <Image key={index} style={styles.socialMediaImg} source={icon} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  userDetail: { flexDirection: 'row', justifyContent: 'space-between', margin: 10 },
  greeting: { fontWeight: '500' },
  userImg: { borderWidth: 2, borderRadius: 100, height: 42, width: 42 },
  noticeHeader: { fontSize: 16, marginBottom: 10, marginStart: 10 },
  noticeSec: { marginLeft: 10, maxHeight: 250 },
  parentFormBox: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'center' },
  formDetail: { height: 80, width: '45%', borderRadius: 7, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ededed' },
  formNumText: { fontSize: 22, fontWeight: '700' },
  contactSec: { marginTop: 10, marginStart: 20 },
  contactTitle: { fontWeight: '500' },
  socialIcons: { flexDirection: 'row', marginVertical: 10 },
  socialMediaImg: { height: 28, width: 28, marginHorizontal: 5 },
});