import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import Answer from './Answer';

const Results = ({ answers, theme }) => {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.innerContainer}>
                {answers.map((item, index) => (
                    <Answer
                        key={`${index}-key`}
                        isCorrect={item.answer}
                        question={item.question}
                        theme={theme}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 60,
        width: '100%',
        position: 'relative'
    },
    innerContainer: {
        marginBottom: 50
    }
});

export default Results;