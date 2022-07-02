import React, { useEffect, useRef, useState } from 'react';
import { Text, Animated } from 'react-native';

const AnimatedNumber = ({ value = 0, duration = 1, fixed = 2, textStyle, format = "%&%" }) => {
    const DURATION_SECOND = duration * 1000;
    const [animatedNumber, setAnimatedNumber] = useState(0);
    const numAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let _mounted = true;
        if (_mounted) {
            numAnim.addListener(({ value }) => {
                const fixedValue = value.toFixed(fixed);
                setAnimatedNumber(fixedValue);
            });
            startAnim();
        }
        return () => {
            numAnim.removeAllListeners();
            _mounted = false;
        };
    }, [value, duration, fixed, format]);

    const startAnim = () => {
        Animated.timing(numAnim, {
            toValue: value,
            duration: DURATION_SECOND,
            useNativeDriver: false
        }).start();

    };

    const formattedText = format.replace("%&%", animatedNumber);
    return <Text style={textStyle}>{formattedText}</Text>;
};

export default AnimatedNumber;  