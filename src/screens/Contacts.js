import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import SvgImport from '../components/SvgImport';
import WriteMessage from '../../assets/svgs/WriteMessage';
import SearchBar from '../components/SearchBar';
import ContactItem from '../components/ContactItem';

const Contacts = () => {
  const { t } = useTranslation();
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      message: 'Hello',
      time: '12:00 PM',
      avatar: 'https://randomuser.me/api/portraits',
    },
    {
      id: 2,
      name: 'John Doe',
      message: 'Hello',
      time: '12:00 PM',
      avatar: 'https://randomuser.me/api/portraits',
    },
    {
      id: 3,
      name: 'John Doe',
      message: 'Hello',
      time: '12:00 PM',
      avatar: 'https://randomuser.me/api/portraits',
    },
    {
      id: 4,
      name: 'John Doe',
      message: 'Hello',
      time: '12:00 PM',
      avatar: 'https://randomuser.me/api/portraits',
    },
  ]);

  return (
    <Container>
      <Header
        heading={t('Messages.heading')}
        leftAlign
        RightIcon={() => <SvgImport svg={WriteMessage} />}
      />
      <SearchBar placeholder={t('Messages.search')} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={contacts}
          keyExtractor={item => item.toString()}
          renderItem={({ item }) => (
            <ContactItem
              id={item.id}
              name={item.name}
              lastMsg={item.message}
              lastMsgTime={item.time}
              avatar={item.avatar}
            />
          )}
        />
      </View>
    </Container>
  );
};

export default Contacts;

const styles = StyleSheet.create({});
