import React from 'react';
import propTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginHorizontal: 10,
    marginBottom: 24,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
});

const Card = ({ children }) => (
  <View style={styles.card}>
    {children}
  </View>
);

Card.propTypes = {
  children: propTypes.node.isRequired,
};

export default Card;
