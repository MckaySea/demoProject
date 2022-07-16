import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import LogInScreen from './LogInScreen';
import RegisterScreen from './RegisterScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (

    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="LogInScreen" component={LogInScreen}/>
        <RootStack.Screen name="RegisterScreen" component={RegisterScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;