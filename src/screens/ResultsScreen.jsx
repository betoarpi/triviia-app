import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import ThemeContext from '../utils/context';

import ButtonAqua from '../components/buttons/ButtonAqua';
import Layout from '../components/Layout';
import Results from '../components/Results';
import Score from '../components/Score';

const styles = StyleSheet.create({
  icon: {
    marginBottom: 8,
    zIndex: 10,
  },
  gradient: {
    height: 80,
    width: '100%',
  },
});

const ResultsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { results, answers } = route.params;
  const { theme } = useContext(ThemeContext);
  return (
    <Layout>
      <Score results={results} theme={theme} />
      <LinearGradient
        colors={['rgba(255, 234, 248, 0)', '#e1eaf8']}
        start={[0, 0.6]}
        end={[0, 0]}
        style={[styles.gradient, { marginBottom: -80, zIndex: 10 }]}
      />
      <Results answers={answers} theme={theme} />
      <Entypo
        name="chevron-down"
        size={24}
        color={theme.colors.text}
        style={styles.icon}
      />
      <LinearGradient
        colors={['rgba(255, 234, 248, 0)', '#e1eaf8']}
        start={[0, 0]}
        end={[0, 0.6]}
        style={[styles.gradient, { marginTop: -80 }]}
      />
      <ButtonAqua
        title="Play Again?"
        onPress={() => navigation.navigate('Home')}
        theme={theme}
      />
    </Layout>
  );
};

ResultsScreen.propTypes = {
  route: propTypes.shape({
    params: propTypes.shape({
      results: propTypes.number,
      answers: propTypes.arrayOf(propTypes.object),
    }),
  }).isRequired,
};

export default ResultsScreen;
