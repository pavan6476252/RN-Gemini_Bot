import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {Text} from 'react-native';
import OnBoardingScreen from './src/screens/onboarding/OnBoardingScreen';
import SplashScreen from './src/screens/splash/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import MasterNavigator from './src/navigation/MasterNavigator';
import {useAppDispatch} from './src/store/hooks';
import {SerializableUser, login} from './src/store/slice/auth.slice';
import auth from '@react-native-firebase/auth';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

function App() {
  // useEffect(() => {

  //   GoogleSignin.configure({
  //     webClientId:
  //       '374164567677-1a0ikbvgblgumdcrltodgrtb0k7j6su0.apps.googleusercontent.com',
  //     offlineAccess: true,
  //   });
  // }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <OnBoardingScreen />
        <SplashScreen/> */}
        <Initialization />
      </NavigationContainer>
    </Provider>
  );
}

export default App;


const Initialization = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      console.log('AUTH CHANGED', user);
      if (user) {
        const serializedUser: SerializableUser = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,

          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          providerId: user.providerId,
          uid: user.uid,
        };

        dispatch(login(serializedUser));
      }
    });
    return () => unsubscribe();
  }, []);
  return <MasterNavigator />;
};
