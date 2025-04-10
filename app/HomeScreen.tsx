// app/components/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useTextStyles } from '@/hooks/useTextStyles';
import { AppStyles } from '@/styles/AppStyles';
import AppButton from '@/components/common/AppButton';

const HomeScreen: React.FC = () => {
    const backgroundColor = useThemeColor({}, 'background');
    const textStyles = useTextStyles();
    return (
        <SafeAreaView style={[AppStyles.fullScreen, { backgroundColor }]}>
            <ScrollView contentContainerStyle={AppStyles.container}>
                <Text style={textStyles.heading}>IQ Tranh Đấu</Text>

                <Image
                    source={require('@/assets/images/icon.png')}
                    style={styles.image}
                    resizeMode="contain"
                />

                <Text style={textStyles.slogan}>
                    Thay vì hỏi{'\n'}sao không thử tìm đáp án?
                </Text>

                <View style={{ width: '100%', gap: 16 }}>
                    <AppButton
                        title="Đấu hạng"
                        variant="gradient"
                        size="lg"
                        fullWidth
                        rounded
                        tooltip="Vào đấu trường xếp hạng"
                        onPress={() => console.log('Đấu hạng')}
                    />
                    <AppButton
                        title="Luyện tập"
                        variant="gradient"
                        size="lg"
                        fullWidth
                        rounded
                        tooltip="Luyện tập không áp lực"
                        onPress={() => console.log('Luyện tập')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 220,
        height: 220,
        borderRadius: 110,
        marginBottom: 20,
    }
});

export default HomeScreen;
