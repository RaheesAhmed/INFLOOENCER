import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyPost from './MyPost';

const MyPosts = ({ data }) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <MyPost item={item} />}
    />
  );
};

export default MyPosts;

const styles = StyleSheet.create({});
