import React, { useContext } from 'react';
import { Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../utils/context';

import ButtonAqua from '../components/buttons/ButtonAqua';
import Layout from '../components/Layout';
import MainTitle from '../components/formatting/MainTitle';
import Paragraph from '../components/formatting/Paragraph';

const HomeScreen = () => {
    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext);
    return (
        <Layout>
            <MainTitle>Welcome to the Trivia Challenge!</MainTitle>
            <Image 
                source={require('../../assets/user.png')}
                style={styles.mainImage}
            />
            <Paragraph>You will be presented with 10 True or False questions.</Paragraph>
            <Paragraph bold={true}>Can you score 100%?</Paragraph>
            <ButtonAqua
                title='Begin'
                onPress={() => navigation.navigate('Quiz Options')}
                theme={theme}
            />
        </Layout>
    );
}

const styles = StyleSheet.create({
    mainImage: {
        height: 200,
        marginBottom: 24,
        resizeMode: 'contain',
        width: '100%'
    }
});

export default HomeScreen;