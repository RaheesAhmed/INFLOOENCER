import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../Theme/ThemeContext';

const InterestItem = ({ id, ICON, name, selected, style, onPress }) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  return (
    <Pressable onPress={() => onPress(id)} style={[styles.container, style]}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: selected ? theme.primary : theme.white,
            borderColor: selected ? theme.primary : theme.lightBoder,
          },
        ]}>
        <ICON size={40} color={selected ? theme.white : theme.primary} />
      </View>
      <Text
        style={[
          textStyles.lightText,
          {
            color: theme.lightHeading,
            textAlign: 'center',
            minWidth: 75,
            maxWidth: 75,
          },
        ]}>
        {name}
      </Text>
    </Pressable>
  );
};

export default InterestItem;

const styles = StyleSheet.create({
  container: {
    gap: 2,
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 10,
    borderWidth: 1,
  },
});
