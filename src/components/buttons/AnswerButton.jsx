import React from 'react';
import propTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AnswerButton = ({ onPress, theme, type }) => (
  <TouchableOpacity onPress={onPress}>
    <AntDesign
      name={type === true ? 'checkcircle' : 'closecircle'}
      size={48}
      color={type === true ? theme.colors.true : theme.colors.false}
    />
  </TouchableOpacity>
);

AnswerButton.propTypes = {
  onPress: propTypes.func.isRequired,
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
  type: propTypes.oneOf([true, false]).isRequired,
};

export default AnswerButton;
