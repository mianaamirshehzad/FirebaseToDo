import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase';

const Signup = props => {
  const auth = getAuth(app);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const creatingUser = () => {
    try {
      if (password === confirmPass) {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log('Signup success!');
          props.navigation.navigate('Home')
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      } else {
        Alert.alert('Password do not match')
      }
    } catch (error) {
      console.log(error);
    }
    setConfirmPass(null);
    setPassword(null);
    setEmail(null);
    setName(null);
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
        source={require('../assets/images/signup.jpg')}
        style={GlobalStyles.image}
      />
      {/* <View  style={styles.container} > */}
      <Text style={GlobalStyles.title}>Fill up and register your account</Text>
      <CustomInput 
      value = {name}
      placeholder="Name" onChangeText={text => setName(text)} />
      <CustomInput 
      onChangeText={text => setEmail(text)} placeholder="Email"
      value = {email}/>
      <CustomInput
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
        value = {password}
      />
      <CustomInput
        onChangeText={text => setConfirmPass(text)}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value = {confirmPass}
      />
      <CustomButton name="Register Now" onPress={() => creatingUser()} />
      <View style={{flexDirection: 'row', padding: 15}}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.boldText}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </View>
  );
};

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
