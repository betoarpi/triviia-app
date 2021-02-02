import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';

import { ThemeContext } from '../utils/context';

const QuestionTitle = ({children}) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Text style={[styles.title, {color: theme.colors.primary}]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'SourceSansPro_900Black',
        fontSize: 23.04,
        lineHeight: 26,
        textAlign: 'center'
    }
});

export default QuestionTitle;