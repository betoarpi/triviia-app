import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Emoji from 'react-native-emoji';

import ThemeContext from '../utils/context';

import DifficultyButton from '../components/buttons/DifficultyButton';
import Layout from '../components/Layout';
import Title from '../components/formatting/Title';

const styles = StyleSheet.create({
  difficultyOptions: {
    marginVertical: 16,
  },
});

const QuizOptions = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const handleDifficulty = (type) => {
    navigation.replace('Quiz', { difficulty: type });
  };

  return (
    <Layout>
      <Emoji name="smirk" style={{ fontSize: 80, marginBottom: 16 }} />
      <Title>Choose the difficulty</Title>
      <View style={styles.difficultyOptions}>
        <DifficultyButton
          type="easy"
          handleType={handleDifficulty}
          theme={theme}
        />
        <DifficultyButton
          type="medium"
          handleType={handleDifficulty}
          theme={theme}
        />
        <DifficultyButton
          type="hard"
          handleType={handleDifficulty}
          theme={theme}
        />
        <DifficultyButton
          type="random"
          handleType={handleDifficulty}
          theme={theme}
        />
      </View>
    </Layout>
  );
};

export default QuizOptions;
