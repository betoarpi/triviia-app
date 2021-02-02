import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { ThemeContext } from '../utils/context';

export const ButtonAqua = ({ children, title, onPress, theme }) => {
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

export const ButtonFalse = ({ onPress, theme }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AntDesign name="closecircle" size={48} color={theme.colors.false} />
        </TouchableOpacity>
    );
}

export const ButtonTrue = ({ onPress, theme }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AntDesign name="checkcircle" size={48} color={theme.colors.true} />
        </TouchableOpacity>
    );
}

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