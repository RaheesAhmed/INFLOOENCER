import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../Theme/ThemeContext';
import { MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import InterestItem from '../components/InterestItem';
import Button from '../components/Button';

const SelectInterest = ({ navigation }) => {
  const { t } = useTranslation();
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Crypto',
      ICON: ({ color, size }) => (
        <MaterialIcons name="sports-basketball" size={size || 20} color={color || theme.primary} />
      ),
    },
    {
      id: 2,
      name: 'Ecommerce',
      ICON: ({ color, size }) => (
        <Entypo name="shopping-cart" size={size || 20} color={color || theme.primary} />
      ),
    },
    {
      id: 3,
      name: 'Science',
      ICON: ({ color, size }) => (
        <MaterialIcons name="science" size={size || 20} color={color || theme.primary} />
      ),
    },
    {
      id: 4,
      name: 'Web\nDevelopment',
      ICON: ({ color, size }) => (
        <FontAwesome name="snowflake-o" size={size || 20} color={color || theme.primary} />
      ),
    },
    {
      id: 5,
      name: 'Mobile\nDevelopment',
      ICON: ({ color, size }) => (
        <MaterialIcons name="sports-basketball" size={size || 20} color={color || theme.primary} />
      ),
    },
    {
      id: 6,
      name: 'Culinary',
      ICON: ({ color, size }) => (
        <MaterialIcons name="sports-basketball" size={size || 20} color={color || theme.primary} />
      ),
    },
    {
      id: 7,
      name: 'Graphic\nDesign',
      ICON: ({ color, size }) => (
        <MaterialIcons name="sports-basketball" size={size || 20} color={color || theme.primary} />
      ),
    },
    {
      id: 8,
      name: 'Animations',
      ICON: ({ color, size }) => (
        <MaterialIcons name="sports-basketball" size={size || 20} color={color || theme.primary} />
      ),
    },
    {
      id: 9,
      name: 'Commerce',
      ICON: ({ color, size }) => (
        <MaterialIcons name="sports-basketball" size={size || 20} color={color || theme.primary} />
      ),
    },
  ]);

  const handleSelectCategory = id => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(item => item !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  return (
    <Container>
      <Header
        heading={'Andrew Willson'}
        LeftIcon={() => <MaterialIcons name="arrow-back" size={20} color={theme.primary} />}
        onLeftIconPress={() => navigation.goBack()}
        applyBorder={false}
      />
      <View style={styles.textContainer}>
        <Text style={[textStyles.largeHeading, { textAlign: 'center' }]}>
          {t('SelectInterest.heading')}
        </Text>
        <Text style={[textStyles.text, { textAlign: 'center' }]}>
          {t('SelectInterest.subHeading')}
        </Text>
      </View>
      <View style={{ flex: 1, paddingVertical: 20 }}>
        <FlatList
          numColumns={3}
          data={categories}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{
            gap: 10,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={({ item }) => (
            <InterestItem
              {...item}
              onPress={handleSelectCategory}
              style={{
                maxWidth: '33.33%',
                marginTop: 10,
              }}
              selected={selectedCategories.includes(item.id)}
            />
          )}
        />
      </View>
      <Button text={t('SelectInterest.done')} onPress={() => navigation.navigate('Home')} />
    </Container>
  );
};

export default SelectInterest;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
});
