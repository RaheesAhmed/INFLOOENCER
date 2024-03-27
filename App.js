// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/languages/en.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//======== SCREENS =========
import Login from './src/screens/Login';
import { ThemeProvider } from './src/Theme/ThemeContext';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';
import OTP from './src/screens/OTP';
import Contacts from './src/screens/Contacts';
import Inbox from './src/screens/Inbox';
import SelectInterest from './src/screens/SelectInterest';
import Wallet from './src/screens/Wallet';
import Notification from './src/screens/Notification';
import Settings from './src/screens/Settings';
import ProfileSettings from './src/screens/ProfileSettings';
import ChangePassword from './src/screens/ChangePassword';
import ProfileView from './src/screens/ProfileView';

//======== NAVIGATORS =========
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//======== TAB NAVIGATOR =========
const TabNavigator = () => {};

//======== STACK NAVIGATOR =========
const MyStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ProfileView" component={ProfileView} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="SelectInterest" component={SelectInterest} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const Wrapper = () => {
  return (
    <NavigationContainer>
      <FlashMessage position="top" icon="auto" duration={2000} style={{ zIndex: 9999 }} floating />
      <MyStackNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: en,
      },
    },
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

  return (
    <ThemeProvider>
      <StatusBar style="inverted" />
      <Wrapper />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
