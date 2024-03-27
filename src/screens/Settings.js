import { FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { useTheme } from '../Theme/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';
import lock from '../../assets/svgs/lock.js';
import logout from '../../assets/svgs/logout.js';
import shield from '../../assets/svgs/shield.js';
import pen from '../../assets/svgs/pen.js';
import user from '../../assets/svgs/user.js';
import SettingsItem from '../components/SettingsItem.js';

const Settings = ({ navigation }) => {
  const { theme } = useTheme();

  const [Settings, setSettings] = useState([
    {
      id: 1,
      title: 'Profile Settings',
      icon: user,
    },
    {
      id: 2,
      title: 'Change Password',
      icon: lock,
    },
    {
      id: 3,
      title: 'Privacy',
      icon: shield,
    },
    {
      id: 4,
      title: 'Feedback To App',
      icon: pen,
    },
    {
      id: 5,
      title: 'Logout',
      icon: logout,
    },
  ]);

  return (
    <Container>
      <Header
        heading="Settings"
        LeftIcon={() => <MaterialIcons name="arrow-back" size={20} color={theme.primary} />}
        onLeftIconPress={() => navigation.goBack()}
        applyBorder={false}
      />
      <FlatList
        data={Settings}
        contentContainerStyle={{ gap: 20, paddingVertical: 20, paddingHorizontal: 1 }}
        keyExtractor={(item, index) => item.id.toString() + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SettingsItem
            id={item.id}
            icon={item.icon}
            message={item.message}
            title={item.title}
            onPress={() => {
              console.log('====================================');
              console.log('Settings Clicked');
              console.log('====================================');
            }}
          />
        )}
      />
    </Container>
  );
};

export default Settings;

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
