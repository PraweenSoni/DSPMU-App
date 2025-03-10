import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import arrowForward from '../../assets/arrowForward.png';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    setDaysInMonth(days);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const renderDay = (day) => {
    const today = new Date();
    const isToday =
      today.getDate() === day.getDate() &&
      today.getMonth() === day.getMonth() &&
      today.getFullYear() === day.getFullYear();
    
    return (
      <TouchableOpacity key={day} style={[styles.day, isToday && styles.today]}>
        <Text style={[styles.dayText, isToday && styles.today]}>{day.getDate()}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.month}>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.NxtMnthBtn} onPress={handlePrevMonth}>
            <Image source={arrowForward} style={{height: 25, width: 25}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.NxtMnthBtn} onPress={handleNextMonth}>
            <Image source={arrowForward} style={{height: 25, width: 25}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 5, marginBottom: 5}}>
        <Text style={styles.calendarDays}>Mo</Text>
        <Text style={styles.calendarDays}>Tu</Text>
        <Text style={styles.calendarDays}>We</Text>
        <Text style={styles.calendarDays}>Th</Text>
        <Text style={styles.calendarDays}>Fr</Text>
        <Text style={styles.calendarDays}>Sa</Text>
        <Text style={styles.calendarDays}>Su</Text>
      </View>
      <View style={styles.calendar}>
        {daysInMonth.map((day) => renderDay(day))}
      </View>
      <View style={{borderWidth: 1, padding: 5, marginTop: 10, borderRadius: 4, borderColor: '#DDD'}}>
        <Text style={{fontSize: 16}}>No Notice from college</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 5,
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  NxtMnthBtn: {
    height: 40,
    width: 40,
    borderRadius: 7,
    backgroundColor: '#ee4a62',
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  calendarDays: {
    fontSize: 20,
    // borderWidth : 1,
    width: 46,
    textAlign: 'center',
    fontWeight: 600
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5
  },
  day: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  today: {
    backgroundColor: '#ee4a62',
    color: '#fff'
  },
  dayText: {
    color: '#000',
    fontSize: 16
  },
});

export default Calendar;
