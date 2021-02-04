import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import ThemeContext from '../../utils/context';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SourceSansPro_900Black',
    fontSize: 36,
    lineHeight: 42,
    marginBottom: 24,
    textAlign: 'center',
  },
});

const MainTitle = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Text style={[styles.title, { color: theme.colors.primary }]}>
      {children}
    </Text>
  );
};

MainTitle.propTypes = {
  children: propTypes.node.isRequired,
};

export default MainTitle;
