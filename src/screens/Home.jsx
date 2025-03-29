import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator, StatusBar } from 'react-native';

import Main from './Main';
import Notice from './Notice';
import Other from './Other';
import ProfileNavigator from './ProfileNavigator';

const HomeStack = createNativeStackNavigator();

const Home = (props) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const token = await AsyncStorage.getItem("token");
            if (token) {
                setIsAuthenticated(true);
            } else {
                props.navigation.replace("Login");
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }

    if (!isAuthenticated) return null; // Prevents rendering if not authenticated

    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false , statusBarBackgroundColor: "#1ab69d"}} initialRouteName='Main'>
            <HomeStack.Screen name="Main"  component={Main} />
            <HomeStack.Screen name="ProfileN" component={ProfileNavigator} />
            <HomeStack.Screen name="Notice" options={{headerShown: true, headerStyle:{backgroundColor: "#1ab69d"}, headerTintColor: "#fff"}}  component={Notice} />
            <HomeStack.Screen name="Other" component={Other} />
        </HomeStack.Navigator>
    );
};

export default Home;
