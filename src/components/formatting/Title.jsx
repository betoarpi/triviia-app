import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';

import { ThemeContext } from '../../utils/context';

const Title = ({children}) => {
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
        fontSize: 27.65,
        lineHeight: 30,
        textAlign: 'center'
    }
});

export default Title;