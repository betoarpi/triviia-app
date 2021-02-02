import React, { useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { decode } from 'html-entities';

import { ThemeContext } from '../utils/context';

import { ButtonTrue, ButtonFalse } from './Buttons';
import Card from './Card';
import Difficulty from './Difficulty';
import Paragraph from './Paragraph';
import QuestionTitle from './QuestionTitle';

const { width } = Dimensions.get('window');

const Question = ({
    item,
    handleScore,
}) => {
    const {
        category,
        difficulty,
        question,
        correct_answer
    } = item.item;

    const { theme } = useContext(ThemeContext);

    const currentPosition = item.index + 1;

    const handleAnswer = (userAnswer) => {
        const correctAnswer = correct_answer.toLowerCase() === 'true';
        const answer = userAnswer === correctAnswer ? 'correct' : 'incorrect';
        handleScore(question, answer, currentPosition);
    }

    return (
        <View style={styles.container}>
            <Paragraph>{category}</Paragraph>
            <Card>
                <Difficulty difficulty={difficulty} theme={theme} />
                <QuestionTitle>{decode(question)}</QuestionTitle>
            </Card>
            <View style={styles.buttonContainer}>
                <ButtonFalse
                    onPress={() => handleAnswer(false)}
                    theme={theme}
                />
                <ButtonTrue
                    onPress={() => handleAnswer(true)}
                    theme={theme}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        width: width - 80,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        width: '80%'
    }
});

export default Question;