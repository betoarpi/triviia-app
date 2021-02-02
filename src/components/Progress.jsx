import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { ThemeContext } from '../utils/context';

const Progress = ({length, progress}) => {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <Text style={[
                styles.text,
                {
                    color: theme.colors.primary,
                    fontFamily: 'SourceSansPro_900Black'
                }
            ]}>
                {`${progress} / ${length}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 16,
        paddingVertical: 6,
        position: 'absolute',
        top: 16,
        right: 16
    },
    text: {
        fontSize: 18,
    }
});

export default Progress;