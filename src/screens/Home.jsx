import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from './Main';
import Notice from './Notice';
import Other from './Other';
import ProfileNavigator from './ProfileNavigator';

const HomeStack = createNativeStackNavigator();

const Home = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem("userToken");
            if (!token) {
                // props.navigation.replace("Login"); 
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    // if (loading) return <ActivityIndicator size="large" color="blue" style={{ flex: 1 }} />;

    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Main'>
            <HomeStack.Screen name="Main" component={Main} />
            <HomeStack.Screen name="Profile" component={ProfileNavigator} />
            <HomeStack.Screen name="Notice" component={Notice} />
            <HomeStack.Screen name="Other" component={Other} />
        </HomeStack.Navigator>
    );
};

export default Home;
