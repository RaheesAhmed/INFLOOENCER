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

const Wallet = ({ navigation, route }) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  const { t } = useTranslation();

  const [selected, setSelected] = React.useState(t('Wallet.points'));
  const [points, setPoints] = React.useState([
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
      }}>
      <RoundedTop
        image="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg"
        shade={theme.primaryWithOpacity}>
        <View style={{ height: '35%' }}>
          <Header
            LeftIcon={() => <MaterialIcons name="arrow-back" size={20} color={theme.white} />}
            onLeftIconPress={() => navigation.goBack()}
            applyBorder={false}
            style={{ paddingHorizontal: 20 }}
          />
          <View style={styles.pointsContainer}>
            <Text style={[textStyles.heading, { color: theme.white, fontSize: 25 }]}>
              {t('Wallet.welcome')} Dave
            </Text>
            <Text style={[textStyles.largeHeading, { color: theme.white, fontSize: 45 }]}>
              $2,840
            </Text>
            <Text style={[theme.lightText, { color: theme.white }]}>
              {t('Wallet.theseAreYourPoints')}
            </Text>
          </View>
        </View>
      </RoundedTop>

      <View style={styles.selectActionContainer}>
        <Text style={textStyles.heading}>{t('Wallet.select')}</Text>
        <View style={styles.actionContainer}>
          <View style={{ alignItems: 'center' }}>
            <Button
              style={[
                styles.actionBtn,
                {
                  backgroundColor: theme.normalText,
                  borderColor: theme.normalText,
                },
              ]}
              ICON={() => <SvgImport svg={PlaneCoin} />}
            />
            <Text style={theme.lightText}>{t('Wallet.redeem')}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Button
              style={[
                styles.actionBtn,
                {
                  backgroundColor: theme.normalText,
                  borderColor: theme.normalText,
                },
              ]}
              ICON={() => <SvgImport svg={Tip} />}
            />
            <Text style={theme.lightText}>{t('Wallet.tip')}</Text>
          </View>
        </View>
      </View>
      <SwapMenu
        options={[t('Wallet.points'), t('Wallet.myBalance')]}
        style={{ marginTop: 20 }}
        useOptionWidth
        onChangeSelect={handleSelect}>
        <View style={{ padding: 10, flex: 1 }}>
          <HistoryWallet
            type={selected === t('Wallet.points') ? 'points' : 'balance'}
            data={selected === t('Wallet.points') ? points : balance}
          />
        </View>
      </SwapMenu>
    </Container>
  );
};

export default Wallet;

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
    gap: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    gap: 40,
  },
  actionBtn: {
    borderRadius: 100,
    width: 70,
    height: 70,
  },
});
