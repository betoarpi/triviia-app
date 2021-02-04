import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';
import { decode } from 'html-entities';

import ThemeContext from '../utils/context';
import AnswerButton from './buttons/AnswerButton';
import Card from './Card';
import Difficulty from './Difficulty';
import Paragraph from './formatting/Paragraph';
import QuestionTitle from './formatting/QuestionTitle';

const { width } = Dimensions.get('window');

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
    width: '80%',
  },
});

const Question = ({ item, handleScore }) => {
  const {
    // eslint-disable-next-line camelcase
    category, difficulty, question, correct_answer,
  } = item.item;

  const { theme } = useContext(ThemeContext);

  const currentPosition = item.index + 1;

  const handleAnswer = (userAnswer) => {
    const correctAnswer = correct_answer.toLowerCase() === 'true';
    const answer = userAnswer === correctAnswer ? 'correct' : 'incorrect';
    handleScore(question, answer, currentPosition);
  };

  return (
    <View style={styles.container}>
      <Paragraph bold={false}>{category}</Paragraph>
      <Card>
        <Difficulty difficulty={difficulty} theme={theme} />
        <QuestionTitle>{decode(question)}</QuestionTitle>
      </Card>
      <View style={styles.buttonContainer}>
        <AnswerButton
          onPress={() => handleAnswer(false)}
          theme={theme}
          type={false}
        />
        <AnswerButton
          onPress={() => handleAnswer(true)}
          theme={theme}
          type
        />
      </View>
    </View>
  );
};

Question.propTypes = {
  item: propTypes.shape({
    category: propTypes.string,
    difficulty: propTypes.string,
    question: propTypes.string,
    correct_answer: propTypes.string,
  }).isRequired,
  handleScore: propTypes.func.isRequired,
};

export default Question;
