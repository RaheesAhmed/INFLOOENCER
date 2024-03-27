import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { useTheme } from '../Theme/ThemeContext';
import SvgImport from '../components/SvgImport';
import heart from '../../assets/svgs/heart';
import eye from '../../assets/svgs/eye';

const MyPost = ({ item }) => {
  const { globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  return (
    <View>
      <View style={globalStyles.row}>
        <FastImage
          source={{ uri: item.avatar }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={textStyles.smallHeading}>{item.name}</Text>
          <Text style={textStyles.lightText}>{item.time}</Text>
        </View>
      </View>
      <Text style={[textStyles.lightText, { marginVertical: 8 }]}>{item.description}</Text>
      <FastImage
        source={{ uri: item.image }}
        style={{ width: '100%', height: 200 }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={[globalStyles.row, { justifyContent: 'center', gap: 5, marginTop: 6 }]}>
        <SvgImport svg={heart} />
        <Text style={[textStyles.lightText, { fontSize: 14, fontWeight: '400' }]}>
          {item.likes}
        </Text>
        <SvgImport svg={eye} />

        <Text style={[textStyles.lightText, { fontSize: 14, fontWeight: '400' }]}>
          {item.views} Views
        </Text>
      </View>
    </View>
  );
};

export default MyPost;

const styles = StyleSheet.create({});
