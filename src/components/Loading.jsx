import React, { useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Loading = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    Animated.View(
        spinValue,
        {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }
    ).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View>
            <FontAwesome
                name="spinner"
                size={24}
                color="black"
                style={{ 
                    transform: [{
                        rotate: spin,
                    }],
                }}
            />
        </View>
    );
};

export default Loading;