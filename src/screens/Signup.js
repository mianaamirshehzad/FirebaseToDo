import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React, { useState, useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import app from '../firebase';
// import auth from '@react-native-firebase/auth';


const Signup = (props) => {

  // const auth = getAuth(app);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const creatingUser = () => {
    // auth()
    //   .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
    //   .then(() => {
    //     console.log('User account created & signed in!');
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }
    //     console.error(error);
    //   });
  };

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

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
        source={require('../assets/images/signup.jpg')}
        style={GlobalStyles.image}
      />
      {/* <View  style={styles.container} > */}
      <Text style={GlobalStyles.title}>Fill up and register your account</Text>
      <CustomInput
        placeholder="Name"
        onChangeText={(text) => setName(text)} />
      <CustomInput
        onChangeText={(text) => setEmail(text)}
        placeholder="Email" />
      <CustomInput
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true} />
      <CustomInput
        onChangeText={(text) => setConfirmPass(text)}
        placeholder="Confirm Password"
        secureTextEntry={true} />
      <CustomButton
        name="Register Now"
        onPress={() => creatingUser()} />
      <View style={{ flexDirection: 'row', padding: 15 }}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Login")} >
          <Text style={styles.boldText}>Login</Text>
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

export default Signup;