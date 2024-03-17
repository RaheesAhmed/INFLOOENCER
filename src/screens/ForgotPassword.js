import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import RoundedTop from '../components/RoundedTop';
import { useTheme } from '../Theme/ThemeContext';
import TextInput from '../components/TextInput';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../components/Button';

const ForgotPassword = ({ navigation }) => {
  const { t } = useTranslation();
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  const [data, setData] = useState({
    email: '',
  });

  return (
    <Container scroll style={{ paddingLeft: 0, paddingRight: 0 }}>
      <RoundedTop image={require('../../assets/images/Logo.png')} />
      <View style={styles.container}>
        <Text
          style={[
            textStyles.largeHeading,
            { maxWidth: '70%', alignSelf: 'center', textAlign: 'center' },
          ]}>
          {t('ForgotPassword.heading')}
        </Text>
        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={styles.inputContainer}>
            <TextInput
              value={data.email}
              placeholder={t('ForgotPassword.enterEmailAddress')}
              type="emailAddress"
              keyboardType="email-address"
              onChangeText={txt => setData({ ...data, email: txt })}
              PreTextLogo={() => <MaterialIcons name="email" size={20} color={theme.primary} />}
              error={false}
            />
            <View style={styles.btnContainer}>
              <Button
                text={t('ForgotPassword.authenticate')}
                onPress={() => navigation.navigate('OTP')}
              />
              <View style={[styles.rowContainer, { alignSelf: 'center' }]}>
                <Text style={[textStyles.lightText, { color: theme.smallText }]}>
                  {t('ForgotPassword.didntRecieveOTP')}
                </Text>
                <Pressable onPress={() => console.log('ForgotPassword')}>
                  <Text style={[textStyles.lightText, { color: theme.primary, fontWeight: '700' }]}>
                    {t('ForgotPassword.resendNow')}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 20,
  },
  inputContainer: {
    gap: 30,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
  },
  btnContainer: {
    gap: 20,
  },
  socialBtn: {
    borderRadius: 50,
  },
});
