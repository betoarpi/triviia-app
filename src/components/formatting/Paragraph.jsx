import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';

import { ThemeContext } from '../../utils/context';

const Paragraph = ({ children, bold }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <Text style={[
            styles.title,
            { 
                color: theme.colors.text,
                fontFamily: bold === true ? 'SourceSansPro_700Bold' : 'SourceSansPro_400Regular',
            }
        ]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 24,
        textAlign: 'center'
    }
});

export default Paragraph;