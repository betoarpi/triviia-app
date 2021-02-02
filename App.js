import React, { useState, useEffect } from 'react';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { useFonts, SourceSansPro_400Regular, SourceSansPro_700Bold, SourceSansPro_900Black } from '@expo-google-fonts/source-sans-pro';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeContext } from './src/utils/context';
import Theme from './src/utils/Theme'

import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import Layout from './src/components/Layout';

const Stack = createStackNavigator();

export default function App() {
  const [theme, setTheme] = useState({});
  useEffect(() => {
    setTheme(Theme);
  }, []);

  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_900Black
  });

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeContext.Provider value={{theme}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false}}
          >
            <Stack.Screen
              name='Home'
              component={HomeScreen}
            />
            <Stack.Screen
              name='Quiz'
              component={QuizScreen}
            />
            <Stack.Screen
              name='Results'
              component={ResultsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    );
  }
}
