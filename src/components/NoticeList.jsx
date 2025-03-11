// components/NoticeList.js
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Modal } from 'react-native';
import Notice from './Notices';
import NoticePre from './NoticePre';

const NoticeList = () => {
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const notices = [
    { title: 'Notice 1', message: 'This is the first notice', date: '2025-03-10' },
    { title: 'Notice 2', message: 'This is the second notice', date: '2025-03-11' },
    // Add more notices here
  ];

  const handleNoticePress = (notice) => {
    setSelectedNotice(notice);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {notices.map((notice, index) => (
          <Notice
            key={index}
            title={notice.title}
            message={notice.message}
            date={notice.date}
            // onPress={() => handleNoticePress(notice)}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default NoticeList;
