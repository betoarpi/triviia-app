import React, { useState, useEffect, useRef } from 'react';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import propTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import Error from '../components/Error';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import Question from '../components/Question';
import Progress from '../components/Progress';

const API = 'https://opentdb.com/api.php?amount=10';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
  },
});

const QuizScreen = ({ route }) => {
  const [questions, setQuestions] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const navigation = useNavigation();

  const { difficulty } = route.params;

  async function getQuestionsFromApi() {
    try {
      const response = await fetch(
        `${API}${
          difficulty !== 'random' ? `&difficulty=${difficulty}` : ''
        }&type=boolean`,
      );
      const responseJson = await response.json();
      return setQuestions(responseJson.results);
    } catch (error) {
      setFetchError(true);
    }
    return true;
  }
  useEffect(() => {
    getQuestionsFromApi();
  }, []);

  const [progress, setProgress] = useState(1);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const [endQuiz, setEndQuiz] = useState(false);
  const handleResults = () => {
    navigation.navigate('Results', {
      results: score,
      answers: userAnswers,
    });
  };
  useEffect(() => {
    if (endQuiz === true) { handleResults(); }
  }, [endQuiz]);

  const refQuestionList = useRef(null);

  const handleScroll = (index) => {
    if (index < questions.length) {
      refQuestionList.current.scrollToIndex({
        animated: true,
        index,
      });
      setProgress(progress + 1);
    }
  };

  const handleScore = (currentQuestion, answer, position) => {
    setUserAnswers([
      ...userAnswers,
      {
        question: currentQuestion,
        answer,
      },
    ]);

    if (answer === 'correct') {
      setScore(score + 1);
    } else {
      setScore(score);
    }

    if (position < questions.length) {
      handleScroll(position);
    } else {
      setEndQuiz(true);
    }
  };

  const renderItem = (item) => (
    <Question item={item} handleScore={handleScore} />
  );

  if (questions) {
    return (
      <Layout>
        {questions && (
          <Progress progress={progress} length={questions.length} />
        )}
        <View style={styles.listContainer}>
          <FlatList
            ref={refQuestionList}
            data={questions}
            keyExtractor={(item, index) => `key${index}`}
            renderItem={renderItem}
            snapToAlignment="center"
            horizontal
            pagingEnabled
            scrollEnabled={false}
            scrollEventThrottle={16}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Layout>
    );
  } if (fetchError === true) {
    return (
      <Layout>
        <Error />
      </Layout>
    );
  }
  return (
    <Layout>
      <Loading />
    </Layout>
  );
};

QuizScreen.propTypes = {
  route: propTypes.shape({
    params: propTypes.shape({
      difficulty: propTypes.string,
    }),
  }).isRequired,
};

export default QuizScreen;
