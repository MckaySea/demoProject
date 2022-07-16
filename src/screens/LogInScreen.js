import React from 'react';
import {TouchableOpacity , StyleSheet ,Button, TextInput, Text, View } from 'react-native';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import { AuthContext } from '../components/context';

//setting the state and value of email and password /updating
const LogInScreen = ({ navigation })=> {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const { signIn } = React.useContext(AuthContext);

    const onLoginPressed = () => {
       // navigation.navigate('LogInScreen');
    }
    const onRegisterPress = () => {
       // navigation.navigate('RegisterScreen');
    }
    return (
        <View style ={styles.container}> 
        <View style ={styles.wrapborder}>
            <TextInput style= {styles.input}
             placeholder = "Enter registered username"
             value={username}
             setValue={setUsername}
             onChangeText={(text) => setUsername(text)}/>

            <TextInput style = {styles.input} 
            placeholder = "Enter registered Password" secureTextEntry 
            value={password}
            setValue={setPassword}
            onChangeText={(text) => setPassword(text)}/>

            <Button title ="Login" onPress={() => {signIn()}  }/>

            <View>
      <TouchableOpacity onPress={onRegisterPress}>
          <Text style ={styles.textColor}>Register test account here</Text>
        </TouchableOpacity>
          </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapborder: {
        width: '80%',

    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 14,   
    },
    textColor: {
        color: 'purple',
    }
});
export default LogInScreen;