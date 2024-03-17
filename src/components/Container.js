import { SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';
import { useTheme } from '../Theme/ThemeContext';

const Container = ({ children, scroll, style, scrollViewStyles }) => {
  const { globalStyles } = useTheme();

  return scroll ? (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled
        style={[globalStyles.padding, scrollViewStyles, style]}>
        <View style={[globalStyles.container, style]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={globalStyles.container}>
      <View style={[globalStyles.container, globalStyles.padding, style]}>{children}</View>
    </SafeAreaView>
  );
};

// memo
export default React.memo(Container);
