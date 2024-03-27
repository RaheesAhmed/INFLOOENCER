import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Container from '../components/Container';
import Header from '../components/Header';
import { useTheme } from '../Theme/ThemeContext';
import Avatar from '../components/Avatar';
import { launchImageLibrary } from 'react-native-image-picker';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

const ChangePassword = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <Container
      style={{
        alignItems: 'center',
      }}>
      <Header
        heading="Change Password"
        LeftIcon={() => <MaterialIcons name="arrow-back" size={20} color={theme.primary} />}
        onLeftIconPress={() => navigation.goBack()}
        applyBorder={false}
      />

      {/*  Full Name Email Address Contact Number Age Gender */}
      <View style={{ width: '100%', marginTop: 40 }}>
        <TextInput
          placeholder="Full Name"
          type="name"
          style={{
            marginVertical: 10,
          }}
        />

        <TextInput
          placeholder="Email Address"
          style={{
            marginVertical: 10,
          }}
        />

        <TextInput
          placeholder="Contact Number"
          keyboardType="number-pad"
          style={{
            marginVertical: 10,
          }}
        />

        <TextInput
          placeholder="Age"
          keyboardType="number-pad"
          style={{
            marginVertical: 10,
          }}
        />

        <TextInput
          placeholder="Gender"
          style={{
            marginVertical: 10,
          }}
        />
      </View>

      <Button
        text="Save"
        onPress={() => {
          console.log('====================================');
          console.log('Save Clicked');
          console.log('====================================');
        }}
        style={{
          marginVertical: 20,
          width: '100%',
        }}
      />
    </Container>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
