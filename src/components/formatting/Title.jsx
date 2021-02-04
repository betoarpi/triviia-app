import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import ThemeContext from '../../utils/context';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SourceSansPro_900Black',
    fontSize: 27.65,
    lineHeight: 30,
    textAlign: 'center',
  },
});

const Title = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Text style={[styles.title, { color: theme.colors.primary }]}>
      {children}
    </Text>
  );
};

Title.propTypes = {
  children: propTypes.node.isRequired,
};

export default Title;
