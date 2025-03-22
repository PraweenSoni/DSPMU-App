import { useEffect, useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Calendar from '../components/Calendar';
import Timetable from '../components/TimeTable';
import NoticePre from '../components/NoticePre';
import { fetchUserData } from '../services/apiService';

import userImg from '../../assets/user.png';
import facebook from '../../assets/socialMediaIcons/facebook.png';
import linkedin from '../../assets/socialMediaIcons/linkedin.png';
import twitter from '../../assets/socialMediaIcons/twitter.png';
import instagram from '../../assets/socialMediaIcons/instagram.png';
import youtube from '../../assets/socialMediaIcons/youtube.png';
import Notices from '../components/Notices';
import { useNavigation } from '@react-navigation/native';

const FormBox = ({ num, formName, color }) => {
  return (
    <View style={styles.formDetail}>
      <Text style={[styles.formNumText, { color: color }]}>{num}</Text>
      <Text>{formName}</Text>
    </View>
  );
};

function Main() {
  // Login user name fetch
  const navigation = useNavigation();
  const [studentName, setStudentName] = useState('');
  useEffect(() => {
    const loadUserProfile = async () => {
      const data = await fetchUserData("stuDetails/stuDetails");
      if (data && data.user) {
        setStudentName(data.user.name);
      } else {
        setStudentName("Name Not found!");
      }
    };

    loadUserProfile();
  }, []);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Fetch Notices from server 
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('http://192.168.89.28:3000/api/cNotifi/');
        const data = await response.json();

        // Extract and map API data to fit the expected format
        const formattedNotices = data.commanNotification.map((notice) => ({
          title: notice.cNotifiTitle,
          message: notice.cNotifiMsg,
          date: new Date(notice.date).toLocaleDateString(), // Format date as desired
        }));

        setNotices(formattedNotices);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  const handleNoticePress = (notice) => {
    setSelectedNotice(notice);
    setModalVisible(true);
  };

  // Code for Student present in class & lab
  const [tclsrun, setTclsrun] = useState('');
  const [clspre, setClspre] = useState('');
  const [tlabrun, setTlabrun] = useState('');
  const [labpre, setLabpre] = useState('');

  useEffect(() => {
    const loadStudentPreDetail = async () => {
      const data = await fetchUserData("stuPresent/stuPresent");
      if (data) {
        setTclsrun(data.user.tclsrun);
        setClspre(data.user.clspre);
        setTlabrun(data.user.tlabrun);
        setLabpre(data.user.labpre);
      } else {
        setTclsrun("N/A");
        setClspre("N/A");
        setTlabrun("N/A");
        setLabpre("N/A");
      }
    };

    loadStudentPreDetail();
  }, []);

  return (
    <ScrollView>
      <View style={styles.userDetail}>
        <View>
          <Text>DSPMU, Ranchi</Text>
          <Text style={{ fontWeight: 500 }}>Hi, {studentName}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image style={styles.userImg} source={userImg} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Notice")}>
        <Text style={{ fontSize: 16, marginBottom: 10, marginStart: 10 }}>View All Notices </Text>
      </TouchableOpacity>
      <ScrollView nestedScrollEnabled={true} style={styles.noticeSec}>
        {/* <notice Box for all departement /> */}
        {notices.map((notice, index) => (
          <Notices
            key={index}
            title={notice.title}
            message={notice.message}
            date={notice.date}
            onPress={() => handleNoticePress(notice)}
          />
        ))}
        {selectedNotice && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <NoticePre
                title={selectedNotice.title}
                message={selectedNotice.message}
                date={selectedNotice.date}
                onClose={() => setModalVisible(false)}
              />
            </View>
          </Modal>
        )}
      </ScrollView>
      <View>
        <Timetable />
        <Calendar />
      </View>
      <View style={styles.parentFormBox}>
        <FormBox num={clspre} formName="CLASS PRESENT" color="#1ab69d" />
        <FormBox num={tclsrun} formName="TOTAL CLASS RUN" color="#ee4a62" />
        <FormBox num={labpre} formName="LAB PRESENT" color="#8e56ff" />
        <FormBox num={tlabrun} formName="TOTAL LAB RUN" color="#f8941f" />
      </View>
      <View style={styles.contactSec}>
        <Text style={[styles.contactSecD, { fontWeight: 500 }]}>Dr. Shyama Prasad Mukherjee University, Ranchi</Text>
        <Text style={styles.contactSecD}><Text style={{ fontWeight: 500 }}>Add : </Text>P.O. - Ranchi University Morabadi, Ranchi-834008</Text>
        <Text style={styles.contactSecD}><Text style={{ fontWeight: 500 }}>Call : </Text>+91 860 304 ****</Text>
        <Text style={styles.contactSecD}><Text style={{ fontWeight: 500 }}>Email : </Text>regi****@dspmuranchi.ac.in</Text>
        <View style={styles.contactSecD}>
          <Image style={styles.socialMediaImg} source={facebook} />
          <Image style={styles.socialMediaImg} source={instagram} />
          <Image style={styles.socialMediaImg} source={youtube} />
          <Image style={styles.socialMediaImg} source={linkedin} />
          <Image style={styles.socialMediaImg} source={twitter} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Main;

const styles = StyleSheet.create({
  userDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  userImg: {
    borderWidth: 2,
    borderRadius: 100,
    height: 42,
    width: 42,
  },
  noticeSec: {
    marginLeft: 10,
    maxHeight: 250,
  },
  parentFormBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  formDetail: {
    height: 80,
    width: '45%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ededed'
  },
  formNumText: {
    fontSize: 22,
    fontWeight: 700
  },
  contactSec: {
    marginTop: 10,
    marginStart: 20
  },
  contactSecD: {
    marginVertical: 1,
    flexDirection: 'row'
  },
  socialMediaImg: {
    marginEnd: 1,
    height: 28,
    width: 28,
    marginBottom: 10
  },

})