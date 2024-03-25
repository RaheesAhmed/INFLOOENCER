import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
// import Avatar from './Avatar';

const RoundedTop = ({ style, image, shade, children }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/roundedTop.png')}
      imageStyle={{
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        height: '100%',
      }}
      style={[styles.container, style]}>
      <View style={[styles.overlay, { backgroundColor: shade || 'rgba(0,0,0,0.5)' }]} />
      {children}
      {/* //TODO: use Fast Image */}
      {/* <Avatar
        url="https://www.w3schools.com/w3images/avatar2.png"
        size={100}
        style={{ position: 'absolute', bottom: -50, left: 20 }}
      /> */}
      <Image
        source={image ? { uri: image } : require('../../assets/images/placeholderAvatar.png')}
        style={styles.image}
      />
    </ImageBackground>
  );
};

export default RoundedTop;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 170,
    height: 'auto',
    position: 'relative',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  image: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    left: '50%',
    marginLeft: -50,
    bottom: -50,
    borderWidth: 2,
    borderColor: 'white',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
});
