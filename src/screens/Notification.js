import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../Theme/ThemeContext';
import { MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import InterestItem from '../components/InterestItem';
import Button from '../components/Button';
import ContactItem from '../components/ContactItem';
import NotificationItem from '../components/NotificationItem';

const Notification = ({ navigation }) => {
  const { t } = useTranslation();
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelectCategory = id => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(item => item !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const [Notifications, setNotifications] = useState([
    {
      id: 1,
      anotherPerson: 'John Doe',
      timeStamp: '2 hours ago',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
      message: 'liked your post',
    },

    {
      id: 2,
      anotherPerson: 'Jane Doe',
      description: 'commented on your post',
      timeStamp: '1 day ago',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
      message: 'commented on your post',
    },

    {
      id: 3,
      anotherPerson: 'John Doe',
      description: 'liked your post',
      timeStamp: '2 hours ago',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
    },

    {
      id: 4,
      anotherPerson: 'Jane Doe',
      description: 'commented on your post',
      timeStamp: '1 day ago',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
    },

    {
      id: 5,
      anotherPerson: 'John Doe',
      description: 'liked your post',
      timeStamp: '2 hours ago',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
    },

    {
      id: 6,
      anotherPerson: 'Jane Doe',
      description: 'commented on your post',
      timeStamp: '1 day ago',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
    },
  ]);

  return (
    <Container>
      <Header
        heading="Notification"
        LeftIcon={() => <MaterialIcons name="arrow-back" size={20} color={theme.primary} />}
        onLeftIconPress={() => navigation.goBack()}
        applyBorder={false}
      />
      <FlatList
        data={Notifications}
        contentContainerStyle={{ gap: 20, paddingVertical: 20, paddingHorizontal: 1 }}
        keyExtractor={(item, index) => item.id.toString() + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NotificationItem
            id={item.id}
            name={item.anotherPerson}
            lastMsg={item.message}
            lastMsgTime={item.timeStamp}
            avatar={item.avatar}
            message={item.message}
            onPress={() => navigation.navigate('Inbox', { name: item.name })}
          />
        )}
      />
    </Container>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  notificationContent: {
    flex: 1,
  },
});
