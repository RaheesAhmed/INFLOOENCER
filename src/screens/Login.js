import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import RoundedTop from '../components/RoundedTop';
import { useTheme } from '../Theme/ThemeContext';
import TextInput from '../components/TextInput';
import { useState } from 'react';
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import Button from '../components/Button';

const Login = () => {
  const { t } = useTranslation();
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  return (
    <Container scroll={true} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <RoundedTop image={require('../../assets/images/Logo.png')} />
      <View style={styles.container}>
        <Text
          style={[
            textStyles.largeHeading,
            { maxWidth: '50%', alignSelf: 'center', textAlign: 'center' },
          ]}>
          {t('Login.heading')}
        </Text>
        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={styles.inputContainer}>
            <TextInput
              value={data.username}
              placeholder={t('Login.username')}
              onChangeText={txt => setData({ ...data, username: txt })}
              PreTextLogo={() => <MaterialIcons name="email" size={20} color={theme.primary} />}
              error={false}
            />
            <View style={{ gap: 10 }}>
              <TextInput
                value={data.password}
                placeholder={t('Login.password')}
                onChangeText={txt => setData({ ...data, password: txt })}
                PreTextLogo={() => <MaterialIcons name="lock" size={20} color={theme.primary} />}
                passwordType
                postTextLogo
                logoColor={theme.primary}
                error={false}
              />
              <View style={styles.rowContainer}>
                <Text style={[textStyles.lightText, { color: theme.smallText }]}>
                  {t('Login.forgotPassword')}
                </Text>
                <Pressable onPress={() => console.log('Forgot Password')}>
                  <Text style={[textStyles.lightText, { color: theme.primary, fontWeight: '700' }]}>
                    {t('Login.resetNow')}
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <Button text={t('Login.login')} />
              <View style={[styles.rowContainer, { alignSelf: 'center' }]}>
                <Text style={[textStyles.lightText, { color: theme.smallText }]}>
                  {t('Login.dontHaveAccount')}
                </Text>
                <Pressable onPress={() => console.log('Register')}>
                  <Text style={[textStyles.lightText, { color: theme.primary, fontWeight: '700' }]}>
                    {t('Login.signupNow')}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.rowContainer, { alignSelf: 'center', gap: 20, marginTop: 10 }]}>
        <Button
          style={[styles.socialBtn, { backgroundColor: theme.black, borderColor: theme.black }]}
          ICON={() => <Entypo name="facebook-with-circle" size={24} color={theme.white} />}
        />
        <Button
          style={[styles.socialBtn, { backgroundColor: theme.black, borderColor: theme.black }]}
          ICON={() => <AntDesign name="google" size={24} color={theme.white} />}
        />
        <Button
          style={[styles.socialBtn, { backgroundColor: theme.black, borderColor: theme.black }]}
          ICON={() => <AntDesign name="apple1" size={24} color={theme.white} />}
        />
      </View>
    </Container>
  );
};

export default Login;

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
