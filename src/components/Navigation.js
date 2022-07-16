import React, { useEffect } from 'react';

import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

import ResumeScreen from '../screens/ResumeScreen';

import CompExampleScreen from '../screens/CompExampleScreen';

import LogInScreen from '../screens/LogInScreen';

import RegisterScreen from '../screens/RegisterScreen';

import DummyLogIn from '../screens/DummyLogIn'

import { ActivityIndicator } from 'react-native';

import { AuthContext } from './context';
import RootStackScreen from '../screens/RootStackScreen';


//options= {{headerShown: false}} 
//NavigationContainer handles all the screens and which component they point to.
//https://reactnavigation.org/docs/getting-started/ for documentation on setting up react navigation. Super useful and easy to use.
const Stack = createNativeStackNavigator(); 

const Navigation = () => {
    //const [isLoading, setIsLoading] = React.useState(true)
    //const [userToken, setUserToken] = React.useState(null);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
      };
    
      const loginReducer = (prevState, action) => {
        switch( action.type) {
            case 'RETRIEVE_TOKEN':
            return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
                
            };
            case 'LOGIN':
            return {
                ...prevState,
                userName: action.id,
                userToken: action.token,
                isLoading: false,
            };
            case 'LOGOUT':
            return {
                ...prevState,
                userName: null,
                userToken: null,
                isLoading: false,
            };

            case 'REGISTER':
            return {
                ...prevState,
                userName: action.id,
                userToken: action.token,
                isLoading: false,
            };
        }
      }
      const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

    const authContext = React.useMemo(() => ({
        signIn: (userName, password) => {
            let userToken;
            userName = null;
            if(userName == 'test' && password == 'pass' ) {
                userToken = 'rerere'
            }
            dispatch({type: 'LOGIN', id: userName, token: userToken});
        },
        signOut: () => {
            dispatch({type: 'LOGOUT', id: userName, token: userToken});
        },
        signUp: () => {
            setUserToken('radsd')
            setIsLoading(false);
        },

    }), []);
    useEffect(() => {
        setTimeout (() => {
            dispatch({type: 'RETRIEVE_TOKEN', token: 'rfdf'});
            //setIsLoading(false);
        }, 1000);
        }, []);
    
    if ( loginState.isLoading ) {
        return(
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size="large" />
            </View>
        );
    }
    return (
        
    // normally would stack only essential screens in unlogged users but for sake of demonstration and ease of use we'll stack all on both logged and unlogged.
        <AuthContext.Provider value={authContext}>
        <NavigationContainer> 
            {loginState.userToken == null ? ( 
                <Stack.Navigator>
                <Stack.Screen name ="DummyLogin" component={DummyLogIn} />
                <Stack.Screen name ="Home" component={HomeScreen}  />
                <Stack.Screen name ="CompExampleScreen" component={CompExampleScreen} />
                 </Stack.Navigator>
                 )

                 :
                <RootStackScreen />
}
        </NavigationContainer>
        </AuthContext.Provider>
    )
}
export default Navigation;