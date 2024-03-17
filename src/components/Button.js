import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { useTheme } from '../Theme/ThemeContext';

const Button = ({
  style,
  ICON,
  text,
  onPress,
  transparent,
  textStyle,
  loading = false,
  disabled = false,
  loaderColor,
}) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;

  return (
    <TouchableOpacity
      disabled={loading || disabled}
      android_ripple={{ color: '#EEEEEE' }}
      onPress={onPress || null}
      style={[
        styles.container,
        {
          backgroundColor: !transparent ? theme.primary : 'transparent',
          borderColor: theme.primary,
        },
        style,
      ]}>
      {ICON && !loading && <ICON />}
      {text && !loading && (
        <Text
          style={[
            textStyles.text,
            {
              color: transparent ? theme.primary : theme.white,
              marginHorizontal: ICON ? 10 : 0,
            },
            textStyle,
          ]}>
          {text}
        </Text>
      )}
      {loading && <ActivityIndicator color={loaderColor || '#fff'} size="small" />}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 10,
  },
});
