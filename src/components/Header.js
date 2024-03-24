import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../Theme/ThemeContext';
import Avatar from './Avatar';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Header = ({
  avatar,
  name,
  cartItems,
  LeftIcon,
  RightIcon,
  heading,
  onLeftIconPress,
  onRightIconPress,
  style,
  leftAlign = false,
  smallHeading,
  applyBorder = true,
  RightIcon2,
  onRightIconPress2,
  textStyle,
  navigation,
}) => {
  const { globalStyles, theme } = useTheme();
  const { textStyles } = globalStyles;

  return (
    <View style={[styles.container, { gap: leftAlign ? 15 : 0 }, style]}>
      {!avatar ? (
        <View style={applyBorder ? styles.iconContainer : null}>
          {LeftIcon && (
            <Pressable onPress={onLeftIconPress}>
              <LeftIcon />
            </Pressable>
          )}
        </View>
      ) : (
        <View style={styles.avatarContainer}>
          <Avatar url={avatar} style={{ borderRadius: 50, width: 30, height: 30 }} />
          <Text style={textStyles.heading}>{name}</Text>
        </View>
      )}
      <View
        style={[
          styles.headingContainer,
          {
            alignItems: leftAlign ? 'flex-start' : 'center',
          },
        ]}>
        {heading && (
          <View
            style={{
              justifyContent: leftAlign ? 'flex-start' : 'center',
              alignItems: leftAlign ? 'flex-start' : 'center',
            }}>
            <Text style={[textStyles.heading, textStyle]}>{heading}</Text>
            {smallHeading && <Text style={[textStyles.lightText, textStyle]}>{smallHeading}</Text>}
          </View>
        )}
      </View>
      {!cartItems ? (
        <View
          style={[
            applyBorder ? styles.iconContainer : null,
            {
              borderColor: RightIcon ? theme.lightBoder : 'white',
              flexDirection: 'row',
              gap: 15,
              alignItems: 'center',
            },
          ]}>
          {RightIcon && (
            <Pressable onPress={onRightIconPress}>
              <RightIcon />
            </Pressable>
          )}
          {RightIcon2 && (
            <Pressable onPress={onRightIconPress2}>
              <RightIcon2 />
            </Pressable>
          )}
        </View>
      ) : (
        <Pressable onPress={onRightIconPress} style={styles.cartContainer}>
          <Ionicons name="cart" size={30} color="#111111" />
          <View style={[styles.cartCountContainer, { backgroundColor: theme.primary }]}>
            <Text style={[textStyles.lightText, { color: 'white' }]}>{cartItems}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  cartContainer: {
    position: 'relative',
  },
  cartCountContainer: {
    alignItems: 'center',
    borderRadius: 50,
    height: 20,
    justifyContent: 'center',
    position: 'absolute',
    right: -5,
    top: -5,
    width: 20,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  headingContainer: {
    flex: 1,
  },
  iconContainer: {
    borderColor: '#EDEDED',
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
});
