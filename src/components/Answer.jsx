import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { decode } from 'html-entities';
import { AntDesign } from '@expo/vector-icons';

const Answer = ({ isCorrect, question, theme }) => {
    return (
        <View style={styles.answer}>
            {isCorrect === 'correct' ?
                <AntDesign
                    name="checkcircle"
                    size={24}
                    color={theme.colors.true} />
                :
                <AntDesign
                    name="closecircle"
                    size={24}
                    color={theme.colors.false} />
            }
            <Text style={[
                styles.question,
                isCorrect === 'correct' && styles.correct,
                { 
                    color: theme.colors.text,
                    opacity: isCorrect === 'incorrect' ? 0.4 : 1, 
                }
            ]}>
                {decode(question)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    answer: {
        alignItems: 'flex-start',
        borderBottomColor: '#bfcadd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 10,
        paddingBottom: 10,
        paddingRight: 5,
        justifyContent: 'flex-start',
        width: '100%'
    },
    question: {
        fontFamily: 'SourceSansPro_400Regular',
        flex: 1,
        flexWrap: 'nowrap',
        marginLeft: 10
    },
    correct: {
        fontSize: 18,
    }
});

export default Answer;