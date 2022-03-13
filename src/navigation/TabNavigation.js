import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  } from "react-native";
import Payments from "../screens/Payments/Payments";
import Profile from "../screens/Profile/Profile";
import DebitCard from "../screens/DebitCard/DebitCard";
import Credit from "../screens/Credit/Credit";
import Home from "../screens/Home/Home";
import { GRAY, PRIMARY } from "../utils/Constants";
import { AppIcons } from "../assets/images/ImageData";
import SpendingLimit from "../screens/DebitCard/SpendingLimit";



const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const DebitCardStack = createStackNavigator();
function DebitCardStackScreen() {
  return (
    <DebitCardStack.Navigator screenOptions={{ headerShown: false}}>
      <DebitCardStack.Screen name="DebitCard" component={DebitCard} />
    </DebitCardStack.Navigator>
  );
}

const CreditStack = createStackNavigator();
function CreditStackScreen() {
  return (
    <CreditStack.Navigator screenOptions={{ headerShown: false}}>
      <CreditStack.Screen name="Credit" component={Credit} />
    </CreditStack.Navigator>
  );
}

const PaymentsStack = createStackNavigator();
function PaymentsStackScreen() {
  return (
    <PaymentsStack.Navigator screenOptions={{ headerShown: false}}>
      <PaymentsStack.Screen name="Appointment" component={Payments} />
    </PaymentsStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor : PRIMARY,
          tabBarInactiveTintColor: GRAY,
          tabBarLabelStyle: {bottom: 5},
          tabBarIcon: ({focused}) => (
            focused ? AppIcons.logo : AppIcons.logoGray
          ),
        }} />
        <Tab.Screen name="DebitCardStack" component={DebitCardStackScreen} options={{
          tabBarLabel: 'Debit Card',
          tabBarActiveTintColor : PRIMARY,
          tabBarInactiveTintColor: GRAY,
          tabBarLabelStyle: {bottom: 5},
          tabBarIcon: ({ focused }) => (
            focused ? AppIcons.debitCard : AppIcons.debitCardGray
          ),
        }}/>
        <Tab.Screen name="PaymentsStack" component={PaymentsStackScreen} options={{
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor : PRIMARY,
          tabBarLabelStyle: {bottom: 5},
          tabBarLabel: 'Payments',
          tabBarIcon: ({ focused }) => (
            focused ? AppIcons.payment : AppIcons.paymentGray
          ),
        }}/>
        <Tab.Screen name="CreditStack" component={CreditStackScreen} options={{
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor : PRIMARY,
          tabBarLabelStyle: {bottom: 5},
          tabBarLabel: 'Credit',
          tabBarIcon: ({ focused }) => (
            focused ? AppIcons.creditCard : AppIcons.creditCardGray
            ),
        }}/>
        <Tab.Screen name="ProfileStack" component={ProfileStackScreen} options={{
          tabBarInactiveTintColor: GRAY,
          tabBarActiveTintColor : PRIMARY,
          tabBarLabelStyle: {bottom: 5},
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            focused ? AppIcons.user : AppIcons.userGray
          ),
        }}/>
      </Tab.Navigator>
  );
}
