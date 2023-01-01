import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Constants from './src/Constans';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetails from './src/Components/MovieDetails';
import Profil from './src/Components/profil';
import daftar from './src/Components/Daftar';
import EditProfil from './src/Components/EditProfil';
import PrivacyPolicy from './src/Components/PrivacyPolicy';
const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="Explore" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="My List" component={Home} options={{headerShown:false}} />
      <Tab.Screen name="Profil" component={Profil} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Home" component={MainApp} options={headerStyle}/>
        <Stack.Screen
          name="movieDetails"
          component={MovieDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Edit Profil" component={EditProfil} options={headerStyle} options={{headerShown:false}}/>
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} options={headerStyle} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  title : 'Movies',
  headerStyle : {backgroundColor :Constants.baseColor},
  headerTitleStyle : {color : Constants.textColor},
  headerLeft : () => <Icon name='notifications' size={25} color={Constants.textColor}/>,
  headerRight : () => <Icon name='search' size={25} color={Constants.textColor}/>,
}

export default App;