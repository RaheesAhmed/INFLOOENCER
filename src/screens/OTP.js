import React, { useRef, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import RoundedTop from '../components/RoundedTop';
import { useTheme } from '../Theme/ThemeContext';
import Button from '../components/Button';
import OTPTextInput from 'react-native-otp-textinput';

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
            {/* <OTPInputView
              ref={inputRef}
              style={styles.otpInput}
              pinCount={4}
              onCodeChanged={code => setOTP(code)}
              autoFocusOnLoad={false}
              codeInputFieldStyle={[
                styles.codeInputField,
                { backgroundColor: theme.background, ...textStyles.text },
              ]}
              codeInputHighlightStyle={{
                borderColor: theme.normalText,
              }}
              keyboardAppearance="dark"
              keyboard
              editable
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            /> */}
            <OTPTextInput
              ref={e => (this.otpInput = e)}
              tintColor={theme.primary}
              offTintColor={theme.lightPrimary}
              focusedBorderColor={theme.primary}
              autoFocus
              defaultBorderColor={theme.lightPrimary}
              containerStyle={{
                width: '80%',
                alignSelf: 'center',
                // borderWidth: 1,
                // borderColor: theme.primary,
                // borderRadius: 10,
                // padding:7
              }}
              borderBottomWidth={2}
              textInputStyle={{
                color: theme.normalText,
                fontSize: 15,
                // height:40, width:40
              }}
              handleTextChange={code => setOTP(code)}
              inputCount={4}
            />
            <View style={styles.btnContainer}>
              <Button
                text={t('OTP.authenticate')}
                onPress={() => navigation.navigate('OTP')}
                style={{}}
              />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 200,
  },
  codeInputField: {
    width: 30,
    height: 20,
    borderRadius: 15,
    marginHorizontal: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
  },
  btnContainer: {
    gap: 20,
    width: '100%',
  },
  socialBtn: {
    borderRadius: 50,
  },
});
