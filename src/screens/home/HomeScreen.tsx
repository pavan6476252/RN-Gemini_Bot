import {View, Text, TouchableOpacity, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {selectUser, signOutAsync} from '../../store/slice/auth.slice';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Drawer} from 'react-native-drawer-layout';
import AppDrawer from '../../components/AppDrawer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CustomHeader from './CustomHeader';
import RecomendedPromptsList from '../../components/RecomendedPromptsList';
import { ScrollView } from 'react-native-gesture-handler';
import ChatScreen from '../chat/ChatScreen';

// interface Props{
//   navigation :NavigationProp
// }
type HomeScreenNavigationProp = NativeStackNavigationProp<
  ParamListBase,
  'Home'
>;

// Define the props type for the HomeScreen component
type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [open, setOpen] = React.useState(false);

  function handleSignOut() {
    dispatch(signOutAsync());
  }

  useEffect(() => {
    navigation.setOptions({
      header: props => (
        <CustomHeader openDrawer={() => setOpen(true)} props={props} />
      ),
    });
  }, []);
  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <AppDrawer />;
      }}>
      
       <ChatScreen/>
    </Drawer>
  );
};

export default HomeScreen;
