import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Modal } from 'react-native';
import Notices from "../components/Notices";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoticePre from '../components/NoticePre';

function Notice() {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchNotices = async () => {
      const token = AsyncStorage.getItem("token");
      try {
        const response = await fetch('http://192.168.24.28:3000/api/notice/', token);
        const data = await response.json();

        if (!data.Notice) {
          console.error("No notices found!");
          return;
        }

        const Notice = data.Notice.map((notice) => ({
          title: notice.noticeTitle,
          message: notice.noticeMsg,
          department: notice.department,
          date: new Date(notice.date).toLocaleDateString(),
        }));
        setNotices(Notice);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  const handleNoticePress = (notice) => {
    setSelectedNotice(notice);
    setModalVisible(true);
  };

  return (
    <View style={{ padding: '3%' }}>
      <ScrollView>
        {notices.map((notice, index) => (
          <Notices
            key={index}
            title={notice.title}
            message={notice.message}
            date={notice.date}
            onPress={() => handleNoticePress(notice)}
          />
        ))}
      </ScrollView>

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
              department={selectedNotice.department}
              onClose={() => setModalVisible(false)}
            />
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Notice;
