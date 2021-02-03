import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';

import { ThemeContext } from '../../utils/context';

const MainTitle = ({children}) => {
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
        fontSize: 39.81,
        lineHeight: 45,
        marginBottom: 24,
        textAlign: 'center'
    }
});

export default MainTitle;