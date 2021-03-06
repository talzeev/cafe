import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, NavigationEvents } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RoomsScreen from '../screens/RoomsScreen';
import TrendingScreen from '../screens/TrendingScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingsScreen from '../screens/SettingsScreen';


const HomeStack = createStackNavigator({
  screen: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    tintColor: '#333',
    activeTintColor: '#aaa',
    style: {
    backgroundColor: '#0b0c17' // TabBar background
  }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : ''}`
          : 'md-home'
      }
    />
  ),
};

const RoomsStack = createStackNavigator({
  screen: RoomsScreen,
});

RoomsStack.navigationOptions = {
  header:{
    title: "Profile"
  },
  tabBarLabel: 'My Rooms',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    tintColor: '#333',
    activeTintColor: '#aaa',
  style: {
    backgroundColor: '#0b0c17' // TabBar background
  }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cafe' : 'md-cafe'}
    />
  ),
};

const TrendingStack = createStackNavigator({
  screen: TrendingScreen,
});

TrendingStack.navigationOptions = {
  tabBarLabel: 'Today',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    tintColor: '#333',
    activeTintColor: '#aaa',
  style: {
    backgroundColor: '#0b0c17' // TabBar background
  }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
    />
  )
}

const NotificationStack = createStackNavigator({
  screen: NotificationScreen,
});

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    tintColor: '#333',
    activeTintColor: '#aaa',
  style: {
    backgroundColor: '#0b0c17' // TabBar background
  }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'}
    />
  )
}

const SettingsStack = createStackNavigator({
  screen: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    tintColor: '#F8F8F8',
    activeTintColor: '#F8F8F8',
    style: {
      backgroundColor: '#0b0c17' // TabBar background
  }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  RoomsStack,
  TrendingStack,
  NotificationStack,
  SettingsStack,
},
{
  navigationOptions: {
    title: 'Screen title',
  },
});
