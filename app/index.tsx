import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import HomeScreen from './HomeScreen';

const App: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkWelcome = async () => {
      const seen = await AsyncStorage.getItem('hasSeenWelcome');
      if (seen !== 'true') {
        router.replace('/WelcomeScreen'); // ✅ điều hướng an toàn sau khi layout mount
      } else {
        setLoading(false); // ✅ chỉ cho render khi không cần redirect
      }
    };
    checkWelcome();
  }, []);

  if (loading) return null;

  return <HomeScreen />;
};

export default App;





