import { StyleSheet } from 'react-native';
import Offset from './Offset';

export const mystyles = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },

    padding: {
      paddingBottom: 20,
      paddingHorizontal: 20,
      marginTop: Offset.AndroidSafeArea.paddingTop,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textStyles: {
      largeHeading: {
        // fontFamily: 'Inter',
        color: colors.secondary,
        fontSize: 30,
        fontWeight: '900',
      },
      heading: {
        // fontFamily: 'SF Pro Display',
        color: colors.normalText,
        fontSize: 20,
        fontWeight: '700',
      },
      smallHeading: {
        // fontFamily: 'Inter',
        color: colors.lightHeading,
        fontSize: 18,
        fontWeight: '700',
      },

      lightText: {
        // fontFamily: 'SF Pro Display',
        color: colors.lightText,
        fontSize: 12,
        fontWeight: '400',
      },
      text: {
        // fontFamily: 'Inter',
        color: colors.normalText,
        fontSize: 16,
        fontWeight: '500',
      },
    },
  });
