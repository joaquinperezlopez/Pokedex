import useThemedStyles from '@hooks/useThemeStyles';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StatusBar, View } from 'react-native';
import styles from './LoadingIndicator.styles';

const LoadingIndicator = () => {
  const themedStyles = useThemedStyles(styles);

  // Create an animated value for rotation
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Function to handle the rotation animation
    const createAnimation = () => {
      return Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
    };

    // Start the rotation animation when the component mounts
    const animation = createAnimation();
    animation.start();

    // Clean up the animation on unmount
    return () => {
      animation.stop();

      rotateAnim.removeAllListeners();
      rotateAnim.setValue(0);
    };
  }, [rotateAnim]);

  const spinAnimation = {
    transform: [
      {
        rotate: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <View style={themedStyles.container}>
      <StatusBar barStyle={'light-content'} />
      <Animated.View style={[spinAnimation]}>
        <Image source={require('@assets/images/pokeball.png')} />
      </Animated.View>
    </View>
  );
};

export default LoadingIndicator;
