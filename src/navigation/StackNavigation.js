import React, {  } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SpendingLimit from '../screens/DebitCard/SpendingLimit';
import TabNavigator from './TabNavigation';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="SpendingLimit" component={SpendingLimit} />
      </Stack.Navigator>
  );
}
  
  export default StackNavigator
