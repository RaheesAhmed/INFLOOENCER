import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from '../Theme/ThemeContext';
import SvgImport from './SvgImport';

const NotificationItem = ({ id, title, lastMsg, lastMsgTime, onPress, style, icon }) => {
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
      <View style={styles.avatar}>
        <SvgImport svg={icon} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={globalStyles.row}>
          <Text style={[textStyles.text, { color: theme.primary }]}>{title} </Text>
        </View>
        <View style={styles.timeContainer}>
          <Entypo name="chevron-right" size={20} color={theme.lightGrey} />
        </View>
      </View>
    </Pressable>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  avatar: {
    overflow: 'hidden',
    alignSelf: 'center',
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
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 5,
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 5,
  },
});
