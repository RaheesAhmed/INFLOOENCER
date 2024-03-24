import React from 'react';
import { Image, Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import SvgImport from './SvgImport';
import Edit from '../../assets/svgs/Edit';

const Avatar = ({ url, style, onImageLoadEnd, size, onPress, editable = false, cover = false }) => {
  return (
    <Pressable
      onPress={() => onPress()}
      disabled={!editable}
      style={[{ width: size || 70, height: size || 70, position: 'relative' }, style]}>
      {/* <FastImage
        style={[{ width: size || 70, height: size || 70 }, style]}
        onLoadEnd={onImageLoadEnd || null}
        source={{
          uri: url || '../../assets/images/placeholderAvatar.png',
          priority: FastImage.priority.high,
        }}
        resizeMode={cover ? 'cover' : 'contain'}
      /> */}
      <Image
        style={[{ width: size || 70, height: size || 70 }, style]}
        source={{
          uri: url || '../../assets/images/placeholderAvatar.png',
        }}
        resizeMode={cover ? 'cover' : 'contain'}
        resizeMethod="auto"
      />
      {editable && (
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,

            borderRadius: 100,
            padding: 5,
          }}>
          <SvgImport svg={Edit} size={20} style={{ backgroundColor: 'white', borderRadius: 100 }} />
        </View>
      )}
    </Pressable>
  );
};

export default Avatar;
