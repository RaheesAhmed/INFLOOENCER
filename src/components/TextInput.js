import { StyleSheet, TextInput, View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useTheme } from '../Theme/ThemeContext';

const InputField = ({
  value,
  placeholder,
  onChangeText,
  postTextLogo,
  postTextLogoClick,
  PreTextLogo,
  passwordType,
  logoColor,
  disabled = false,
  error = false,
  postLogo,
  ...props
}) => {
  // TODO: Do placeholder animation
  const animation = useRef(new Animated.Value(0)).current; // animation value initial value is 0
  const [showPassword, setShowPassword] = React.useState(false);
  const { theme: colors, globalStyles } = useTheme();
  const { textStyles } = globalStyles;

  const handlePostLogoClick = () => {
    if (passwordType) {
      setShowPassword(!showPassword);
    }
    if (postTextLogoClick) {
      postTextLogoClick();
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderBottomWidth: 1.5,
          borderBottomColor: error ? colors.error : colors.border,
        },
        props.style,
      ]}>
      {PreTextLogo && <PreTextLogo />}
      <TextInput
        editable={!disabled}
        style={[
          { flex: 1, marginLeft: PreTextLogo ? 10 : 0, color: 'black' },
          textStyles.text,
          { fontWeight: '400' },
          props.inputStyle,
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={passwordType && !showPassword}
        value={value}
        placeholderTextColor={colors.placeholderColor}
      />
      {error && (
        <MaterialCommunityIcons
          name="alert-circle-outline"
          size={20}
          color={colors.error}
          style={{ marginRight: postTextLogo ? 10 : 0 }}
        />
      )}
      {postTextLogo && (
        <MaterialCommunityIcons
          onPress={handlePostLogoClick}
          name={
            !showPassword && !passwordType
              ? postTextLogo
              : showPassword && passwordType
                ? 'eye-outline'
                : 'eye-off-outline'
          }
          size={20}
          color={logoColor || colors.largeHeading}
        />
      )}
      {postLogo && postLogo()}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    // marginVertical: 5,
    padding: 5,
    paddingHorizontal: 20,
  },
});
