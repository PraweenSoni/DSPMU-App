import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Timetable = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM'
  ];

  const timetable = {
    Monday: ['Math', 'Physics', 'Chemistry', 'Lab'],
    Tuesday: ['Biology', 'Math', 'History'],
    Wednesday: ['Computer Science', 'Math', 'Physics'],
    Thursday: ['Math', 'Biology', 'Chemistry', 'Lab'],
    Friday: ['Chemistry', 'English', 'Physics'],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {days.map((day) => (
          <View key={day} style={styles.headerItem}>
            <Text style={styles.headerText}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.body}>
        {timeSlots.map((slot, index) => (
          <View key={slot} style={styles.row}>
            {days.map((day) => (
              <View key={day} style={styles.cell}>
                <Text style={styles.cellText}>{timetable[day][index]}</Text>
                <Text style={styles.slotText}>{slot}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4CAF50',
    padding: 10,
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  slotText: {
    fontSize: 12,
    color: '#666',
  },
});

export default Timetable;
