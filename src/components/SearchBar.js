import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { useTheme } from '../Theme/ThemeContext';
import { AntDesign } from '@expo/vector-icons';
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
      <AntDesign name="search1" size={15} color="black" />
      <TextInput
        placeholder={plceholder}
        placeholderTextColor={theme.normalText}
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
    backgroundColor: theme.greishBackground,
    borderRadius: 10,
    padding: 7,
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: rightAligned ? 'row-reverse' : 'row',
    justifyContent: rightAligned ? 'space-between' : 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
});
