import React, { useState, useEffect } from 'react';
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

const Difficulty = ({ difficulty, theme }) => {
  const [textColor, setTextColor] = useState(null);
  useEffect(() => {
    setTextColor(() => {
      switch (difficulty) {
        case 'easy':
          setTextColor(theme.colors.easy);
          break;
        case 'medium':
          setTextColor(theme.colors.medium);
          break;
        case 'hard':
          setTextColor(theme.colors.hard);
          break;
        default:
          setTextColor(theme.colors.text);
          break;
      }
      return textColor;
    });
  });

  return (
    <View style={styles.difficulty}>
      <Fontisto name="hashtag" size={12} color={textColor} />
      <Text style={[styles.difficultyText, { color: textColor }]}>
        {`  ${difficulty}`}
      </Text>
    </View>
  );
};

Difficulty.propTypes = {
  difficulty: propTypes.string.isRequired,
  theme: propTypes.shape({
    colors: propTypes.shape({
      primary: propTypes.string,
      text: propTypes.string,
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
