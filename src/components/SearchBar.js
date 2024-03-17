import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { useTheme } from '../Theme/ThemeContext';
import Feather from 'react-native-vector-icons/dist/Feather';

const SearchBar = ({
  plceholder,
  onChangeText,
  value,
  style,
  rightAligned, // align the icon to the right and the text to the left
}) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  const styles = StyleSheet.create(myStyles(theme, rightAligned));

  return (
    <View style={[styles.container, style]}>
      <Feather name="search" size={20} color={theme.greishBackground} />
      <TextInput
        placeholder={plceholder}
        placeholderTextColor={theme.greishBackground}
        onChangeText={onChangeText}
        value={value}
        style={[textStyles.lightText, { flex: 1, color: theme.normalText }]}
      />
    </View>
  );
};

export default SearchBar;

const myStyles = (theme, rightAligned) => ({
  container: {
    backgroundColor: theme.fieldsBack,
    borderRadius: 10,
    padding: 1,
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: rightAligned ? 'row-reverse' : 'row',
    justifyContent: rightAligned ? 'space-between' : 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
});
