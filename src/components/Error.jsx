import React from 'react';
import { View, StyleSheet } from 'react-native';
import Emoji from 'react-native-emoji';

import Paragraph from './formatting/Paragraph';
import Title from './formatting/Title';

const Error = () => {
    return (
        <View style={styles.container}>
            <Emoji name='cold_sweat' style={{ fontSize: 80}} />
            <Title>Ups! An error ocurred.</Title>
            <Paragraph>Please try again later.</Paragraph>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    }
})

export default Error;