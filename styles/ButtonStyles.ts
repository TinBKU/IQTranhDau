// styles/ButtonStyles.ts
import { StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export const useButtonStyles = () => {
    const textColor = useThemeColor({}, 'text');
    const primaryColor = useThemeColor({}, 'primary');
    const borderColor = useThemeColor({}, 'border');

    // ✅ Danh sách màu gradient sẵn dùng
    const gradients = {
        bluePurple: ['#3A416F', '#141727'],
        orangeRed: ['#ff6a00', '#ee0979'],
        greenYellow: ['#00c853', '#ffee58'],
        darkGrey: ['#434343', '#000000'],
    };

    return {
        gradientColors: gradients, // ✅ export tất cả màu gradient
        styles: StyleSheet.create({
            base: {
                paddingVertical: 14,
                paddingHorizontal: 24,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
            },
            primary: {
                backgroundColor: primaryColor,
            },
            primaryText: {
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
            },
            outline: {
                borderWidth: 2,
                borderColor,
                backgroundColor: 'transparent',
            },
            outlineText: {
                color: textColor,
                fontWeight: 'bold',
                fontSize: 16,
            },
            ghost: {
                backgroundColor: 'transparent',
            },
            ghostText: {
                color: primaryColor,
                fontWeight: '500',
            },
            disabled: {
                opacity: 0.5,
            },
            gradient: {
                paddingVertical: 14,
                paddingHorizontal: 24,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
            },
        }),
    };
};
