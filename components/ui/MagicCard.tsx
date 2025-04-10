import React, { useEffect, useRef } from 'react';
import { Animated, Text, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';

const ORIGINAL_COLOR = 'red';
const SUCCESS_COLOR = 'green';

const MagicCard = () => {
  // Giá trị động cho vị trí Y và màu sắc
  const position = useRef(new Animated.Value(0)).current;
  const colorValue = useRef(new Animated.Value(0)).current;

  // Kích hoạt hiệu ứng bay bổng khi component được render
  useEffect(() => {
    // Hiệu ứng bay bổng
    Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          toValue: -10, // Di chuyển lên trên 10px
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(position, {
          toValue: 0, // Di chuyển về vị trí cũ
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();

    // Hiệu ứng đổi màu
    Animated.loop(
      Animated.timing(colorValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
    ).start();
  }, []);

  // Dùng interpolate để thay đổi màu viền động
  const borderColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [ORIGINAL_COLOR, SUCCESS_COLOR],
  });

  // Xử lý sự kiện khi nhấn
  const handlePress = () => {
    Animated.sequence([
      Animated.timing(colorValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(colorValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ translateY: position }], // Bay bổng theo chiều Y
            borderColor, // Đổi màu viền động
          },
        ]}
      >
        <Text style={styles.text}>Magic Card</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 450,
    backgroundColor: '#191c29',
    borderWidth: 4,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8, // Tạo hiệu ứng bóng trên Android
  },
  text: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default MagicCard;
