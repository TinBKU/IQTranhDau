// styles/TextStyles.ts
import { StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export function useTextStyles() {
    const textColor = useThemeColor({}, 'text');

    return StyleSheet.create({
        heading: {
            fontSize: 24,
            fontWeight: 'bold',
            color: textColor,
        },
        subtitle: {
            fontSize: 18,
            fontWeight: '600',
            color: textColor,
        },
        slogan: {
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 30,
        },
        body: {
            fontSize: 16,
            color: textColor,
        },
        small: {
            fontSize: 14,
            color: textColor,
        },
    });
};


