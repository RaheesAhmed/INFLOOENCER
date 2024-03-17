import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

const RoundedTop = ({ style }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/roundedTop.png')}
      style={[{ width: '100%', height: 200, position: 'relative' }, style]}>
      <Avatar
        url="https://www.w3schools.com/w3images/avatar2.png"
        size={100}
        style={{ position: 'absolute', bottom: -50, left: 20 }}
      />
    </ImageBackground>
  );
};

export default RoundedTop;

const styles = StyleSheet.create({});
