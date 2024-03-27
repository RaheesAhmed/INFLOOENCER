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

const ProfileSettings = ({ navigation }) => {
  const { theme } = useTheme();
  const [url, setUrl] = useState(null);

  console.log('====================================');
  console.log(url);
  console.log('====================================');

  const selectImage = async (Thumbnail = true) => {
    await launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
        quality: 0.5,
        editable: true,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          if (response.assets[0].fileSize > 1000000) {
            alert('Image size is too large');
            return;
          }
          if (response.assets[0].type !== 'image/jpeg' && response.assets[0].type !== 'image/png') {
            alert('Invalid file type');
            return;
          }
          if (response.assets[0].height < 200 || response.assets[0].width < 200) {
            alert('Image is too small');
            return;
          }
          if (response.assets[0].height > 2000 || response.assets[0].width > 2000) {
            alert('Image is too large');
            return;
          }

          if (Thumbnail) setUrl(response.assets[0]?.uri);
        }
      }
    );
  };

  return (
    <Container
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Header
        heading="Profile Settings"
        LeftIcon={() => <MaterialIcons name="arrow-back" size={20} color={theme.primary} />}
        onLeftIconPress={() => navigation.goBack()}
        applyBorder={false}
      />
      <View>
        <Avatar
          size={100}
          cover
          editable
          url={url}
          onPress={() => selectImage()}
          style={{
            borderRadius: 200,
          }}
        />
      </View>

      {/*  Full Name Email Address Contact Number Age Gender */}
      <View style={{ width: '100%', justifyContent: 'space-around', flex: 1, marginTop: 40 }}>
        <TextInput
          placeholder="Full Name"
          type="name"
          style={{
            marginVertical: 10,
          }}
        />

        <TextInput
          placeholder="Email Address"
          type="email"
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
          marginTop: 100,
        }}
      />
    </Container>
  );
};

export default ProfileSettings;

const styles = StyleSheet.create({});
