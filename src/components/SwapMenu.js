import { Pressable, StyleSheet, Text, View, Animated, PanResponder } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../Theme/ThemeContext';

const SwapMenu = ({ options, style, onChangeSelect, useOptionWidth, children }) => {
  const { theme, globalStyles } = useTheme();
  const { textStyles, padding } = globalStyles;
  const [selected, setSelected] = useState(options[0]);
  const selectedRef = useRef(selected);
  const [containerWidth, setContainerWidth] = useState(0);
  const [textWidth, setTextWidth] = useState(0); // this is the width of the text inside the option
  const [optionWidth, setOptionWidth] = useState(0);
  const animation = useRef(new Animated.Value(0)).current; // this is the animation for the indicator initially it is at 0
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => {
        if (e) {
          return;
        }
        const { dx, dy } = gestureState;
        // Check if the touch is not inside the option area and if the gesture is primarily vertical
        return Math.abs(dy) < Math.abs(dx);
      },
      onMoveShouldSetPanResponder: (e, gestureState) => {
        if (e) {
          return;
        }
        const { dx, dy } = gestureState;
        // Check if the touch is not inside the option area and if the gesture is primarily vertical
        return Math.abs(dy) < Math.abs(dx);
      },
      onPanResponderEnd: (e, gestureState) => {
        if (e) {
          return;
        }
        if (gestureState.dx > 40 && gestureState.vx > 0.5) {
          if (selectedRef.current === options[0]) return;
          handleSelect(
            options[options.indexOf(selectedRef.current) - 1],
            options.indexOf(selectedRef.current) - 1
          );
        } else if (gestureState.dx < -40 && gestureState.vx < -0.5) {
          if (selectedRef.current === options[options.length - 1]) return;
          handleSelect(
            options[options.indexOf(selectedRef.current) + 1],
            options.indexOf(selectedRef.current) + 1
          );
        }
      },
    })
  ).current;

  //to update the selectedRef value when the selected change
  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  const handleSelect = (option, index) => {
    setSelected(option);
    Animated.timing(animation, {
      // this is the animation for the indicator
      toValue: index, // we are animating the indicator to the index of the option
      duration: 200,
      useNativeDriver: true,
    }).start(); // we start the animation here
    onChangeSelect(option);
  };

  return (
    <View style={styles.flexContainer}>
      <View
        style={[styles.container, { borderColor: theme.primary }, style]}
        onLayout={e => {
          const { width } = e.nativeEvent.layout;
          setContainerWidth(width);
          console.log(width);
        }}>
        {options.map((option, index) => (
          <Pressable
            key={index}
            onPress={() => handleSelect(option, index)}
            style={[styles.option, { flex: useOptionWidth ? 0 : 1 }]}
            onLayout={e => {
              const { width } = e.nativeEvent.layout;
              setOptionWidth(width);
              console.log(width);
            }}>
            <Text
              onLayout={e => {
                const { width } = e.nativeEvent.layout;
                setTextWidth(width);
                console.log(width);
              }}
              style={[
                textStyles.text,
                {
                  color: selected === option ? theme.primary : theme.greishBackground,
                },
              ]}>
              {option}
            </Text>
          </Pressable>
        ))}
        <Animated.View
          style={[
            styles.indicator,
            {
              width: useOptionWidth ? optionWidth : `${100 / options.length}%`,
              borderColor: theme.primary,
              transform: [
                {
                  translateX: animation.interpolate({
                    // interpolate is used to animate the indicator from one position to another
                    inputRange: [0, 1],
                    outputRange: [
                      0 + padding.paddingHorizontal / 2 - (useOptionWidth ? 10 : 0),
                      containerWidth / options.length +
                        padding.paddingHorizontal / 2 +
                        (useOptionWidth ? optionWidth * 1 + padding.paddingHorizontal / 2 : 0),
                    ],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
      <View {...panResponder.panHandlers} style={styles.flexContainer}>
        {children}
      </View>
    </View>
  );
};

export default SwapMenu;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexContainer: {
    flex: 1,
  },
  indicator: {
    backgroundColor: 'blue',
    borderBottomWidth: 2,
    bottom: 0,
    height: 2,
    position: 'absolute', // change this to the color of your choice
  },
  option: {
    alignItems: 'center',
    // borderBottomWidth: 2,
    padding: 10,
  },
});
