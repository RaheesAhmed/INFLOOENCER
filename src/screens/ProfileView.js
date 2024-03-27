import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from '../components/Container';
import RoundedTop from '../components/RoundedTop';
import Header from '../components/Header';
import { MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../Theme/ThemeContext';
import SvgImport from '../components/SvgImport';
import PlaneCoin from '../../assets/svgs/PlaneCoin';
import Tip from '../../assets/svgs/Tip';
import Button from '../components/Button';
import SwapMenu from '../components/SwapMenu';
import { useTranslation } from 'react-i18next';
import HistoryWallet from '../components/HistoryWallet';
import MyPosts from './MyPosts';

const ProfileView = ({ navigation, route }) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  const { t } = useTranslation();

  const [selected, setSelected] = React.useState('Posts');
  const [posts, setPosts] = React.useState([
    {
      id: 1,
      name: 'John Doe',
      time: '3hrs ago',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
      avatar: 'https://i.pravatar.cc/150?img=49',
      image: 'https://random.imagecdn.app/500/150',
      likes: 100,
      comments: 200,
      shares: 300,
      views: 400,
    },
    {
      id: 2,
      name: 'John Doe',
      time: '3hrs ago',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
      avatar: 'https://i.pravatar.cc/150?img=49',
      image: 'https://random.imagecdn.app/500/150',
      likes: 100,
      comments: 200,
      shares: 300,
      views: 400,
    },
  ]);
  const [balance, setBalance] = React.useState([
    {
      id: 1,
      refId: '123456',
      name: 'John Doe',
      time: '3hrs ago',
      amount: 100,
    },
    {
      id: 2,
      refId: '123457',
      name: 'Jane Doe',
      time: '3hrs ago',
      amount: 200,
    },
    {
      id: 3,
      refId: '123458',
      name: 'John Doe',
      time: '3hrs ago',
      amount: 300,
    },
    {
      id: 4,
      refId: '123459',
      name: 'Jane Doe',
      time: '3hrs ago',
      amount: 400,
    },
  ]);

  const handleSelect = option => {
    setSelected(option);
  };

  return (
    <Container
      style={{
        paddingHorizontal: 0,
        paddingBottom: 0,
      }}>
      <RoundedTop image="https://i.pravatar.cc/300" shade={theme.primaryWithOpacity}>
        <View style={{ height: '18%' }}>
          <Header
            LeftIcon={() => <MaterialIcons name="arrow-back" size={20} color={theme.white} />}
            onLeftIconPress={() => navigation.goBack()}
            applyBorder={false}
            style={{ paddingHorizontal: 20 }}
          />
        </View>
      </RoundedTop>

      <View style={styles.selectActionContainer}>
        <Text style={[textStyles.largeHeading, { fontSize: 23 }]}>{t('Wallet.select')}</Text>
        <Text style={[textStyles.lightText, { color: theme.lightText }]}>dave walker_762</Text>
        <View style={styles.actionContainer}>
          <View style={{ alignItems: 'center' }}>
            <Text style={[textStyles.largeHeading, { fontSize: 22 }]}>56</Text>
            <Text style={theme.lightText}>{t('Wallet.redeem')}</Text>
          </View>
          <View
            style={{
              borderColor: theme.lightText,
              borderRightWidth: 1,
            }}
          />
          <View style={{ alignItems: 'center' }}>
            <Text style={[textStyles.largeHeading, { fontSize: 22 }]}>290</Text>
            <Text style={theme.lightText}>{t('Wallet.tip')}</Text>
          </View>
          <View
            style={{
              borderColor: theme.lightText,
              borderRightWidth: 1,
            }}
          />
          <View style={{ alignItems: 'center' }}>
            <Text style={[textStyles.largeHeading, { fontSize: 22 }]}>29.3K</Text>
            <Text style={theme.lightText}>{t('Wallet.tip')}</Text>
          </View>
        </View>
      </View>
      <SwapMenu
        options={['Posts', 'About Me']}
        style={{ marginTop: 20 }}
        useOptionWidth
        onChangeSelect={handleSelect}>
        <View style={{ paddingHorizontal: 10, paddingTop: 10, flex: 1, borderWidth: 1 }}>
          {selected === 'Posts' ? <MyPosts data={posts} /> : <Text>About Me</Text>}
        </View>
      </SwapMenu>
    </Container>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  pointsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  selectActionContainer: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  actionBtn: {
    borderRadius: 100,
    width: 70,
    height: 70,
  },
});
