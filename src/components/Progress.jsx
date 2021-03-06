import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

import ThemeContext from '../utils/context';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 6,
    position: 'absolute',
    top: 16,
    right: 16,
  },
  text: {
    fontSize: 18,
  },
});

const Progress = ({ length, progress }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          {
            color: theme.colors.primary,
            fontFamily: 'SourceSansPro_900Black',
          },
        ]}
      >
        {`${progress} / ${length}`}
      </Text>
    </View>
  );
};

Progress.propTypes = {
  length: propTypes.number.isRequired,
  progress: propTypes.number.isRequired,
};

export default Progress;
