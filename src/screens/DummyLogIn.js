import React from 'react';
import {TouchableOpacity , StyleSheet ,Button, TextInput, Text, View } from 'react-native';
import Navigation from '../components/Navigation';
import { AuthContext } from '../components/context';

const DummyLogIn = ( { navigation }) => {
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style = {styles.container}>
        <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogInScreen')}>
          <Text style={styles.buttonText}>Auth System using REST</Text>
        </TouchableOpacity>
          </View>
          <View>
      <TouchableOpacity style={styles.button} onPress={() => {signOut()}  }>
          <Text style={styles.buttonText}>Packages used (Info)</Text>
        </TouchableOpacity>
        <Button title ="Login" onPress={() => {signOut()}  }/>

          </View>
          
        </View>
    );

};

const styles = StyleSheet.create( {
    button: {
        width:'50%',
        margin: 100,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection:'column',
        backgroundColor: "#4747eb",
       // borderRadius: '15',
       // borderColor: 'red',
        padding: 15,
    },
    container: {
        flex: 1,
        backgroundColor:'#dfa4a4'
    },

    })

export default DummyLogIn;