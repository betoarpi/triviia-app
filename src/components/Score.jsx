import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Emoji from 'react-native-emoji';

const Score = ({ results, theme }) => {
    const score = results/10;

    const handleEmoji = () => {
        return score <= 0.5 ?
            'confused'
        : score <= 0.7 ?
            'flushed'
        : score <= 0.9 ?
            'grin'
        : 
            'sunglasses'
    }

    const handleMessage = () => {
        return score <= 0.5 ?
            'You can do it better'
        : score <= 0.7 ?
            'Oh, nice try'
        : score <= 0.9 ?
            'Wow! very nice'
        :
            'You are the best!'
    }

    return (
        <View style={styles.container}>
            <View style={ [ styles.circle,
                    { 
                        backgroundColor: theme.colors.button
                    }
            ]}>
                <Text
                    style={[ styles.circleText, 
                        {
                            color: theme.colors.primary,
                        }
                ]}>
                    {`${results}/10`}
                </Text>
            </View>
            <View style={styles.textEmoji}>
                <Text
                    style={[ styles.text,
                        {
                            color: theme.colors.primary
                        }
                ]}>
                    {handleMessage()}
                </Text>
                <Emoji
                    name={handleEmoji()}
                    style={{
                        fontSize: 24,
                        marginLeft: 5
                    }}
                />
            </View>
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
    },
    textEmoji: {
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default Score;