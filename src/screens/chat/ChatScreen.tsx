import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import RecomendedPromptsList from '../../components/RecomendedPromptsList';
import { useAppSelector } from '../../store/hooks';
import { selectTheme } from '../../store/slice/theme.slice';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatScreen = () => {
  const colors = useAppSelector(selectTheme).colors;

  return (
    <View style={styles.container}>
      <RecomendedPromptsList />

      {/* Prompt input box */}
      <View style={[styles.chatInput, { backgroundColor: colors.background }]}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="image" size={20} color={colors.primary} />
        </TouchableOpacity>

        <TextInput
          placeholder="Hello gemini, how are you??"
          placeholderTextColor={colors.primary}
          style={[styles.input, { color: colors.onBackground }]}
        />

        <TouchableOpacity style={styles.icon}>
          <Icon name="microphone" size={20} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <Icon name="send" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
  icon: {
    padding: 8,
  },
});

export default ChatScreen;
