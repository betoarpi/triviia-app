/* eslint-disable react/style-prop-object */
import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ThemeContext from '../utils/context';

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    borderTopStartRadius: 100,
    borderTopEndRadius: 30,
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 60,
    paddingBottom: 30,
    marginTop: '30%',
    width: '100%',
  },
  container: {
    flex: 1,
  },
});

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <LinearGradient
      colors={['#24035b', '#7533ed', '#2ca2d9']}
      end={[0.85, 0.3]}
      style={styles.container}
    >
      <View
        style={[
          styles.innerContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        {children}
      </View>
      <StatusBar style="light" />
    </LinearGradient>
  );
};

Layout.propTypes = {
  children: propTypes.node,
};

export default Layout;
