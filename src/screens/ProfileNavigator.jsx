import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './Profile';
import Other from "./Other";
import ReAddmission from "./profileSecPages/ReAddmission";
import Feedback from "./profileSecPages/Feedback";

const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: true, headerStyle: {
            paddingHorizontal: 10, // Adds padding to the entire header
        },
        headerTitleStyle: {
            marginLeft: -25, // Adjust for spacing between title and arrow
            fontSize: 18, // Optional: Customize the font size for better alignment
        },
        headerLeftContainerStyle: {
            paddingLeft: 0, // Fine-tune back arrow's alignment
        },
        headerBackTitleVisible: false, }} initialRouteName="Profile">
            <ProfileStack.Screen name="Profile" component={Profile} />
            <ProfileStack.Screen name="Other" component={Other} />
            <ProfileStack.Screen name="ReAddmission" component={ReAddmission} />
            <ProfileStack.Screen name="Feedback" component={Feedback} />
        </ProfileStack.Navigator>
    );
};

export default ProfileNavigator;
