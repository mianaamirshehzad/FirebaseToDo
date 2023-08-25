import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, KeyboardAvoidingView, Keyboard, TextInput, TouchableOpacity, Button } from "react-native";
import { Provider } from "react-redux";
import store from './src/redux/Store';
import Tasks from './src/screens/Tasks';
import FavouriteTasks from './src/screens/FavouriteTasks';
import MyStack from './src/navigation';


export default function App() {

  return (
    <Provider store={store}>
      {/* <FavouriteTasks />  */}
      {/* <Tasks /> */}
      <MyStack />
      
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
