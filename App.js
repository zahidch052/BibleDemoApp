import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from './src/Screens/FirstScreen/FirstScreen';
import {StyleSheet, Text, View, Image} from 'react-native';
import StorageBook from './src/Screens/FavoriteBook/StorageBook';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;

      //     if (route.name === 'FirstScreen') {
      //       iconName = focused ? 'home' : 'home-outline';
      //     } else if (route.name === 'StorageBook') {
      //       iconName = focused ? 'heart' : 'heart-outline';
      //     }

      //     // You can return any component that you like here!
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      // })}
      // tabBarOptions={{
      //   activeTintColor: 'red',
      //   inactiveTintColor: 'black',
      // }}
      // initialRouteName="Home">
      >
        <Tab.Screen
          name="Home"
          component={FirstScreen}
          options={{
            tabBarIcon: ({focused}) => {
              const image = focused
                ? require('./src/assets/homeBlue.png')
                : require('./src/assets/home.png');

              return focused ? (
                <View
                  style={{
                    borderTopColor: 'white',
                    borderTopWidth: 0,
                    // borderBottomRadius: 4,
                  }}>
                  <Image
                    source={image}
                    style={{marginVertical: 8, height: 21, width: 24}}
                  />
                </View>
              ) : (
                <View style={{borderTopWidth: 0}}>
                  <Image
                    source={image}
                    style={{marginVertical: 8, height: 21, width: 23}}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={StorageBook}
          options={{
            tabBarIcon: ({focused}) => {
              const image = focused
                ? require('./src/assets/heartBlue.png')
                : require('./src/assets/heart.png');

              return focused ? (
                <View
                  style={{
                    borderTopColor: 'white',
                    borderTopWidth: 0,
                    // borderBottomRadius: 4,
                  }}>
                  <Image
                    source={image}
                    style={{marginVertical: 8, height: 21, width: 24}}
                  />
                </View>
              ) : (
                <View style={{borderTopWidth: 0}}>
                  <Image
                    source={image}
                    style={{marginVertical: 8, height: 21, width: 23}}
                  />
                </View>
              );
            },
          }}

          // options={{
          //   tabBarLabel: 'Favorite',
          //   tabBarIcon: ({color, size}) => (
          //     <Icon name="heart" color={color} size={size} />
          //   ),
          // }}
        />
      </Tab.Navigator>
      {/* <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="StorageBook"
          component={StorageBook}
          options={{headerShown: true}}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
// });

export default App;
