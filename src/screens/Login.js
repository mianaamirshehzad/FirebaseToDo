import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import CustomButton from '../components/CustomButton';
// import auth from '@react-native-firebase/auth';
import CustomInput from '../components/CustomInput';

const Login = (props) => {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const loginWithEmail = () => {
    Alert.alert("pressed")
  };
  return (
    <View style={GlobalStyles.globalContainer}>
      <View style={styles.cornerTop}>
        <Image
          source={require('../assets/images/corner.png')}
          style={GlobalStyles.corner}
        />
      </View>
      <View style={styles.cornerbottom}>
        <Image
          source={require('../assets/images/corner.png')}
          style={GlobalStyles.corner}
        />
      </View>
      <Image
        source={require('../assets/images/login.jpg')}
        style={GlobalStyles.image}
      />
      {/* <View  style={styles.container} > */}
      <Text style={GlobalStyles.title}>Welcome back</Text>
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
      <TouchableOpacity style={styles.forgot} onPress={() => props.navigation.navigate('Forgot')} >
        <Text>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <CustomButton
        name="Login"
        onPress={() => loginWithEmail()}
      />
      <View style={{ flexDirection: 'row', padding: 15 }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')} >
          <Text style={styles.boldText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  forgot: {
    // right: 40,
    padding: 5,
    alignItems: 'flex-end',
    marginLeft: 'auto',
    marginRight: 40,
  },
  cornerTop: {
    left: -50,
    top: -50,
    position: 'absolute',
  },
  cornerbottom: {
    right: -50,
    bottom: -50,
    position: 'absolute',
  },
});

export default Login;