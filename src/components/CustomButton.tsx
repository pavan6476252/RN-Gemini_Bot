import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {useAppSelector} from '../store/hooks';
import {selectTheme} from '../store/slice/theme.slice';

interface Props {
  title: String;
  onTap?: (event: GestureResponderEvent) => void;
  disabled?: Boolean;
  isLoading?: Boolean;
}
const CustomButton = ({
  title,
  onTap,
  disabled = false,
  isLoading = false,
}: Props) => {
  const theme = useAppSelector(selectTheme);

  return (
    <TouchableOpacity
      onPress={onTap}
      style={[
        style.button,
        {
          backgroundColor: disabled
            ? theme.colors.primaryVarient
            : theme.colors.primary,
        },
        !isLoading && {justifyContent: 'center'},
      ]}>
      {isLoading && <View />}
      <Text
        style={[
          style.text,
          {color: theme.colors.onPrimary},
          {color: disabled ? theme.colors.primary : theme.colors.secondary},
        ]}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator size="large" color={isLoading ? theme.colors.primary : theme.colors.onPrimary} />
      )}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    margin: 10,
    paddingHorizontal: 10,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 35,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.5,
    paddingVertical: 10,
  },
});

export default CustomButton;
