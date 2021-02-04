import React from 'react';
import propTypes from 'prop-types';
import { ScrollView, View, StyleSheet } from 'react-native';

import Answer from './Answer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 60,
    width: '100%',
    position: 'relative',
  },
  innerContainer: {
    marginBottom: 50,
  },
});

const Results = ({ answers, theme }) => (
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.innerContainer}>
      {answers.map((item) => (
        <Answer
          key={`${item.question}-key`}
          isCorrect={item.answer}
          question={item.question}
          theme={theme}
        />
      ))}
    </View>
  </ScrollView>
);

Results.propTypes = {
  answers: propTypes.arrayOf(propTypes.object).isRequired,
  theme: propTypes.shape({
    colors: propTypes.shape({
      false: propTypes.string,
      true: propTypes.string,
      text: propTypes.string,
    }),
  }).isRequired,
};

export default Results;
