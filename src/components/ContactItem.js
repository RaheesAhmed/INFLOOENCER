import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '../Theme/ThemeContext';

const ContactItem = ({ id, avatar, name, lastMsg, lastMsgTime, onPress }) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;

  return (
    <Pressable
      onPress={() => {
        if (onPress) {
          onPress(id);
        }
      }}
      style={styles.container}>
      <Avatar url={avatar} style={styles.avatar} />
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
    borderRadius: 20,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    gap: 10,
    padding: 10,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  timeContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
