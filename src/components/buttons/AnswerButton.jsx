import React from 'react';
import propTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const AnswerButton = ({ onPress, theme, type }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AntDesign
                name={
                    type === true ? 'checkcircle' : 'closecircle'
                }
                size={48}
                color={
                    type === true ? theme.colors.true : theme.colors.false
                } />
        </TouchableOpacity>
    );
}

AnswerButton.propTypes = {
    type: propTypes.oneOf([true, false])
}

export default AnswerButton;