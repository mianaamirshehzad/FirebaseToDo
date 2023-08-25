import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';
import Home from '../screens/Home';
import FavouriteTasks from '../screens/FavouriteTasks';
import EditTask from '../screens/EditTask';
import Tasks from '../screens/Tasks';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FavouriteTasks"
          component={FavouriteTasks}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditTask"
          component={EditTask}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
