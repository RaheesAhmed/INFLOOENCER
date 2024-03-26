import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Container from '../components/Container';
import Header from '../components/Header';
import { useTheme } from '../Theme/ThemeContext';
import Avatar from '../components/Avatar';

const ProfileSettings = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <Container
      style={{
        alignItems: 'center',
      }}>
      <Header
        heading={'Profile Setting'}
        LeftIcon={() => <MaterialIcons name="arrow-back" size={20} color={theme.primary} />}
        onLeftIconPress={() => navigation.goBack()}
        applyBorder={false}
      />

      <Avatar size={100} cover editable onPress={() => console.log('Edit')} />
    </Container>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({});
