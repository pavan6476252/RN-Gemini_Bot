import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import React from 'react';
import ChatScreen from '../screens/chat/ChatScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} >
        <DrawerItem {...props}>
            <Text>dsfd</Text>
        </DrawerItem>
      </DrawerItemList>
      
      
    </DrawerContentScrollView>
  );
};

const HomeDrawerNavigator = (props: any) => {
  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawerContent {...props}  />}>
      <Drawer.Screen name="chat" component={ChatScreen} />
    </Drawer.Navigator>
  );
};

export default HomeDrawerNavigator;
