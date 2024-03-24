import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useTheme } from '../Theme/ThemeContext';
import { Fontisto, Feather, Ionicons } from '@expo/vector-icons';

const TypeMessage = ({ value, onChangeText }) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  const styles = StyleSheet.create(myStyles(theme));

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Type message"
          placeholderTextColor={theme.lightText}
          onChangeText={onChangeText}
          value={value}
          style={[textStyles.lightText, { flex: 1, color: theme.normalText }]}
        />
        <Fontisto name="smiley" size={20} color={theme.lightText} />
        <Feather name="camera" size={20} color={theme.lightText} />
      </View>
      <View style={styles.sendBtn}>
        <Ionicons name="paper-plane-outline" size={20} color={theme.white} />
      </View>
    </View>
  );
};

export default TypeMessage;

const myStyles = theme => ({
  container: {
    backgroundColor: theme.white,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.greishBackground,
    borderRadius: 7,
    padding: 7,
    paddingHorizontal: 10,
    gap: 10,
    flex: 1,
  },
  sendBtn: {
    height: 40,
    width: 40,
    borderRadius: 7,
    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
