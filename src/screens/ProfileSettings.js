import { StyleSheet, View } from 'react-native';
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
  const [data, setData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    age: 0,
    gender: '',
  });

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
    <Container scroll>
      <Header
        heading="Profile Settings"
        LeftIcon={() => <MaterialIcons name="arrow-back" size={20} color={theme.primary} />}
        onLeftIconPress={() => navigation.goBack()}
        applyBorder={false}
      />
      <View style={{ marginVertical: 20 }}>
        <Avatar
          size={100}
          cover
          editable
          url={url}
          onPress={() => selectImage()}
          style={{
            borderRadius: 200,
            alignSelf: 'center',
          }}
        />
      </View>

      {/*  Full Name Email Address Contact Number Age Gender */}
      <View style={{ flex: 1, gap: 20 }}>
        <TextInput
          value={data.fullName}
          onChangeText={txt => {
            setData({ ...data, fullName: txt });
          }}
          placeholder="Full Name"
        />

        <TextInput
          value={data.email}
          onChangeText={txt => {
            setData({ ...data, email: txt });
          }}
          placeholder="Email Address"
          type="emailAddress"
        />

        <TextInput
          value={data.contactNumber}
          onChangeText={txt => {
            setData({ ...data, contactNumber: txt });
          }}
          placeholder="Contact Number"
          keyboardType="number-pad"
          type="telephoneNumber"
        />

        <TextInput
          value={data.gender}
          onChangeText={txt => {
            setData({ ...data, gender: txt });
          }}
          placeholder="Age"
          keyboardType="number-pad"
        />

        <TextInput
          value={data.age}
          onChangeText={txt => {
            setData({ ...data, age: txt });
          }}
          placeholder="Gender"
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

