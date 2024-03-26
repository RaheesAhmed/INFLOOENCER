import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import SvgImport from './SvgImport';
import Edit from '../../assets/svgs/Edit';
import { use } from 'i18next';

const Avatar = ({ url, style, onImageLoadEnd, size, onPress, editable = false, cover = false }) => {
  const [uri, setUri] = useState(url || null);
  return (
    <Pressable
      onPress={() => onPress()}
      disabled={!editable}
      style={[{ width: size || 70, height: size || 70, position: 'relative' }, style]}>
      <FastImage
        style={[{ width: size || 70, height: size || 70 }, style]}
        onLoadEnd={onImageLoadEnd || null}
        source={!uri ? require('../../assets/images/placeholderAvatar.png') : { uri: uri }}
        resizeMode={cover ? 'cover' : 'contain'}
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
