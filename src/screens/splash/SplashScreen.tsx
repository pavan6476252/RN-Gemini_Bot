import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Logo from '../../assets/logo_png.png';
import {selectTheme} from '../../store/slice/theme.slice';
import {useAppSelector} from '../../store/hooks';
import OnboardingImage from '../../assets/onboarding.png';
import CustomButton from '../../components/CustomButton';

const SplashScreen = () => {

const theme = useAppSelector(selectTheme);

return (
  <View style={[style.container,{ backgroundColor:theme.colors.primary}]}>
    <Image source={Logo} style={style.image} />
  </View>
);
};

const style = StyleSheet.create({
container: {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
image: {},
});

export default SplashScreen;
