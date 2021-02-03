import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Emoji from 'react-native-emoji';

import { ThemeContext } from '../utils/context';

import DifficultyButton from '../components/buttons/DifficultyButton';
import Layout from '../components/Layout';
import QuestionTitle from '../components/formatting/QuestionTitle';

const QuizOptions = () => {
    const { theme } = useContext(ThemeContext);
    const navigation = useNavigation();

    const handleDifficulty = (type) => {
        navigation.replace('Quiz', { difficulty: type });
    }

    return (
        <Layout>
            <Emoji name='smirk' style={{ fontSize: 60 }} />
            <QuestionTitle>
                Choose the difficulty
            </QuestionTitle>
            <View style={styles.difficultyOptions}>
                <DifficultyButton
                    type={'easy'}
                    handleType={handleDifficulty}
                    theme={theme}
                />
                <DifficultyButton
                    type={'medium'}
                    handleType={handleDifficulty}
                    theme={theme}
                />
                <DifficultyButton
                    type={'hard'}
                    handleType={handleDifficulty}
                    theme={theme}
                />
                <DifficultyButton
                    type={'random'}
                    handleType={handleDifficulty}
                    theme={theme}
                />
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    difficultyOptions: {
        marginVertical: 16,
    }
});

export default QuizOptions;