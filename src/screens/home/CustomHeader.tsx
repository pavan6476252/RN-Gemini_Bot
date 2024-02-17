import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import imagePath from '../../assets/logo_png.png';
import {selectTheme} from '../../store/slice/theme.slice';
import {useAppSelector} from '../../store/hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  props: NativeStackHeaderProps;
  title?: String;
  openDrawer: () => void;
}

const CustomHeader = ({props, openDrawer, title = 'Gemini'}: Props) => {
  const colors = useAppSelector(selectTheme).colors;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      {/* Leading image */}
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="bars" size={20} color={colors.onPrimary} />
      </TouchableOpacity>

      {/* Title */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <Image
          source={imagePath}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
        <Text
          style={{fontSize: 18, fontWeight: '500', color: colors.onPrimary}}>
          {title}
        </Text>
      </View>

      {/* Action buttons */}
      <View style={{flexDirection: 'row'}}>
        {/* Speak button */}
        <TouchableOpacity onPress={() => {}} style={{marginRight: 10}}>
          <Icon name="volume-up" size={20} color={colors.onPrimary} />
          {/* Share icon */}
        </TouchableOpacity>

        {/* Share button */}
        <TouchableOpacity onPress={() => {}}>
          <Icon name="share-alt" size={20} color={colors.onPrimary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
