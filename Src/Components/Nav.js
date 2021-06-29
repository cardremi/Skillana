import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Features/Login';
import BottomNav from './BottomNav';
import JobDetail from '../Features/JobDetail.';
import { Store } from '../Store/Store';
import { color } from 'react-native-elements/dist/helpers';
const Stack = createStackNavigator();

const Nav = () => {
  const { isLogin } = Store.getState().dataReducer;
  return (
    <Stack.Navigator initialRouteName={isLogin ? "BottomNav" : "Login"} >
      <Stack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={BottomNav}
        name="BottomNav"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={JobDetail}
        name="JobDetail"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Nav;
