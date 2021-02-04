import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import ThemeContext from '../../utils/context';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 18,
    textAlign: 'center',
  },
});

const Paragraph = ({ children, bold }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Text style={[
      styles.title,
      {
        color: theme.colors.text,
        fontFamily: bold === true ? 'SourceSansPro_700Bold' : 'SourceSansPro_400Regular',
      },
    ]}
    >
      {children}
    </Text>
  );
};

Paragraph.propTypes = {
  bold: propTypes.bool.isRequired,
  children: propTypes.node.isRequired,
};

export default Paragraph;
