import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '../Theme/ThemeContext';

const NotificationItem = ({ id, avatar, name, lastMsg, lastMsgTime, onPress, style }) => {
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
          <View style={globalStyles.row}>
            <Text style={[theme.text, { fontWeight: '700', color: theme.primary }]}>{name} </Text>
            <Text
              style={(theme.lightText, { color: theme.text, marginLeft: 2 })}
              numberOfLines={1}
              ellipsizeMode="tail">
              {/* Check length and add ... */}
              {lastMsg?.length > 23 ? lastMsg.slice(0, 20) + '...' : lastMsg}
            </Text>
          </View>

          <Text style={[textStyles.lightText]}>{lastMsgTime}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default NotificationItem;

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
