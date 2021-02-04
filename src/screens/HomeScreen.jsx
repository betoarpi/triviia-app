/* eslint-disable react/jsx-boolean-value */
import React, { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ThemeContext from '../utils/context';

import ButtonAqua from '../components/buttons/ButtonAqua';
import Layout from '../components/Layout';
import MainTitle from '../components/formatting/MainTitle';
import Paragraph from '../components/formatting/Paragraph';

const userImage = require('../../assets/user.png');

const styles = StyleSheet.create({
  mainImage: {
    height: 180,
    marginBottom: 24,
    resizeMode: 'contain',
    width: '100%',
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  return (
    <Layout>
      <MainTitle>Welcome to the Trivia Challenge!</MainTitle>
      <Image source={userImage} style={styles.mainImage} />
      <Paragraph bold={false}>
        You will be presented with 10 True or False questions.
      </Paragraph>
      <Paragraph bold={true}>Can you score 100%?</Paragraph>
      <ButtonAqua
        title="Begin"
        onPress={() => navigation.navigate('Quiz Options')}
        theme={theme}
      />
    </Layout>
  );
};

export default HomeScreen;
