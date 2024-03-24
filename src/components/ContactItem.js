import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '../Theme/ThemeContext';

const ContactItem = ({ id, avatar, name, lastMsg, lastMsgTime, onPress, style }) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;

  return (
    <Pressable
      onPress={() => {
        if (onPress) {
          onPress(id);
        }
      }}
      style={[styles.container, style]}>
      <Avatar url={avatar} style={styles.avatar} cover size={50} />
      <View style={styles.bodyContainer}>
        <View style={styles.textContainer}>
          <Text style={[theme.text, { fontWeight: '700' }]}>{name}</Text>
          <Text style={theme.lightText} numberOfLines={1} ellipsizeMode="tail">
            {lastMsg}
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={[textStyles.lightText, { color: theme.primary }]}>{lastMsgTime}</Text>
          <Entypo name="dots-three-horizontal" size={15} color={theme.black} />
        </View>
      </View>
    </Pressable>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 5,
  },
  timeContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 5,
  },
});
