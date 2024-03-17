import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import RoundedTop from '../components/RoundedTop';
import { useTheme } from '../Theme/ThemeContext';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import TextInput from '../components/TextInput';

const OTP = ({ navigation }) => {
  const { t } = useTranslation();
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  const inputRef = useRef(null);
  const [otp, setOTP] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focusField(0);
    }, 1000);
  }, []);

  return (
    <Container scroll style={{ paddingLeft: 0, paddingRight: 0 }}>
      <RoundedTop image={require('../../assets/images/Logo.png')} />
      <View style={styles.container}>
        <Text
          style={[
            textStyles.largeHeading,
            { maxWidth: '70%', alignSelf: 'center', textAlign: 'center' },
          ]}>
          {t('OTP.heading')}
        </Text>
        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={styles.inputContainer}>
            <TextInput
              value={otp}
              placeholder={t('OTP.enterOTPCode')}
              type="oneTimeCode"
              keyboardType="decimal-pad"
              onChangeText={txt => setOTP(txt)}
              error={false}
            />
            {/* <OTPInputView
              ref={inputRef}
              style={{
                width: '100%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              pinCount={4}
              onCodeChanged={code => setOTP(code)}
              autoFocusOnLoad={false}
              codeInputFieldStyle={[
                { width: 50, height: 50, borderRadius: 15 },
                { backgroundColor: theme.background, ...textStyles.text },
              ]}
              codeInputHighlightStyle={{
                borderColor: theme.lightPrimary,
              }}
              keyboardAppearance={'dark'}
              keyboard
              editable
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            /> */}
            <View style={styles.btnContainer}>
              <Button text={t('OTP.authenticate')} onPress={() => navigation.navigate('OTP')} />
              <View style={[styles.rowContainer, { alignSelf: 'center' }]}>
                <Text style={[textStyles.lightText, { color: theme.smallText }]}>
                  {t('OTP.didntRecieveOTP')}
                </Text>
                <Pressable onPress={() => console.log('OTP')}>
                  <Text style={[textStyles.lightText, { color: theme.primary, fontWeight: '700' }]}>
                    {t('OTP.resendNow')}
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

export default OTP;

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
