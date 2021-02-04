import React from 'react';
import propTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const styles = StyleSheet.create({
  difficulty: {
    alignItems: 'center',
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: -8,
    paddingBottom: 3,
  },
  difficultyText: {
    fontFamily: 'SourceSansPro_400Regular',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});

const Difficulty = ({ difficulty, theme }) => (
  <View style={styles.difficulty}>
    <Fontisto name="hashtag" size={12} color={theme.colors.text} />
    <Text style={[styles.difficultyText, { color: theme.colors.text }]}>
      {`  ${difficulty}`}
    </Text>
  </View>
);

Difficulty.propTypes = {
  difficulty: propTypes.string.isRequired,
  theme: propTypes.shape({
    colors: propTypes.shape({
      primary: propTypes.string,
      text: propTypes.string,
      background: propTypes.string,
      button: propTypes.string,
      true: propTypes.string,
      false: propTypes.string,
      easy: propTypes.string,
      medium: propTypes.string,
      hard: propTypes.string,
      easyBg: propTypes.string,
      mediumBg: propTypes.string,
      hardBg: propTypes.string,
    }),
  }).isRequired,
};

export default Difficulty;
