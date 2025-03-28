import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './Profile';
import Other from "./Other";
import ReAddmission from "./profileSecPages/ReAddmission";
import Feedback from "./profileSecPages/Feedback";

const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: true, animation : 'ios_from_right', headerStyle:{backgroundColor: '#1ab69d'}, headerTintColor: '#fff'}} initialRouteName="Profile">
            <ProfileStack.Screen name="Profile" component={Profile} />
            <ProfileStack.Screen name="Other" component={Other} />
            <ProfileStack.Screen name="ReAddmission" component={ReAddmission} />
            <ProfileStack.Screen name="Feedback" component={Feedback} options={{title: "Feedback From", }}/>
        </ProfileStack.Navigator>
    );
};

export default ProfileNavigator;
