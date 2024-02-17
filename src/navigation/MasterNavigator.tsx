import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from '../screens/splash/SplashScreen';
import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import {useSelector} from 'react-redux';
import {SerializableUser, login, selectUser} from '../store/slice/auth.slice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import HomeDrawerNavigator from './HomeDrawerNavigator';

const Stack = createNativeStackNavigator();

const MasterNavigator = () => {
  const isAuthenticated = useAppSelector(selectUser);
  const [splashShown, setSplashShown] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashShown(false);
    }, 2000);
  }, []);

  if (splashShown) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MasterNavigator;
