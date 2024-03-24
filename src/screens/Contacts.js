import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import SvgImport from '../components/SvgImport';
import WriteMessage from '../../assets/svgs/WriteMessage';
import SearchBar from '../components/SearchBar';
import ContactItem from '../components/ContactItem';

const Contacts = ({ navigation }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      message: 'Hello',
      time: '12:00 PM',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
    },
    {
      id: 2,
      name: 'John Doe',
      message: 'Hello',
      time: '12:00 PM',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
    },
    {
      id: 3,
      name: 'John Doe',
      message: 'Hello',
      time: '12:00 PM',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
    },
    {
      id: 4,
      name: 'John Doe',
      message: 'Hello',
      time: '12:00 PM',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg',
    },
  ]);

  return (
    <Container>
      <Header
        heading={t('Messages.heading')}
        leftAlign
        RightIcon={() => <SvgImport svg={WriteMessage} />}
        applyBorder={false}
      />
      <SearchBar
        placeholder={t('Messages.search')}
        value={search}
        onChangeText={txt => setSearch(txt)}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={contacts}
          contentContainerStyle={{ gap: 20, paddingVertical: 20, paddingHorizontal: 1 }}
          keyExtractor={(item, index) => item.id.toString() + index}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ContactItem
              id={item.id}
              name={item.name}
              lastMsg={item.message}
              lastMsgTime={item.time}
              avatar={item.avatar}
              onPress={() => navigation.navigate('Inbox', { name: item.name })}
            />
          )}
        />
      </View>
    </Container>
  );
};

export default Contacts;

const styles = StyleSheet.create({});
