import React from 'react';
import propTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const DifficultyButton = ({ handleType, type, theme }) => {
    return (
        <TouchableOpacity onPress={() => handleType(type)} style={styles.button}>
            <Text style={[
                styles.buttonText,
                {
                    backgroundColor: type === 'easy' ?
                        theme.colors.easyBg
                    : type === 'medium' ? 
                        theme.colors.mediumBg
                    :  type === 'hard' ? 
                        theme.colors.hardBg
                    : 
                        '#ffffff',
                    color: type === 'easy' ?
                                theme.colors.easy 
                            : type === 'medium' ? 
                                theme.colors.medium
                            : type === 'hard' ? 
                                theme.colors.hard
                            : 
                                theme.colors.primary,
                }
            ]}>
                {
                    type === 'easy' ?
                        'Easy'
                    : type === 'medium' ?
                        'Medium'
                    : type === 'hard' ?
                        'Hard'
                    : 
                        'Random'
                }
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        marginVertical: 8,
        width: 200
    },
    buttonText: {
        borderRadius: 10,
        fontFamily: 'SourceSansPro_700Bold',
        fontSize: 16,
        overflow: 'hidden',
        paddingHorizontal: 6,
        paddingVertical: 3,
        textAlign: 'center'
    }
});

DifficultyButton.propTypes = {
    type: propTypes.oneOf(['easy', 'medium', 'hard', 'random'])
}

export default DifficultyButton;