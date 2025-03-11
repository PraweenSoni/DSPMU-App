import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Modal } from 'react-native';
import Notices from "../components/Notices";
import NoticePre from '../components/NoticePre';

function Notice() {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const notices = [
    { title: 'Notice 1', message: 'This is the first notice', date: '10/12' },
    { title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, blanditiis! rergegegv', message: 'This is the first notice', date: '10/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
    { title: 'Notice 2', message: 'This is the second notice', date: '11/12' },
  ];


  const handleNoticePress = (notice) => {
    setSelectedNotice(notice);
    setModalVisible(true);
  };

  return (
    <View style={{padding: '3%'}}>
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