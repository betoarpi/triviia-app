import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useEffect } from 'react/cjs/react.development';

const styles = StyleSheet.create({
  button: {
    marginVertical: 8,
    width: 160,
  },
  buttonText: {
    borderRadius: 20,
    borderWidth: 1,
    fontFamily: 'SourceSansPro_700Bold',
    fontSize: 18,
    overflow: 'hidden',
    paddingHorizontal: 6,
    paddingVertical: 8,
    textAlign: 'center',
  },
});

const DifficultyButton = ({ handleType, theme, type }) => {
  const [bgColor, setBgColor] = useState(null);
  useEffect(() => {
    setBgColor(() => {
      switch (type) {
        case 'easy':
          setBgColor(theme.colors.easyBg);
          break;
        case 'medium':
          setBgColor(theme.colors.mediumBg);
          break;
        case 'hard':
          setBgColor(theme.colors.hardBg);
          break;
        default:
          setBgColor('#ffffff');
          break;
      }
      return bgColor;
    });
  }, []);

  const [textColor, setTextColor] = useState(null);
  useEffect(() => {
    setTextColor(() => {
      switch (type) {
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
          setTextColor(theme.colors.primary);
          break;
      }
      return textColor;
    });
  });

  return (
    <TouchableOpacity onPress={() => handleType(type)} style={styles.button}>
      <Text
        style={[
          styles.buttonText,
          {
            backgroundColor: bgColor,
            borderColor: textColor,
            color: textColor,
          },
        ]}
      >
        {`#${type.toUpperCase()}`}
      </Text>
    </TouchableOpacity>
  );
};

DifficultyButton.propTypes = {
  handleType: propTypes.func.isRequired,
  theme: propTypes.shape({
    colors: propTypes.shape({
      primary: propTypes.string,
      easy: propTypes.string,
      medium: propTypes.string,
      hard: propTypes.string,
      easyBg: propTypes.string,
      mediumBg: propTypes.string,
      hardBg: propTypes.string,
    }),
  }).isRequired,
  type: propTypes.oneOf(['easy', 'medium', 'hard', 'random']).isRequired,
};

export default DifficultyButton;
