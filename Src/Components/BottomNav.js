import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../Features/Home';
import JobPage from '../Features/JobPage';
import ModalLog from '../Components/ModalLog';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ms} from 'react-native-size-matters';
const Tab = createMaterialBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator activeColor="blue" inactiveColor="#D0D0D0" barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={ms(20)} />
          ),
        }}
      />
      <Tab.Screen
        name="JobPage"
        component={JobPage}
        options={{
          tabBarLabel: 'Job Vacancies',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="suitcase" color={color} size={ms(20)} />
          ),
        }}
      />
      <Tab.Screen
        name="ModalLog"
        component={ModalLog}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="logout" color={color} size={ms(20)} />
          ),
          
        }}
      />
    </Tab.Navigator>
  );
}
