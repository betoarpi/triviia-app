import React from 'react';
import propTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    width: '50%',
  },
  buttonText: {
    fontFamily: 'SourceSansPro_900Black',
    fontSize: 20,
  },
});

const ButtonAqua = ({
  onPress, title, theme,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, { backgroundColor: theme.colors.button }]}
  >
    <>
      <Text style={[styles.buttonText, { color: theme.colors.primary }]}>
        {title}
      </Text>
    </>
  </TouchableOpacity>
);

ButtonAqua.propTypes = {
  onPress: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  theme: propTypes.shape({
    colors: propTypes.shape({
      primary: propTypes.string,
      button: propTypes.string,
    }),
  }).isRequired,
};

export default ButtonAqua;
