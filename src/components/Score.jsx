import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Score = ({ results, theme }) => {
    return (
        <View style={styles.container}>
            <View style={
                [
                    styles.circle,
                    { backgroundColor: theme.colors.button }
            ]}>
                <Text
                    style={[
                        styles.circleText, 
                        {
                            color: theme.colors.primary,
                        }
                ]}>
                    {`${results}/10`}
                </Text>
            </View>
            <Text style={[styles.text, {color: theme.colors.primary }]}>Your score!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       alignItems: 'center',
       marginTop: -100,
    },
    circle: {
        alignItems: 'center',
        borderRadius: 60,
        justifyContent: 'center',
        marginBottom: 10,
        height: 120,
        width: 120
    },
    circleText: {
        fontFamily: 'SourceSansPro_900Black',
        fontSize: 36
    },
    text: {
        fontFamily: 'SourceSansPro_700Bold',
        fontSize: 20
    }
});

export default Score;