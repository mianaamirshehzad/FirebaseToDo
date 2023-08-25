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
import CustomView from '../components/CustomView';
import {getAuth, signOut} from 'firebase/auth';
import app from '../firebase';

const Home = props => {
  const auth = getAuth(app);

  const signoutAccount = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.')
        props.navigation.navigate('Login');
      })
      .catch(error => {
        // An error happened.

      });
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
      <CustomView
        name="My Day"
        source={require('../assets/images/sun-shining.png')}
      />
      <CustomView
        name="Favourite"
        source={require('../assets/images/star.png')}
      />
      <CustomView
        name="Tasks"
        source={require('../assets/images/clipboard.png')}
        onPress={() => props.navigation.navigate('Tasks')}
      />
      <View style={styles.bottom}>
        <CustomButton onPress={() => signoutAccount()}
        name = 'Sign-out' />
      </View>
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
  bottom: {
    width: '40%',
    position: 'absolute',
    bottom: 10,
  },
});

export default Home;
