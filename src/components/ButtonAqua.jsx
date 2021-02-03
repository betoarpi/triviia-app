import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonAqua = ({ children, title, onPress, theme }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button, {backgroundColor: theme.colors.button}
            ]}
        >
            <>
                <Text style={[
                    styles.buttonText,
                    {color: theme.colors.primary}
                ]}>
                    {title}
                </Text>
                {children}
            </>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        width: '50%',
    },
    buttonText: {
        fontFamily: 'SourceSansPro_900Black',
        fontSize: 20
    }
});

export default ButtonAqua;