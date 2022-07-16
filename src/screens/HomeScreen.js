import React from 'react';
import { SafeAreaView ,StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigation from '../components/Navigation';

//contains main navigation menu
const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style = {styles.container}>
        <View>
      <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('ResumeScreen')}>
          <Text style={styles.buttonText}>About Me</Text>
        </TouchableOpacity>
          </View>
          { <View>
      <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('CompExampleScreen')}>
          <Text style={styles.buttonText}>  Demonstrations of React Native systems</Text>
        </TouchableOpacity>
          </View>
          /*<View>
      <TouchableOpacity style={styles.buttons} onPress={buttonOne}>
          <Text style={styles.buttonText}>GitHub</Text>
        </TouchableOpacity>
          </View> */}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#aa5050',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttons: {
      width:'50%',
      flexDirection: 'column',
      margin: 25,
      alignItems: "center",
      backgroundColor: "#c2d6d3",
      borderRadius: 2,
      borderWidth: 1,
      borderColor: 'black',
      padding: 15,
    },
    buttonText: {
      alignItems: "center",
      backgroundColor: "#c2d6d3",
      padding: 10,
    },
  });
export default HomeScreen;