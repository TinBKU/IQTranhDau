import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  colors?: string[]; // ✅ Thêm props màu gradient
}

export default function PrimaryGradientButton({
  title,
  onPress,
  colors = ['#6D6672', '#9C2A61', '#16050A'], // 🌈 Gradient 3 màu mặc định
}: ButtonProps) {
  const [scaleAnim] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 1.1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    onPress();
  };

  return (
    <Animated.View style={[styles.buttonContainer, { transform: [{ scale: scaleAnim }] }]}>
      <TouchableOpacity onPressIn={handlePressIn} onPressOut={handlePressOut} activeOpacity={0.9}>
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }} // 🔥 Gradient dọc 180 độ
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 12,
    overflow: 'hidden',
  },
  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
  },
});
