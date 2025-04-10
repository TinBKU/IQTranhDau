import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { WelComeSlider } from '@/types'
import { welcomeList } from '@/data'
const { width } = Dimensions.get('window');

const WelcomeScreen: React.FC = () => {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const flatListRef = useRef<FlatList<WelComeSlider>>(null);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(index);
    };

    const handleNext = async () => {
        if (currentIndex < welcomeList.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            await AsyncStorage.setItem('hasSeenWelcome', 'true');
            router.replace('/'); // Hoặc '/HomeStartScreen' nếu đã định nghĩa
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={welcomeList}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={handleScroll}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Image source={item.image} style={styles.image} resizeMode="contain" />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.subtitle}</Text>
                    </View>
                )}
            />

            <View style={styles.dotsContainer}>
                {welcomeList.map((_: any, index: any) => (
                    <View
                        key={index}
                        style={[styles.dot, currentIndex === index && styles.activeDot]}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>
                    {currentIndex === welcomeList.length - 1 ? 'Bắt Đầu' : 'Tiếp Theo'}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    slide: {
        width,
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 250,
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginTop: 10,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#d0eae5',
        marginHorizontal: 6,
    },
    activeDot: {
        backgroundColor: '#5AC8FA',
        width: 20,
    },
    button: {
        backgroundColor: '#5AC8FA',
        alignSelf: 'center',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 20,
        marginBottom: 40,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default WelcomeScreen;