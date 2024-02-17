import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {Drawer} from 'react-native-drawer-layout';
import {ScrollView} from 'react-native-gesture-handler';
import { useAppDispatch } from '../store/hooks';
import { signOutAsync } from '../store/slice/auth.slice';

const AppDrawer = () => {
  const dispatch = useAppDispatch();

    
  function handleSignOut() {
    dispatch(signOutAsync());
  }
  return (
    <ScrollView>
      <Button onPress={handleSignOut} title="Singout"></Button>
    </ScrollView>
  );
};

export default AppDrawer;
