import React from 'react';
import { TouchableOpacity , SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigation from '../components/Navigation';

//pointing to navigator in the touchableopacity components using props.
const CompExampleScreen = ({ navigation }) => {
    return (
        <View style = {styles.container}>
        <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogInScreen')}>
          <Text style={styles.buttonText}>Auth System using REST</Text>
        </TouchableOpacity>
          </View>
          <View>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Packages used (Info)</Text>
        </TouchableOpacity>
          </View>
          
        </View>
    )
}


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

export default CompExampleScreen;