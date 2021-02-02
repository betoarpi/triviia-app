import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({children}) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        marginHorizontal: 10,
        marginBottom: 24,
        padding: 24,
        shadowColor: '#000000',
        shadowOffset: {
            height: -2,
            width: 0
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 6
    },
});

export default Card;