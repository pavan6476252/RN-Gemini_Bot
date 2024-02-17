import React, {useState} from 'react';
import {Image, StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import Logo from '../../assets/logo_png.png';
import {selectTheme} from '../../store/slice/theme.slice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import OnboardingImage from '../../assets/onboarding.png';
import CustomButton from '../../components/CustomButton';
import {
  selectUser,
  signInWithGoogleAsync,
  selectLoading,
  selectError,
} from '../../store/slice/auth.slice';

const LoginScreen = () => {
  const theme = useAppSelector(selectTheme);
  const user = useAppSelector(selectUser);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  async function signInwithGoogleHandler() {
    setIsLoading(true);
    await dispatch(signInWithGoogleAsync());
    setIsLoading(false);
  }

  return (
    <View style={[style.container]}>
      <View style={style.header}>
        <Text style={[style.title, {color: theme.colors.primary}]}>
          You Ai Assistant
        </Text>
        <Text style={[style.subtitle, {color: theme.colors.onBackground}]}>
          Using this software,you can ask you questions and receive articles
          using artificial intelligence assistant
        </Text>
      </View>
      <Image source={OnboardingImage} />
       
       
      
      {error && <Text style={{color: 'red'}}>{error}</Text>}
      <View style={style.button}>
        <CustomButton
          title={'Continue with Google'}
          onTap={signInwithGoogleHandler}
          disabled={isLoading}
          isLoading ={isLoading}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: {fontSize: 25},
  button: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 28,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
  },
});

export default LoginScreen;
