// app/components/common/AppButton.tsx
import React from 'react';
import {
    Text,
    TouchableOpacity,
    ViewStyle,
    TextStyle,
    GestureResponderEvent,
    View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useButtonStyles } from '@/styles/ButtonStyles';


type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

type AppButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    rounded?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    tooltip?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    gradientType?: 'bluePurple' | 'orangeRed' | 'greenYellow' | 'darkGrey';
};

const sizeMap = {
    sm: 12,
    md: 16,
    lg: 20,
};
type GradientTuple = [string, string] | [string, string, ...string[]];

const AppButton: React.FC<AppButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    rounded = false,
    leftIcon,
    rightIcon,
    tooltip,
    style,
    textStyle,
    gradientType
}) => {
    const { styles, gradientColors } = useButtonStyles(); // ✅ lấy gradientColors từ hook
    const gradient = gradientColors[gradientType ?? 'bluePurple'] as GradientTuple;
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const onPressIn = () => {
        scale.value = withSpring(0.96);
    };

    const onPressOut = () => {
        scale.value = withSpring(1);
    };

    const getTextStyle = (): TextStyle[] => {
        const baseSize = sizeMap[size];

        switch (variant) {
            case 'outline':
                return [styles.outlineText, { fontSize: baseSize }, ...(textStyle ? [textStyle] : [])];
            case 'ghost':
                return [styles.ghostText, { fontSize: baseSize }, ...(textStyle ? [textStyle] : [])];
            default:
                return [styles.primaryText, { fontSize: baseSize }, ...(textStyle ? [textStyle] : [])];
        }
    };

    const baseButtonStyle: ViewStyle[] = [styles.base];
    if (fullWidth) baseButtonStyle.push({ width: '100%' });
    if (rounded) baseButtonStyle.push({ borderRadius: 100 });
    if (disabled || loading) baseButtonStyle.push(styles.disabled);

    switch (variant) {
        case 'outline':
            baseButtonStyle.push(styles.outline);
            break;
        case 'ghost':
            baseButtonStyle.push(styles.ghost);
            break;
        case 'primary':
            baseButtonStyle.push(styles.primary);
            break;
    }

    const Content = () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            {leftIcon}
            {loading ? <Text>⏳</Text> : <Text style={getTextStyle()}>{title}</Text>}
            {rightIcon}
        </View>
    );

    const TooltipWrapper = (children: React.ReactNode) =>
        tooltip ? (
            <View accessible accessibilityLabel={tooltip}>
                {children}
            </View>
        ) : (
            <>{children}</>
        );

    if (variant === 'gradient') {
        return TooltipWrapper(
            <Animated.View style={animatedStyle}>
                <TouchableOpacity
                    onPress={onPress}
                    disabled={disabled}
                    onPressIn={onPressIn}
                    onPressOut={onPressOut}
                    activeOpacity={0.8}
                >
                    <LinearGradient
                        colors={gradient}
                        style={[
                            styles.gradient,
                            fullWidth && { width: '100%' },
                            rounded && { borderRadius: 100 },
                            style,
                        ]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Content />
                    </LinearGradient>
                </TouchableOpacity>
            </Animated.View>
        );
    }

    return TooltipWrapper(
        <Animated.View style={animatedStyle}>
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                style={[...baseButtonStyle, style]}
            >
                <Content />
            </TouchableOpacity>
        </Animated.View>,
    );
};

export default AppButton;
