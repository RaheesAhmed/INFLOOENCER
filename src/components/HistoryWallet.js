import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../Theme/ThemeContext';
import SvgImport from './SvgImport';
import PlaneIconDark from '../../assets/svgs/PlaneIconDark';

const HistoryWallet = ({ data, type }) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles } = globalStyles;
  return (
    <View style={[styles.container, { backgroundColor: theme.white }]}>
      <Text style={[textStyles.smallHeading, { textAlign: 'center' }]}>History</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable style={[styles.item, { borderBottomColor: theme.lightBoder }]}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <Text style={textStyles.text}>Ref id:</Text>
                <Text style={[textStyles.text, { color: theme.lightText }]}>{item.refId}</Text>
              </View>
              {type === 'points' ? (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={textStyles.text}>{item.name}-</Text>
                  <Text style={textStyles.text}>${item.amount}</Text>
                </View>
              ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={textStyles.text}>${item.amount}</Text>
                  <Text style={textStyles.text}> tip to {item.name}</Text>
                </View>
              )}
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={textStyles.lightText}>{item.time}</Text>
              <SvgImport svg={PlaneIconDark} />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default HistoryWallet;

const styles = StyleSheet.create({
  container: {
    gap: 5,
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
  },
});
