import Lottie from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const Loading = () => {
    const animationProgress = useRef(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(Animated.timing(animationProgress.current, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
        }), { iterations: 1000 }).start();
    }, []);
    return (
        <Lottie
            source={require('../../assets/animations/loading.json')}
            progress={animationProgress?.current}
        />
    )
}