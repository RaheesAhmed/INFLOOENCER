import { SectionList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../Theme/ThemeContext';
import ChatText from '../components/ChatText';
import TypeMessage from '../components/TypeMessage';

const Inbox = ({ navigation, route }) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  const [messages, setMessages] = useState([
    {
      title: '07 January 2021',
      data: [
        { type: 'text', isMe: true, text: 'Hello, how are you?' },
        {
          type: 'text',
          isMe: false,
          text: 'I am fine, how are you?',
          avatar:
            'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        },
        { type: 'text', isMe: true, text: 'I am also fine, thanks for asking.' },
      ],
    },
    {
      title: '06 January 2021',
      data: [
        { type: 'text', isMe: true, text: 'Hello, how are you?' },
        {
          type: 'text',
          isMe: false,
          text: 'I am fine, how are you?',
          avatar:
            'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        },
        {
          type: 'image',
          isMe: false,
          image:
            'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
          avatar:
            'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        },
        { type: 'text', isMe: true, text: 'I am also fine, thanks for asking.' },
      ],
    },
    {
      title: '05 January 2021',
      data: [
        {
          type: 'text',
          isMe: false,
          text: 'I am fine, how are you?',
          avatar:
            'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        },
        {
          type: 'image',
          isMe: true,
          image:
            'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        },
        {
          type: 'text',
          isMe: false,
          text: 'Hello, how are you?',
          avatar:
            'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        },
        {
          type: 'text',
          isMe: false,
          text: 'I am also fine, thanks for asking.',
          avatar:
            'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
        },
      ],
    },
  ]);
  return (
    <Container>
      <Header
        heading={route.params?.name || 'NA'}
        LeftIcon={() => <MaterialIcons name="arrow-back" size={20} color={theme.primary} />}
        RightIcon={() => <MaterialCommunityIcons name="dots-vertical" size={20} color="black" />}
        applyBorder={false}
      />
      <View style={{ flex: 1 }}>
        <SectionList
          sections={messages}
          inverted
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <ChatText {...item} />}
          showsVerticalScrollIndicator={false}
          renderSectionFooter={({ section: { title } }) => (
            <View style={styles.stickyDate}>
              <Text style={textStyles.lightText}>{title}</Text>
            </View>
          )}
        />
      </View>
      <TypeMessage />
    </Container>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  stickyDate: {
    alignSelf: 'center',
  },
});
