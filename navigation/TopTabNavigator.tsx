/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Fontisto } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { TopTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

export default function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ 
          activeTintColor: Colors[colorScheme].background,
          style: {
            backgroundColor: Colors[colorScheme].tint,
            
       
          },
          indicatorStyle: {
            backgroundColor: Colors[colorScheme].background,
            height: 4,
          },
          labelStyle: {
            fontWeight: 'bold',

          }, 
          showIcon: true,
          
        }}>
      <TopTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" size={22} color={color} />,
          tabBarLabel: () => null
        }}
      />
      <TopTab.Screen
        name="Chats"
        component={TabTwoNavigator}
    
      />
            <TopTab.Screen
        name="Status"
        component={TabTwoNavigator}
    
      />
            <TopTab.Screen
        name="Calls"
        component={TabTwoNavigator}
    
      />
    </TopTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Camera"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Chats"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
