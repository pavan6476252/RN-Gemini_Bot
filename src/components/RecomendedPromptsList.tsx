import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppSelector} from '../store/hooks';
import {selectTheme} from '../store/slice/theme.slice';

type RecomendedScripts = {
  title: String;
  logo: string;
  scripts: string[];
};

const RecomendedPromptsList: React.FC = () => {
  const colors = useAppSelector(selectTheme).colors;
  const data: RecomendedScripts[] = [
    {
      title: 'Explain',
      logo: require('../assets/explain.png'),
      scripts: ['Explain quantum physics', 'Explain the theory of relativity'],
    },
    {
      title: 'Write and Edit',
      logo: require('../assets/edit-2.png'),
      scripts: ['Write a short story', 'Edit an essay', 'Write a short story'],
    },
    {
      title: 'Translate',
      logo: require('../assets/translate.png'),
      scripts: [
        'Translate a paragraph to French',
        'Translate a poem to Spanish',
        'Write a short story',
      ],
    },
  ];

  const RenderScript = (scr: string,idx:Number) => (
    <TouchableOpacity
      key={idx.toString()}
      style={[styles.scriptItem, {backgroundColor: colors.secondary}]}>
      <Text style={styles.scriptText}>{scr}</Text>
    </TouchableOpacity>
  );

  const RenderRecomendation = ({logo, scripts, title}: RecomendedScripts) => (
    <View style={styles.recommendationContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo as ImageSourcePropType} />
        <Text style={[styles.logoText, {color: colors.onBackground}]}>
          {title}
        </Text>
      </View>
      <View style={styles.scriptList}>{scripts.map(RenderScript)}</View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {data.map(d => (
        <RenderRecomendation key={d.logo} {...d} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  recommendationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    gap: 5,
  },
  logoText: {
    fontSize: 16,
    fontWeight: '500',
  },
  scriptList: {
    width: '100%',
    margin: 5,
  },
  scriptItem: {
    padding: 10,
    width: '100%',
    borderRadius: 30,
    marginBottom: 10,
  },
  scriptText: {
    color: '#333',
    textAlign: 'center',
  },
});

export default RecomendedPromptsList;
