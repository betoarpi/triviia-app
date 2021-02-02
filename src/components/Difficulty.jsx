import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const Difficulty = ({ difficulty, theme }) => {
    return (
        <View style={styles.difficulty}>
            <Fontisto name='hashtag' size={12} color={theme.colors.text} />
            <Text style={
                [
                    styles.difficultyText,
                    { color: theme.colors.text }
                ]
            }>
                {`  ${difficulty}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    difficulty: {
        alignItems: 'center',
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: -8,
        paddingBottom: 3
    },
    difficultyText: {
        fontFamily: 'SourceSansPro_400Regular',
        fontSize: 12,
        textTransform: 'uppercase',
    }
});

export default Difficulty;