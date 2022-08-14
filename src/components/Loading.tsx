import AnimatedLottieView from "lottie-react-native"

export const Loading = () => {
  return (
    <AnimatedLottieView 
      source={require('../../assets/animations/loading.json')}
      autoPlay
      loop
      style={{ flex: 1 }}
    />
  )
}