import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import RoundedTop from '../components/RoundedTop';

const Login = () => {
  const { t } = useTranslation();

  return (
    <Container scroll>
      <RoundedTop />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
