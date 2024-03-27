import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import SvgImport from './SvgImport';
import upload from '../../assets/svgs/upload';

const Avatar = ({ url, style, onImageLoadEnd, size, onPress, editable = false, cover = false }) => {
  return (
    <Pressable
      onPress={() => onPress()}
      disabled={!editable}
      style={[
        {
          width: size || 70,
          height: size || 70,

          position: 'relative',
        },
        style,
      ]}>
      <FastImage
        style={[{ width: size || 70, height: size || 70 }, style]}
        onLoadEnd={onImageLoadEnd || null}
        source={
          url === 'null' || url === 'undefined' || url === ' ' || url === null || url === undefined
            ? require('../../assets/images/placeholderAvatar.png')
            : typeof url === 'string'
              ? {
                  uri: 'file:///data/user/0/com.inflooncer/cache/rn_image_picker_lib_temp_ac4fd0c4-1ac2-4f85-b3ff-67f14b80f940.jpg',
                }
              : url
        }
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
          <SvgImport
            svg={upload}
            size={20}
            style={{ backgroundColor: 'white', borderRadius: 100 }}
          />
        </View>
      )}
    </Pressable>
  );
};

export default Avatar;
