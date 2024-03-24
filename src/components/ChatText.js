import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';
import { useTheme } from '../Theme/ThemeContext';

const ChatText = ({ isMe, avatar, type, text, image, style }) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  return (
    <View style={[styles.container, { alignSelf: isMe ? 'flex-end' : 'flex-start' }, style]}>
      <Avatar url={avatar} style={styles.avatar} size={35} cover />
      {type === 'text' ? (
        <View
          style={[
            styles.textContainer,
            {
              borderTopLeftRadius: isMe ? 10 : 0,
              borderTopRightRadius: isMe ? 0 : 10,
              backgroundColor: isMe ? theme.greishBackground : theme.lightPrimary,
            },
          ]}>
          <Text style={[textStyles.text, { color: theme.lightHeading }]}>{text}</Text>
        </View>
      ) : type === 'image' ? (
        <Avatar
          url={image}
          size={170}
          style={{
            borderRadius: 10,
          }}
        />
      ) : null}
    </View>
  );
};

export default ChatText;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
    gap: 7,
  },
  textContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
